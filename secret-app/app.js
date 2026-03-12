const nav = document.getElementById("sidebarNav");
const endpointList = document.getElementById("endpointList");
const searchInput = document.getElementById("searchInput");
const heroMeta = document.getElementById("heroMeta");
const emptyState = document.getElementById("emptyState");
const baseUrlLabel = document.getElementById("baseUrlLabel");

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function renderMeta() {
    baseUrlLabel.textContent = `Base URL: ${SECRET_APP_DOCS.baseUrl}`;
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
                <pre class="code-block"><code>${escapeHtml(requestBody.example)}</code></pre>
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
                        <pre class="code-block"><code>${escapeHtml(response.body)}</code></pre>
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
        <pre class="route"><code>${escapeHtml(endpoint.path)}</code></pre>
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

    endpointList.appendChild(article);
}

function renderEndpoints(endpoints) {
    endpointList.innerHTML = "";
    endpoints.forEach(renderEndpoint);
    emptyState.hidden = endpoints.length > 0;
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

searchInput.addEventListener("input", (event) => {
    filterEndpoints(event.target.value);
});

window.addEventListener("hashchange", () => {
    const currentHash = window.location.hash;
    document.querySelectorAll(".sidebar__nav a").forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === currentHash);
    });
});

renderMeta();
renderNav(SECRET_APP_DOCS.endpoints);
renderEndpoints(SECRET_APP_DOCS.endpoints);
