const main = document.querySelector('main')

const modal = document.createElement('div');

const modalInterno = document.createElement('div');
modalInterno.setAttribute('class','modalInterno')



console.log(main)

let buttonCerrar = document.createElement('button')
buttonCerrar.setAttribute('class','button')
buttonCerrar.innerHTML = "cerrar"

let icono = document.createElement('i')
buttonCerrar.appendChild(icono)
icono.setAttribute('class','icon-ok-sign')


let $h1 = document.createElement('h1')
$h1.setAttribute('class','titulo')
$h1.innerHTML = `que gusto verte acá, ya eres parte de nuestro equipo`;

let botonSubmit = document.getElementById('formInfo')


function aparecerModal(){
    main.append(modal)
    modal.append(modalInterno)
    modal.setAttribute("class","modal")
    modal.style.display = "block"
    modalInterno.append($h1)
    modalInterno.append(buttonCerrar)
    console.log(main)
}


buttonCerrar.addEventListener('click',()=>{
    modal.style.display = "none"
})


/* botonSubmit.addEventListener('click',(evento)=>{
    evento.preventDefault()
    main.append(modal)
    modal.append(modalInterno)
    modal.setAttribute("class","modal")
    modal.style.display = "block"
    modalInterno.append($h1)
    modalInterno.append(buttonCerrar)
}) */
console.log(botonSubmit)

export {aparecerModal}