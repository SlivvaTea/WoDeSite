const slides = document.querySelectorAll('.card');

for (const card of slides){
    card.addEventListener('click', () => {
        clearActiveClasses();
    card.classList.add('active');   
    }) //
}

function clearActiveClasses(){
    slides.forEach((card) => {
        card.classList.remove('active')
    })
}