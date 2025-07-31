document.addEventListener('DOMContentLoaded', function() {
    var card = document.querySelector('.card');

    card.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.details p');

    
    function animateLetters(element) {
        const text = element.textContent;
        element.innerHTML = ''; 

        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.classList.add('letter');
            span.style.animationDelay = `${i * 0.1}s`; 
            element.appendChild(span);
        }
    }
    function animateLetters(element) {
        const text = element.textContent;
        let charIndex = 0;

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            if (text[i] === ' ') {
                
                span.textContent = ' ';
            } 
            element.appendChild(span);
        }
    }

    
    function animateParagraphs(paragraphs, index) {
        if (index < paragraphs.length) {
            animateLetters(paragraphs[index]); 
            setTimeout(() => {
                paragraphs[index].style.opacity = 1; 
                paragraphs[index].classList.add('fadeIn'); 
                animateParagraphs(paragraphs, index + 1); 
            }, paragraphs[index].textContent.length * 100 + 1000); 
        }
    }

    
    animateParagraphs(paragraphs, 0);
});

