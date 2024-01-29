window.addEventListener('load', ()=> {
    const display = document.querySelector('.calculator-display');
    const KeypadButtoms = document.getElementsByClassName('keypad-buttom');

    const KeypadButtomsArray = Array.from(KeypadButtoms);

    KeypadButtomsArray.forEach( (buttom) => {
       buttom.addEventListener('click', ()=> {
            calculadora(buttom, display);
        })
    })
});

function calculadora (buttom, display){
    switch (buttom.innerHTML) {
        case 'C':
            borrar(display);
            break;
        
        case '=':
            calcular(display);
            break;
    
        default:
            actualizar(display, buttom);
            break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, buttom){
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += buttom.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}