/** Seasonal / time-of-day hero effects: rain, snow, stars, meteors, fireworks. */

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

function spawn(parent: Element, className: string, style: (el: HTMLElement) => void) {
	const el = document.createElement("div");
	el.className = className;
	style(el);
	parent.appendChild(el);
	return el;
}

function createRain(container: Element, count: number) {
	for (let i = 0; i < count; i += 1) {
		spawn(container, "rain", (el) => {
			el.style.left = `${Math.random() * 100}%`;
			el.style.animationDuration = `${randomBetween(0.5, 1)}s`;
			el.style.animationDelay = `${Math.random() * 2}s`;
		});
	}
}

function createSnow(container: Element, count: number) {
	for (let i = 0; i < count; i += 1) {
		spawn(container, "snow", (el) => {
			el.style.left = `${Math.random() * 100}%`;
			el.style.animationDuration = `${randomBetween(5, 10)}s`;
			el.style.animationDelay = `${Math.random() * 5}s`;
		});
	}
}

function createStars(sky: Element, count: number) {
	for (let i = 0; i < count; i += 1) {
		spawn(sky, "star", (el) => {
			const size = randomBetween(1, 3);
			el.style.top = `${Math.random() * 100}%`;
			el.style.left = `${Math.random() * 100}%`;
			el.style.width = `${size}px`;
			el.style.height = `${size}px`;
			el.style.setProperty("--dirX", Math.random() > 0.5 ? "1" : "-1");
			el.style.setProperty("--dirY", Math.random() > 0.5 ? "1" : "-1");
			el.style.animationDuration = `${randomBetween(1, 4)}s, ${randomBetween(5, 10)}s`;
		});
	}
}

function createMeteor(sky: Element) {
	const meteor = spawn(sky, "meteor", (el) => {
		el.style.top = "-50px";
		el.style.left = `${Math.random() * 100}%`;
		el.style.animation = `${Math.random() < 0.5 ? "meteorFall1" : "meteorFall2"} 2s linear forwards`;
	});
	setTimeout(() => meteor.remove(), 2500);
}

const FIREWORK_COLORS = ["#FF3C38", "#FFAD33", "#33FFBD", "#3380FF", "#C833FF"];

function createFireworks(sky: Element) {
	const color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
	const firework = spawn(sky, "firework", (el) => {
		el.style.left = `${Math.random() * 100}%`;
		el.style.top = "calc(100% - 20px)";
		el.style.setProperty("--color", color);
	});

	setTimeout(() => {
		for (let i = 0; i < 8; i += 1) {
			const angle = (i / 8) * 2 * Math.PI;
			const distance = randomBetween(50, 100);
			const explosion = spawn(sky, "explosion", (el) => {
				el.style.left = firework.style.left;
				el.style.top = "50%";
				el.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
				el.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
				el.style.setProperty("--color", color);
			});
			setTimeout(() => explosion.remove(), 800);
		}
		firework.remove();
	}, 800);
}

export function initSky() {
	const sky = document.querySelector(".hero .sky");
	const rainContainer = document.querySelector(".hero .rain-container");
	if (!sky || !rainContainer) return;
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const now = new Date();
	const month = now.getMonth() + 1;
	const day = now.getDate();
	const hour = now.getHours();

	if (month === 9 && day === 12) {
		setInterval(() => createFireworks(sky), 1000);
	} else if (month >= 9 && month <= 11) {
		createRain(rainContainer, 50);
	} else if (month === 12 || month <= 2) {
		createSnow(rainContainer, 40);
	} else if (month >= 3 && month <= 5) {
		createRain(rainContainer, 20);
	}

	if (hour <= 6 || hour >= 18) {
		createStars(sky, 30);
		setInterval(() => {
			if (Math.random() < 0.07) createMeteor(sky);
		}, 10000);
	}
}

initSky();
