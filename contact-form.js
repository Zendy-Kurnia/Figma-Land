    // Contact Form
    emailjs.init("MpII3lc-2xcZOjTSi");

    $('#contact-form').submit(function (e) {
        e.preventDefault()
        $('#contact-form button').text("Sending...")
        
        emailjs.sendForm("figmaland", "template_ocnclzc", this).then(() => {
            $('#contact-form button').text("Sent!")
        })

    })