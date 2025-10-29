document.addEventListener("DOMContentLoaded", () => {
    const carouselInner = document.querySelector(".carousel-inner");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const indicatorsContainer = document.querySelector(".carousel-indicators");

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    // Create indicators
    for (let i = 0; i < totalItems; i++) {
        const button = document.createElement("button");
        button.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel();
        });
        indicatorsContainer.appendChild(button);
    }

    const indicators = document.querySelectorAll(".carousel-indicators button");

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;

        // Update indicators
        indicators.forEach((button, index) => {
            if (index === currentIndex) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Auto-play
    setInterval(() => {
        nextButton.click();
    }, 3000);

    updateCarousel();
});