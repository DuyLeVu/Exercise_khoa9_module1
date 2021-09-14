// các hàm xử lý khi ấn phím di chuyển
function leftArrowPressed(){
    let element = document.getElementById("nobita");
    console.log(element.style.left);
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowPressed(){
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function upArrowPressed(){
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed(){
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}

//Hàm nhận các phím di chuyển
function moveSelection(evt){
    console.log(evt.keyCode);
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function doReady(){
    window.addEventListener('keydown', moveSelection);
}
