/** Auto-scrolls the tech stack marquee and lets visitors drag it in either direction. */

const LOOP_SECONDS = 32;
const MOMENTUM_DECAY = 0.92;
const MIN_VELOCITY = 1;
const MAX_VELOCITY = 3200;

export function initStackMarquee() {
	const marquee = document.querySelector<HTMLElement>(".stack-marquee");
	const track = marquee?.querySelector<HTMLElement>(".stack-track");
	if (!marquee || !track) return;

	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
	let halfWidth = 0;
	let autoSpeed = 0;
	let offset = 0;
	let velocity = 0;
	let dragging = false;
	let hovered = false;
	let pointerId: number | null = null;
	let lastX = 0;
	let lastMove = 0;
	let previous = 0;

	/** The track holds two identical copies, so one copy's width is the seamless loop distance. */
	const measure = () => {
		halfWidth = track.scrollWidth / 2;
		autoSpeed = halfWidth / LOOP_SECONDS;
		render();
	};

	const wrap = (value: number) => (halfWidth > 0 ? ((value % halfWidth) + halfWidth) % halfWidth : 0);

	const render = () => {
		track.style.transform = `translate3d(${-wrap(offset)}px, 0, 0)`;
	};

	const tick = (now: number) => {
		const delta = previous ? Math.min(0.064, (now - previous) / 1000) : 0;
		previous = now;

		if (!dragging) {
			const idleSpeed = hovered || reducedMotion.matches ? 0 : autoSpeed;
			const speed = idleSpeed + velocity;
			if (delta > 0 && speed !== 0) {
				offset += speed * delta;
				render();
			}
			velocity *= Math.pow(MOMENTUM_DECAY, delta * 60);
			if (Math.abs(velocity) < MIN_VELOCITY) velocity = 0;
		}

		requestAnimationFrame(tick);
	};

	const start = (event: PointerEvent) => {
		if (event.pointerType === "mouse" && event.button !== 0) return;
		dragging = true;
		velocity = 0;
		pointerId = event.pointerId;
		lastX = event.clientX;
		lastMove = event.timeStamp;
		marquee.setPointerCapture(event.pointerId);
		marquee.classList.add("is-dragging");
	};

	const move = (event: PointerEvent) => {
		if (!dragging || event.pointerId !== pointerId) return;
		const deltaX = event.clientX - lastX;
		const deltaTime = Math.max(0.008, (event.timeStamp - lastMove) / 1000);
		lastX = event.clientX;
		lastMove = event.timeStamp;
		offset -= deltaX;
		// Smoothed so a single jittery frame cannot launch the marquee across the screen.
		velocity = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, velocity * 0.6 - (deltaX / deltaTime) * 0.4));
		render();
	};

	const end = (event: PointerEvent) => {
		if (!dragging || event.pointerId !== pointerId) return;
		dragging = false;
		pointerId = null;
		marquee.classList.remove("is-dragging");
		if (marquee.hasPointerCapture(event.pointerId)) marquee.releasePointerCapture(event.pointerId);
		// A pause before release means the visitor is placing the marquee, not throwing it.
		if (event.timeStamp - lastMove > 100) velocity = 0;
	};

	marquee.addEventListener("pointerdown", start);
	marquee.addEventListener("pointermove", move);
	marquee.addEventListener("pointerup", end);
	marquee.addEventListener("pointercancel", end);
	marquee.addEventListener("lostpointercapture", end);
	marquee.addEventListener("dragstart", (event) => event.preventDefault());
	marquee.addEventListener("mouseenter", () => {
		hovered = true;
	});
	marquee.addEventListener("mouseleave", () => {
		hovered = false;
	});

	new ResizeObserver(measure).observe(track);

	measure();
	requestAnimationFrame(tick);
}

initStackMarquee();
