/** Pins the projects section and maps vertical scroll to horizontal card movement. */

const HOLD_MULTIPLIER = 1.6;

export function initProjectScroller() {
	const section = document.querySelector<HTMLElement>(".work-section");
	const sticky = document.querySelector<HTMLElement>(".project-sticky");
	const viewport = document.querySelector<HTMLElement>(".project-viewport");
	const grid = document.querySelector<HTMLElement>(".project-grid");
	if (!section || !sticky || !viewport || !grid) return;

	let frame: number | undefined;
	let userMoved = false;
	const noteUser = () => {
		userMoved = true;
	};
	window.addEventListener("wheel", noteUser, { passive: true, once: true });
	window.addEventListener("touchmove", noteUser, { passive: true, once: true });
	window.addEventListener("keydown", noteUser, { once: true });

	const travelDistance = () => {
		const style = getComputedStyle(viewport);
		const sidePadding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		return Math.max(0, grid.scrollWidth - viewport.clientWidth + sidePadding);
	};

	const move = () => {
		frame = undefined;
		const scrollDistance = section.offsetHeight - sticky.clientHeight;
		const progress = scrollDistance > 0 ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / scrollDistance)) : 0;
		grid.style.transform = `translateX(${-travelDistance() * progress}px)`;
	};

	const requestMove = () => {
		if (frame === undefined) frame = requestAnimationFrame(move);
	};

	const resize = () => {
		section.style.height = `${sticky.clientHeight + Math.max(0, travelDistance() * HOLD_MULTIPLIER)}px`;
		requestMove();
	};

	/** Layout shifts (fonts, images) can leave a fragment jump short of the section; re-align it. */
	const alignToHash = () => {
		if (userMoved || window.location.hash !== `#${section.id}`) return;
		const target = section.offsetTop;
		if (Math.abs(window.scrollY - target) > window.innerHeight * 1.5) return;
		const { scrollBehavior } = document.documentElement.style;
		document.documentElement.style.scrollBehavior = "auto";
		window.scrollTo(0, target);
		document.documentElement.style.scrollBehavior = scrollBehavior;
		requestMove();
	};

	const settle = () => {
		resize();
		alignToHash();
	};

	window.addEventListener("scroll", requestMove, { passive: true });
	window.addEventListener("resize", resize);
	window.addEventListener("load", settle);
	void document.fonts.ready.then(settle);
	resize();
	alignToHash();
}

initProjectScroller();
