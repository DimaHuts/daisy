/**
 * Created by Дима on 08.09.2016.
 */

(function() {
    "use strict";

    //ANIMATION FOR SLIDERS
    $(".wrapper__slider__position").click(function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        $("html,body").animate( {scrollTop: $(href).offset().top}, 2000);
        return false;
    });

    //MOVING BETWEEN MAIN MENU`S ITEMS
    $(".wrapper__main-screen nav ul.nav.navbar-nav > li > a").click(function (e) {
        e.preventDefault();

        $.each($(".wrapper__main-screen nav ul.nav.navbar-nav > li > a"), function() {
            var $this = $(this);
            if ( $this.hasClass("active-link") ) {
                $this.removeClass("active-link");
            }
        });

        $(this).addClass("active-link");
    })

})
();
