<script>
        // Carousel functionality
        let currentIndex = 0;
        const slides = document.querySelectorAll('.carousel-inner img');
        const indicators = document.querySelectorAll('.carousel-indicators div');

        function updateCarousel() {
            document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
            indicators.forEach((ind, i) => {
                ind.classList.toggle('active', i === currentIndex);
            });
</script>