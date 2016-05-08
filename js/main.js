$(document).ready(function(){
    $window = $(window);

    $('[data-type="background"]').each(function(){
        var $scroll = $(this);

        $(window).scroll(function() {
            var yPos = 50 + ($window.scrollTop() / $scroll.data('speed') / 10);
            var coords = '50% '+ yPos + '%';

            $scroll.css({ backgroundPosition: coords });
        });
    });
});