
let timer = 0;
let hunger = 0;
let exhaustion = 0;
let boredom = 0;
let age = 0;
let sleeping = false;
let dead = false;
let spiky = 0;
let purple = 0;
let colorful = 0;
let eyeRight;
let pomRight;
let stingerRight;
$(".appendage").css("visibility","hidden");

$("#color").on("input", function(){
    $(".blob-color").css("fill",$("#color").val());
})

$("#spiky").on("click", function(){
    spiky++;
})
$("#purple").on("click", function(){
    purple++;
})
$("#colorful").on("click", function(){
    colorful++;
})
$(".food-button").on("click", function(){
    hunger=hunger-2;
    $("#food-selection").css("transform","translateX(1000%)");
})

$("#create-blob").on("click", function(){
    $("#name-display").text($("#name").val());
    $("#name-container").css("transform","translateY(0%");
    $(".blob-color").css("fill",$("#color").val());
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
    setInterval(update, 500);
    eyeRight = $(".eye-right").remove();
    pomRight = $(".pom-right").remove();
    stingerRight = $(".stinger-right").remove();
}

const update = function(){
    if(!dead){
    if(boredom>9||age>9||hunger>9||exhaustion>9){
    die();
    dead = true;
    $("#food-selection").css("transform","translateX(1000%)");
    $("#game-interface").css("transform","translateX(500%");
    $("#property-display").css("transform","translateX(-200%");
    setTimeout(function(){
        $("#game-interface").css("width","0");
        $("#emote-container").css("height","0");
        $("#svg-section").css("height","0");
        $(".interact").remove();
    },100);
    setTimeout(function(){
        $("#blob").remove();
        $("<p id=death> is dead!</p>").insertBefore($("#emote-container"));
        $("<div><button id='playagain'>Play Again?</button></div>").insertBefore($("#emote-container"));
        $("#playagain").on("click",function(){
            window.open("index.html","_self");
        })
    },10000)
    }
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
        timer=0;
        wakeAnimation();
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
    if(timer%30===0){
        age++;
    }
    updateText();
    if(age===2){
        morph1();
    }
    if(age===4){
        morph2();
    }
}
}

const morph1 = function(){
    if(colorful>spiky&&colorful>purple)
    for(let x=0; x<eyeRight.length; x++){
        $("#blob").append(eyeRight[x]);
        $(".eye-right").css("visibility","visible");
    }
    if(spiky>colorful&&spiky>purple)
    for(let x=0; x<eyeRight.length; x++){
        $("#blob").append(stingerRight[x]);
        $(".stinger-right").css("visibility","visible");
    }
    if(purple>colorful&&purple>spiky)
    for(let x=0; x<eyeRight.length; x++){
        $("#blob").append(pomRight[x]);
        $(".pom-right").css("visibility","visible");
    }
}
const morph2 = function(){
    if(colorful>spiky&&colorful>purple)
    for(let x=0; x<eyeLeft.length; x++){
        $("#blob").append(eyeLeft[x]);
        $(".eye-left").css("visibility","visible");
    }
    if(spiky>colorful&&spiky>purple)
    for(let x=0; x<eyeLeft.length; x++){
        $("#blob").append(stingerLeft[x]);
        $(".stinger-left").css("visibility","visible");
    }
    if(purple>colorful&&purple>spiky)
    for(let x=0; x<eyeLeft.length; x++){
        $("#blob").append(pomLeft[x]);
        $(".pom-left").css("visibility","visible");
    }
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
    exhaustion++;
    playAnimation();}
    else{
    $("#emote").text("Zzz");
    setTimeout(resetEmote,1000);
    }
    updateText();
}
const feed = function(){
    if(!sleeping){
        $("#food-selection").css("transform","translateX(0%)");
    }
    else{
        $("#emote").text("Zzz");
        setTimeout(resetEmote,2000);
        }
    updateText();
}
const sleep = function(){
    if(!sleeping){
    $("#sleep").text("Wake Up!");
    sleepAnimation();
    sleeping = true;
    }
    else{
    $("#sleep").text("Nap time!");  
    timer=0;
    wakeAnimation();
    sleeping = false;  
    }
    updateText();
}

const resetEmote = function(){
    $("#emote").text("");
}

const playAnimation = function(){
    reset();
    $("#blob").addClass("rightrotation");
    setTimeout(reset,1000);
    $("#blob").addClass("leftrotation");
}

const sleepAnimation = function(){
    reset();
    $("#blob").addClass("sleep");
}

const wakeAnimation = function(){
    reset();
    $("#blob").addClass("wakeup");
}

const die = function(){
    reset();
    $("#blob").addClass("die");
}

const reset = function(){
    $("#blob").removeClass("rightrotation");
    $("#blob").removeClass("sleep");
    $("#blob").removeClass("wakeup");
}

const gameInterface = $("#game-interface").remove();