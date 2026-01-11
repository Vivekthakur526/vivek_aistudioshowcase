function filterVideos(category) {
    const cards = document.querySelectorAll('.video-card');
    const buttons = document.querySelectorAll('.btn');

    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

   
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block'; 
            setTimeout(() => card.style.opacity = '1', 50); 
        } else {
            card.style.display = 'none'; 
            card.style.opacity = '0';
        }
    });
}