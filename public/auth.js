const socket = io();
const url = ( window.location.hostname.includes('localhost'))
      ? 'http://localhost:8010/api/'
      : '';
const form = document.querySelector('form');
const input = document.querySelector('input');
const body = document.querySelector('body');


form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(form.elements['name'].value);

    const forData = {};
    for(let el of form.elements){
        if(el.name.length > 0)
            forData[el.name] = el.value;
            
        } 
          
    console.log(forData) ;

    fetch(url + 'auth/login', {

        method: 'POST',
        body: JSON.stringify( forData ),
        headers: {'Content-Type': 'application/json'},

    })
    .then(resp => resp.json())
    .then( ({token, msg}) => {
        console.log(msg)
        console.log(token)
        localStorage.setItem('token', token)
        window.location = 'inicio.html';
    })
    .catch(err => {
        console.log(err)
    });
});
