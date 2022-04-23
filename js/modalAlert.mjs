const d = document;
const necesarios = {
    main: d.querySelector('main'),
    modal: d.createElement('div'),
    modalInterno: d.createElement('div'),
    buttonCerrar: d.createElement('button'),
    $h1: d.createElement('h1'),
    icono: d.createElement('i'),
}

function aparecerModal() {
    const { main, modalInterno, modal, buttonCerrar, $h1, icono } = necesarios;
    main.append(modal, modalInterno)
    modal.append(modalInterno)
    modal.setAttribute("class", "modal")
    modal.style.display = "block"
    modalInterno.append($h1, buttonCerrar)
    // se añaden atributos y otros elementos
    modalInterno.setAttribute('class', 'modalInterno')
    buttonCerrar.setAttribute('class', 'button')
    buttonCerrar.innerHTML = "cerrar"
    buttonCerrar.appendChild(icono)
    icono.setAttribute('class', 'icon-ok-sign')
    $h1.setAttribute('class', 'titulo')
    $h1.innerHTML = `que gusto verte acá, ya eres parte de nuestro equipo`;

}

d.addEventListener('click', e => {
    const { buttonCerrar, modal } = necesarios
    if (e.target === buttonCerrar) {
        modal.style.display = "none"
        modal.style.transition = 'all 10s ease'
    }
})


export { aparecerModal }