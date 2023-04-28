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
    // Rotate mobile button 180deg if mobile menu is being shown and change the icon 
    
    $('.mobile-button, #mobile-menu, .overlay').click(function () {
        $('#mobile-menu').toggleClass('show')    
        $('.header-wrapper').toggleClass('bg-dark')
        $('#mobile-menu').hasClass('show') ? $('body').css({overflowY: 'hidden'}) : $('body').css({overflowY: 'auto'})
        $('#mobile-menu').hasClass('show') ? $('.mobile-button').css({transform: 'rotate(180deg)'}) : $('.mobile-button').css({transform: 'rotate(0)'}) 
        $('#mobile-menu').hasClass('show') ? $('.mobile-button').html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>') : $('.mobile-button').html('<svg viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg"><path d="M6.66797 8H33.3346V10.6667H6.66797V8ZM13.3346 14.6667H33.3346V17.3333H13.3346V14.6667ZM21.668 21.3333H33.3346V24H21.668V21.3333Z"/></svg>')
    })

    
    // End of jQuery
})