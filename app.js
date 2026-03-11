const searchInput = document.getElementById("searchInput");
const sidebarNav = document.getElementById("sidebarNav");
const commandGrid = document.getElementById("commandGrid");
const noResults = document.getElementById("noResults");

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
    const card = document.createElement("div");
    card.className =
        "command-card bg-white border border-slate-200 p-5 rounded-2xl hover:shadow-md transition-shadow relative group";
    card.innerHTML = `
        <div class="flex justify-between items-start mb-3">
            <code class="bg-slate-100 px-3 py-1 rounded text-blue-700 text-sm font-medium">${escapeHtml(command.command)}</code>
            <button class="copy-btn opacity-0 p-1.5 hover:bg-slate-100 rounded-md transition-all text-slate-400 hover:text-blue-600" type="button" aria-label="Copy command">
                <i data-lucide="copy" class="w-4 h-4"></i>
            </button>
        </div>
        <p class="text-sm text-slate-600 leading-relaxed">${escapeHtml(command.description)}</p>
    `;

    const button = card.querySelector(".copy-btn");
    button.addEventListener("click", () => copyToClipboard(command.command, button));
    return card;
}

function createSection(section) {
    const sectionEl = document.createElement("section");
    sectionEl.id = section.id;
    sectionEl.className = "category-section scroll-mt-24";
    sectionEl.innerHTML = `
        <div class="flex items-center gap-2 mb-6 border-b border-slate-200 pb-2">
            <i data-lucide="${escapeHtml(section.icon)}" class="w-5 h-5 ${escapeHtml(section.iconColor)}"></i>
            <h2 class="text-xl font-bold">${escapeHtml(section.title)}</h2>
        </div>
        <p class="text-sm text-slate-500 mb-4">${escapeHtml(section.summary)}</p>
    `;

    const grid = document.createElement("div");
    grid.className = "grid md:grid-cols-2 gap-4";
    section.commands.forEach((command) => grid.appendChild(createCard(command)));
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
        .map((section) => ({
            ...section,
            commands: section.commands.filter((command) => {
                const text = [
                    section.title,
                    section.summary,
                    command.command,
                    command.description,
                    command.example || "",
                    command.tags.join(" "),
                ].join(" ").toLowerCase();

                return text.includes(keyword);
            }),
        }))
        .filter((section) => section.commands.length > 0);

    createNav(filteredSections);
    renderSections(filteredSections);
}

function setupObserver() {
    const sections = document.querySelectorAll(".category-section");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
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

searchInput.addEventListener("input", (event) => {
    filterSections(event.target.value);
});

createNav(DEV_DOCS.sections);
renderSections(DEV_DOCS.sections);
lucide.createIcons();
