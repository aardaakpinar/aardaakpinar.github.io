const TOTAL = 206;

const wallpapers = Array.from({ length: TOTAL }, (_, i) => ({
    id: i + 1,
    src: `https://raw.githubusercontent.com/aardaakpinar/aardaakpinar/main/wallpapers/${i + 1}.jpg`
}));

const grid = document.getElementById("grid");

function spawnBatch(start, count = 20) {
    const fragment = document.createDocumentFragment();

    wallpapers.slice(start, start + count).forEach(wallpaper => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");

        img.loading = "lazy";
        img.decoding = "async";
        img.src = wallpaper.src;
        img.alt = `${wallpaper.id}.jpg`;

        const label = document.createElement("div");
        label.className = "label";
        label.textContent = `${wallpaper.id}.jpg`;

        card.appendChild(img);
        card.appendChild(label);

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

let current = 0;

function loadNextBatch() {
    if (current >= wallpapers.length) return;

    spawnBatch(current);
    current += 20;
}

loadNextBatch();

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        loadNextBatch();
    }
}, {
    rootMargin: "300px"
});

const sentinel = document.createElement("div");
sentinel.id = "sentinel";

document.body.appendChild(sentinel);

observer.observe(sentinel);