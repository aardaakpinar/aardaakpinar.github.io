/** Reading-progress bar on blog posts. */

export function initPostChrome() {
	const progress = document.getElementById("readProgress");

	const update = () => {
		const max = document.documentElement.scrollHeight - window.innerHeight;
		if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
	};

	window.addEventListener("scroll", update, { passive: true });
	update();
}

initPostChrome();
