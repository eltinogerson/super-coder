setTimeout(function() {
    //code goes here
    $("#app-loader").addClass('animated');
    setTimeout(function() {
        //code goes here
        $("#app-loader").attr('style', 'display:none');
        $("#body-content").removeClass('disable-scroll');
    }, 1000); //Time before execution
}, 2500); //Time before execution