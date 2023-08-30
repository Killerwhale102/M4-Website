

//reviews

let arrowButtons = document.getElementsByClassName("arrow")

let reviews = document.getElementsByClassName("review")

let modus = "one-two-three"

for(let i = 0; i < arrowButtons.length; i++){
    arrowButtons[i].onclick = function(){
        if(modus === "one-two-three"){
        reviews[0].style.display = "none"
        reviews[1].style.display = "none"
        reviews[2].style.display = "none"
        reviews[3].style.display = "block"
        reviews[4].style.display = "block"
        reviews[5].style.display = "block"
        modus = "four-five-six";
        }
        else{
        reviews[0].style.display = "block"
        reviews[1].style.display = "block"
        reviews[2].style.display = "block"
        reviews[3].style.display = "none"
        reviews[4].style.display = "none"
        reviews[5].style.display = "none"
        modus = "one-two-three";
        }
    }
}

//Filters

let allGames  = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500)


//soulslike filter
let soulslikeFilter = document.getElementById("checkbox-soulslike");
soulslikeFilter.onchange = function(){
    if(soulslikeFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "soulslike"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "soulslike"){
                allGames[i].style.display = "none"
            }
        }
    }
}

//rpg filter
let rpgFilter = document.getElementById("checkbox-rpg");
rpgFilter.onchange = function(){
    if(rpgFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "rpg"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "rpg"){
                allGames[i].style.display = "none"
            }
        }
    }
}

//action filter
let actionFilter = document.getElementById("checkbox-action");
actionFilter.onchange = function(){
    if(actionFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "action"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "action"){
                allGames[i].style.display = "none"
            }
        }
    }
}



// price filters

//fifteen
let pricefifteenFilter = document.getElementById("checkbox-price-15");
pricefifteenFilter.onchange = function(){
    if(pricefifteenFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.pricerange === "price-15"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.pricerange === "price-15"){
                allGames[i].style.display = "none"
            }
        }
    }
}

//thirty
let pricethirtyFilter = document.getElementById("checkbox-price-30");
pricethirtyFilter.onchange = function(){
    if(pricethirtyFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.pricerange === "price-30"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.pricerange === "price-30"){
                allGames[i].style.display = "none"
            }
        }
    }
}

//sixty
let pricesixtyFilter = document.getElementById("checkbox-price-60");
pricesixtyFilter.onchange = function(){
    if(pricesixtyFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.pricerange === "price-60"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.pricerange === "price-60"){
                allGames[i].style.display = "none"
            }
        }
    }
}