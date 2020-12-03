
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
let eyeRight = $("#eye-right");
let pomRight = $("#pom-right");
let stingerRight = $("#stinger-left");
let eyeLeft = $("#eye-left");
let pomLeft = $("#pom-left");
let stingerLeft = $("#stinger-left");
let firstMorph = false;
let secondmorph = false;
let animationRunning = false;

$(".appendage").css("visibility","hidden");

$("#color").on("input", function(){
    $(".blob-color").css("fill",$("#color").val());
})

$("#spiky").on("click", function(){
    if(!sleeping&&!animationRunning)
    spiky++;
})
$("#purple").on("click", function(){
    if(!sleeping&&!animationRunning)
    purple++;
})
$("#colorful").on("click", function(){
    if(!sleeping&&!animationRunning)
    colorful++;
})
$(".food-button").on("click", function(){
    if(!animationRunning){
    if(!sleeping){
    hunger=hunger-2;
    $("#food-selection").css("transform","translateX(1000%)");
    }
    else{
        $("#emote").text("Zzz");
        setTimeout(resetEmote,2000);
        }
    updateText();
    }
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
        $("#svg-section").css("transition-duration","10000ms");
        $("#svg-section").css("height","50px");
        $(".interact").remove();
    },100);
    setTimeout(function(){
        $("#svg-section").css("transition-duration","0ms");
        $("#svg-section").css("height","0px");
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
    if(age===2&&!firstMorph){
        morph1();
    }
    if(age===4){
        morph2();
    }
    if(age===6){
        morph3();
    }
}
}

const morph3 = function(){
    dead = true;
    $("#food-selection").css("transform","translateX(1000%)");
    $("#game-interface").css("transform","translateX(500%");
    $("#property-display").css("transform","translateX(-200%");
    setTimeout(function(){
        $("#game-interface").css("width","0");
        $("#emote-container").css("height","0");
        $("#svg-section").css("height","600px");
        $("#final-form").css("visibility","visible");
        $("#final-form").addClass("spin-in");
        $(".interact").remove();
        $("#blob").addClass("spin-out");
    },100);
    setTimeout(function(){
        $("<p id=death> has fully evolved!</p>").insertBefore($("#emote-container"));
        $("<div><button id='playagain'>Play Again?</button></div>").insertBefore($("#property-display"));
        $("#playagain").on("click",function(){
            window.open("index.html","_self");
        })
    },1000)
}

const eyeSpawn = function(eye){
    eye.css("visibility","visible");
    eye.css("transform", "translate(0px, 0px");
}
const pomSpawn = function(pom){
    pom.css("visibility","visible");
    pom.css("transform", "translateY(3px");
}
const rightStingSpawn = function(){
    $(".stinger-right").css("visibility","visible");
    $(".stinger-right").css("transform","rotate(0deg)");
    $("#right-sting").css("visibility","hidden");
    setTimeout(function(){
        $("#right-sting").css("visibility","visible");
        $("#right-sting").css("transform","translate(0px,0px)")   
    },1200);
}
const leftStingSpawn = function(){
    $(".stinger-left").css("visibility","visible");
    $(".stinger-left").css("transform","translate(0px,0px)");
    $("#left-sting").css("visibility","hidden");
    setTimeout(function(){
        $("#left-sting").css("visibility","visible");
        $("#left-sting").css("transform","translate(0px,0px)")   
    },1200);
}

const morph1 = function(){
    if(colorful>spiky&&colorful>purple)
        eyeSpawn($(".eye-right"));
    else if(spiky>colorful&&spiky>purple)
    rightStingSpawn();
    else if(purple>colorful&&purple>spiky)
        pomSpawn($(".pom-right"));
    else{
        let rndm = Math.random()*3;
        if(rndm<1){
            eyeSpawn($(".eye-right"));
        }
        else if(rndm<2)
            rightStingSpawn();
        else
            pomSpawn($(".pom-right"));
    }
    spiky=0;
    colorful=0;
    purple=0;
    firstMorph = true;
}

const morph2 = function(){
    if(colorful>spiky&&colorful>purple)
        eyeSpawn($(".eye-left"));
    else if(spiky>colorful&&spiky>purple)
        leftStingSpawn();
    else if(purple>colorful&&purple>spiky)
        pomSpawn($(".pom-left"));
    else{
        let rndm = Math.random()*3;
        if(rndm<1){
            eyeSpawn($(".eye-left"));
        }
        else if(rndm<2)
            leftStingSpawn();
        else
            pomSpawn($(".pom-left"));
    }
    secondMorph = true;
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
    if(!animationRunning){
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
}
const feed = function(){
    if(!animationRunning){
    if(!sleeping){
        $("#food-selection").css("transform","translateX(0%)");
    }
    else{
        $("#emote").text("Zzz");
        setTimeout(resetEmote,2000);
        }
    updateText();
    }
}
const sleep = function(){
    if(!animationRunning){
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
}

const resetEmote = function(){
    $("#emote").text("");
}

const playAnimation = function(){
    reset();
    $("#blob").addClass("rightrotation");
    setTimeout(reset,1000);
    $("#blob").addClass("leftrotation");
    animationRunning = true;
    setTimeout(function(){
        animationRunning = false;
    },2000);
}

const sleepAnimation = function(){
    reset();
    $("#blob").addClass("sleep");
    animationRunning = true;
    setTimeout(function(){
        animationRunning = false;
    },1000);
}

const wakeAnimation = function(){
    reset();
    $("#blob").addClass("wakeup");
    animationRunning = true;
    setTimeout(function(){
        animationRunning = false;
    },1000);
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