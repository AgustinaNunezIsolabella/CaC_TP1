
const datos = {
    quantity: '',
    category: ''
};

var category;
datos.category = 'estudiante';

const firstname = document.querySelector('#name');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const quantity = document.querySelector('#quantity');
category = document.querySelector('#category');
const totaltopay = document.querySelector('#totaltopay');
const btnsummary = document.querySelector('.btnsummary');
const btndelete = document.querySelector('.btndelete');
const purchaseform = document.querySelector('#purchaseform');


let control =null;

//document.getElementById('email').addEventListener('input', function() {
//    campo = target;
  //  valido = document.getElementById('emailOK');
    //    
   // emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   // if (emailRegex.test(campo.value)) {
    //  valido.innerText = "válido";
    //} else {
    //  valido.innerText = "incorrecto";
   // }
//});
//<p>
   // Email:
   // <input id="email">
    //<span id="emailOK"></span>
//</p>

quantity.addEventListener('keyup', (e) => {
    const numvalue = Number(e.target.value);
    if (isNaN(numvalue) || !Number.isInteger(numvalue)) alert('Solo se permite ingresar numeros enteros y positivos.')
    if (numvalue <= 0) e.target.value =''

});


quantity.addEventListener('input', function(event){
    datos.quantity = event.target.value;
    console.log("quantity: " + event.target.value + " guardada");
});

category.addEventListener('change', function(event){
    datos.category = event.target.value;
    console.log("category: " + event.target.value + " guardada");
});

btnsummary.addEventListener('click' , function(event){
    event.preventDefault();
    const {quantity, category} = datos;
    var resultado = 0;    
    var indice = 0;
    indice = totaltopay.textContent.indexOf('$');
    totaltopay.textContent = totaltopay.textContent.substring(0, indice+1);
    if(category == 'estudiante'){
        resultado = (200*quantity)*0.2;
        console.log("La category seleccionada es (E): " + category);
    } 
    else if(category == 'trainee'){
        resultado = (200*quantity)*0.5;
        console.log("La category seleccionada es (T): " + category);
    }
    else if(category == 'junior'){
        resultado = (200*quantity)*0.85;
        console.log("La category seleccionada es (J): " + category);
    }
    totaltopay.textContent += resultado;
    return;
   });

btndelete.addEventListener("click", function(event) {
    purchaseform.delete();

});
    