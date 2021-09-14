var isGood = document.getElementById('good');
var isCheap = document.getElementById('cheap');
var isFast = document.getElementById('fast');
function checkGood() {
    if (isGood.checked) {
            if (isFast.checked && isCheap.checked) {
                isFast.checked = false;
            }
        } else isGood.checked;
}
function checkCheap() {
    if (isCheap.checked) {
        if (isFast.checked && isGood.checked) {
            isGood.checked = false;
        }
        else isCheap.checked
    }
}
function checkFast() {
    if (isFast.checked) {
        if (isCheap.checked && isGood.checked) {
            isCheap.checked = false;
        }
        else isFast.checked;
    }
}

