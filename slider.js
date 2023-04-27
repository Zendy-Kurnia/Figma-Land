const indexButton = document.querySelectorAll('.index-poin')
const testimonials = document.querySelectorAll('.testimoni')
const next = document.querySelector('button.testimoni-next')
const prev = document.querySelector('button.testimoni-prev')
var i = indexButton.length
var a = 0 // used in slide Interval

// Index Button Functionality 
indexButton.forEach(btn => {
    btn.addEventListener('click', () => {
        indexButton.forEach(e => {
            e.classList.remove('active')
        });
        btn.classList.add('active')
        clearInterval(slide)
        checkButtonActive()
    })
});

// button next and prev functionality
next.addEventListener('click', () => {
    clearInterval(slide)
    var activeBtn = document.querySelector('.index-poin.active') 
    Array.from(indexButton).indexOf(activeBtn) < i - 1 ? activeBtn.nextElementSibling.classList.add('active') : indexButton[0].classList.add('active')
    activeBtn.classList.remove('active')
    checkButtonActive()
})
prev.addEventListener('click', () => {
    clearInterval(slide)
    var activeBtn = document.querySelector('.index-poin.active') 
    Array.from(indexButton).indexOf(activeBtn) > 0 ? activeBtn.previousElementSibling.classList.add('active') : indexButton[i-1].classList.add('active')
    activeBtn.classList.remove('active')
    checkButtonActive()
})

// Animation slide testimonials every 3s
var slide = setInterval(() => {
    indexButton[a].classList.remove('active')
    a++;  a < i ? a = a : a = 0
    indexButton[a].classList.add('active')
    checkButtonActive()
}, 3000);


function checkButtonActive() {
    if (indexButton[0].classList.contains('active')) {
        testimonials.forEach(el => {
            el.style.transform = "translateX(0)"
        });
    }
    else if (indexButton[1].classList.contains('active')) {
        testimonials.forEach(el => {
            el.style.transform = "translateX(-100%)"
        });
        
    }
    else if (indexButton[2].classList.contains('active')) {
        testimonials.forEach(el => {
            el.style.transform = "translateX(-200%)"
        });
    }
}
