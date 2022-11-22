new Splide( '.splide', {
    pagination: false,
    mediaQuery: "min",
    perPage: 4,
    breakpoints: {
        430: {
            perPage: 6,
        },
        650: {
            perPage: 9,
        },
        1200: {
            perPage: 15,
        },
    }
}).mount();


// Activating drawer
let drawerToggler = document.querySelector('.drawer-toggler')
let drawer = document.querySelector(drawerToggler.href.split('/').pop())

console.log(drawerToggler)

drawerToggler.onclick = function () {
    drawer.classList.toggle('open')
}