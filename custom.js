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
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showTestimonial(index) {
        // Hide all testimonials and remove active dots
        testimonials.forEach(testi => testi.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Show current testimonial and activate its dot
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Dot click event
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });

    // Auto-rotate testimonials
    function rotateTestimonials() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Initial display
    showTestimonial(0);

    // Auto-rotate every 3 seconds
    setInterval(rotateTestimonials, 3000);
});