"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow')
    if(menuArrows.length > 0){
        for (let i=0; i < menuArrows.length; i++){
            const menuArrow = menuArrows[i];
            menuArrow.addEventListener("click", function (e){
                menuArrow.parentElement.classList.toggle('_active')
            })
        }
    }

    let menuArrows2 = document.querySelectorAll('.arrow_2')
    if(menuArrows2.length > 0){
        for (let y=0; y < menuArrows2.length; y++){
            const menuArrow2 = menuArrows2[y];
            menuArrow2.addEventListener("click", function (e){
                menuArrow2.parentElement.classList.toggle('_active')
            })
        }
    }

} else {
    document.body.classList.add('_pc');

}

const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
if (iconMenu){
    iconMenu.addEventListener("click", function (e){
        // document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}


