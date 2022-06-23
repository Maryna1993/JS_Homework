
jQuery(document).ready(function ($) {

    $(".burger").on("click", function () {

        $(".mobile-menu").slideToggle();

        $(this).toggleClass("active");
    });
});