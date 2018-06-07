$(document).ready(function() {
    // Initialize UI
    setCopyrightYear();
    // Events 
    $('#smnav').on('click', function() {
        toggleMobileNavIcon();
    });
    $('#top').click(function(event) {
        scrollToPageTop(event);
    });
    /**
     * @desc On hover, expand nav element header for
     *     
     * @author Chris Muench
     * Used in news.htm, solutions.htm, and services.htm
     */
    $(".sub-nav div").hover(function() {
        $(this).find("img").css("transform", "scale(1)");
        $(this).find("div").css("padding", "15% 0");
    }, function() {
        $(this).find("img").css("transform", "scale(1.05)");
        $(this).find("div").css("padding", "8% 0");
    });
    $("#product-head-left").hover(function() {
        $(this).find("img").css("transform", "scale(1)");
        $(this).find("h3").css("margin-top", "8%");
        $(this).find("h3").css("margin-bottom", "2%");
        $(this).find("p").fadeIn(100, 'swing');
    }, function() {
        $(this).find("img").css("transform", "scale(1.05)");
        $(this).find("h3").css("margin-top", "14%");
        $(this).find("h3").css("margin-bottom", "-6%");
        $(this).find("p").fadeOut(100, 'swing');
    });
    $("#product-head-right").hover(function() {
        $(this).find("img").css("transform", "scale(1)");
        $(this).find("h3").css("margin-top", "8%");
        $(this).find("h3").css("margin-bottom", "2%");
        $(this).find("p").fadeIn(100, 'swing');
    }, function() {
        $(this).find("img").css("transform", "scale(1.05)");
        $(this).find("h3").css("margin-top", "14%");
        $(this).find("h3").css("margin-bottom", "-6%");
        $(this).find("p").fadeOut(100, 'swing');
    });
    /** Used in solutions.html */
    $('#readmore01').on('click', function() {
        $('#expand01').slideToggle();
        $(this).fadeOut();
        $('#readless01').fadeIn();
    });
    $('#readless01 a').on('click', function() {
        $('#expand01').slideToggle();
        $('#readless01').fadeOut();
        $('#readmore01').fadeIn();
    });
    $('#readmore02').on('click', function() {
        $('#expand02').slideToggle();
        $(this).fadeOut();
        $('#readless02').fadeIn();
    });
    $('#readless02 a').on('click', function() {
        $('#expand02').slideToggle();
        $('#readless02').fadeOut();
        $('#readmore02').fadeIn();
    });
    $('#readmore03').on('click', function() {
        $('#expand03').slideToggle();
        $(this).fadeOut();
        $('#readless03').fadeIn();
    });
    $('#readless03 a').on('click', function() {
        $('#expand03').slideToggle();
        $('#readless03').fadeOut();
        $('#readmore03').fadeIn();
    });
    /**
     * @desc Scroll Animate1
     * @author Chris Muench
     * Used in products.html and services.htm
     */
    $(".animate-wrap").hover(function() {
        $(this).css("padding", "1.5% 0");
    }, function() {
        $(this).css("padding", "1% 0");
    });
}); /** End Document Ready */
/**
 * @desc Auto-update the copyright to the current
 *       year based on local date and time.
 * @author Elise Hollowed
 */
function setCopyrightYear() {
    var currentYear = new Date().getFullYear();
    var eCurrentYear = document.getElementsByClassName("currentYear");
    for (var i = 0; i < eCurrentYear.length; i++) {
        eCurrentYear[i].textContent = currentYear;
    }
}
/**
 * @desc Toggle open and close the mobile navigation bar.
 * @author Elise Hollowed
 */
function toggleMobileNavIcon() {
    $('#nav-small').slideToggle();
}
/**
 * @desc Scroll Magic used in products.htm, services.htm, and solutions.htm
 * @author Chris Muench
 * @requires TweenMax.js
 */
function initScrollMagic() {
    var controller = new ScrollMagic();
    // build tween
    var tween = TweenMax.to("#animate1", 0.5, {
        bottom: "-80px"
    });
    // build scene
    var scene = new ScrollScene({
        triggerElement: "#trigger1",
        triggerHook: 0.12
    }).setTween(tween).addTo(controller);
}
/**
 * @desc On click, scroll to the top of the page.
 * @param {Event} event On Click Event
 */
function scrollToPageTop(event) {
    event.preventDefault(); // prevents scroll jump
    var duration = 1000; // milliseconds
    $("html, body").animate({
        scrollTop: 0
    }, duration);
}

/**
 * @desc On click, trigger the call to generate a new activation key
 * @author Heidi Valles
 */
//test
function generateKey() {
    document.getElementById("authentication-button").innerHTML = "test";
}

//partially reload activation page
function reloadActivationPage() {
    document.getElementById("authentication-button").innerHTML = "test";
    /** 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML =
          this.responseText;
        }
      };

    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
    */
}