var Gallery = {
    listImages: document.querySelectorAll('#gallery ul li img'),
    img: null,
    container: document.querySelector("body"),
    lightbox: null,
    modal: null,
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
        Gallery.img = img.target;
        Gallery.container.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");

        Gallery.lightbox = document.querySelector("#lightbox");
        Gallery.lightbox.style.width = "100%";
        Gallery.lightbox.style.height = "100%";
        Gallery.lightbox.style.position = "fixed";
        Gallery.lightbox.style.zIndex = "10";
        Gallery.lightbox.style.background = "rgba(0, 0, 0, .9)";
        Gallery.lightbox.style.top = 0;
        Gallery.lightbox.style.left = 0;
        Gallery.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");

        Gallery.modal = document.querySelector("#modal");
        Gallery.modal.innerHTML = Gallery.img.outerHTML+"<div>x</div>";
        Gallery.modal.style.display = "block";
        Gallery.modal.style.position = "relative";
        Gallery.modal.childNodes[0].style.width = "100%";
        console.log('childNodes', Gallery.modal.childNodes);

        if (window.matchMedia("(max-width:1000px)").matches) {
            Gallery.modal.style.width = "90%";
        } else {
            Gallery.modal.style.width = "60%";
        }

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

        console.log('Gallery.modal.childNodes[0]', Gallery.modal.childNodes[0]);
        console.log('Gallery.modal.childNodes[1]', Gallery.modal.childNodes[1]);
        Gallery.modal.childNodes[1].style.position ="absolute";
        Gallery.modal.childNodes[1].style.right ="-15px";
        Gallery.modal.childNodes[1].style.top ="-15px";
        Gallery.modal.childNodes[1].style.color ="black";
        Gallery.modal.childNodes[1].style.cursor ="pointer";
        Gallery.modal.childNodes[1].style.fontSize ="18px";
        Gallery.modal.childNodes[1].style.width ="30px";
        Gallery.modal.childNodes[1].style.height ="30px";
        Gallery.modal.childNodes[1].style.textAlign ="center";
        Gallery.modal.childNodes[1].style.background ="white";
        Gallery.modal.childNodes[1].style.borderRadius ="50%";

        Gallery.modal.childNodes[1].addEventListener("click", Gallery.closeLightbox)
    },
    closeLightbox: function () {
        console.log(Gallery.lightbox);
        Gallery.lightbox.parentNode.removeChild(Gallery.lightbox);
    }
};

Gallery.init();