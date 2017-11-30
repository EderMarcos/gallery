var Gallery = {
    /**
     * Atributos
     * */
    listImages: document.querySelectorAll('#gallery ul li img'),
    container: document.querySelector("body"),
    img: null,
    lightbox: null,
    modal: null,
    /**
     * Se puede modificar el tipo de animacion (slideLeft, slideTop, fade)
     * */
    animation: "fade",


    init: function () {
        /**
         * Se asigan el evento clic a cada imagen
         * */
        for (var i = 0; i < Gallery.listImages.length; i++) {
            /**
             * Cuando se hace clic a una imagen, se inicia el Lighbox
             * */
            Gallery.listImages[i].addEventListener('click', Gallery.initLightbox)
        }
    },
    initLightbox: function (img) {
        /**
         * Se obtiene el elemento img
         * */
        Gallery.img = img.target;
        /**
         * Se crea un div para el lightbox y se agrega al body
         * */
        Gallery.container.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
        /**
         * Busca y obtiene el elemento recien creado
         * */
        Gallery.lightbox = document.querySelector("#lightbox");
        /**
         * Se le agrega otro div(Modal) al lightbox
         * */
        Gallery.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
        /**
         * Busca y obtiene el elemento recien creado
         * */
        Gallery.modal = document.querySelector("#modal");
        /**
         * Se agrega el elemento img y un div que sera el boton de cerrar al div Modal
         * */
        Gallery.modal.innerHTML = Gallery.img.outerHTML+"<div>x</div>";
        Gallery.modal.childNodes[0].style.width = "100%";

        /**
         * Validacion de tamaño de la pantalla
         * */
        if (window.matchMedia("(max-width:1000px)").matches) {
            Gallery.modal.style.width = "90%";
        } else {
            Gallery.modal.style.width = "60%";
        }

        /**
         * Animacion 1
         * */
        if (Gallery.animation === "slideLeft") {
            Gallery.modal.style.top = "50%";
            Gallery.modal.style.left = 0;
            Gallery.modal.style.opacity = 0;

            setTimeout(function() {
                Gallery.modal.style.transition = ".5s left ease";
                Gallery.modal.style.left = "50%";
                Gallery.modal.style.opacity = 1;
                Gallery.modal.style.marginLeft = -Gallery.modal.childNodes[0].width/2 +"px";
                Gallery.modal.style.marginTop = -Gallery.modal.childNodes[0].height/2 +"px";
            }, 50)
        }

        /**
         * Animacion 2
         * */
        if (Gallery.animation === "slideTop") {
            Gallery.modal.style.top = "-100%";
            Gallery.modal.style.left = "50%";
            Gallery.modal.style.opacity = 0;

            setTimeout(function() {
                Gallery.modal.style.transition = ".5s top ease";
                Gallery.modal.style.top = "50%";
                Gallery.modal.style.opacity = 1;
                Gallery.modal.style.marginLeft = -Gallery.modal.childNodes[0].width/2 +"px";
                Gallery.modal.style.marginTop = -Gallery.modal.childNodes[0].height/2 +"px";
            }, 50)
        }

        /**
         * Animacion 3
         * */
        if (Gallery.animation === "fade") {
            Gallery.modal.style.top = "50%";
            Gallery.modal.style.left = "50%";
            Gallery.modal.style.opacity = 0;

            setTimeout(function() {
                Gallery.modal.style.transition = ".5s opacity ease";
                Gallery.modal.style.opacity = 1;
                Gallery.modal.style.marginLeft = -Gallery.modal.childNodes[0].width/2 +"px";
                Gallery.modal.style.marginTop = -Gallery.modal.childNodes[0].height/2 +"px";
            }, 50)
        }

        /**
         * Se agrega estilos al boton de cerrar
         * Se agrega el evento clic al boton cerrar
         * */
        Gallery.modal.childNodes[1].className ="btnClose";
        Gallery.modal.childNodes[1].addEventListener("click", Gallery.closeLightbox)
    },
    closeLightbox: function () {
        /**
         * Elimina el lightbox del body
         * */
        Gallery.lightbox.parentNode.removeChild(Gallery.lightbox);
    }
};

Gallery.init();