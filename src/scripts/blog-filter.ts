/** Applies the ?tag= filter and controls the collapsible filter panel. */

export function initBlogFilter() {
	const filters = document.querySelector<HTMLElement>("[data-blog-filters]");
	if (!filters) return;

	const toggle = filters.querySelector<HTMLButtonElement>("[data-filter-toggle]");
	const panel = filters.querySelector<HTMLElement>("[data-filter-panel]");
	const value = filters.querySelector<HTMLElement>("[data-filter-value]");
	const chips = [...filters.querySelectorAll<HTMLAnchorElement>(".blog-tag")];

	const setOpen = (open: boolean) => {
		filters.classList.toggle("is-open", open);
		toggle?.setAttribute("aria-expanded", String(open));
		panel?.toggleAttribute("inert", !open);
	};

	toggle?.addEventListener("click", () => setOpen(!filters.classList.contains("is-open")));
	filters.addEventListener("keydown", (event) => {
		if (event.key !== "Escape" || !filters.classList.contains("is-open")) return;
		setOpen(false);
		toggle?.focus();
	});

	const activeTag = (new URLSearchParams(window.location.search).get("tag") || "").toLowerCase();

	if (activeTag) {
		setOpen(true);
		if (value) value.textContent = activeTag;
	}

	const rows = document.querySelectorAll<HTMLElement>(".blog-row");
	const emptyState = document.querySelector<HTMLElement>(".blog-filter-empty");
	let visible = 0;

	rows.forEach((row) => {
		const matches = !activeTag || (row.dataset.tags || "").split("|").includes(activeTag);
		row.hidden = !matches;
		if (matches) visible += 1;
	});

	chips.forEach((chip) => {
		const active = (chip.dataset.filter || "") === activeTag;
		chip.classList.toggle("is-active", active);
		if (active) chip.setAttribute("aria-current", "true");
		else chip.removeAttribute("aria-current");
	});

	if (emptyState) emptyState.hidden = visible > 0;
}

initBlogFilter();
