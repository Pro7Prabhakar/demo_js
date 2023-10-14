const p = document.getElementById('count')
let c = 0
let b = false

function reset(){
    p.textContent = 0;
    b = true
}
function increment(){
    if(c < 0 || b == true){
        c = 0
        b = false
    }
    c++
    p.textContent = c
}

function decrement(){
    c = c-1;
    if (c >= 0 && b == false){
        p.textContent = c
    }
}

const h = document.getElementById('h')

function display(){
    h.style.display = 'block';
}