function repYes(){
    alert('<3');
}
function repNO(){
    x = Math.round(Math.random() * window.innerWidth);
    y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('sayNo').style.top = y + 'px';
    document.getElementById('sayNo').style.left = x + 'px';
}