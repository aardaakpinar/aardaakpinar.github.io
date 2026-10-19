/** Filters the blog list by the ?tag= query parameter. */

export function initBlogFilter() {
	const activeTag = (new URLSearchParams(window.location.search).get("tag") || "").toLowerCase();
	if (!activeTag) return;

	const rows = document.querySelectorAll<HTMLElement>(".blog-row");
	const emptyState = document.querySelector<HTMLElement>(".blog-filter-empty");
	let visible = 0;

	rows.forEach((row) => {
		const matches = (row.dataset.tags || "").split("|").includes(activeTag);
		row.hidden = !matches;
		if (matches) visible += 1;
	});

	document.querySelectorAll<HTMLElement>(".blog-filters .blog-tag").forEach((chip) => {
		chip.classList.toggle("is-active", (chip.dataset.filter || "") === activeTag);
	});

	if (emptyState) emptyState.hidden = visible > 0;
}

initBlogFilter();
