
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtn = document.getElementById('category-btn');
    const categoryMenu = document.getElementById('category-menu');

    categoryBtn.addEventListener('click', function() {
        categoryMenu.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#category-btn') && categoryMenu.classList.contains('show')) {
            categoryMenu.classList.remove('show');
        }
    });
});
