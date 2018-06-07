$(document).ready(function () {
	/**
	 * @author Chris Muench
	 */
    var duration = 760; // milliseconds
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this).offset().top - 0
        }, duration);
    });
	/**
	 * @desc Main Slide
	 * @author Chris Muench
	 * @requires jQuery 2.x, mostslider.js
	 */
    var slider = $("#slider").mostSlider({
        aniMethod: 'auto',
        animation: "slide",
        aniSpeed: 800,
        pauseTime: 9000,
        navigation: true,
        responsive_images: true,
        contentClass: "content",
        sbsContent: true,
        contentAniDelay: 300,
        autoPlay: true
    });
	/**
	 * @desc Frost Slider
	 * @author Chris Muench
	 * @requires jquery.bxslider.js
	 */
    $('.bxslider').bxSlider({
        mode: 'vertical',
        auto: true,
        pager: false,
        controls: false,
        autoHover: true,
        responsive: true,
        touchEnabled: false
    });
	/**
	 * @author Chris Muench
	 */
    $(".overall-pic").hover(function () {
        $(this).find(".overall-pic-desc").css("padding", "10% 0");
        $(this).find("img").css("transform", "scale(1)");
    }, function () {
        $(this).find(".overall-pic-desc").css("padding", "6% 0");
        $(this).find("img").css("transform", "scale(1.05)");
    });
}); /** End Document Ready */
/**
 * @desc Pallarax Factory
 * @author Chris Muench
 */
(function () {
    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.12;
    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {
            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + windowYOffset * speed - 280 + "px";
            el.style.backgroundPosition = elBackgrounPos;
        });
    };
})();