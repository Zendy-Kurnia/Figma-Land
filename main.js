$(function() {
    //jQuery Code



    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $('header').css({
                height: "81px",
            }).addClass("sticky")
            $('header .logo-center img').attr("src", "res/ilustration/logo-black.jpg")
        } else {
            $('header').css({
                height: "187px",
            }).removeClass("sticky")
            
            
            $('header .logo-center img').attr("src", "res/content-logo-darkLogo.png")
        }

        var scrollTop = $(window).scrollTop()
        var aboutOffset = $('#about').offset().top
        var featuresOffset = $('#features').offset().top
        var pricingOffset = $('#pricing').offset().top
        var contactOffset = $('#contact').offset().top

        if (scrollTop >= aboutOffset) {
            $('.about').addClass("active")
            $('.about').siblings().removeClass("active")   
        } else {
            $('.about').removeClass("active")
        }
        
        if (scrollTop >= featuresOffset) {
            $('.features').addClass("active")
            $('.features').siblings().removeClass("active")   
        }
        
        if (scrollTop >= pricingOffset) {
            $('.pricing').addClass("active")
            $('.pricing').siblings().removeClass("active")   
        }
        
        if (scrollTop >= contactOffset) {
            $('.contact').addClass("active")
            $('.contact').siblings().removeClass("active")   
        }
       
        // var hash = window.location.hash

        // switch (hash) {
        //     case "#hero":
        //         $('.home').toggleClass("active") 
        //         break;
        //     case "#about":
        //         break;
        //     case "#features":
        //         $('.features').toggleClass("active") 
        //         break;
        //     case "#pricing":
        //         $('.pricing').togleClass("active") 
        //         break;
        //     case "#contact":
        //         $('.contact').toggleClass("active") 
        //         break;
        
        //     default:
        //         break;
        // }

    })
 
})