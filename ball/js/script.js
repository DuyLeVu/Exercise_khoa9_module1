let imgObj =null;
function init(){
    imgObj = document.getElementById('myimg');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
function moveball(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 +'px';
}
// Gọi hàm init khi trình duyệt được tải lần đầu,setup vị trí quả bóng ban đầu sát bên trái
window.onload = init;