$(window).on('scroll', () => {
    var scrollTop = $(window).scrollTop() + window.innerHeight
    var aboutOffset = $('#about .container').offset().top 

    if (scrollTop >= aboutOffset) {
        if (window.scrollY  < aboutOffset + $('#about').outerHeight(true) / 2) {
            $('#about .container').css({
                transform: "translateY(0)", 
                opacity: "1",
            })  
        }else if (window.scrollY + window.innerHeight / 2 > aboutOffset + $('#about').outerHeight(true)) {
            $('#about .container').css({
                transform: "translateY(-250px)", 
                opacity:"0",
            })
        }
    } else if (scrollTop <= aboutOffset) {
        $('#about .container').css({
            transform: "translateY(250px)", 
            opacity:"0",
            
        })
    }
})
