 // boot up
 function bootImage(){
    const bootUP = document.getElementById("bootUP");
    const root = document.getElementById("root");

    bootUP.style.display="none";
    root.style.display="block";
}
function signOut() {
    const bootUP = document.getElementById("bootUP");
    const root = document.getElementById("root");

    bootUP.style.display="block";
    root.style.display="none";
}
// move icon
for (i = 1; i <= 7; i++) {
    // console.log(i)
    console.log("#dragThing" + i)
    // 先宣告dragThing為新變數
    const dragThing = "#" + "dragThing" + i
    $(function () {
        //$()這裡面不能做複合組合 需要先宣告再帶進去
        $(dragThing).draggable()
    });
}
// move windows
for (i = 1; i <= 7; i++) {
    // console.log(i)
    console.log("#openWindow" + i)
    // 先宣告dragThing為新變數
    const openWindow = "#" + "openWindow" + i
    $(function () {
        //$()這裡面不能做複合組合 需要先宣告再帶進去
        $(openWindow).draggable({
            //游標位置
            cursorAt: {
                top: -200,
                left: -100
            }
        })
    });
}
//open windows
$(document).ready(function () {
    $("#startBtn").click(function () {
        $("#bottonWin").toggle();
    });
});
for (i = 1; i <= 7; i++) {
    const dragThing = "#" + "dragThing" + i
    const openWindow = "#" + "openWindow" + i
    console.log(openWindow)
    $(document).ready(function () {
        $(dragThing).click(function () {
            $(openWindow).toggle();
        })
    })
}
// close windows
for (i = 1; i <= 7; i++) {
    const Close = "#" + "Close" + i
    const openWindow = "#" + "openWindow" + i
    console.log(openWindow)
    $(document).ready(function () {
        $(Close).click(function () {
            $(openWindow).hide();
        })
    })
}