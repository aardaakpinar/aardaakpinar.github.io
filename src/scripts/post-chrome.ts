/** Reading-progress bar and back-to-top button on blog posts. */

export function initPostChrome() {
	const backToTop = document.getElementById("backToTop");
	const progress = document.getElementById("readProgress");

	const update = () => {
		const max = document.documentElement.scrollHeight - window.innerHeight;
		if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
		backToTop?.classList.toggle("is-visible", window.scrollY > 300);
	};

	window.addEventListener("scroll", update, { passive: true });
	update();

	backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

initPostChrome();
