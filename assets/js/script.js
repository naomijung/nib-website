$(document).ready(function() {

    // MENU
    $("#menu").click(function() {
        // $("#grayed-out-box").css("display", "block")
        // $("#grayed-out-box").addClass("nav-open")
        // $("body").css("overflow-y", "hidden")
        $("#side-bar").animate({left:"0px"}, 200);
        $("window").animate({left: "225px"}, 200);
        $("#outside").css("display", "block");
    })

    $("#outside").click(function() {
        $("#side-bar").animate({left:"-225px"}, 200);
        $("#outside").css("display", "none");
    })

    // CONTACT
    $("#emailer").on("submit", function(){
        alert("Thanks! We have received your message.");
    })

    $("#emailer").on("submit", function(){
        $.ajax({
            url: "https://formspree.io/naomi.jung16@gmail.com", 
            method: "POST",
            data: {
                    // name: $('#emailer').find('input[name="firstname"]').val(),
                    // email: $('#emailer').find('input[name="lastname"]').val(),
                    // message: $('#emailer').find($('#message')).val(),
                    // _subject: "Message from naomijung.github.io",
                },
            dataType: "json"
        });
        return false;
    })

    
});