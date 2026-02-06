// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Formulario
const form = document.getElementById("contactForm");
if (form) {
  const msg = document.getElementById("formMsg");
  form.addEventListener("submit", e => {
    e.preventDefault();
    msg.textContent = "Mensaje enviado correctamente.";
    form.reset();
  });
}

// Slider de imágenes con animación de desvanecido
let currentImageIndex = 0;
const images = ['img/1.jpg', 'img/2.jpg'];

function updateImage() {
  const img = document.getElementById('sliderImage');
  img.style.opacity = 0; // Desvanecer
  setTimeout(() => {
    img.src = images[currentImageIndex];
    img.style.opacity = 1; // Aparecer
  }, 250); // Medio segundo para el desvanecido
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
}

updateImage();

// ... El resto del JS igual ...

// Asegurar que el burger abra el menú al hacer clic
const burger = document.querySelector(".burger");
const menuToggle = document.getElementById("menu-toggle");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  menuToggle.checked = !menuToggle.checked;
});

// Cerrar menú móvil al hacer click en un enlace o fuera del menú
const navMenu = document.querySelector(".nav-menu");

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
  });
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
    menuToggle.checked = false;
  }
});

// ... El resto del JS igual ...

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
    menuToggle.checked = false;
  }
});

// Expandir tarjetas al hacer click
document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    card.classList.toggle('expanded');
    btn.textContent = card.classList.contains('expanded') ? 'Leer menos' : 'Leer más';
  });
});

// Mostrar/ocultar info extra en tarjetas de opinión al click (móvil)
document.querySelectorAll('.card.expandable').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});