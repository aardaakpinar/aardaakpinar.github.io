const links = [
    { url: "https://devnar.github.io/masa/", category: "Projects", type: "fav" },
    { url: "https://devnar.github.io/sayidisi/", category: "Projects", type: "fav" },
    { url: "https://devnar.github.io/pitopi/", category: "Projects", type: "fav" },
    { url: "https://devnar.github.io/inh/", category: "Projects", type: "fav" },
    { url: "https://excalidraw.com/", category: "Tools" },
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
    { url: "https://uselumen.com/", category: "Tools" },
    { url: "https://ionic.io/ionicons", category: "Tools" },
    { url: "https://boxicons.com/", category: "Tools" },
    { url: "https://lucide.dev/", category: "Tools" },
    { url: "https://tailwindui.com/", category: "Tools" },
    { url: "https://yarn.co/", category: "Tools", type: "none" },
    { url: "https://www.dr.com.tr/kitap/1984/edebiyat/roman/dunya-roman/urunno=0000000064038?srsltid=AfmBOoo6xDD6_icAcVFG6jb7Qdi0Jug1T3ZBIU6gfP_zRzCut2JNg_Gh", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/kuskucu-somon/edebiyat/roman/bilim-kurgu/urunno=0001712159001?srsltid=AfmBOopUjcfkingDrMua3Egz2r76PR0wvvHZx1ajunizIn7USgDQIbar", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/cogunlukla-zararsiz/edebiyat/roman/bilim-kurgu/urunno=0001705121001?srsltid=AfmBOoqw8WbGECBls_TXlCOT11VWWrzTa4v7JcocbFkobzU7GDOTbDkw", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/elveda-ve-butun-o-baliklar-icin-tesekkurler/edebiyat/roman/bilim-kurgu/urunno=0001705122001?srsltid=AfmBOoog3wrnY8ekfqCIKblK2ZUCGXjJOFpuQhizTsqS3vjrMsR3_YpN", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/baslat/edebiyat/roman/fantastik/urunno=0000000373271?srsltid=AfmBOor0lfQBPTbbmaFDDHsbv5nfFxLhdCbkbjSp3OZJ8LsAgdRzLjaK", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/baslat-ready-player-two/edebiyat/roman/bilim-kurgu/urunno=0002006508001?srsltid=AfmBOorpGRUG9VCQc0QypgMDJMyusHH7su4sJgxtPPK9ySsoQKCOgqrZ", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/vakif/edebiyat/roman/bilim-kurgu/urunno=0001730588001?srsltid=AfmBOopO6EZwsGMvyL0PryYso7DRBwqZGWmeK7N0Z2s95XzWKvxRIg76", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/hayat-evren-ve-her-sey/edebiyat/roman/bilim-kurgu/urunno=0001705124001?srsltid=AfmBOorWFkwj-X2-ZU792glNYSDrvns-3orwgsV0nBG1-L6YrUJi5uNE", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/evrenin-sonundaki-restoran/edebiyat/roman/bilim-kurgu/urunno=0001705123001?srsltid=AfmBOoqkv4RyBoAtPW_W92Tv62eqBvVxTaYgA-yyQmOoBISV3brqhjQd", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/otostopcunun-galaksi-rehberi/edebiyat/roman/bilim-kurgu/urunno=0001705120001?srsltid=AfmBOopI3oQ7eSKf-uN5JWBIa_o-2cMjIR9hrrd0yeQJplVd3kU0C0aE", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/pal-sokagi-cocuklari-kucuk-boy/cocuk-ve-genclik/okul-cagi-6-10-yas/cocuk-klasik/urunno=0000000291906?srsltid=AfmBOop7thTgHsA1sE7pIMXwRFYYGcJML9iNyTBzvvchhUdJsgK1ksd0", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/haritali-adam/edebiyat/roman/korku-gerilim/urunno=0000000682540?srsltid=AfmBOoqWn7jNZBteSCrWe6nls90Tk28bR6wN0ynph9CAqBfjjR42dsSI", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/gece-yarisina-12-dakika-kala/cocuk-ve-genclik/genclik-10-yas/fantastikbilim-kurgu/urunno=0001683839001?srsltid=AfmBOoqZovudJbxyAS5snqD9jozesbqfxZdy3PyUYhmNho0IWjw2Jfdr", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/kucuk-hezarfenin-seruvenleri-1/salih-ozcelik/edebiyat/roman/turkiye-roman/urunno=0000000696782?srsltid=AfmBOopcAvzn9fwQN2FFsGJ4ox0uuyR0c51dKL60dyucSRpcihekZsza", category: "Books" },
    { url: "https://www.dr.com.tr/Kitap/Beyin-Avcisi-1-Zindan-Adasi/Ahmet-Baki-Yerli/cocuk-ve-Genclik/Genclik-10-Yas/Roman-oyku/urunno=0001700513003?srsltid=AfmBOoo6uR6UBZR2uJyi8aBoF3KwJvRRgOofRnP6tN1WfsXgIjNXTNS-", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/beyin-avcisi-4-olum-ormani/ahmet-baki-yerli/cocuk-ve-genclik/genclik-10-yas/roman-oyku/urunno=0001772538001?srsltid=AfmBOooQ6KUwdlDA4yeICeN8_Bc0y79DRXjs9gsWC356Jauc2sD3c30b", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/yaratik-departmani/cocuk-ve-genclik/genclik-10-yas/fantastikbilim-kurgu/urunno=0000000713754?srsltid=AfmBOoqjovLbeUBxllITzqXUXYVvn64bX_JbMnObeuqoxoQiv6W_pSzX", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/superozorlar-1-ormandaki-cocuk/cocuk-ve-genclik/genclik-10-yas/fantastikbilim-kurgu/urunno=0001781937001?srsltid=AfmBOoopC6YzpgXm_GxWbW8t0iIdFcVeezv3qimEWcnCqB1j8h1ERdtn", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/kucuk-prens/cocuk-ve-genclik/okul-cagi-6-10-yas/cocuk-klasik/urunno=0000000628979?srsltid=AfmBOoo_10D9491lLEF_R8fRrqTOJp9klP6VRrCf7tE4R9ufMM1ln7_j", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/saftirik-gregin-gunlugu-4-iste-simdi-yandik/jeff-kinney/cocuk-ve-genclik/genclik-10-yas/roman-oyku/urunno=0000000351286?srsltid=AfmBOoqFaoj_YlOhLHlgWuNVPuXH6wlSMZxfl7KFKCUNFsLyIsOS94vq", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/saftirik-gregin-gunlugu-3-turunun-son-ornegi/jeff-kinney/cocuk-ve-genclik/genclik-10-yas/roman-oyku/urunno=0000000327414?srsltid=AfmBOoqYGpxYJCOpBZVk6E5EGZCBsvTu0MZgTYx5jSzAgiHJHpcaPMV8", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/saftirik-gregin-gunlugu-2-rodrick-kurallari/jeff-kinney/cocuk-ve-genclik/genclik-10-yas/roman-oyku/urunno=0000000311400?srsltid=AfmBOorAYy5ZnfPbCtEDgPfkuh2JvF10xPhMmjpmSlcrf4efsCcqTr7J", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/saftirik-gregin-gunlugu-1/jeff-kinney/cocuk-ve-genclik/genclik-10-yas/roman-oyku/urunno=0000000284528", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/halime-kaptan/cocuk-ve-genclik/genclik-10-yas/romanoyku/urunno=0000000349965?srsltid=AfmBOoqZpdqt10kLj2jYH9oUIvSZsBz5b9mziCayPaZSiBic8aLD-mUE", category: "Books" },
    { url: "https://www.dr.com.tr/kitap/acimak/edebiyat/roman/turk-klasik/urunno=0000000052555?srsltid=AfmBOopTwRpgYY4YaaZ7ShRlXnJ2DjGNbRcXsJVpd2IduiwGCKn1YCXw", category: "Books" },
];

const categoryColorMap = {
    Tools: "#23b5b5",
    Projects: "#facc15",
    Books: "#fb7185",
};

const container = document.getElementById("links");

links.forEach(async (link) => {
    const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(link.url)}`);
    const data = await res.json();

    const title = data.data.title || link.url;
    const description = data.data.description || "";
    const image = data.data.image?.url;
    const fav = data.data.logo?.url;

    const card = document.createElement("a");
    card.className = "card relative thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-zinc-950 p-4 transition-colors duration-300 hover:bg-gray-900";
    card.href = link.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    // Etiket
    const tag = document.createElement("div");
    tag.textContent = link.category;
    tag.className = "category absolute top-3 right-3 rounded-md bg-[#23b5b5] px-2 py-0.5 text-xs font-medium text-black";
    tag.style.backgroundColor = categoryColorMap[link.category] || "#ccc";
    card.appendChild(tag);

    // Görsel varsa
    if (image && link.type != "fav" && link.type != "none") {
        const imgWrap = document.createElement("span");
        imgWrap.className = "aspect-1200/630 overflow-hidden rounded-lg";
        const img = document.createElement("img");
        img.src = image;
        img.alt = title;
        img.className = "animate-reveal aspect-1200 rounded-lg bg-cover bg-center bg-no-repeat object-cover mb-5";
        img.loading = "eager";
        img.width = 1200;
        imgWrap.appendChild(img);
        card.appendChild(imgWrap);
    } else if (link.type != "none") {
        const imgWrap = document.createElement("span");
        imgWrap.className = "aspect-40/40 overflow-hidden rounded-lg";
        const img = document.createElement("img");
        img.src = fav;
        img.alt = title;
        img.className = "animate-reveal aspect-40 rounded-lg bg-cover bg-center bg-no-repeat object-cover mb-5";
        img.loading = "eager";
        img.width = 40;
        imgWrap.appendChild(img);
        card.appendChild(imgWrap);
    }

    // Metin
    const textBox = document.createElement("div");
    textBox.className = "flex flex-col gap-1";

    const h2 = document.createElement("h2");
    h2.className = "line-clamp-4 text-lg leading-snug";
    h2.textContent = title;
    textBox.appendChild(h2);

    const domain = new URL(link.url).hostname.replace("www.", "");
    const domainSpan = document.createElement("span");
    domainSpan.className = "line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500";
    domainSpan.innerHTML = `<i class="bx  bx-link"></i> ${domain}`;
    textBox.appendChild(domainSpan);

    if (description) {
        const desc = document.createElement("span");
        desc.className = "line-clamp-6 text-sm opacity-80";
        desc.textContent = description;
        textBox.appendChild(desc);
    }

    card.appendChild(textBox);
    container.appendChild(card);
});

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
    btn.style.color = "black";
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
