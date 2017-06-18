$(document).ready(function () {
    $('nav > ul > li').hover(
        function () {
            var hidden = $(this).children('.hidden');

            hidden.children().stop(true);

            hidden.show();
            hidden.children().filter(':even').animate({ marginLeft: -15 }, 200);
            hidden.children().filter(':odd').animate({ marginLeft: 15 }, 200);
        },
        function () {
            var hidden = $(this).children('.hidden');

            hidden.hide();
            hidden.children().filter(':even').animate({ marginLeft: 0 }, 200);
            hidden.children().filter(':odd').animate({ marginLeft: 0 }, 200);
        });
});