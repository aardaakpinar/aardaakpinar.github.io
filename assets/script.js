// THEME

function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    document.documentElement.classList.toggle('dark', e.matches);
});

initTheme();


// AGE

document.addEventListener("DOMContentLoaded", () => {
    // sadece index.html'de çalışsın
    if (window.location.pathname.endsWith("/index.html") || window.location.pathname === "/") {
        function calculateAge(birthDateStr) {
            const [day, month, year] = birthDateStr.split(".").map(Number);
            const birthDate = new Date(year, month - 1, day);
            const today = new Date();

            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            return age;
        }

        const ageElement = document.getElementById("age");
        if (ageElement) {
            ageElement.textContent = calculateAge("12.09.2006");
        }
    }
});


// BOOKMARKS

const buttons = document.querySelectorAll(".tab-btn");
const contentDiv = document.getElementById("bookmark-content");

async function loadPage(btn, page) {
    // aktif buton stilini ayarla
    buttons.forEach((b) => b.classList.remove("active-tab"));
    btn.classList.add("active-tab");

    try {
        const res = await fetch("pages/"+page);
        const html = await res.text();
        contentDiv.innerHTML = html;
    } catch (err) {
        contentDiv.innerHTML = `<p class="text-red-500">Veri yüklenemedi: ${err}</p>`;
    }
}

// Butonlara tıklama eventleri
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const page = btn.getAttribute("data-page");
        loadPage(btn, page);
    });
});

// Sayfa açıldığında otomatik Tools'u yükle
window.addEventListener("DOMContentLoaded", () => {
    const firstBtn = document.querySelector('[data-page="tools.html"]');
    if (firstBtn) {
        loadPage(firstBtn, "tools.html");
    }
});