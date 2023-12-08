const h1 = document.querySelector('h1');
const input1 = document.querySelector('#nro1');
const input2 = document.querySelector('#nro2');
const btn = document.querySelector('#btncalcular');
const resul = document.querySelector('#resultado');
const form = document.querySelector('#form');


form.addEventListener('submit',suma);


function suma(event){
    console.log({event});
    event.preventDefault(); //evita q la página se re cargue cdo usamos un form con submit
    const suma = parseInt(input1.value) + parseInt(input2.value);
    resul.innerHTML = "Resultado = " + suma;
}


// btn.addEventListener('click',btnOnClick);

// function btnOnClick() {
//     const suma = parseInt(input1.value) + parseInt(input2.value);
//     resul.innerHTML = "Resultado = " + suma;
//     //console.log(parseInt(input1.value) + parseInt(input2.value));
// }