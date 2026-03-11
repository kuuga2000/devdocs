const searchInput = document.getElementById("searchInput");
const sidebarNav = document.getElementById("sidebarNav");
const commandGrid = document.getElementById("commandGrid");
const noResults = document.getElementById("noResults");
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
const root = document.documentElement;

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function copyToClipboard(text, btn) {
    const originalIcon = btn.innerHTML;
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    btn.innerHTML = '<i data-lucide="check" class="w-4 h-4 text-green-500"></i>';
    lucide.createIcons();

    setTimeout(() => {
        btn.innerHTML = originalIcon;
        lucide.createIcons();
    }, 2000);
}

function getSectionCommands(section) {
    if (section.groups) {
        return section.groups.flatMap((group) => group.commands);
    }

    return section.commands || [];
}

function createNav(sections) {
    sidebarNav.innerHTML = "";

    sections.forEach((section) => {
        const link = document.createElement("a");
        link.href = `#${section.id}`;
        link.className =
            "nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 transition-all";
        link.innerHTML = `
            <i data-lucide="${escapeHtml(section.icon)}" class="w-4 h-4"></i>
            ${escapeHtml(section.title)}
        `;
        sidebarNav.appendChild(link);
    });
}

function createCard(command) {
    const copyValue = command.copyText || command.exampleBlock || command.command;
    const exampleBlock = command.exampleBlock
        ? `
        <div class="mt-4">
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Example</p>
            <pre class="bg-slate-950 text-slate-100 text-xs rounded-xl p-4 overflow-x-auto"><code>${escapeHtml(command.exampleBlock)}</code></pre>
        </div>
    `
        : "";

    const card = document.createElement("div");
    const spanClass = command.fullWidth || command.exampleBlock ? "md:col-span-2" : "";
    card.className =
        `command-card bg-white border border-slate-200 p-5 rounded-2xl hover:shadow-md transition-shadow relative group ${spanClass}`.trim();
    card.innerHTML = `
        <div class="flex justify-between items-start mb-3">
            <code class="command-code bg-slate-100 px-3 py-1 rounded text-blue-700 text-sm font-medium">${escapeHtml(command.command)}</code>
            <button class="copy-btn command-copy opacity-0 p-1.5 hover:bg-slate-100 rounded-md transition-all text-slate-400 hover:text-blue-600" type="button" aria-label="Copy command">
                <i data-lucide="copy" class="w-4 h-4"></i>
            </button>
        </div>
        <p class="command-description text-sm text-slate-600 leading-relaxed">${escapeHtml(command.description)}</p>
        ${exampleBlock}
    `;

    const button = card.querySelector(".copy-btn");
    button.addEventListener("click", () => copyToClipboard(copyValue, button));
    return card;
}

function createSection(section) {
    const sectionEl = document.createElement("section");
    sectionEl.id = section.id;
    sectionEl.className = "category-section scroll-mt-24";
    sectionEl.innerHTML = `
        <div class="section-divider flex items-center gap-2 mb-6 border-b border-slate-200 pb-2">
            <i data-lucide="${escapeHtml(section.icon)}" class="w-5 h-5 ${escapeHtml(section.iconColor)}"></i>
            <h2 class="section-title text-xl font-bold">${escapeHtml(section.title)}</h2>
        </div>
        <p class="section-summary text-sm text-slate-500 mb-4">${escapeHtml(section.summary)}</p>
    `;

    if (section.groups) {
        section.groups.forEach((group) => {
            const groupWrap = document.createElement("div");
            groupWrap.className = "mb-8 last:mb-0";
            groupWrap.innerHTML = `
                <h3 class="group-title text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">${escapeHtml(group.title)}</h3>
            `;

            const grid = document.createElement("div");
            grid.className = "grid md:grid-cols-2 gap-4";
            group.commands.forEach((command) => grid.appendChild(createCard(command)));
            groupWrap.appendChild(grid);
            sectionEl.appendChild(groupWrap);
        });
        return sectionEl;
    }

    const grid = document.createElement("div");
    grid.className = "grid md:grid-cols-2 gap-4";
    getSectionCommands(section).forEach((command) => grid.appendChild(createCard(command)));
    sectionEl.appendChild(grid);
    return sectionEl;
}

function renderSections(sections) {
    commandGrid.innerHTML = "";
    sections.forEach((section) => commandGrid.appendChild(createSection(section)));
    noResults.style.display = sections.length ? "none" : "block";
    lucide.createIcons();
    setupObserver();
}

function filterSections(term) {
    const keyword = term.trim().toLowerCase();

    if (!keyword) {
        createNav(DEV_DOCS.sections);
        renderSections(DEV_DOCS.sections);
        return;
    }

    const filteredSections = DEV_DOCS.sections
        .map((section) => {
            if (section.groups) {
                const groups = section.groups
                    .map((group) => ({
                        ...group,
                        commands: group.commands.filter((command) => {
                            const text = [
                                section.title,
                                section.summary,
                                group.title,
                                command.command,
                                command.description,
                                command.example || "",
                                command.exampleBlock || "",
                                command.tags.join(" "),
                            ].join(" ").toLowerCase();

                            return text.includes(keyword);
                        }),
                    }))
                    .filter((group) => group.commands.length > 0);

                return {
                    ...section,
                    groups,
                };
            }

            return {
                ...section,
                commands: getSectionCommands(section).filter((command) => {
                    const text = [
                        section.title,
                        section.summary,
                        command.command,
                        command.description,
                        command.example || "",
                        command.exampleBlock || "",
                        command.tags.join(" "),
                    ].join(" ").toLowerCase();

                    return text.includes(keyword);
                }),
            };
        })
        .filter((section) => getSectionCommands(section).length > 0);

    createNav(filteredSections);
    renderSections(filteredSections);
}

function setupObserver() {
    const sections = document.querySelectorAll(".category-section");
    const observerOptions = {
        root: null,
        rootMargin: "-120px 0px -65% 0px",
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                document.querySelectorAll(".nav-link").forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
}

function updateThemeUi() {
    const isDark = root.classList.contains("dark");
    themeLabel.textContent = isDark ? "Light" : "Dark";
    document.getElementById("themeIcon").setAttribute("data-lucide", isDark ? "sun" : "moon");
    lucide.createIcons();
}

function toggleTheme() {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("devdocs-theme", isDark ? "dark" : "light");
    updateThemeUi();
}

searchInput.addEventListener("input", (event) => {
    filterSections(event.target.value);
});

themeToggle.addEventListener("click", toggleTheme);

window.addEventListener("hashchange", () => {
    const currentHash = window.location.hash;
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === currentHash);
    });
});

createNav(DEV_DOCS.sections);
renderSections(DEV_DOCS.sections);
updateThemeUi();
