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
                height: "var(--header-height)",
            }).removeClass("sticky")
            
            
            $('header .logo-center img').attr("src", "res/content-logo-darkLogo.png")
        }

        var scrollTop = $(window).scrollTop() + 1
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

        // Load Mail js only if needed (If user scroll down to Contact section)
        // It because the script fully impact on loading performance
        var contactOffset = $("#contact").offset().top 
    
        if (scrollTop >= contactOffset) {
            if ($('script[src="contact-form.js"]').length == 0) {
                var el = document.createElement("script")
                el.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
                document.body.appendChild(el)
                
                var el2 = document.createElement("script")
                el2.src = "contact-form.js"
                document.body.appendChild(el2)
            }
        }
       
    })
    
    // Showing mobile menu
    // hide mobile menu if user click inside mobile menu
    // Click overlay to hide mobile-menu  
    // Disable scrolling if mobile menu is being shown
    // Rotate mobile button 180deg if mobile menu is being shown
    
    $('.mobile-button, #mobile-menu, .overlay').click(function () {
        $('#mobile-menu').toggleClass('show')    
        $('.header-wrapper').toggleClass('bg-dark')
        $('#mobile-menu').hasClass('show') ? $('body').css({overflowY: 'hidden'}) : $('body').css({overflowY: 'auto'})
        $('#mobile-menu').hasClass('show') ? $('.mobile-button').css({transform: 'rotate(180deg)'}) : $('.mobile-button').css({transform: 'rotate(0)'}) 
    })

    // End of jQuery
})