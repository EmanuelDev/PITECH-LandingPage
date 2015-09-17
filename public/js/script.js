$(document).ready(function() {
    $('.login_link').click(function() {
        $('.toggle').slideToggle();
    });
     
    $(".extra_information").click(function() {
        $(this).next('.description_toggle').slideToggle();
        $(this).next('number_tab').css("background-color","black");
    });
     
    $('#viewMore').click(function() {
        $('#hiddenRow').slideToggle();
    });
    
    $(".more_information").click(function() {
        $(this).next('.second_description_toggle').fadeToggle();
    });      
});

