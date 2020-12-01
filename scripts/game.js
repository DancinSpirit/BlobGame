const gameInterface = $("#game-interface").remove();
($("button")).on("click", function(){
    document.getElementById("blob-color").setAttribute("style",`fill:${$("#color").val()}`);
    $("#blob-initialization").remove();
    $("body").append(gameInterface);
})