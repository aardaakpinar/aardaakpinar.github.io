// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");
    const menuIcon = mobileMenuBtn.querySelector(".menu-icon");
    const closeIcon = mobileMenuBtn.querySelector(".close-icon");

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener("click", function () {
            const isOpen = !mobileNav.classList.contains("hidden");

            if (isOpen) {
                // Close menu
                mobileNav.classList.add("hidden");
                menuIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
                mobileMenuBtn.setAttribute("aria-label", "Menüyü aç");
            } else {
                // Open menu
                mobileNav.classList.remove("hidden");
                menuIcon.classList.add("hidden");
                closeIcon.classList.remove("hidden");
                mobileMenuBtn.setAttribute("aria-label", "Menüyü kapat");
            }
        });

        // Close mobile menu when clicking on a link
        const mobileNavLinks = mobileNav.querySelectorAll(".mobile-nav-link");
        mobileNavLinks.forEach((link) => {
            link.addEventListener("click", function () {
                mobileNav.classList.add("hidden");
                menuIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
                mobileMenuBtn.setAttribute("aria-label", "Menüyü aç");
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener("click", function (event) {
            const isClickInsideNav = mobileNav.contains(event.target);
            const isClickOnButton = mobileMenuBtn.contains(event.target);

            if (!isClickInsideNav && !isClickOnButton && !mobileNav.classList.contains("hidden")) {
                mobileNav.classList.add("hidden");
                menuIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
                mobileMenuBtn.setAttribute("aria-label", "Menüyü aç");
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href !== "#") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        });
    });

    // Add loading animation for external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach((link) => {
        link.addEventListener("click", function () {
            // Add a subtle loading effect
            this.style.opacity = "0.7";
            setTimeout(() => {
                this.style.opacity = "1";
            }, 200);
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(".project-card, .blog-post-card, .bookmark-card, .glass-card");
    animatedElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });

    // Add keyboard navigation support
    document.addEventListener("keydown", function (e) {
        // ESC key closes mobile menu
        if (e.key === "Escape" && mobileNav && !mobileNav.classList.contains("hidden")) {
            mobileNav.classList.add("hidden");
            menuIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
            mobileMenuBtn.setAttribute("aria-label", "Menüyü aç");
        }
    });

    // Add focus management for accessibility
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    function trapFocus(element) {
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        document.addEventListener("keydown", function (e) {
            if (e.key === "Tab") {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // Apply focus trap to mobile menu when open
    if (mobileNav) {
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (!mobileNav.classList.contains("hidden")) {
                        trapFocus(mobileNav);
                    }
                }
            });
        });

        observer.observe(mobileNav, { attributes: true });
    }
});

// Utility function to format dates (if needed for dynamic content)
function formatDate(dateString) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("tr-TR", options);
}

// Performance optimization: Lazy load images if any are added
function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const rooster = document.getElementById("rooster");
    const roosterSpeech = document.getElementById("roosterSpeech");
    const speechText = document.getElementById("speechText");
    const errorDescription = document.getElementById("errorDescription");

    // Funny messages
    const roosterMessages = ["Ü ürü Üüü! Sayfa kaybolmuş!", "Ü ürü Üüü! 404 hatası!", "Bak Bak! Burada bir şey yok!", "Ü ürü Üüü! Yanlış yere geldin!", "Bak bak! Sayfa uçmuş!", "Ü ürü Üüü! Kayıp sayfa aranıyor!"];

    const errorMessages = [
        "Aradığınız sayfa kaybolmuş gibi görünüyor. Belki horozum onu gizlemiştir? 🤔",
        "Bu sayfa sanki hiç var olmamış gibi... Horozum şüpheli görünüyor 👀",
        "404 hatası! Horozum bu konuda masum olduğunu iddia ediyor 🐓",
        "Sayfa bulunamadı. Horozum 'Ben yapmadım!' diyor 😅",
        "Bu sayfa paralel evrende olabilir. Horozum portal açmayı öğrenmiş olabilir 🌀",
    ];

    const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    errorDescription.textContent = randomMessage;

    // Add some visual effects
    document.body.style.filter = "hue-rotate(45deg)";
    setTimeout(() => {
        document.body.style.filter = "none";
    }, 1000);

    // Rooster animations
    function animateRooster() {
        rooster.style.transform = "rotate(10deg) scale(1.1)";
        setTimeout(() => {
            rooster.style.transform = "rotate(-10deg) scale(0.9)";
        }, 200);
        setTimeout(() => {
            rooster.style.transform = "rotate(0deg) scale(1)";
        }, 400);
    }

    function showRoosterMessage(message) {
        speechText.textContent = message;
        roosterSpeech.classList.add("show");
        setTimeout(() => {
            roosterSpeech.classList.remove("show");
        }, 3000);
    }

    // Rooster click interaction
    rooster.addEventListener("click", () => {
        animateRooster();
        const randomMessage = roosterMessages[Math.floor(Math.random() * roosterMessages.length)];
        showRoosterMessage(randomMessage);
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
        switch (e.key.toLowerCase()) {
            case "h":
                window.location.href = "/";
                break;
            case "r":
                animateRooster();
                break;
            case "s":
                showRoosterMessage("help!");
                break;
        }
    });
});

// Enhanced dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
    // Desktop dropdown
    const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
    const mobileDropdownTriggers = document.querySelectorAll(".mobile-dropdown .dropdown-trigger");

    dropdownTriggers.forEach((trigger) => {
        const dropdown = trigger.parentElement;

        trigger.addEventListener("click", function (e) {
            e.preventDefault();
            dropdown.classList.toggle("active");
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("active");
            }
        });
    });

    // Mobile dropdown
    mobileDropdownTriggers.forEach((trigger) => {
        trigger.addEventListener("click", function (e) {
            e.preventDefault();
            const mobileDropdown = trigger.parentElement;
            mobileDropdown.classList.toggle("active");
        });
    });
});
