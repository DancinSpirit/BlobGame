const gameInterface = $("#game-interface").remove();

$("button").on("click", function(){
    $("#name-display").text($("#name").val());
    $("#name-container").css("transform","translateY(0%");
    $("#blob-color").attr("style",`fill:${$("#color").val()}`);
    $("#blob-initialization").remove();
    $("body").append(gameInterface);
    $("#property-display").css("transform","translateX(0%)");
    $("#emote").text("!");
    $("#emote-container").css({"animation":"jump 2","animation-duration":".2s","animation-timing-function":"linear","animation-direction":"alternate"});
    setTimeout(eraseExcla, 1200);
})

const eraseExcla = function(){
    $("#emote").text("");
}

const rightRotate = function(){
    $("#blob").css("transform-origin", "right");
    $("#blob").css("animation", "rotate 1s linear forwards");
}

const leftRotate = function(){
    $("#blob").css("transform-origin", "left");
    $("#blob").css("animation", "rotate 1s linear forwards");
}