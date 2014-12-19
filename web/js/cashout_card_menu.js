$(".go").click(function (e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    
    var id_div = $(this).attr("data-div");
  
     // activate li
    activate_li($(this));
    // move to position
    goToByScroll(id_div);
});


function goToByScroll(id){
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}

function activate_li(li){
    //deactivate active li
    var active = $(".active");
    active.removeClass("active");
    
    //activate current li
    li.addClass("active");
}




