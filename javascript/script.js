$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
        }
    })
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 779){
            $('.home').addClass("home-class");
            $('#about_id').addClass("about-class");
        }
        else{
            $('.home').removeClass("home-class");
            $('#about_id').removeClass("about-class");
        }
    })
});


// Click Event for Navigation menu !

const home_id = document.getElementById("home_id");
home_id.addEventListener("click", function(){
    $("html,body").animate({ scrollTop : 0 }, "slow");
});

const about_id = document.getElementById("about_id");
about_id.addEventListener("click", function(){
    $("html,body").animate({ scrollTop : 780 }, "slow");
});
        
const services_id = document.getElementById("services_id");
services_id.addEventListener("click", function(){
    $("html,body").animate({ scrollTop : 1650 }, "slow");
});

const portfolio_id = document.getElementById("portfolio_id");
portfolio_id.addEventListener("click", function(){
    $("html,body").animate({ scrollTop : 2100 }, "slow");
});
