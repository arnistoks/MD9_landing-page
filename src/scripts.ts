const toastButtonEl = document.querySelector('.js-watch__button')
const toastEl = document.querySelector('.js-toast')

toastButtonEl.addEventListener('click', () => {
    toastEl.classList.toggle('hidden')
})

const imageEl1 = document.querySelectorAll('.js-image__box1');
const imageEl2 = document.querySelectorAll('.js-image__box2');
const imageEl3 = document.querySelectorAll('.js-image__box3');
const nextEl = document.querySelector('.js-next__button');
const prevEl = document.querySelector('.js-prev__button');

let activeIndex1 = 0;

nextEl.addEventListener('click', () => {
    imageEl1.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex1 === imageEl1.length -1) {
        activeIndex1 = 0
    } else {
        activeIndex1 = activeIndex1 + 1
    }

    imageEl1[activeIndex1].classList.add('active')
})

prevEl.addEventListener('click', () => {
    imageEl1.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex1 === 0) {
        activeIndex1 = imageEl1.length - 1
    } else {
        activeIndex1 = activeIndex1 - 1
    }

    imageEl1[activeIndex1].classList.add('active')
})

let activeIndex2 = 0;

nextEl.addEventListener('click', () => {
    imageEl2.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex2 === imageEl2.length -1) {
        activeIndex2 = 0
    } else {
        activeIndex2 = activeIndex2 + 1
    }

    imageEl2[activeIndex2].classList.add('active')
})

prevEl.addEventListener('click', () => {
    imageEl2.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex2 === 0) {
        activeIndex2 = imageEl2.length - 1
    } else {
        activeIndex2 = activeIndex2 - 1
    }

    imageEl2[activeIndex2].classList.add('active')
})

let activeIndex3 = 0;

nextEl.addEventListener('click', () => {
    imageEl3.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex3 === imageEl3.length -1) {
        activeIndex3 = 0
    } else {
        activeIndex3 = activeIndex3 + 1
    }

    imageEl3[activeIndex3].classList.add('active')
})

prevEl.addEventListener('click', () => {
    imageEl3.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex3 === 0) {
        activeIndex3 = imageEl3.length - 1
    } else {
        activeIndex3 = activeIndex3 - 1
    }

    imageEl3[activeIndex3].classList.add('active')
})

const comentInputEl = document.querySelector<HTMLInputElement>('.js-coment-input')
const comentButtonEl = document.querySelector('.js-coment-button')
const comentListEl = document.querySelector('.js-coment-list')

comentButtonEl.addEventListener('click', () => {
    const inputValue = comentInputEl.value;
    const lListEl = document.createElement('li');

    lListEl.innerText = inputValue;

    comentListEl.append(lListEl)
})

const emailInputEl = document.querySelector<HTMLInputElement>('.js-email-input')
const subscribeButtonEl = document.querySelector('.js-subscribe-button')
const subscribeListEl = document.querySelector('.js-email-list')
const footerEl = document.querySelector<HTMLSelectElement>('.js-footer')

subscribeButtonEl.addEventListener('click', () => {
    const inputValue = emailInputEl.value;
    const subscribelListEl = document.createElement('li');

    subscribelListEl.innerText = inputValue;

    subscribeListEl.append(subscribelListEl)

})

emailInputEl.addEventListener('input', () => {
    const color = ['green', 'grey', 'orange', 'pink', 'purple'];
    footerEl.style.backgroundColor = color[color.length * Math.random() | 0];
})