const nav = document.getElementById("sidebarNav");
const endpointList = document.getElementById("endpointList");
const searchInput = document.getElementById("searchInput");
const heroMeta = document.getElementById("heroMeta");
const emptyState = document.getElementById("emptyState");
const guideSection = document.getElementById("guideSection");
const codeMapSection = document.getElementById("codeMapSection");
const baseUrlLabel = document.getElementById("baseUrlLabel");
const baseUrlText = document.getElementById("baseUrlText");
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function highlightCodeBlock(value) {
    const escaped = escapeHtml(value);
    const tokenized = escaped.replace(
        /(&quot;.*?&quot;)(?=\s*:)|(&quot;.*?&quot;)|\b(true|false|null)\b|\b-?\d+(?:\.\d+)?\b/g,
        (match, keyToken, stringToken, literalToken) => {
            if (keyToken) {
                return `<span class="tok-key">${keyToken}</span>`;
            }
            if (stringToken) {
                return `<span class="tok-string">${stringToken}</span>`;
            }
            if (literalToken === "true" || literalToken === "false") {
                return `<span class="tok-boolean">${literalToken}</span>`;
            }
            if (literalToken === "null") {
                return `<span class="tok-null">${literalToken}</span>`;
            }
            return `<span class="tok-number">${match}</span>`;
        }
    );

    return tokenized;
}

function copyText(text, button) {
    const originalLabel = button.innerHTML;
    const writeText = navigator.clipboard?.writeText
        ? navigator.clipboard.writeText(text)
        : new Promise((resolve, reject) => {
            const area = document.createElement("textarea");
            area.value = text;
            area.setAttribute("readonly", "");
            area.style.position = "absolute";
            area.style.left = "-9999px";
            document.body.appendChild(area);
            area.select();

            if (document.execCommand("copy")) {
                document.body.removeChild(area);
                resolve();
                return;
            }

            document.body.removeChild(area);
            reject(new Error("Copy failed"));
        });

    writeText.then(() => {
        button.innerHTML = '<span>Copied</span><i data-lucide="check" class="copy-button__icon"></i>';
        lucide.createIcons();

        window.setTimeout(() => {
            button.innerHTML = originalLabel;
            lucide.createIcons();
        }, 1600);
    }).catch(() => {
        button.innerHTML = '<span>Failed</span><i data-lucide="x" class="copy-button__icon"></i>';
        lucide.createIcons();

        window.setTimeout(() => {
            button.innerHTML = originalLabel;
            lucide.createIcons();
        }, 1600);
    });
}

function renderCopyButton(copyValue, label = "Copy") {
    return `
        <button class="copy-button" type="button" data-copy="${escapeHtml(copyValue)}" aria-label="${escapeHtml(label)}">
            <span>${escapeHtml(label)}</span>
            <i data-lucide="copy" class="copy-button__icon"></i>
        </button>
    `;
}

function setThemeToggleIcon(iconName) {
    themeToggle.innerHTML = `<i data-lucide="${iconName}" class="control-icon"></i>`;
}

function renderMeta() {
    baseUrlText.textContent = `Base URL: ${SECRET_APP_DOCS.baseUrl}`;
    heroMeta.innerHTML = "";
    SECRET_APP_DOCS.meta.forEach((item) => {
        const el = document.createElement("span");
        el.className = "meta-pill";
        el.textContent = item;
        heroMeta.appendChild(el);
    });
}

function renderNav(endpoints) {
    nav.innerHTML = "";
    endpoints.forEach((endpoint) => {
        const link = document.createElement("a");
        link.href = `#${endpoint.id}`;
        link.dataset.sectionId = endpoint.id;
        link.innerHTML = `
            <strong>${escapeHtml(endpoint.method)} ${escapeHtml(endpoint.title)}</strong>
            <span>${escapeHtml(endpoint.path)}</span>
        `;
        nav.appendChild(link);
    });
}

function renderLearning() {
    const basics = SECRET_APP_DOCS.learning.endpointBasics.map((item) => `
        <article class="guide-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
        </article>
    `).join("");

    guideSection.innerHTML = `
        <div class="overview__card">
            <p class="eyebrow">Learn REST API</p>
            <h2>How to read these endpoints</h2>
            <div class="guide-grid">${basics}</div>
        </div>
    `;

    const flow = SECRET_APP_DOCS.learning.codeFlow.map((item, index) => `
        <div class="flow-step">
            <span class="flow-step__index">${index + 1}</span>
            <div>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.text)}</p>
            </div>
        </div>
    `).join("");

    const mapping = SECRET_APP_DOCS.learning.routeMapping.map((item) => `
        <li>${escapeHtml(item)}</li>
    `).join("");

    codeMapSection.innerHTML = `
        <div class="overview__card">
            <p class="eyebrow">Go Code Flow</p>
            <h2>How this project handles a request</h2>
            <div class="flow-list">${flow}</div>
            <div class="mapping-panel">
                <p class="response-title">Route mapping in this project</p>
                <ul class="sidebar__notes mapping-list">${mapping}</ul>
            </div>
        </div>
    `;
}

function renderFieldBlock(title, fields) {
    if (!fields || !fields.length) {
        return "";
    }

    return `
        <div class="block">
            <h4>${escapeHtml(title)}</h4>
            <div class="field-list">
                ${fields.map((field) => `
                    <div class="field-row">
                        <div class="field-name">${escapeHtml(field.name)}</div>
                        <div class="field-meta">
                            <strong>${escapeHtml(field.type)}</strong>
                            ${field.required ? " • required" : " • optional"}
                            <div>${escapeHtml(field.description)}</div>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function renderRequestBlock(requestBody) {
    if (!requestBody) {
        return "";
    }

    return `
        <div class="block">
            <h4>Request Body</h4>
            <p class="response-title">${escapeHtml(requestBody.contentType)}</p>
            ${renderFieldBlock("Fields", requestBody.fields)}
            <div class="response-block">
                <p class="response-title">Example</p>
                <div class="copy-block">
                    ${renderCopyButton(requestBody.example, "Copy payload")}
                    <pre class="code-block"><code>${highlightCodeBlock(requestBody.example)}</code></pre>
                </div>
            </div>
        </div>
    `;
}

function renderResponses(responses) {
    return `
        <div class="block">
            <h4>Responses</h4>
            <div class="example-list">
                ${responses.map((response) => `
                    <div class="response-block">
                        <p class="response-title">${response.status} ${escapeHtml(response.title)}</p>
                        <div class="copy-block">
                            ${renderCopyButton(response.body, "Copy payload")}
                            <pre class="code-block"><code>${highlightCodeBlock(response.body)}</code></pre>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function renderEndpoint(endpoint) {
    const article = document.createElement("article");
    article.className = "endpoint-card";
    article.id = endpoint.id;
    article.innerHTML = `
        <div class="endpoint-card__header">
            <div>
                <p class="endpoint-card__label">${escapeHtml(endpoint.group)}</p>
                <h3>${escapeHtml(endpoint.title)}</h3>
            </div>
            <span class="method method--${endpoint.method.toLowerCase()}">${escapeHtml(endpoint.method)}</span>
        </div>
        <div class="copy-block copy-block--route">
            ${renderCopyButton(endpoint.path, "Copy endpoint")}
            <pre class="route"><code>${escapeHtml(endpoint.path)}</code></pre>
        </div>
        <p class="endpoint-card__description">${escapeHtml(endpoint.description)}</p>
        <div class="tags">
            ${endpoint.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <div class="endpoint-card__body">
            <div>
                ${renderFieldBlock("Path Params", endpoint.pathParams)}
                ${renderFieldBlock("Query Params", endpoint.queryParams)}
                ${renderRequestBlock(endpoint.requestBody)}
            </div>
            <div>
                ${renderResponses(endpoint.responses)}
            </div>
        </div>
    `;

    article.querySelectorAll(".copy-button").forEach((button) => {
        button.addEventListener("click", () => {
            copyText(button.dataset.copy || "", button);
        });
    });

    endpointList.appendChild(article);
}

function renderEndpoints(endpoints) {
    endpointList.innerHTML = "";
    endpoints.forEach(renderEndpoint);
    emptyState.hidden = endpoints.length > 0;
    lucide.createIcons();
    setupObserver();
}

function filterEndpoints(term) {
    const query = term.trim().toLowerCase();
    if (!query) {
        renderNav(SECRET_APP_DOCS.endpoints);
        renderEndpoints(SECRET_APP_DOCS.endpoints);
        return;
    }

    const filtered = SECRET_APP_DOCS.endpoints.filter((endpoint) => {
        const haystack = [
            endpoint.group,
            endpoint.method,
            endpoint.path,
            endpoint.title,
            endpoint.description,
            endpoint.tags.join(" "),
            ...(endpoint.pathParams || []).map((item) => `${item.name} ${item.description}`),
            ...(endpoint.queryParams || []).map((item) => `${item.name} ${item.description}`),
            endpoint.requestBody?.example || "",
            endpoint.requestBody?.fields?.map((item) => `${item.name} ${item.description}`).join(" ") || "",
            endpoint.responses.map((item) => `${item.status} ${item.title} ${item.body}`).join(" "),
        ].join(" ").toLowerCase();

        return haystack.includes(query);
    });

    renderNav(filtered);
    renderEndpoints(filtered);
}

function setupObserver() {
    const links = Array.from(nav.querySelectorAll("a"));
    const sections = Array.from(document.querySelectorAll(".endpoint-card"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            links.forEach((link) => {
                link.classList.toggle("is-active", link.dataset.sectionId === entry.target.id);
            });
        });
    }, {
        rootMargin: "-120px 0px -65% 0px",
        threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
}

function applyTheme(theme) {
    if (theme === "light") {
        root.setAttribute("data-theme", "light");
        setThemeToggleIcon("sun");
        themeToggle.setAttribute("aria-label", "Light mode active");
        themeToggle.setAttribute("title", "Light mode active");
        lucide.createIcons();
        return;
    }

    root.removeAttribute("data-theme");
    setThemeToggleIcon("moon");
    themeToggle.setAttribute("aria-label", "Dark mode active");
    themeToggle.setAttribute("title", "Dark mode active");
    lucide.createIcons();
}

function initTheme() {
    const saved = localStorage.getItem("secret-app-theme");
    applyTheme(saved === "light" ? "light" : "dark");
}

function toggleTheme() {
    const isLight = root.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    localStorage.setItem("secret-app-theme", next);
    applyTheme(next);
}

searchInput.addEventListener("input", (event) => {
    filterEndpoints(event.target.value);
});

themeToggle.addEventListener("click", toggleTheme);

window.addEventListener("hashchange", () => {
    const currentHash = window.location.hash;
    document.querySelectorAll(".sidebar__nav a").forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === currentHash);
    });
});

renderMeta();
renderLearning();
renderNav(SECRET_APP_DOCS.endpoints);
renderEndpoints(SECRET_APP_DOCS.endpoints);
initTheme();
lucide.createIcons();
