const links = [
    { url: "https://devnar.github.io/masa/", category: "Projects", type: "fav" },
    { url: "https://devnar.github.io/sayidisi/", category: "Projects", type: "fav" },
    { url: "https://devnar.github.io/pitopi/", category: "Projects", type: "fav" },
    { url: "https://devnar.github.io/inh/", category: "Projects", type: "fav" },
    { url: "https://excalidraw.com", category: "Tools" },
    { url: "https://obsidian.md/", category: "Tools" },
    { url: "https://www.todoist.com/", category: "Tools" },
    { url: "https://app.haikei.app/", category: "Tools" },
    { url: "https://neal.fun/ambient-chaos/", category: "Tools" },
    { url: "https://radio.madza.dev/", category: "Tools" },
    { url: "https://bmrk.cc/", category: "Tools" },
    { url: "https://www.oldmapsonline.org/", category: "Tools" },
    { url: "https://muetab.com/", category: "Tools" },
    { url: "https://typefully.com/minimal-twitter", category: "Tools" },
    { url: "https://www.modernwiki.app/", category: "Tools" },
    { url: "https://app.uselumen.com/", category: "Tools" },
    { url: "https://ionic.io/ionicons", category: "Tools" },
    { url: "https://boxicons.com/", category: "Tools" },
    { url: "https://lucide.dev/", category: "Tools" },
    { url: "https://tailwindui.com/", category: "Tools" },
    { url: "https://yarn.co/", category: "Tools", type: "none" },
    { url: "https://www.imdb.com/title/tt2861424", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1710308", category: "TvSeries", type: "writeless" },
    /*{ url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000064038-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001712159001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001705121001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001705122001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000373271-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0002006508001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001772519001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001730588001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001705124001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001705123001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001705120001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000291906-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000682540-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001683839001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000398506-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001747016001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000696782-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001772538002-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001700513003-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000713754-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0001781937001-1.jpg", category: "Books", type: "writeless" },
    { url: "https://img.kitapyurdu.com/v1/getImage/fn:1009425/wh:true/wi:220", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000628979-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000351286-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000327414-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000311400-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000284528-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000411500-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000349965-1.jpg", category: "Books", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000052555-1.jpg", category: "Books", type: "writeless" },*/
];

const categoryColorMap = {
    all: "#111",
    Tools: "#23b5b5",
    Projects: "#facc15",
    Books: "#fb7185",
};

(async () => {
    const container = document.getElementById("links");

    const promises = links.map(async (link) => {
        const res = await fetch(`http://pitopi.onrender.com/api/preview?url=${encodeURIComponent(link.url)}`);
        const data = await res.json();

        const title = data.title || link.url;
        const description = data.description;
        const image = data.image;
        const fav = data.favicon;

        if (link.type === "writeless") {
            const card = document.createElement("a");
            card.href = link.url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.className = `
      card relative flex min-w-0 cursor-pointer flex-col justify-end
      overflow-hidden rounded-xl bg-zinc-900 text-white aspect-[16/9]
      shadow-md transition-transform duration-300  hover:aspect-[10/16]
    `;
    const bgUrl = image || fav
            card.style.backgroundImage = `url(${bgUrl})`;
            card.style.backgroundSize = "cover";
            card.style.backgroundPosition = "center";
            const tag = document.createElement("div");
            tag.textContent = link.category;
            tag.className = "category absolute top-3 right-3 rounded-md px-2 py-0.5 text-xs font-medium text-black";
            tag.style.backgroundColor = categoryColorMap[link.category] || "#ccc";
            card.appendChild(tag);

            const overlay = document.createElement("div");
            overlay.className = `
      absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
      flex flex-col justify-end p-4
    `;

            const haveatitle = title !== "No title";
            const h2 = document.createElement("h2");
            h2.className = "text-lg font-semibold line-clamp-2";
            if (haveatitle) h2.textContent = title;

            overlay.appendChild(h2);
            card.appendChild(overlay);
            container.appendChild(card);
        } else {
            const card = document.createElement("a");
            card.className = "card relative thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-zinc-950 p-4 transition-colors duration-300 hover:bg-gray-900";
            card.href = link.url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";

            const tag = document.createElement("div");
            tag.textContent = link.category;
            tag.className = "category absolute top-3 right-3 rounded-md px-2 py-0.5 text-xs font-medium text-black";
            tag.style.backgroundColor = categoryColorMap[link.category] || "#ccc";
            card.appendChild(tag);

            if (image && link.type !== "fav" && link.type !== "none") {
                const imgWrap = document.createElement("span");
                imgWrap.className = "aspect-1200/630 overflow-hidden rounded-lg";
                const img = document.createElement("img");
                img.src = image;
                img.alt = title;
                img.className = "animate-reveal aspect-1200 rounded-lg object-cover mb-5";
                img.loading = "eager";
                img.width = 1200;
                imgWrap.appendChild(img);
                card.appendChild(imgWrap);
            } else if (link.type !== "none") {
                const imgWrap = document.createElement("span");
                imgWrap.className = "aspect-40/40 overflow-hidden rounded-lg";
                const img = document.createElement("img");
                img.src = fav;
                img.alt = title;
                img.className = "animate-reveal aspect-40 rounded-lg object-cover mb-5";
                img.loading = "eager";
                img.width = 40;
                imgWrap.appendChild(img);
                card.appendChild(imgWrap);
            }

            const textBox = document.createElement("div");
            textBox.className = "flex flex-col gap-1";

            const h2 = document.createElement("h2");
            h2.className = "line-clamp-4 text-lg leading-snug";
            h2.textContent = title;
            textBox.appendChild(h2);

            const domain = new URL(link.url).hostname.replace("www.", "");
            const domainSpan = document.createElement("span");
            domainSpan.className = "inline-flex items-center gap-1 text-sm text-gray-500";
            domainSpan.innerHTML = `<i class="bx bx-link"></i> ${domain}`;
            textBox.appendChild(domainSpan);

            if (description && link.type !== "writeless") {
                const desc = document.createElement("span");
                desc.className = "text-sm opacity-80";
                desc.textContent = description;
                textBox.appendChild(desc);
            }

            card.appendChild(textBox);
            container.appendChild(card);
        }
    });

    await Promise.all(promises); // Paralel çalıştır ve bitmesini bekle
})();

const btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll("#filterButtons button").forEach((btn) => {
    const cat = btn.getAttribute("data-category");
    if (categoryColorMap[cat]) {
        btn.style.backgroundColor = categoryColorMap[cat];
    }
    btn.addEventListener("click", () => {
        const selected = btn.getAttribute("data-category");

        document.querySelectorAll(".card").forEach((card) => {
            const categoryEl = card.querySelector(".category");
            const category = categoryEl?.textContent?.trim();

            if (selected === "all" || category === selected) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
