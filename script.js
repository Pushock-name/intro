const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        // when window width is >= 376px
        576: {
            slidesPerView: 1,
        }
    },
    speed: 500
})

//карточки

let homeCards = document.querySelectorAll('.home__card__clickable')
homeCards.forEach(card => {
    card.addEventListener('click', () => {
        card.nextElementSibling.classList.toggle('home__card__opener--is-active')
        card.lastElementChild.classList.toggle('home__card__arrow--is-active')
    })
});

let homeCards2 = document.querySelectorAll('.home__card__clickable-2')
homeCards2.forEach(card => {
    card.addEventListener('click', () => {
        card.nextElementSibling.classList.toggle('home__card__opener--is-active-2')
        card.lastElementChild.classList.toggle('home__card__arrow--is-active')
    })
});

//попапы

let rover1Btn = document.querySelector('#rover-1__button')
let rover1Popup = document.querySelector('#rover-1__popup')
let rover1Close = document.querySelector('#rover-1__close__button')
rover1Btn.addEventListener('click', () => {
    rover1Popup.classList.toggle('home__rover__overlay--active')
})
rover1Close.addEventListener('click', () => {
    rover1Popup.classList.remove('home__rover__overlay--active')
})

let goose2Btn = document.querySelector('#goose-2__button')
let goose2Popup = document.querySelector('#goose-2__popup')
let goose2Close = document.querySelector('#goose-2__close__button')
goose2Btn.addEventListener('click', () => {
    goose2Popup.classList.toggle('wow__goose__overlay--active')
})
goose2Close.addEventListener('click', () => {
    goose2Popup.classList.remove('wow__goose__overlay--active')
})


// let goose1Btn = document.querySelector('#goose-1__button')
// let goose1Popup = document.querySelector('#goose-1__popup')
// let goose1Close = document.querySelector('#goose-1__close__button')
// goose1Btn.addEventListener('click', () => {
//     goose1Popup.classList.toggle('home__goose__overlay--active')
// })
// goose1Close.addEventListener('click', () => {
//     goose1Popup.classList.remove('home__goose__overlay--active')
// })

// хэдер

let headerBurger = document.querySelectorAll('.mobile-header__button')
let headerMenu = document.querySelectorAll('.mobile-header__menu')

headerBurger.forEach(burger => {
    burger.addEventListener('click', () => {
        let menu = burger.parentNode.nextElementSibling
        menu.classList.toggle('mobile-header__menu--active')
    })
})