$(document).ready(function () {

    $(window).scroll(function () {

        $(".navbar").addClass("shadow");

        if ($(window).scrollTop() < 10) {

            $(".navbar").removeClass("shadow");
        }
    })

    $("body").niceScroll({
        cursorcolor: "#4039B8",
        cursorwidth: "8px",
        zindex: "99999999",
        cursorborder: "0px",
        horizrailenabled: false
    });

    new WOW().init();


    $(".blog").click(function () {

        window.open("https://walidlt.github.io/my-web-blog/");
    });
    $(".host").click(function () {

        window.open("https://walidlt.github.io/my-gghosting/");
    });
    $(".gimbo").click(function () {

        window.open("https://walidlt.github.io/my-ecom/");
    });

    $(".submit").click(function (e) {

        e.preventDefault();
        window.open("https://www.facebook.com/Walid.l.div");
    });



});

