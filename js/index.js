$(document).ready(function(){

  x = 0;

    $(window).resize(function(){
        if ($(window).width() <= 1000){
          $("span").text(x += 1);
          $("p").css("background-color", "#FCBC05");
        }

        if ($(window).width() <= 850){
          $("p").css("background-color", "#34A853");
          $("p").css("font-size", "20px");
        }

        if ($(window).width() <= 700){
          $("p").css("background-color", "#4285F4");
          $("p").css("font-size", "30px");
        }

        if ($(window).width() <= 500){
          $("p").css("background-color", "#EA4335");
          $("p").css("font-size", "40px");
        }

    });
});