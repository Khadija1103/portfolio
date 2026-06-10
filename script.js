const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {

    if(menu.style.display === "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "70px";
        menu.style.right = "20px";
        menu.style.background = "#081b33";
        menu.style.padding = "20px";
        menu.style.borderRadius = "10px";
    }

});

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        destino.scrollIntoView({
            behavior:'smooth'
        });

        if(window.innerWidth < 768){
            menu.style.display = "none";
        }

    });

});