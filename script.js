const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')


//? autoplay slider

let runAutoPlay = setTimeout(() => {
   next.click() 
}, 5000);


next.addEventListener('click', () => {
    initSlider('next')
})

prev.addEventListener('click', () => {
    initSlider('prev')
 })

const initSlider = (type) => {
    const sliderItems = list.querySelectorAll('.item')
    const thumbnailItems = thumbnail.querySelectorAll('.item')

    if(type == 'next') {
        list.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add(type)
    } else if('prev') {
        const lastItemPosition = sliderItems.length - 1
        list.prepend(sliderItems[lastItemPosition])
        thumbnail.prepend(thumbnailItems[lastItemPosition])
        slider.classList.add(type)
    }
    setTimeout(() => {
        slider.classList.remove(type)
    }, 2000);

    clearTimeout(runAutoPlay)

    runAutoPlay = setTimeout(() => {
        next.click() 
     }, 5000);

}

