function addTxt(txt){
    document.getElementById('src').value += txt;
}
function clean(){
    document.getElementById('src').value = '';
}
function cal(){
    let res = document.getElementById('src').value;
    document.getElementById('src').value = eval(res);
}