//Display del valor anterior
const displayValorAnterior = document.getElementById('valor-anterior');

//Display del valor actual
const displayValorActual = document.getElementById('valor-actual');

const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

//Creo una instancia del display
const display = new Display(displayValorAnterior, displayValorActual);

//Captar los numeros cuando se teclean
//y con esta funcion al presionar el boton en el html pasara por el parametro y se agregara al display

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});