/**
 * nav show hide
 */
(function(){
    var btn = $('.nav-toggle');
    var nav = $('.header-nav');

    btn.on('click', function(){
        console.log('click');
        if ( nav.css('display') === 'block' ) {
            nav.slideUp();
        } else {
            nav.slideDown();
        }
    })
})();