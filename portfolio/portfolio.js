var projectSelect;

window.onload = function()
{
    $(".socialMedia").hover(function(){
        $(this).animate({"opacity":"1.0"}, 150);
    }, function(){
        $(this).animate({"opacity":"0.4"}, 150);
    });
    
    $(".panel").hover(function(){
        $(this).animate({"opacity":"1.0"}, 150);
    }, function(){
        $(this).animate({"opacity":"0.4"}, 150);
    });
}