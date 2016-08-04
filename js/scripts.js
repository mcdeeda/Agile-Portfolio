$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: (target.offset().top - 40)
        }, 1000);
    }
});
$(document).ready(function(){
    $("#nav").hide();
    $(window).scroll(function(){
        if($(window).scrollTop() > ($("#col-proj-1").offset().top - 60)){
            $("#nav").show();
        }
        else if($(window).scrollTop() < $("#col-proj-1").offset().top){
            $("#nav").hide();
        }
    })
})