/** Arrow navigation for the Experience and Education carousels. */

export function initTimelineCarousels() {
	document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((carousel) => {
		const track = carousel.querySelector<HTMLElement>("[data-carousel-track]");
		const slides = [...carousel.querySelectorAll<HTMLElement>("[data-carousel-slide]")];
		const prev = carousel.querySelector<HTMLButtonElement>("[data-carousel-prev]");
		const next = carousel.querySelector<HTMLButtonElement>("[data-carousel-next]");
		if (!track || slides.length === 0 || !prev || !next) return;

		let index = 0;

		const render = () => {
			track.style.transform = `translateX(-${index * 100}%)`;
			slides.forEach((slide, slideIndex) => {
				const active = slideIndex === index;
				slide.toggleAttribute("inert", !active);
				if (active) slide.removeAttribute("aria-hidden");
				else slide.setAttribute("aria-hidden", "true");
			});
			prev.disabled = slides.length < 2;
			next.disabled = slides.length < 2;
		};

		const go = (step: number) => {
			index = (index + step + slides.length) % slides.length;
			render();
		};

		prev.addEventListener("click", () => go(-1));
		next.addEventListener("click", () => go(1));
		carousel.addEventListener("keydown", (event) => {
			if (event.key === "ArrowLeft") go(-1);
			else if (event.key === "ArrowRight") go(1);
		});

		render();
	});
}

initTimelineCarousels();
