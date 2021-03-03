const body = document.querySelector('body'),
      header = document.querySelector('header'),
      divContenedorCartas = document.querySelector('.contenedor-cartas'),
      btnNocturno = document.querySelector('.boton'),
      btnVerMas = document.querySelector('.btn.btn-outline-dark.m-auto');


//funcion nocturno
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

//funcion ver Mas
{/* <img src="img/oreos.jpeg" alt="sur-berries-oreo" class="mb-4">
<h2 class="mb-4">Sur Berries cookies</h2>
<p class="mb-4">Frambuesas bañadas en chocolate blanco y oreos</p> */}
// btnVerMas.addEventListener('click',()=>{
//     //imagen card
//     const nuevaImg = document.createElement('img');
//     nuevaImg.src='img/surberries2.jpeg';
//     nuevaImg.classList.add('mb-4');
//     //h2 
//     const nuevoHeading= document.createElement('h2');
//     nuevoHeading.innerHTML="Sur Berries banana";
//     nuevoHeading.classList.add('mb-4');
//     //p
//     const nuevoP= document.createElement('p');
//     nuevoP.innerHTML = " frambuesas bañadas en chocolate con banana";
//     nuevoP.classList.add('mb-4');
//     //nuevo DIV
//     const nuevoDiv = document.createElement('div');
//     nuevoDiv.classList.add('card','shadow','p-3','mb-5','bg-white','rounded');
//     nuevoDiv.appendChild(nuevaImg);
//     nuevoDiv.appendChild(nuevoHeading);
//     nuevoDiv.appendChild(nuevoP);

//     //contenedor cartas apend
//     divContenedorCartas.appendChild(nuevoDiv);
// })
