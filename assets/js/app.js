//variables
const body = document.querySelector('body'),
      header = document.querySelector('header'),
      nav    = document.querySelector('.nav'),
      btnBurguer = document.querySelector('.burguer'),
      divContenedorCartas = document.querySelector('.contenedor-cartas'),
      btnNocturno = document.querySelector('.boton'),
      btnVerMas = document.querySelector('.btn.btn-outline-dark.m-auto');


//Event Listener
btnNocturno.addEventListener('click',(e)=>{
    e.preventDefault();
    if(body.classList.contains('dark')){
        console.log('contiene dark');
        body.classList.remove('dark');
        header.classList.remove('dark');
        btnNocturno.textContent= "Modo Nocturno";
        
    }else{
        console.log('no contiene dark');
        body.classList.add('dark');
        header.classList.add('dark');
        btnNocturno.textContent ="Modo Claro";
    }
})

btnBurguer.addEventListener('click',() => {
     if(nav.classList.contains('open-menu')){
         nav.classList.remove('open-menu');
     }else{
        nav.classList.add('open-menu');

     }
    
})
