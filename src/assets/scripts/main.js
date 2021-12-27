function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 150){  
        $('header').addClass("fixed-header");
        // $('.top-section').addClass("ptop-40");
        // $('header').slideDown();
    }
    else{
        $('header').removeClass("fixed-header");
        // $('header').slideDown();
    }
});

// $('').click(function() {
//     if ($('').styles.display === 'none') {
//         $('').styles.display === 'block'
//     } else {
//         $('').styles.display === 'none'
//     }
// })
