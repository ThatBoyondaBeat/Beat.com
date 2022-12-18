const openPopUp = document.querySelector('.store');
const closePopUp = document.querySelector('.close');
const popUp = document.querySelector('.block-window');
const html = document.querySelector('html')


openPopUp.addEventListener('click', (e)=> {
    popUp.classList.add('active')
})

closePopUp.addEventListener('click', (e)=> {
    popUp.classList.remove('active')
})

const openPopUp1 = document.querySelector('.beats');
const closePopUp1 = document.querySelector('.close1');
const popUp1 = document.querySelector('.block-beats');
const html1 = document.querySelector('html1')


openPopUp1.addEventListener('click', (e)=> {
    popUp1.classList.add('active1')
})

closePopUp1.addEventListener('click', (e)=> {
    popUp1.classList.remove('active1')
})