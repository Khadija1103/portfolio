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

    hero.style.display = 'grid';
    contenidoCompleto.classList.add('hidden');
    header.classList.add('hidden-nav');
    menu.classList.remove('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}

function mostrarContenidoCompleto() {

    hero.style.display = 'none';
    contenidoCompleto.classList.remove('hidden');
    header.classList.remove('hidden-nav');
    menu.classList.remove('active');

    const primeraSeccion = document.querySelector('#sobre');

    if (primeraSeccion) {

        setTimeout(() => {

            primeraSeccion.scrollIntoView({
                behavior: 'smooth'
            });

        },100);

    }

}

// =============================================
// EVENTOS
// =============================================
btnVerMas.addEventListener('click', function(e){

    e.preventDefault();

    mostrarContenidoCompleto();

});

linkInicio.addEventListener('click', function(e){

    e.preventDefault();

    mostrarInicio();

});


//=================================================
// EXPERIENCIA - EFECTO VIDEOJUEGO
//=================================================

const roadStops = document.querySelectorAll(".road-stop");

let estacionActual = -1;

// Activa una estación
function activarEstacion(indice){

    roadStops.forEach((stop)=>{

        stop.querySelector(".experience-card")
            .classList.remove("active");

        stop.querySelector(".checkpoint")
            .classList.remove("active");

    });

    if(roadStops[indice]){

        roadStops[indice]
            .querySelector(".experience-card")
            .classList.add("active");

        roadStops[indice]
            .querySelector(".checkpoint")
            .classList.add("active");

    }

}

// Detectar cuando cada estación entra en pantalla

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const indice =
                [...roadStops].indexOf(entry.target);

            if(indice!==estacionActual){

                estacionActual=indice;

                activarEstacion(indice);

            }

        }

    });

},{
    threshold:0.6
});

roadStops.forEach((stop)=>{

    observer.observe(stop);

});