$('.mobile-btn').on('mouseover', function () {
    $('.mobile-btn').toggleClass('show');
    $('.menu').toggleClass('show-menu');
});

$('.menu-list-item a').on('click', function () {
   $('.menu').removeClass('show-menu');
   $('.mobile-btn').removeClass('show');
});



