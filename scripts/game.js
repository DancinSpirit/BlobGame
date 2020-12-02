
let timer = 0;
let hunger = 0;
let exhaustion = 0;
let boredom = 0;
let age = 0;
let sleeping = false;

$("#create-blob").on("click", function(){
    $("#name-display").text($("#name").val());
    $("#name-container").css("transform","translateY(0%");
    $("#blob-color").attr("style",`fill:${$("#color").val()}`);
    $("#blob-initialization").remove();
    $("body").append(gameInterface);
    $("#property-display").css("transform","translateX(0%)");
    $("#emote").text("!");
    $("#emote-container").css({"animation":"jump 2","animation-duration":".2s","animation-timing-function":"linear","animation-direction":"alternate"});
    setTimeout(gameStart, 1200);
 
    $("#play").on("click", play);
    $("#feed").on("click", feed);
    $("#sleep").on("click", sleep);
})

const gameStart = function(){
    $("#emote").text("");
    setInterval(update, 1000);
}

const update = function(){
    if(boredom<0){
        boredom=0;
    }
    if(hunger<0){
        hunger=0;
    }
    if(exhaustion<0){
        exhaustion=0;
    }
    if(exhaustion===0&&sleeping){
        $("#sleep").text("Nap time!"); 
        sleeping = false;
    }
    timer++;
    if(timer%5===0){
        if(!sleeping)
        boredom++;
        else
        exhaustion--;
    }
    if(timer%10===0){
        hunger++;
    }
    if(timer%15===0){
        if(!sleeping)
        exhaustion++;
    }
    if(timer%60===0){
        age++;
    }
    updateText();
}

const updateText = function(){
    if(boredom<0){
        boredom=0;
    }
    if(hunger<0){
        hunger=0;
    }
    if(exhaustion<0){
        exhaustion=0;
    }
    $("#boredom-value").text(boredom);
    $("#hunger-value").text(hunger);
    $("#exhaust-value").text(exhaustion);
    $("#age").text(age);
}
const play = function(){
    if(!sleeping){
    boredom= boredom-3;
    exhaustion++;}
    else{
    $("#emote").text("Zzz");
    setTimeout(resetEmote,1000);
    }
    updateText();
}
const feed = function(){
    if(!sleeping)
    hunger--;
    else{
        $("#emote").text("Zzz");
        setTimeout(resetEmote,2000);
        }
    updateText();
}
const sleep = function(){
    if(!sleeping){
    $("#sleep").text("Wake Up!");
    sleeping = true;
    }
    else{
    $("#sleep").text("Nap time!");  
    sleeping = false;  
    }
    updateText();
}

const resetEmote = function(){
    $("#emote").text("");
}

const gameInterface = $("#game-interface").remove();