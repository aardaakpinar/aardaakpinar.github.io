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

function getIframeHeight(iframe) {
    try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) return;

        const body = doc.body;
        if (!body) return;

        // Önce küçült, sonra gerçek ölçümü al
        iframe.style.height = "0px";
        iframe.style.height = body.scrollHeight + "px";

        body.style.overflow = "hidden";
    } catch (err) {
        console.warn("iframe içeriğine erişilemedi (cross-origin olabilir):", err);
    }
}

function waitForImages(iframe, callback) {
    try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) return;

        const images = Array.from(doc.images);
        if (images.length === 0) {
            callback();
            return;
        }

        let loadedCount = 0;
        images.forEach(img => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.addEventListener("load", () => {
                    loadedCount++;
                    if (loadedCount === images.length) callback();
                });
                img.addEventListener("error", () => {
                    loadedCount++;
                    if (loadedCount === images.length) callback();
                });
            }
        });

        if (loadedCount === images.length) {
            callback();
        }
    } catch (err) {
        console.warn("Resim yükleme kontrolü yapılamadı:", err);
    }
}

const tabs = document.querySelectorAll('.tab');
const iframe = document.getElementById('content-frame');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        iframe.src = tab.getAttribute('data-url');
    });
});

if (window.location.pathname.endsWith("/bookmarks.html")) {
    iframe.addEventListener("load", () => {
        waitForImages(iframe, () => getIframeHeight(iframe));
    });
}