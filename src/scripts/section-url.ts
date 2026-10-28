/** Keeps the URL hash in sync with the section currently in view (and clears it on the hero). */

export function initSectionUrl() {
	const hero = document.querySelector(".hero");
	const sections = [...document.querySelectorAll<HTMLElement>("main > section[id]")];
	if (!hero || sections.length === 0) return;

	let activeSection = "";
	let leftHero = false;

	const updateUrl = (sectionId: string) => {
		if (sectionId === activeSection) return;
		activeSection = sectionId;
		history.replaceState(null, "", `#${sectionId}`);
	};

	const states = new Map<string, IntersectionObserverEntry>();
	const sectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => states.set(entry.target.id, entry));
			const center = window.innerHeight * 0.35;
			const visible = sections
				.map((section) => states.get(section.id))
				.filter((entry): entry is IntersectionObserverEntry => Boolean(entry?.isIntersecting))
				.sort((a, b) => Math.abs(a.boundingClientRect.top - center) - Math.abs(b.boundingClientRect.top - center));

			if (visible[0]) updateUrl(visible[0].target.id);
		},
		{ rootMargin: "-25% 0px -55%", threshold: [0, 0.25, 0.5, 0.75, 1] },
	);
	sections.forEach((section) => sectionObserver.observe(section));

	const heroObserver = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) {
				// Remember that we have been below the hero; only then may the hero clear the hash.
				leftHero = true;
				return;
			}
			// On first load the hero is visible before a #section jump happens: keep that hash.
			if (!leftHero) return;
			activeSection = "";
			history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
		},
		{ threshold: 0.25 },
	);
	heroObserver.observe(hero);
}

initSectionUrl();
