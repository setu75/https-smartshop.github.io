// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("E-commerce website script loaded.");

    // Hero slider functionality
    const slides = document.querySelectorAll('.hero-background .slide'); // Changed selector to be more specific
    const prevBtn = document.querySelector('.slide-nav.prev');
    const nextBtn = document.querySelector('.slide-nav.next');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 3000; // 3 seconds as requested

    // Initialize slider
    function initSlider() {
        if (slides.length === 0) return;

        // Ensure only the first slide is active initially
        slides.forEach((slide, index) => {
            if (index === 0) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        startSlideTimer();
    }

    // Go to specific slide with fade effect
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
        resetSlideTimer();
    }

    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
        resetSlideTimer();
    }

    // Start slide timer
    function startSlideTimer() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Reset slide timer
    function resetSlideTimer() {
        clearInterval(slideInterval);
        startSlideTimer();
    }

    // Event listeners for hero navigation
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Initialize the slider
    initSlider(); //

    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        heroSection.addEventListener('mouseleave', () => {
            startSlideTimer();
        });
    }

    // Example: Handle "Add to Cart" button clicks (placeholder)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior if it's an <a> tag
            const productName = this.dataset.productName || 'Selected Product';
            const productId = this.dataset.productId || '0';
            alert(`"${productName}" (ID: ${productId}) added to cart! (This is a placeholder)`);
            // In a real app, you'd add to a cart object, update UI, and maybe send to server.
        });
    });

    // Example: Handle checkout form submission (placeholder)
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Order placed successfully! (This is a placeholder - no actual order processed)');
            // In a real app, you'd collect form data, validate, and send to a server for processing.
            window.location.href = 'index.html'; // Redirect to homepage after "fake" order
        });
    }

     // Example: Handle contact form submission (placeholder)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('contactName').value;
            alert(`Thank you for your message, ${name}! (This is a placeholder)`);
            contactForm.reset();
            // In a real app, you would send this data to a server or email service.
        });
    }
});