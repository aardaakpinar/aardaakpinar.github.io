const links = [
    { url: "https://x.com/_devnar", category: "Contact", type: "fav" },
    { url: "https://www.linkedin.com/in/devnar/", category: "Contact", type: "fav" },
    { url: "https://github.com/devnar", category: "Contact", type: "fav" },
    { url: "https://buymeacoffee.com/devnar", category: "Contact", type: "fav" },
    { url: "https://www.patreon.com/c/_devnar", category: "Contact", type: "fav" },
    { url: "https://www.youtube.com/@_devnar", category: "Contact", type: "fav" },
    { url: "https://www.reddit.com/user/_devnar_", category: "Contact", type: "fav" },
    { url: "https://codepen.io/_devnar", category: "Contact", type: "fav" },
    { url: "https://dev.to/devnar", category: "Contact", type: "fav" },
    { url: "https://suno.com/@_devnar", category: "Contact", type: "fav" },
    { url: "https://devnar.github.io/masa/", category: "Projects", type: "fav" },
    { url: "https://devnar.github.io/sayidisi/", category: "Projects", type: "fav" },
    { url: "https://devnar.github.io/pitopi/", category: "Projects", type: "fav" },
    { url: "https://devnar.github.io/inh/", category: "Projects", type: "fav" },
    { url: "https://excalidraw.com", category: "Tools" },
    { url: "https://obsidian.md/", category: "Tools" },
    { url: "https://www.todoist.com/", category: "Tools" },
    { url: "https://app.haikei.app/", category: "Tools" },
    { url: "https://neal.fun/ambient-chaos/", category: "Tools", type: "none" },
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
    { url: "https://www.imdb.com/title/tt1305826", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt4083422", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0063950", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0063950", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1865718", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1812523", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt14688458", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt2879552", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt2741602", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt5296406", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt10234724", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt6468322", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt11256260", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt10919420", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt9764362", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt14452776", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt11988676", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt7827112", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt35082593", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt4241744", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt8309422", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0294023", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt13622958", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0169414", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0081933", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1109624", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt5687910", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt2080922", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1726839", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0130417", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0760437", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0118360", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt2638376", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt7639726", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt14533970", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0175058", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0843548", category: "TvSeries", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0318913", category: "TvSeries", type: "writeless" },
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000064038-1.jpg", category: "Books", type: "writeless" },
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
    { url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000052555-1.jpg", category: "Books", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1375666", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0120382", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0133093", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0096874", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt3659388", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt14055868", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt2245084", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt29623480", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0434409", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1431045", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0382932", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1049413", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0892769", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0252487", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt2592910", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1063669", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt5074352", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1201607", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt2015381", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt3450958", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0145487", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1300854", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1790809", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt6264654", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0120338", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0369610", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt2283362", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0478970", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1104001", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0837562", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0499549", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt7504818", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1323594", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt22022452", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt15789038", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt7146812", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0351283", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0397892", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0418279", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt4701182", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt3416828", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt3606752", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt5814534", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt2543164", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1242422", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0448694", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1935859", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1637688", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt4777008", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1979388", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1679335", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1860353", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt3861390", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0113243", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt1289401", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt4123432", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt11210390", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt19759204", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt4477292", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt5779228", category: "Films", type: "writeless" },
    { url: "https://www.imdb.com/title/tt0952640", category: "Films", type: "writeless" },
];

const categoryColorMap = {
    all: "#111",
    Contact: "#23b5b5",
    Projects: "#facc15",
    Tools: "#4ade80",          
    Books: "#fb7185",
    Films: "#0489c4",
    TvSeries: "#c084fc", 
};

(async () => {
    const container = document.getElementById("links");

    for (const link of links) {
        const res = await fetch(`https://metadata-qdnb.onrender.com/api/metadata?url=${encodeURIComponent(link.url)}`);
        const data = await res.json();

        const title = data.title || link.url;
        const description = data.description;
        const image = data.image;
        const fav = data.favicon;

        let card;

        if (link.type === "writeless") {
            card = document.createElement("a");
            card.href = link.url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.className = `
                card relative flex min-w-0 cursor-pointer flex-col justify-end
                overflow-hidden rounded-xl bg-zinc-900 text-white aspect-[16/9]
                shadow-md transition-transform duration-300  hover:aspect-[10/16]
            `;
            const bgUrl = image || fav;
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
        } else {
            card = document.createElement("a");
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
        }
        
        container.appendChild(card);
    }
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
