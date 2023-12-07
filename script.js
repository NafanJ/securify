
const submitBtn = document.querySelector('.submit-btn'),
    cardContainer = document.querySelector('.card-container'),
    outroOverlay = document.querySelector('.outro-overlay')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (true) {
        cardContainer.style.display = 'none'
        outroOverlay.classList.remove('disabled')
    }
    else {
        for (let i = 0; i < errorDisplayers.length; i++) {
            errorDisplayers[i].textContent = '*This field is Required'
        }
    }
})