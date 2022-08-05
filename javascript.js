'use strict'

// キーボードの入力状態を記録する配列の定義
let inputKeyBuffer = new Array();

window.addEventListener("keydown", handleKeydown);
function handleKeydown(enter) {
    inputKeyBuffer[enter.keyCode] = true;
  }
window.addEventListener("keyup", handleKeyup);
function handleKeyup(enter) {
    inputKeyBuffer[enter.keyCode] = false;
}

function ziguzo(){

    let img = document.getElementById("myPuzzle");
    console.log(img)
    snapfit.add(img,{mixed : true, simple :true, aimage : true});
    window.requestAnimationFrame(URLlink);
}

function URL(){
    window.location.href = 'https://nico1006.github.io/';
    window.requestAnimationFrame(URL);
}

function URLlink(){
    if (inputKeyBuffer[32]) {
        window.location.href = 'https://nico1006.github.io/';
    }
    window.requestAnimationFrame(URLlink);
}
// ページが開いたらziguzoを読込む
window.addEventListener("load", ziguzo);
