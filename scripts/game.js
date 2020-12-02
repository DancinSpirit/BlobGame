const gameInterface = $("#game-interface").remove();
let timer = 0;
let hunger = 0;
let exhaustion = 0;
let boredom = 0;
let age = 0;

$("button").on("click", function(){
    $("#name-display").text($("#name").val());
    $("#name-container").css("transform","translateY(0%");
    $("#blob-color").attr("style",`fill:${$("#color").val()}`);
    $("#blob-initialization").remove();
    $("body").append(gameInterface);
    $("#property-display").css("transform","translateX(0%)");
    $("#emote").text("!");
    $("#emote-container").css({"animation":"jump 2","animation-duration":".2s","animation-timing-function":"linear","animation-direction":"alternate"});
    setTimeout(gameStart, 1200);
})

const gameStart = function(){
    $("#emote").text("");
    setInterval(update, 1000);
}

const update = function(){
    timer++;
    if(timer%5===0){
        boredom++;
    }
    if(timer%10===0){
        hunger++;
    }
    if(timer%15===0){
        exhaustion++;
    }
    if(timer%60===0){
        age++;
    }
    $("#boredom-value").text(boredom);
    $("#hunger-value").text(hunger);
    $("#exhaust-value").text(exhaustion);
    $("#age").text(age);
}

const rightRotate = function(){
    $("#blob").css("transform-origin", "right");
    $("#blob").css("animation", "rotate 1s linear forwards");
}

const leftRotate = function(){
    $("#blob").css("transform-origin", "left");
    $("#blob").css("animation", "rotate 1s linear forwards");
}