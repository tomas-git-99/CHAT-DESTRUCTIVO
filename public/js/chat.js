

/* http://localhost:8010/api/crear */

const formularioCrearBase = document.querySelector('#formularioCrearBase');
const enviarmensaje = document.querySelector('#enviarmensaje');
const chat = document.querySelector('.mande_yo');


/* const url = ( window.location.hostname.includes('localhost'))
      ? 'http://localhost:8010/api/'
      : '';
 */

formularioCrearBase.addEventListener('submit', (e) =>{ 

    e.preventDefault();
    //console.log(form.elements['name'].value);

    const token = localStorage.getItem('token') || '';
    const forData = {token};

    for(let el of formularioCrearBase.elements){
        if(el.name.length > 0)
            forData[el.name] = el.value;
            
        } 
          
    console.log(forData) ;

    fetch(url + 'crear', {
        method: 'POST',
        body: JSON.stringify( forData ),
        headers: {'Content-Type': 'application/json'},
    })
    .then(response => resp.json())
    .then()
});

const mensajesValor = (mensajes) =>{
    
    let mensajesHtml = '';
    mensajes.forEach( ({ nombre = 'tomas', mensaje}) => {
        mensajesHtml = `
  
        <div class="msj_yo">

        <p class="globo"> ${ mensaje }</p>
        <span class="tiempo"> 11:02 AM </span>
        </div>


        `;
        console.log(mensaje);
    });

    chat.innerHTML = mensajesHtml;
}



enviarmensaje.addEventListener('keydown', (e) =>{
    if (e.keyCode === 13 ){
        console.log(enviarmensaje.value)
        chat.innerHTML += `
  
        <div class="msj_yo">

        <p class="globo"> ${ enviarmensaje.value }</p>
        <span class="tiempo"> 11:02 AM </span>
        </div>


        `
        enviarmensaje.value = "";
    }
});

enviarmensaje.addEventListener('keydown', (e) => {


    let tamaño = enviarmensaje.value;
    if ( tamaño.length == 1){
   
    }
})

