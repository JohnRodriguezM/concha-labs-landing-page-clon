const $main = document.querySelector('main');
const $footer = document.querySelector('footer');
const $btnNavBar = document.getElementById('btn-hamburger');
const $container = document.getElementById('ul-container');

$btnNavBar.addEventListener('click',()=>{
    $btnNavBar.classList.toggle('is-active');
})

$btnNavBar.addEventListener('click', e => {
    console.log(e.target)
    $container.classList.toggle('invisible')
    $container.classList.toggle('visible')
    $main.classList.toggle('hidden')
    $main.classList.toggle('active')
    $footer.classList.toggle('hidden')
    $footer.classList.toggle('active')
})
