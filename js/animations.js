// Scroll reveal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navbar animation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.add('nav-link');
    });

    // Initialize skill bars with animation
    const skillBars = document.querySelectorAll('.bg-purple-500');
    skillBars.forEach(bar => {
        const width = bar.style.width || bar.classList.contains('w-[80%]') ? '80%' : 
                     bar.classList.contains('w-[75%]') ? '75%' : 
                     bar.classList.contains('w-[70%]') ? '70%' : 
                     bar.classList.contains('w-[65%]') ? '65%' : 
                     bar.classList.contains('w-[60%]') ? '60%' : 
                     bar.classList.contains('w-[50%]') ? '50%' : '0%';
        
        bar.style.width = '0';
        bar.style.setProperty('--skill-percent', width);
        setTimeout(() => {
            bar.classList.add('animate-skillBar');
        }, 300);
    });

    // Scroll reveal effect
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-bottom');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);

    // Add hover effects to cards and sections
    const cards = document.querySelectorAll('.border-2, .max-w-sm, .section');
    cards.forEach(card => {
        card.classList.add('hover-lift');
    });

    // Add pulse animation to important elements
    const importantElements = document.querySelectorAll('h1.text-4xl, h1.text-2xl.font-bold');
    importantElements.forEach((element, index) => {
        element.classList.add('animate-fadeIn');
        element.style.animationDelay = `${index * 100}ms`;
    });
});