$(document).ready(function(){
    
    //STICKY MENU
    
    $(".js-work").waypoint(function(direction){
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    })
    
})