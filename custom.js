const networks = [
    { id: 1, country: "Brazil", code: "BR" },
    { id: 2, country: "Egypt", code: "EG" },
    { id: 3, country: "India", code: "IN" },
    { id: 4, country: "Iraq", code: "IQ" },
    { id: 5, country: "Jamaica", code: "JM" },
    { id: 6, country: "Jordan", code: "JO" },
    { id: 7, country: "Kazakhstan", code: "KZ" },
    { id: 8, country: "Kenya", code: "KE" },
    { id: 9, country: "Kuwait", code: "KW" },
    { id: 10, country: "Libya", code: "LY" },
    { id: 11, country: "Mexico", code: "MX" },
    { id: 12, country: "Morocco", code: "MA" },
    { id: 13, country: "Nepal", code: "NP" },
    { id: 14, country: "Oman", code: "OM" },
    { id: 15, country: "Poland", code: "PL" },
    { id: 16, country: "Russia", code: "RU" },
    { id: 17, country: "Saudi Arabia", code: "SA" },
    { id: 18, country: "South Africa", code: "ZA" },
    { id: 19, country: "Sri Lanka", code: "LK" },
    { id: 20, country: "Taiwan", code: "TW" },
    { id: 21, country: "Tanzania", code: "TZ" },
    { id: 22, country: "Thailand", code: "TH" },
    { id: 23, country: "UAE", code: "AE" },
    { id: 24, country: "Uganda", code: "UG" },
    { id: 25, country: "UK", code: "GB" },
    { id: 26, country: "USA", code: "US" },
    { id: 27, country: "Vietnam", code: "VN" }
];

const networkGrid = document.getElementById("networkGrid");

networks.forEach(network => {
    const div = document.createElement("div");
    div.classList.add("network");
    
    div.innerHTML = `
        <div class="flag">
            <img src="https://flagcdn.com/w160/${network.code.toLowerCase()}.png" alt="${network.country} flag">
        </div>
        <span class="country">${network.country}</span>
    `;
    
    networkGrid.appendChild(div);
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.testimonial-container');
    const wrapper = container.querySelector('.testimonial-wrapper');
    const testimonials = container.querySelectorAll('.testimonial');
    const dots = container.querySelectorAll('.dot');
    
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
    let startScrollLeft = 0;

    // Update active testimonial and dots
    function updateActiveTestimonial(index) {
        // Reset active states
        testimonials.forEach(testi => testi.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Set new active states
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateActiveTestimonial(currentIndex);
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    });

    // Drag functionality
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - wrapper.offsetLeft;
        startScrollLeft = wrapper.scrollLeft;
        container.style.cursor = 'grabbing';
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        e.preventDefault();
        const x = e.pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 to increase drag sensitivity
        
        // Determine direction and next index
        if (walk < -50 && currentIndex < testimonials.length - 1) {
            currentIndex++;
        } else if (walk > 50 && currentIndex > 0) {
            currentIndex--;
        }

        // Update active testimonial and transform
        updateActiveTestimonial(currentIndex);
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    // Auto-rotate testimonials
    function rotateTestimonials() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateActiveTestimonial(currentIndex);
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Initial setup
    updateActiveTestimonial(0);

    // Auto-rotate every 3 seconds
    setInterval(rotateTestimonials, 5000);
});