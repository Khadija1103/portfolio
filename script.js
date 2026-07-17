// Menú responsive (hamburguesa)
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace (móvil)
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// =============================================
// ELEMENTOS
// =============================================
const hero = document.querySelector('.hero');
const contenidoCompleto = document.getElementById('contenido-completo');
const header = document.querySelector('header');
const btnVerMas = document.getElementById('btnVerMas');
const linkInicio = document.getElementById('linkInicio');

// =============================================
// FUNCIONES
// =============================================
function mostrarInicio() {
    // Mostrar hero (restaurando el display original, que es 'grid')
    hero.style.display = 'grid';
    contenidoCompleto.classList.add('hidden');
    header.classList.add('hidden-nav');
    menu.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarContenidoCompleto() {
    // Ocultar hero, mostrar contenido y navbar
    hero.style.display = 'none';
    contenidoCompleto.classList.remove('hidden');
    header.classList.remove('hidden-nav');
    menu.classList.remove('active');
    // Scroll a la primera sección (Sobre mí)
    const primeraSeccion = document.querySelector('#sobre');
    if (primeraSeccion) {
        setTimeout(() => {
            primeraSeccion.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

// =============================================
// EVENTOS
// =============================================
btnVerMas.addEventListener('click', function(e) {
    e.preventDefault();
    mostrarContenidoCompleto();
});

linkInicio.addEventListener('click', function(e) {
    e.preventDefault();
    mostrarInicio();
});