const botonCrear = document.querySelector('.crearsala');
const abrirSala = document.querySelector('.crearSalaBTN');
const ventaDeCrear = document.querySelector('.ventaDecrear');
const salidaDeventana = document.querySelector('.salidaDeventana');
const todo = document.querySelector('.todo');

const body = document.querySelector('body');

/* animacion de la sala */
botonCrear.addEventListener('click', (e)=> {

    if (botonCrear.style.left == '0px'){
        return botonCrear.style.left = '-300px'
    }
    botonCrear.style.left = '0px'

});

abrirSala.addEventListener('click', (e)=> {
    ventaDeCrear.style.opacity = '1';
    ventaDeCrear.transition = 'all 0.5s ease';  
    ventaDeCrear.style.transform = 'translateX(0px)';
    desabilitar();

})

const desabilitar = () => {
    todo.style.pointerEvents = "none";
    todo.style.filter = "blur(5px)";

}

salidaDeventana.addEventListener('click', () =>{ 

    const ventana = localStorage.getItem('ventana');

    if( ventana == 1){

        ventaDeCrear.transition = 'all 0.5s ease';  
        ventaDeCrear.style.transform = 'translateX(1400px)';
        ventaDeCrear.style.opacity = '0';
        todo.style.pointerEvents = "";
        todo.style.filter = "blur(0px)";
        return localStorage.removeItem('ventana');
    }
    
    ventaDeCrear.transition = 'all 0.5s ease';  
    ventaDeCrear.style.transform = 'translateX(-1400px)';
    ventaDeCrear.style.opacity = '0';
    todo.style.pointerEvents = "";
    todo.style.filter = "blur(0px)";
    localStorage.setItem('ventana', 1 )

}) ;


/* coneccion con la base de datos */


