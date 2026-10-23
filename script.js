// Cambia el nombre aquí para personalizar la experiencia.
const nombreEspecial = "Milena"; 
const nombreRemitente = "Daniel"; 

const screens = [...document.querySelectorAll(".screen")];
const particles = document.getElementById("particles");
const petals = document.getElementById("petals");
const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const musicIcon = document.getElementById("musicIcon");
let musicStarted = false;

function goToScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (id === "pregunta") {
    startPetals();
    burstParticles(20);
  }
}
document.querySelector(".brand").addEventListener("click", event => {
  event.preventDefault();
  goToScreen("inicio");
});
document.getElementById("startJourney").addEventListener("click", () => {
  goToScreen("jardin");
  startMusic();
  burstParticles(16);
});
document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => {
    goToScreen(button.dataset.next);
    burstParticles(12);
  });
});

function updateMusicButton(playing) {
  musicIcon.textContent = playing ? "♫" : "♪";
  musicLabel.textContent = playing ? "Pausar música" : "Activar música";
}
async function startMusic() {
  if (musicStarted && !music.paused) return;
  try {
    await music.play();
    musicStarted = true;
    updateMusicButton(true);
  } catch (error) {
    updateMusicButton(false);
    musicLabel.textContent = "Añade tu MP3";
  }
}
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    await startMusic();
  } else {
    music.pause();
    updateMusicButton(false);
  }
});
music.addEventListener("play", () => updateMusicButton(true));
music.addEventListener("pause", () => updateMusicButton(false));
music.addEventListener("error", () => {
  musicLabel.textContent = "Añade tu MP3";
});

// Galería interactiva. Las fotos ya están guardadas en /fotos y se publican con GitHub Pages.
const recuerdos = [
  { src: "fotos/cascada.jpeg", alt: "Nosotros frente a una cascada iluminada por la noche", title: "Nuestra aventura 🌹" },
  { src: "fotos/espejo.jpeg", alt: "Fotografía juntos frente a un espejo", title: "Un reflejo de nosotros ✨" },
  { src: "fotos/selfie.jpeg", alt: "Una selfie juntos", title: "Momentos que guardo 💛" }
];
const lightbox = document.getElementById("photoLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightboxBtn = document.getElementById("closeLightbox");
let currentPhoto = 0;
let lastPhotoButton = null;

function showPhoto(index) {
  currentPhoto = (index + recuerdos.length) % recuerdos.length;
  const photo = recuerdos[currentPhoto];
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt;
  lightboxCaption.textContent = photo.title;
}
function openPhoto(index, trigger) {
  lastPhotoButton = trigger;
  showPhoto(index);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  closeLightboxBtn.focus();
}
function closePhoto() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  if (lastPhotoButton) lastPhotoButton.focus();
}
document.querySelectorAll(".memory-card[data-photo]").forEach(card => {
  card.addEventListener("click", () => openPhoto(Number(card.dataset.photo), card));
});
closeLightboxBtn.addEventListener("click", closePhoto);
document.getElementById("prevPhoto").addEventListener("click", () => showPhoto(currentPhoto - 1));
document.getElementById("nextPhoto").addEventListener("click", () => showPhoto(currentPhoto + 1));
lightbox.addEventListener("click", event => { if (event.target === lightbox) closePhoto(); });
document.addEventListener("keydown", event => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closePhoto();
  if (event.key === "ArrowRight") showPhoto(currentPhoto + 1);
  if (event.key === "ArrowLeft") showPhoto(currentPhoto - 1);
});

function createParticle(symbol, container = particles) {
  const node = document.createElement("span");
  node.className = "particle";
  node.textContent = symbol;
  node.style.left = `${Math.random() * 100}%`;
  node.style.fontSize = `${12 + Math.random() * 18}px`;
  node.style.animationDuration = `${5 + Math.random() * 6}s`;
  container.appendChild(node);
  setTimeout(() => node.remove(), 11500);
}
const particleSymbols = ["✦", "✧", "·", "♡", "🌼", "✨"];
setInterval(() => createParticle(particleSymbols[Math.floor(Math.random() * particleSymbols.length)]), 800);

function burstParticles(count = 25) {
  const symbols = ["💛", "💙", "🌻", "✨", "♡", "✦"];
  for (let i = 0; i < count; i++) {
    setTimeout(() => createParticle(symbols[Math.floor(Math.random() * symbols.length)]), i * 45);
  }
}
let petalTimer;
function startPetals() {
  if (petalTimer) return;
  petalTimer = setInterval(() => {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = ["🌻", "🌼", "✨", "💛"][Math.floor(Math.random() * 4)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.fontSize = `${14 + Math.random() * 22}px`;
    petal.style.animationDuration = `${6 + Math.random() * 6}s`;
    petals.appendChild(petal);
    setTimeout(() => petal.remove(), 12500);
  }, 550);
}

const yesButton = document.getElementById("yesButton");
const thinkButton = document.getElementById("thinkButton");
const answerMessage = document.getElementById("answerMessage");

yesButton.addEventListener("click", () => {
  const greeting = nombreEspecial.trim() ? `, ${nombreEspecial.trim()}` : "";
  answerMessage.textContent = `💙 ¡Qué alegría${greeting}! Que esta sea una historia bonita, sincera y llena de respeto. 🌻`;
  document.body.classList.add("celebrating");
  burstParticles(70);
  setTimeout(() => {
    goToScreen("celebration");
    burstParticles(45);
    startPetals();
  }, 1100);
});
thinkButton.addEventListener("click", () => {
  answerMessage.textContent = "💙 Claro que sí. Tómate el tiempo que necesites; lo importante es que te sientas cómoda y que tu respuesta sea sincera. Gracias por escucharme. 🌻";
  burstParticles(10);
});

document.getElementById("replayButton").addEventListener("click", () => {
  document.body.classList.remove("celebrating");
  answerMessage.textContent = "";
  goToScreen("inicio");
  burstParticles(18);
});

// Personalización del texto de bienvenida y firma.
if (nombreEspecial.trim()) {
  document.querySelector(".hero-copy").textContent =
    `Preparé este pequeño rincón del universo pensando en ti, ${nombreEspecial.trim()}. Tómate tu tiempo, respira y acompáñame hasta el final. 💙`;
  document.querySelector(".question-card h3").textContent =
    `¿Quieres ser mi novia, ${nombreEspecial.trim()}? 💙`;
}
if (nombreRemitente.trim()) {
  document.querySelector(".letter-signature span").textContent =
    `con cariño, ${nombreRemitente.trim()} 💙`;
  document.querySelector(".brand").textContent = `✦ para ${nombreEspecial.trim() || "alguien especial"}`;
}

// Si se pulsa Enter/Espacio en el botón principal, el comportamiento nativo ya lo gestiona.
updateMusicButton(false);
