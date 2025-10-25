document.addEventListener("DOMContentLoaded", () => {
    const sky = document.querySelector(".sky");
    const rainContainer = document.querySelector(".rain-container");

    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const hour = new Date().getHours();

    // Temel efektleri temizle
    rainContainer.innerHTML = "";
    sky.innerHTML = "";

    // Mevsim ve saat bazlı koşullar
    if (month == 9 && day == 12) {
        setInterval(createFireworks, 1000);
    } else if (month >= 9 && month <= 11) {
        // Sonbahar
        createRain(50);
    } else if (month == 12 || month <= 2) {
        // Kış
        createSnow(70);
    } else if (month >= 3 && month <= 5) {
        // İlkbahar
        createRain(20);
    } else if (month >= 6 && month <= 8) {
        // Yaz
    }

    if (hour <= 6 || hour >= 18) {
        createStars(30);
        setInterval(() => {
            if (Math.random() < 0.05) {
                createMeteor();
            }
        }, 10000);
    }

    // Fonksiyonlar
    function createRain(count) {
        for (let i = 0; i < count; i++) {
            const drop = document.createElement("div");
            drop.className = "rain";
            drop.style.left = Math.random() * 100 + "vw";
            drop.style.animationDuration = 0.5 + Math.random() * 0.5 + "s";
            drop.style.animationDelay = Math.random() * 2 + "s";
            rainContainer.appendChild(drop);
        }
    }

    function createSnow(count) {
        for (let i = 0; i < count; i++) {
            const flake = document.createElement("div");
            flake.className = "snow";
            flake.style.left = Math.random() * 100 + "vw";
            flake.style.animationDuration = 5 + Math.random() * 5 + "s";
            flake.style.animationDelay = Math.random() * 5 + "s";
            rainContainer.appendChild(flake);
        }
    }

    function createStars(count){
      const sky = document.querySelector('.sky');
      for(let i=0;i<count;i++){
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random()*50+'vh';
        star.style.left = Math.random()*100+'vw';
        star.style.width = 1+Math.random()*2+'px';
        star.style.height = star.style.width;

        star.style.setProperty('--dirX', Math.random()>0.5?1:-1);
        star.style.setProperty('--dirY', Math.random()>0.5?1:-1);

        star.style.animationDuration = 1+Math.random()*3+'s, '+5+Math.random()*5+'s';
        sky.appendChild(star);
      }
    }

    function createMeteor() {
      const meteor = document.createElement("div");
      meteor.classList.add("meteor");

      meteor.style.top = "-50px";
      meteor.style.left = Math.random() * 100 + "vw";

      const animationName = Math.random() < 0.5 ? "meteorFall1" : "meteorFall2";
      meteor.style.animation = `${animationName} 2s linear forwards`;

      sky.appendChild(meteor);

      setTimeout(() => meteor.remove(), 2500);
    }



    function createFireworks() {
      const container = document.querySelector('.sky');
      
      const colors = ['#FF3C38','#FFAD33','#33FFBD','#3380FF','#C833FF'];

      const color = colors[Math.floor(Math.random() * colors.length)];

      const firework = document.createElement('div');
      firework.classList.add('firework');
      firework.style.left = `${Math.random() * 90 + 5}%`;
      firework.style.setProperty('--color', color);
      container.appendChild(firework);

      setTimeout(() => {
          for (let i = 0; i < 8; i++) {
              const explosion = document.createElement('div');
              explosion.classList.add('explosion');
              explosion.style.left = firework.offsetLeft + 'px';
              explosion.style.bottom = firework.offsetTop + 'px';
              const angle = (i / 8) * 2 * Math.PI;
              const distance = 50 + Math.random() * 50;
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance;
              explosion.style.setProperty('--x', `${x}px`);
              explosion.style.setProperty('--y', `${y}px`);
              explosion.style.setProperty('--color', color);
              container.appendChild(explosion);

              setTimeout(() => explosion.remove(), 800);
          }
          firework.remove();
      }, 800);
  }

});



function applyGridPositions() {
  const width = window.innerWidth;
  const isTablet = width <= 900 && width > 600;
  const isMobile = width <= 600;

  document.querySelectorAll('[position]').forEach(el => {
    let pos = el.getAttribute('position');

    if (isTablet && el.hasAttribute('position-md')) {
      pos = el.getAttribute('position-md');
    } else if (isMobile && el.hasAttribute('position-sm')) {
      pos = el.getAttribute('position-sm');
    }

    if (pos) {
      const [start, span] = pos.split(' ');
      const [rowStart, colStart] = start.split('-').map(Number);
      const [rowSpan, colSpan] = span.split('x').map(Number);
      el.style.gridArea = `${rowStart} / ${colStart} / span ${rowSpan} / span ${colSpan}`;
    }
  });
}

window.addEventListener('resize', applyGridPositions);
window.addEventListener('load', applyGridPositions);



let localInterval;
let isPlaying = false;
let currentProgress = 0;
let currentDuration = 0;

async function fetchCurrentlyPlaying() {
  try {
    const res = await fetch('https://spotify-s87b.onrender.com/currently-playing');
    const data = await res.json();

    if (!data.isPlaying) {
      isPlaying = false;
      document.getElementById('track-name').textContent = "Not playing";
      document.getElementById('track-img').src = "https://img.icons8.com/?size=96&id=12783&format=png&color=23b5b5";
      document.getElementById('track-progress').style.width = "0%";
      clearInterval(localInterval);
      return;
    }

    if (data.duration !== currentDuration) {
      currentProgress = data.progress;
      currentDuration = data.duration;
    }

    isPlaying = true;

    document.getElementById('track-name').textContent = data.title;
    document.getElementById('track-img').src = data.albumImage;

    const progressPercent = (currentProgress / currentDuration) * 100;
    document.getElementById('track-progress').style.width = progressPercent + "%";

    startLocalProgress();

  } catch (err) {
    console.error("Frontend fetch error:", err);
    document.getElementById('track-name').textContent = "API error";
    document.getElementById('track-progress').style.width = "0%";
  }
}

function startLocalProgress() {
  clearInterval(localInterval);

  localInterval = setInterval(() => {
    if (!isPlaying) return;

    currentProgress += 1000;

    if (currentProgress >= currentDuration) {
      currentProgress = currentDuration;

      const progressPercent = (currentProgress / currentDuration) * 100;
      document.getElementById('track-progress').style.width = progressPercent + "%";

      fetchCurrentlyPlaying();
      return clearInterval(localInterval);
    }

    const progressPercent = (currentProgress / currentDuration) * 100;
    document.getElementById('track-progress').style.width = progressPercent + "%";

  }, 1000);
}

setInterval(fetchCurrentlyPlaying, 20000);
fetchCurrentlyPlaying();
