/** Pins the projects section and maps vertical scroll to horizontal card movement. */

const HOLD_MULTIPLIER = 1.6;

export function initProjectScroller() {
	const section = document.querySelector<HTMLElement>(".work-section");
	const sticky = document.querySelector<HTMLElement>(".project-sticky");
	const viewport = document.querySelector<HTMLElement>(".project-viewport");
	const grid = document.querySelector<HTMLElement>(".project-grid");
	if (!section || !sticky || !viewport || !grid) return;

	let frame: number | undefined;

	const travelDistance = () => {
		const style = getComputedStyle(viewport);
		const sidePadding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		return Math.max(0, grid.scrollWidth - viewport.clientWidth + sidePadding + 10);
	};

	const move = () => {
		frame = undefined;
		const scrollDistance = section.offsetHeight - sticky.clientHeight;
		const pinTop = parseFloat(getComputedStyle(sticky).top) || 0;
		const progress = Math.min(1, Math.max(0, (pinTop - section.getBoundingClientRect().top) / scrollDistance));
		grid.style.transform = `translateX(${-travelDistance() * progress}px)`;
	};

	const requestMove = () => {
		if (frame === undefined) frame = requestAnimationFrame(move);
	};

	const resize = () => {
		sticky.style.setProperty("--project-top", `${Math.max(0, (window.innerHeight - sticky.offsetHeight) / 2)}px`);
		section.style.height = `${sticky.clientHeight + Math.max(0, travelDistance() * HOLD_MULTIPLIER)}px`;
		requestMove();
	};

	window.addEventListener("scroll", requestMove, { passive: true });
	window.addEventListener("resize", resize);
	resize();
}

initProjectScroller();
