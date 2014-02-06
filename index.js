
window.onload = function(){
    var t = $(document).height()/2;
    $(".top").animate({"top": t-100}, 500);
    $(".bot").animate({"top": t-50}, 500);
    $(".line").animate({"width": $(document).width()}, 500);

    $(document).click( function(){
        $(".top").animate({"top": -100}, 500);
        $(".bot").animate({"top": $(document).height()}, 500, function(){
            window.location.href = "portfolio/portfolio.html";
        });
    });
};