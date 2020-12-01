//start game button
$("button").on("click",function(){
    $("article").css("transform","translateY(-500%)");
    setTimeout(exitPage,500);
});

const exitPage = function(){
    window.open("game.html","_self");
}
