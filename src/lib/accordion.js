document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const title = accordion.querySelector('.accordion-title');
        const box = accordion.querySelector('.accordion-box');
        
        title.addEventListener('click', () => {
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion) {
                    const otherBox = otherAccordion.querySelector('.accordion-box');
                    const otherTitle = otherAccordion.querySelector('.accordion-title');
                    otherBox.classList.remove('is-open');
                    otherBox.style.display = 'none';
                    otherTitle.classList.remove('is-open'); 
                }
            });
            
            const isOpen = box.classList.contains('is-open');
            
            if (isOpen) {
                box.classList.remove('is-open');
                title.classList.remove('is-open');
                box.style.display = 'none';
            } else {
                box.classList.add('is-open');
                title.classList.add('is-open');
                box.style.display = 'block';
            }
        });
    });
}); 