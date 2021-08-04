const url = ( window.location.hostname.includes('localhost'))
      ? 'http://localhost:8010/api/'
      : '';


const validarJWT = async() =>{

    const token = localStorage.getItem('token') || '';

    //no hacer una petecion al backend
    if( token.length <= 10){
        //window.location = 'index.html';
        throw new Error ('El token no es valido');
    }

    try {
        
        const resp = fetch(url + 'auth', {
            headers:{'x-token': token}
        });
    
        
        const {ok, token:tokenDB} = await (await resp).json();
        
        if ( !ok ){
            //window.location = 'index.html';
    
            throw new Error ('No hay token en el servidor');
        } 
    } catch (error) {
        console.log(error);
    }


 /*    console.log(ok);
    console.log('perrin')  */
}



   








const main = async () => {

    await validarJWT();
}

main();