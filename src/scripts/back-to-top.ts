const backToTop = document.getElementById("backToTop");

const updateVisibility = () => {
	backToTop?.classList.toggle("is-visible", window.scrollY > 300);
};

window.addEventListener("scroll", updateVisibility, { passive: true });
updateVisibility();

backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
