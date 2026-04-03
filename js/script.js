
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbar = document.querySelector('.bg-top2');

    toggleButton.addEventListener('click', function() {
        if (navbar.classList.contains('expanded')) {
            navbar.classList.remove('expanded');
            navbar.style.height = '0';
        } else {
            navbar.classList.add('expanded');
            navbar.style.height = 'auto'; // or set to a specific height
        }
    });
});

var pr_width = $('.primg').width();
$('.pr-img').css('width', pr_width);

var brand_width = $('.brand-img').width();
$('.brand-item').css('width', brand_width);