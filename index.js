let increse = document.getElementById('btn-inc');
let decrese = document.getElementById('btn-dec');
let reset = document.getElementById('btn-res');


let output = document.getElementById('output');
let counter = 0;

reset.addEventListener('click', () => {
    counter = 0;
    output.innerText = counter;
})

increse.addEventListener('click', () => {
    counter += 1;
    output.innerText = counter;
})

decrese.addEventListener('click', () => {
    counter -= 1;
    output.innerText = counter;
})


