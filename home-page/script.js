let dark = false

function goDark(){
    if (dark == false){
        document.body.style.background = "#000";
        document.querySelector(".header").style.background = "#f2eded47";
        document.querySelector(".social-card").style.background = "#f2eded47";
        document.querySelector(".header").style.color = "#d9d9d9";
        document.querySelector(".info-cards").style.color = "#d9d9d9";

        dark = true;
    }
    else if (dark == true){
        document.body.style.background = "#fff";
        document.querySelector(".header").style.background = "#f2ededb0";
        document.querySelector(".social-card").style.background = "#f2eded47";
        document.querySelector(".header").style.color = "#7e7878";
        document.querySelector(".info-cards").style.color = "#7e7878";

        dark = false;
    }
}
