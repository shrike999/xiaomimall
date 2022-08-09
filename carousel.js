const buttons = document.querySelectorAll('[data-carousel-button')
let lastClickTime
buttons.forEach(b => {
    b.addEventListener('click', () => {
        lastClickTime = new Date()
        const offset = b.dataset.carouselButton === 'next' ? 1 : -1
        const slides = b
            .closest('[data-carousel]')
            .querySelector('[data-slides]')
        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex >= slides.children.length) newIndex = 0
        if (newIndex < 0) newIndex = slides.children.length - 1

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

setInterval(async () => {
    const slides = document.querySelector('[data-slides]')
    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + 1
    if (newIndex >= slides.children.length) newIndex = 0
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}, 3000)
