const $header = document.getElementById('header');
console.log($header)

    /* la variable que almacena la ubicacion es una variable que tiene un valor constante: */
    let ubicacion = window.pageYOffset;
    //por ejemplo el valor de ubicacion en inicio sería 0
    console.log(ubicacion)


    window.addEventListener('scroll',()=>{
        /* por el contrario la varible que se declara dentro de la funcion va mutando su valor en medidad que se ejecute la funcion del evento scroll  por ej: 228*/
        let desplazamiento = window.pageYOffset;
        console.log(desplazamiento)
        // cuando entra al condicional se comparan los valores: el valor de ubicacion es 0 mientras que el de desplazamiento puede ser de 228, por ende es falso y pasa al else
        if(ubicacion >= desplazamiento){
            $header.style.top = '0'
        }
        // el else es true, por ende el "header se esconde 100px, cuando hago scroll"
        else{
            $header.style.top = '-200px'
    }
    // luego se retorna el valor de ubicacion y se iguala al de desplazamiento
    

    // entonces si ubicacion valia 0, queda valiendo 228
        return ubicacion = desplazamiento;
});


/* y se vuelve a hacer la comparacion, PEROOOO como cuando el scroll es hacia arriba el nuevo valor constante de ubicacion es mayor, por ende el top del header queda en 0*/



/* window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 250){
        $header.style.position = 'static';
        $header.style.transition = 'position 4s'
        $main.style.paddingTop = '0px'
    }
    else{
        setInterval(()=>{
            if(ubicacion === ubicacion){
                setTimeout(() => {
                    
                    $header.style.position = 'fixed'
                }, 1000);
            }
        },3000)
    }
}) */


/* let ubication = window.pageYOffset; // = 0;

window.addEventListener('click', ()=>{
    let desplazamiento = window.pageYOffset; // = al desplazamiento que se va dando a medidad que se ejecuta el evento del scroll
    if(ubication >= desplazamiento){
        $header.style.top = '0'
    }
    else{
        $header.style.top = '-500px'
    }
    return ubication = desplazamiento
}) */