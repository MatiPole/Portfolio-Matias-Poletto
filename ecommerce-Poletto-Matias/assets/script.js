'use strict'

let videojuegos = [
     {
         id: 1,  
         nombre: 'FIFA 2023',
         descripcion: 'La innovadora version de FIFA te sorprenderá con su nueva jugabilidad.',
         descripcionLarga:'<p>FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts.</p> <p> Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA, y lanzada en todo el mundo el 30 de septiembre de 2022 para PC, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X. /S y Google Stadia.</p><p>  Sin embargo, los jugadores que reservaron la Ultimate Edition recibieron tres días de acceso anticipado y pudieron jugar el juego a partir del 27 de septiembre.</p>',
         precio: 8000,
         imagenBanner: 'assets/img/banners/banner_fifa.jpg',
         imagen: 'assets/img/fifa2023/fifa1.webp',
         imagen2: 'assets/img/fifa2023/fifa2.webp',
         imagen3: 'assets/img/fifa2023/fifa3.webp',
         imagen4: 'assets/img/fifa2023/fifa4.webp',
         categoria: 'Deportes',
         cantidad: 1,
     },
     {
         id: 2,
         nombre: 'Call of Duty',
         descripcion: 'Viví la experiencia Battle Royale de tu shooter favorito',
         descripcionLarga:'<p>Un videojuego de disparos en primera persona de estilo bélico, desarrollado por Infinity Ward y distribuido por Activision. </p> <p>El videojuego, precedido por Call of Duty 3, es el cuarto título de la serie Call of Duty y el cuarto de esta misma en ser título principal.</p><p>  La historia toma lugar en el año 2011, donde un líder radical ha ejecutado al presidente de un país sin nombre en Oriente Medio, y un movimiento "ultranacionalista" da inicio a una guerra civil en Rusia</p>',
         precio: 4000,
         imagenBanner: 'assets/img/banners/banner_cod.jpg',
         imagen: 'assets/img/cod/cod1.webp',
         imagen2: 'assets/img/cod/cod2.webp',
         imagen3: 'assets/img/cod/cod3.webp',
         imagen4: 'assets/img/cod/cod4.webp',
         categoria: 'Guerra',
         cantidad: 1,
     },
     {
         id: 3,
         nombre: 'God of War',
         descripcion: 'No sabés si estás jugando un juego o viendo una película',
         descripcionLarga:'<p>God of War es una franquicia de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment.</p> <p> Se basa en las aventuras de un semidiós espartano, Kratos, quien se enfrenta a diversos personajes de la mitología griega y nórdica, tanto héroes como especies mitológicas, dioses griegos, titanes (como Cronos) y dioses primordiales (como Gaia).</p><p>   Aunque el guerrero espartano acostumbra enemistad con la mayoría de los dioses, recibe ayuda de muchos de ellos en algún momento de cada entrega, en especial de Atenea.</p>',
         precio: 9000,
         imagenBanner: 'assets/img/banners/banner_gow.jpg',
         imagen: 'assets/img/gow/gow1.webp',
         imagen2: 'assets/img/gow/gow2.webp',
         imagen3: 'assets/img/gow/gow3.webp',
         imagen4: 'assets/img/gow/gow4.webp',
         categoria: 'Aventura',
         cantidad: 1,
     },
     {
         id: 4,
         nombre: 'The Last of Us 2',
         descripcion: 'Cinco años después, Ellie emprenderá un largo viaje para lograr su venganza',
         descripcionLarga:'<p>The Last of Us Part II es un videojuego de terror y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.</p> <p> Ambientado cinco años después de The Last of Us (2013), el juego se centra en dos personajes jugables en un Estados Unidos post-apocalíptico cuyas vidas se entrelazan. </p><p>El juego se juega desde la perspectiva de la tercera persona y le permite al jugador luchar contra enemigos humanos y a zombis con armas de fuego, armas improvisadas y sigilo.</p>',
         precio: 3000,
         imagenBanner: 'assets/img/banners/banner_tlou2.jpg',
         imagen: 'assets/img/lastofus/us1.webp',
         imagen2: 'assets/img/lastofus/us2.webp',
         imagen3: 'assets/img/lastofus/us3.webp',
         imagen4: 'assets/img/lastofus/us4.webp',
         categoria: 'Aventura',
         cantidad: 1,
     },
     {
         id: 5,
         nombre: 'Far Cry 5',
         descripcion: 'La quinta edición del Far Cry. Un videojuego de guerra en primera persona.',
         descripcionLarga:'<p>El juego se desarrolla en el condado ficticio de Hope, Montana, donde un predicador llamado Joseph Seed ha logrado prominencia en la región.</p> <p> En realidad, Seed es un predicador radical y La Puerta del Edén es un culto militar del juicio final. Bajo su gobierno, el culto ha intentado convertir a los residentes del condado de Hope y los ha amenazado para evitar que pidan ayuda al gobierno federal. </p><p>Cuando un intento de detener a Seed resulta en la muerte de varios oficiales de la ley, el jugador es arrastrado al conflicto armado.</p>',
         precio: 2000,
         imagenBanner: 'assets/img/banners/banner_farcry5.jpg',
         imagen: 'assets/img/farcry5/fc1.webp',
         imagen2: 'assets/img/farcry5/fc2.webp',
         imagen3: 'assets/img/farcry5/fc3.webp',
         imagen4: 'assets/img/farcry5/fc4.webp',
         categoria: 'Guerra',
         cantidad: 1,
     },
     {
         id: 6,
         nombre: '2k23',
         descripcion: 'El juego para todos los amantes del basketball',
         descripcionLarga:'<p>NBA 2K23 es un videojuego de baloncesto de 2022 desarrollado por Visual Concepts y publicado por 2K Sports</p> <p> Basado en la Asociación Nacional de Baloncesto. Es la entrega número 24 de la franquicia NBA 2K y es el sucesor de NBA 2K22.</p><p>El mejor y más jugado simulador de basketball. Entre las nuevas adiciones a esta nueva edición, se suma la incorporación del Jordan Challenge, el cual no se veia en el juego desde el 2011.</p>',
         precio: 7500,
         imagenBanner: 'assets/img/banners/banner_2k23.jpg',
         imagen: 'assets/img/2k23/nba2k1.webp',
         imagen2: 'assets/img/2k23/nba2k2.webp',
         imagen3: 'assets/img/2k23/nba2k3.webp',
         imagen4: 'assets/img/2k23/nba2k4.webp',
         categoria: 'Deportes',
         cantidad: 1,
     }, 
    
 ];

const d=document;
const main= d.querySelector('main')
const navcarrito = d.getElementById('nav-carrito');


//CÓDIGO DEL BANNER

 const esconderBanner =()=>{
    let banner = d.querySelector(".banner")
    banner.setAttribute("class", "escondido")
 }


const obtenerBannerAleatorio = () => {
    return Math.floor(Math.random() * videojuegos.length);
}

let timeBanner = setTimeout(esconderBanner, 10000)

const rotacionBanner = () => {
    const indice = obtenerBannerAleatorio();
    const banner = videojuegos[indice];
    const bannerFlotante = d.createElement('img');
    contenedorCatalogo.appendChild(bannerFlotante);
    bannerFlotante.src = banner.imagenBanner;
    bannerFlotante.setAttribute("data-id", banner.id);
    bannerFlotante.setAttribute("class", "banner");
    bannerFlotante.addEventListener('click', function() {
        verDetalleBanner(bannerFlotante.getAttribute("data-id"));
    });
    clearTimeout(timeBanner)
    timeBanner =  setTimeout(esconderBanner, 10000)
}
const verDetalleBanner = (id) =>{
    const item = videojuegos.find((videojuego) => videojuego.id == id);
    detalle.push(item);
    crearVerDetalle(item);
};

//Función que elimina el catálogo para mostrar catálogo filtrado. Cambia las banderas para evitar errores en la funcionalidad de los botones.

const contenedorCatalogo =d.createElement('div');
const contenedorCatalogomodal =d.createElement('div');
const contenedorCatalogoModalCarrito =d.createElement('div');
const vaciarCatalogo = () =>{
    const catalogo = d.querySelector("#contenedorcatalogo");
    if (catalogo) {
        while (catalogo.firstChild) {
            catalogo.removeChild(catalogo.firstChild);
        }
    }
}
//Botones de filtrado:
let catalogoMostrado = false, guerraMostrado = false, aventuraMostrado = false, DeportesMostrado= false;

const mostrarBotones=()=>{
    const divFiltros= d.createElement("div"),
    divBotonTodo= d.createElement("div"),
    botonTodo = d.createElement("h2"),
    tituloFiltrar= d.createElement("h3"),
    divBotonesFiltro= d.createElement("div"),
    botonGuerra = d.createElement("button"),
    botonAventura = d.createElement("button"),
    botonDeportes = d.createElement("button");
    main.appendChild(divFiltros);
    divFiltros.setAttribute("class", "divFiltros")
    divFiltros.appendChild(tituloFiltrar);
    divFiltros.appendChild(divBotonTodo);
    tituloFiltrar.textContent = "Filtrar por"
    tituloFiltrar.setAttribute("class", "tituloFiltrar")
    divFiltros.appendChild(divBotonesFiltro);
    divBotonesFiltro.setAttribute("class", "divBotonesFiltro")
    divBotonTodo.appendChild(botonTodo);
    divBotonesFiltro.appendChild(botonGuerra);
    divBotonesFiltro.appendChild(botonAventura);
    divBotonesFiltro.appendChild(botonDeportes);
    botonTodo.innerHTML = 'TODOS NUESTROS<br>JUEGOS';
    botonTodo.setAttribute("id", "juegotodo")
    botonGuerra.textContent = "Juegos de Guerra"
    botonGuerra.setAttribute("id", "botonguerra")
    botonAventura.textContent = "Juegos de Aventura"
    botonAventura.setAttribute("id", "juegoaventura")
    botonDeportes.textContent = "Juegos de Deportes"
    botonDeportes.setAttribute("id", "juegoDeportes")
    botonTodo.addEventListener('click', function(){
        if (!catalogoMostrado) {
            catalogo(videojuegos);
            catalogoMostrado = true, guerraMostrado = false, aventuraMostrado = false, DeportesMostrado= false;
            botonTodo.style.textDecoration="underline 2px #EB297C";
            botonGuerra.classList.remove('divBotonesFiltrofocus')
            botonGuerra.classList.add('divBotonesFiltroNofocus')
            botonAventura.classList.remove('divBotonesFiltrofocus')
            botonAventura.classList.add('divBotonesFiltroNofocus')
            botonDeportes.classList.remove('divBotonesFiltrofocus')
            botonDeportes.classList.add('divBotonesFiltroNofocus')
        }
    });
    botonGuerra.addEventListener('click', function(){
        if (!guerraMostrado) {
            catalogoGuerra();
            catalogo(guerra)
            catalogoMostrado = false, guerraMostrado = true, aventuraMostrado = false, DeportesMostrado= false;
            guerra=[]
            botonTodo.style.textDecoration="none"
            botonGuerra.classList.add('divBotonesFiltrofocus')
            botonAventura.classList.remove('divBotonesFiltrofocus')
            botonAventura.classList.add('divBotonesFiltroNofocus')
            botonDeportes.classList.remove('divBotonesFiltrofocus')
            botonDeportes.classList.add('divBotonesFiltroNofocus')
        }
    });
    botonAventura.addEventListener('click', function(){
        if (!aventuraMostrado) {
            catalogoAventura();
            catalogo(aventura)
            catalogoMostrado = false, guerraMostrado = false, aventuraMostrado = true, DeportesMostrado= false;
            aventura=[]
            botonTodo.style.textDecoration="none"
            botonGuerra.classList.remove('divBotonesFiltrofocus')
            botonGuerra.classList.add('divBotonesFiltroNofocus')
            botonAventura.classList.add('divBotonesFiltrofocus')
            botonDeportes.classList.remove('divBotonesFiltrofocus')
            botonDeportes.classList.add('divBotonesFiltroNofocus')
        }
    });
    botonDeportes.addEventListener('click', function(){
        if (!DeportesMostrado) {
            catalogoDeportes();
            catalogo(Deportes)
            catalogoMostrado = false, guerraMostrado = false, aventuraMostrado = false, DeportesMostrado= true;
            Deportes=[]
            botonTodo.style.textDecoration="none"
            botonGuerra.classList.remove('divBotonesFiltrofocus')
            botonGuerra.classList.add('divBotonesFiltroNofocus')
            botonAventura.classList.remove('divBotonesFiltrofocus')
            botonAventura.classList.add('divBotonesFiltroNofocus')
            botonDeportes.classList.add('divBotonesFiltrofocus')
        }
    });
}
mostrarBotones()
//Catálogo completo
const catalogo =(catalogoCompleto) =>{
    vaciarCatalogo(catalogoCompleto);
    rotacionBanner()
    catalogoCompleto.forEach(videojuego => {
    const  imgVideojuegos= d.createElement('img'),
        divTituloPrecio= d.createElement('div'),
        tituloVideojuegos=d.createElement('h3'),
        precioVideojuego=d.createElement('p'),
        descripcionVideojuegos= d.createElement('p'),
        contenedorVideojuego=d.createElement('div'),
        contenedorbotones=d.createElement('div'),
        botonAgregar =d.createElement('button'),
        botonDetalle =d.createElement('button'),
        main = d.querySelector("main");
        main.appendChild(contenedorCatalogo);
        contenedorCatalogo.setAttribute("id", "contenedorcatalogo")
        contenedorCatalogo.appendChild(contenedorVideojuego);
        contenedorVideojuego.setAttribute("class", "contenedorVideojuego")
        contenedorVideojuego.appendChild(imgVideojuegos);
        contenedorVideojuego.appendChild(divTituloPrecio);
        divTituloPrecio.setAttribute("class", "divTituloPrecio")
        divTituloPrecio.appendChild(tituloVideojuegos);
        divTituloPrecio.appendChild(precioVideojuego);
        contenedorVideojuego.appendChild(descripcionVideojuegos);
        descripcionVideojuegos.textContent= videojuego.descripcion
        descripcionVideojuegos.setAttribute("class", "descripcionVideojuegos")
        contenedorVideojuego.appendChild(contenedorbotones);
        contenedorbotones.setAttribute("class", "contenedorbotones")
        contenedorbotones.appendChild(botonDetalle);
        contenedorbotones.appendChild(botonAgregar);
        tituloVideojuegos.textContent= videojuego.nombre
        precioVideojuego.textContent= '$'+videojuego.precio
        precioVideojuego.setAttribute("class", "precio")
        botonAgregar.textContent= "Agregar"
        botonAgregar.setAttribute("data-set", videojuego.id)
        botonAgregar.addEventListener('click', function(){agregarAlCarrito(videojuego.id)}); 
        botonDetalle.textContent= "Ver más"
        botonDetalle.setAttribute("data-set", videojuego.id)
        botonDetalle.addEventListener('click', function(){verDetalle(videojuego.id)});
        imgVideojuegos.src=videojuego.imagen;
        imgVideojuegos.alt=videojuego.nombre; 
        imgVideojuegos.addEventListener('click', function(){verDetalle(videojuego.id)} )
        imgVideojuegos.setAttribute('data-set', videojuego.id)
    });
}
catalogo(videojuegos)
 
//Catálogo de guerra
let guerra = [];
const catalogoGuerra = () =>{
    let categoria = "Guerra";
    let juegoGuerra=videojuegos.filter( videojuego => {
    return videojuego.categoria==categoria;
    });
    guerra.push(...juegoGuerra);
    return guerra;
};
//Catálogo de Deportes
let Deportes = []
const catalogoDeportes = () =>{
    let categoria = "Deportes";
    let juegoDeportes=videojuegos.filter( videojuego => {
    return videojuego.categoria==categoria;
    });
    Deportes.push(...juegoDeportes);
    return Deportes
 }
 //Catálogo de aventura
let aventura = [];
const catalogoAventura = () =>{
    let categoria = "Aventura";
    let juegoAventura=videojuegos.filter( videojuego => {
    return videojuego.categoria==categoria;
    });
    aventura.push(...juegoAventura);
    return aventura
 }




//CÓDIGO DEL CARRITO

let carrito = [];
const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];


if (carritoStorage.length > 0) {
    carrito = carritoStorage;
  }


const agregarAlCarrito = (id) =>{
     const existe = carrito.some(videojuego => videojuego.id == id)
     if(existe){
         const videojuegoCant = carrito.find(videojuego => videojuego.id == id).cantidad
         carrito.map(vj => {
           if(vj.id == id){
              vj.cantidad = videojuegoCant +1;
              return;
           }
         })
       } else {
         const item = videojuegos.find((videojuego) => videojuego.id == id)
         item.cantidad = 1;
         carrito.push(item)
       }
    cantidadCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


//Evento de sacar del carrito

 const sacarDelCarrito = (id) => {
    const existe = carrito.some(videojuego => videojuego.id == id)
    if(existe){
       const videojuegoCant = carrito.find(videojuego => videojuego.id == id).cantidad
       if (videojuegoCant > 1) {
         carrito.map(vj => {
           if(vj.id == id){
              vj.cantidad = videojuegoCant - 1;
              return;
           }
         })
       } else {
         for(let i = carrito.length - 1; i >= 0; i--) {
           if (carrito[i].id == id) {
             carrito.splice(i,1);
             break;
           }
         }
       }
     }
     actualizarCarrito()
     cantidadCarrito()
     localStorage.setItem('carrito', JSON.stringify(carrito));
 }



 //Mostrar Carrito
 const modalCarrito = d.createElement('div'),
    contenedorCarrito= d.createElement('div'),
    tituloCarrito = d.createElement('h3');
    modalCarrito.setAttribute('class', 'modalCarrito')
    const   divBotonFinalizarVaciar = d.createElement('div'),
    botonCerrar =d.createElement('button'),
    botonFinalizarCompra =d.createElement('button'),
    botonVaciar =d.createElement('button'),
    divPrecioTotal=d.createElement('div'),
    divPrecioSubTotal=d.createElement('div'),
    pPrecioTotal =d.createElement('p');

/* CARTEL SIN PRODUCTOS */
    const modalcartelSinProductos = d.createElement('div'),
    cartelSinProductos = d.createElement('div'), 
    sinProductosTitulo = d.createElement('h3'), 
    cerrarSinProductos = d.createElement('button');



/* FUNCION CREAR CARRITO   */  
const crearCarritoModal = () =>{
    main.appendChild(modalCarrito)
    modalCarrito.appendChild(contenedorCarrito)
    contenedorCarrito.setAttribute('class', 'contenedorCarrito')
    contenedorCarrito.appendChild(tituloCarrito)
    tituloCarrito.setAttribute('class', 'tituloCarrito')
    tituloCarrito.textContent= 'TU SELECCIÓN'
    divBotonFinalizarVaciar.setAttribute('class', 'divBotonFinalizarVaciar')
    contenedorCarrito.appendChild(botonCerrar)
    botonCerrar.setAttribute('class', 'botonCerrar')
    botonCerrar.textContent= 'X'
    botonCerrar.addEventListener('click', cerrarCarrito);

/*  FUNCION SUMAR TOTAL */ 
    const totalCarrito = carrito.reduce((totalActual,item)=>{
    return item.precio*item.cantidad + totalActual
},0)
    const videojuegosMostrados = new Set();

     carrito.forEach(videojuego =>{
        if (videojuegosMostrados.has(videojuego.id)) return;
        videojuegosMostrados.add(videojuego.id);
        const  tituloVideojuegosmodal=d.createElement('h3'),
        imgVideojuegosmodal= d.createElement('img'),
        precioVideojuegomodal=d.createElement('p'),
        cantidadVideojuegosmodal= d.createElement('p'),
        contenedorVideojuegomodal=d.createElement('div'),
        contenedorTituloPrecio=d.createElement('div'),
        contenedorbotonesmodalCarrito=d.createElement('div'),
        botonAgregarmodal =d.createElement('button'),
        botonEliminarmodal =d.createElement('button');
        contenedorCarrito.appendChild(contenedorCatalogoModalCarrito);
        contenedorCatalogoModalCarrito.setAttribute("id", "contenedorCatalogoModalCarrito")
        contenedorCatalogoModalCarrito.appendChild(contenedorVideojuegomodal)
        contenedorVideojuegomodal.setAttribute("class", "contenedorVideojuegomodal");
        contenedorVideojuegomodal.appendChild(imgVideojuegosmodal);
        contenedorVideojuegomodal.appendChild(contenedorTituloPrecio);
        contenedorTituloPrecio.setAttribute("class", "contenedorTituloPrecioCarrito")
        contenedorTituloPrecio.appendChild(tituloVideojuegosmodal);
        contenedorTituloPrecio.appendChild(precioVideojuegomodal);
        contenedorVideojuegomodal.appendChild(contenedorbotonesmodalCarrito);
        contenedorbotonesmodalCarrito.setAttribute("class", "contenedorbotonesmodalCarrito")
        contenedorbotonesmodalCarrito.appendChild(botonEliminarmodal);
        contenedorbotonesmodalCarrito.appendChild(cantidadVideojuegosmodal);
        cantidadVideojuegosmodal.textContent= videojuego.cantidad
        cantidadVideojuegosmodal.setAttribute("class", "cantidadVideojuegosmodal")
        contenedorbotonesmodalCarrito.appendChild(botonAgregarmodal);
        tituloVideojuegosmodal.textContent= videojuego.nombre
        precioVideojuegomodal.textContent= 'SUBTOTAL:$'+videojuego.precio*videojuego.cantidad
        precioVideojuegomodal.setAttribute("class", "precio")
        botonAgregarmodal.textContent= "+"
        botonAgregarmodal.setAttribute("id", videojuego.id)
        botonAgregarmodal.addEventListener('click', function (){agregarAlCarrito(videojuego.id); actualizarCarrito()}); 
        botonEliminarmodal.textContent= "-"
        botonEliminarmodal.setAttribute("class", "botonEliminarmodal")
        botonEliminarmodal.addEventListener('click',function(){sacarDelCarrito(videojuego.id)}); 
        botonEliminarmodal.setAttribute("id", videojuego.id)
        imgVideojuegosmodal.src=videojuego.imagen;
        imgVideojuegosmodal.alt=videojuego.nombre;
    })
    contenedorCarrito.appendChild(divPrecioTotal); 
    divPrecioTotal.appendChild(pPrecioTotal)
    pPrecioTotal.setAttribute('class', 'pPrecioTotal')
    pPrecioTotal.textContent= 'TOTAL:  $'+totalCarrito
    contenedorCarrito.appendChild(divBotonFinalizarVaciar)
    divBotonFinalizarVaciar.appendChild(botonFinalizarCompra)
    divBotonFinalizarVaciar.appendChild(botonVaciar)
    botonVaciar.textContent= 'VACIAR CARRITO'
    botonVaciar.setAttribute("class", "botonVaciar")
    botonVaciar.addEventListener('click', vaciarCarrito); 
    botonFinalizarCompra.textContent= 'FINALIZAR COMPRA'
    botonFinalizarCompra.setAttribute("class", "botonFinalizarCompra")
    botonFinalizarCompra.addEventListener('click', function irFormFinalizar(){
        if(carrito.length>0){
        finalizarCompra()}
        else{
            main.appendChild(modalcartelSinProductos);
            modalcartelSinProductos.appendChild(cartelSinProductos);
            cartelSinProductos.appendChild(sinProductosTitulo);
            modalcartelSinProductos.setAttribute('class', 'modalcartelSinProductos')
            cartelSinProductos.setAttribute('class', 'cartelSinProductos')
            modalcartelSinProductos.setAttribute('id', 'sinProductos')
            sinProductosTitulo.textContent= 'El carrito debe tener al menos un producto para poder finalizar la compra'
            cartelSinProductos.appendChild(cerrarSinProductos);
            cerrarSinProductos.textContent='X'
            cerrarSinProductos.setAttribute('class', 'botonCerrar')
            cerrarSinProductos.addEventListener('click',cerrarCartelSinProductos)
    }
}); 
}

function cerrarCartelSinProductos(){
    let cartelSinProductos = document.querySelector('#sinProductos')
    main.removeChild(cartelSinProductos)
    }

 //Ocultar Carrito
const ocultarModalCarrito = () =>{
    const catalogo = d.querySelector("#contenedorCatalogoModalCarrito");
    if (catalogo) {
        while (catalogo.firstChild) {
            catalogo.removeChild(catalogo.firstChild);
        }
    }
}

 //Botones Carrito
const cerrarCarrito =  () => {
    ocultarModalCarrito();
    main.removeChild(modalCarrito)
    carritoMostrado = false;
}

const mostrarCarrito = () => {
    crearCarritoModal()
}

//FUNCION DE ACTUALIZAR CARRITO
const actualizarCarrito =  () => {
    ocultarModalCarrito();
    main.removeChild(modalCarrito)
    mostrarCarrito()
}

/* CREATEELEMENT DE CARRITO Minuatura */

 let divcarrito =  d.createElement('div'), pcantidad = d.createElement('p'), imgcarrito = d.createElement('img'), buttoncarrito = d.createElement('button');

 function vaciarCarrito(){
    carrito.splice(0,carrito.length)
    cerrarCarrito()
    ocultarModalCarrito();
    pcantidad.textContent= carrito.length
    localStorage.clear();
    carritoMostrado = false;
 } 

 let carritoMostrado = false;

 function cantidadCarrito(){
    const totalCantidad = carrito.reduce((totalActual,item)=>{
        return item.cantidad + totalActual
    },0)
    navcarrito.appendChild(divcarrito)
    divcarrito.setAttribute('class', 'divcarrito')
    divcarrito.appendChild(buttoncarrito)
    pcantidad.textContent= totalCantidad
    pcantidad.setAttribute('class', 'pCantidad')
    buttoncarrito.appendChild(imgcarrito)
    buttoncarrito.appendChild(pcantidad)
    imgcarrito.src='assets/img/carrito.png'
    imgcarrito.setAttribute('class', 'imagenCarrito')
 }
    cantidadCarrito()

 buttoncarrito.addEventListener('click', function buttonCarrtio(){
    if (!carritoMostrado){
        mostrarCarrito()
        carritoMostrado = true;
    }
    else if (carritoMostrado){
        cerrarCarrito()
        carritoMostrado = false;
    }
}); 


// Ver detalle

let detalle = [];

const verDetalle = (id) =>{
    let idBoton = id;
    const item = videojuegos.find((videojuego) => videojuego.id == idBoton)
    detalle.push(item)
    crearVerDetalle()
 }


const modalDetalle = d.createElement('div');
modalDetalle.setAttribute('class', 'modalDetalle')

function crearVerDetalle(){
    main.appendChild(modalDetalle);
    detalle.forEach(videojuego =>{
        const  divDatosmodal=d.createElement('div'),
        divTitulomodal=d.createElement('div'),
        tituloVideojuegosmodal=d.createElement('h3'),
        categoriaVideojuegosmodal=d.createElement('h4'),
        imgVideojuegosmodal= d.createElement('img'),
        precioVideojuegomodal=d.createElement('p'),
        descripcionVideojuegosmodal= d.createElement('div'),
        contenedorVideojuegomodal=d.createElement('div'),
        contenedorbotonesmodal=d.createElement('div'),
        botonAgregarmodal =d.createElement('button'),
        botonCerrarDetalle =d.createElement('button'),
        contenedorImagenes= d.createElement('div'),
        contenedorSubImagenes= d.createElement('div'),
        imagen2 = d.createElement('img'),
        imagen3 = d.createElement('img'),
        imagen4 = d.createElement('img');
        modalDetalle.appendChild(contenedorCatalogomodal);
        contenedorCatalogomodal.setAttribute("id", "contenedorcatalogomodal")
        contenedorCatalogomodal.appendChild(contenedorVideojuegomodal);
        contenedorVideojuegomodal.setAttribute('class','contenedorVideojuegomodalDetalle')
        contenedorVideojuegomodal.appendChild(contenedorImagenes)
        contenedorImagenes.setAttribute('class','contenedor-producto')
        contenedorImagenes.appendChild(imgVideojuegosmodal)
        imgVideojuegosmodal.setAttribute('class','imagen-principal')
        contenedorImagenes.appendChild(contenedorSubImagenes)
        contenedorSubImagenes.setAttribute('class','contenedorSubImagenes')
        contenedorSubImagenes.appendChild(imagen2)
        imagen2.setAttribute('class','subImagen-1')
        contenedorSubImagenes.appendChild(imagen3)
        imagen3.setAttribute('class','subImagen-2')
        contenedorSubImagenes.appendChild(imagen4)
        imagen4.setAttribute('class','subImagen-3')
        contenedorVideojuegomodal.appendChild(divDatosmodal)
        divDatosmodal.setAttribute("class", "divDatosmodal")
        divDatosmodal.appendChild(divTitulomodal);
        divTitulomodal.setAttribute("class", "divTitulomodal")
        divTitulomodal.appendChild(tituloVideojuegosmodal);
        divTitulomodal.appendChild(categoriaVideojuegosmodal);
        divDatosmodal.appendChild(precioVideojuegomodal);
        categoriaVideojuegosmodal.textContent= videojuego.categoria
        divDatosmodal.appendChild(descripcionVideojuegosmodal);
        divDatosmodal.appendChild(contenedorbotonesmodal);
        contenedorbotonesmodal.setAttribute("class", "contenedorbotonesmodal")
        contenedorbotonesmodal.appendChild(botonAgregarmodal);
        contenedorVideojuegomodal.appendChild(botonCerrarDetalle);
        tituloVideojuegosmodal.textContent= videojuego.nombre
        precioVideojuegomodal.textContent= '$'+videojuego.precio
        precioVideojuegomodal.setAttribute("class", "precio")
        descripcionVideojuegosmodal.setAttribute("class", "descripcionLarga")
        descripcionVideojuegosmodal.innerHTML= videojuego.descripcionLarga
        botonAgregarmodal.textContent= "Agregar al carrito"
        botonAgregarmodal.setAttribute("data-set", videojuego.id)
        botonAgregarmodal.addEventListener('click', function (){agregarAlCarrito(videojuego.id)});
        botonCerrarDetalle.textContent= "X"
        botonCerrarDetalle.setAttribute("class", "CerrarDetalle")
        botonCerrarDetalle.addEventListener('click', cerrarDetalle); 
        let imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
        let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
        imagenPrincipal.src =videojuego.imagen;
        subImagenes[0].src =videojuego.imagen2;
        subImagenes[1].src =videojuego.imagen3;
        subImagenes[2].src =videojuego.imagen4;
        subImagenes[0].addEventListener("mouseover",accion1);
        subImagenes[1].addEventListener("mouseover",accion2);
        subImagenes[2].addEventListener("mouseover",accion3);
        subImagenes[0].addEventListener("mouseout",accion0);
        subImagenes[1].addEventListener("mouseout",accion0);
        subImagenes[2].addEventListener("mouseout",accion0);

        function accion0(){imagenPrincipal.src =videojuego.imagen}
        function accion1(){imagenPrincipal.src =videojuego.imagen2;}
        function accion2(){imagenPrincipal.src =videojuego.imagen3;}
        function accion3(){imagenPrincipal.src =videojuego.imagen4;}  
    })

}


//Botones Cerrar Detalle
const ocultarModalDetalle = () =>{
    const catalogo = d.querySelector("#contenedorcatalogomodal");
    if (catalogo) {
        while (catalogo.firstChild) {
            catalogo.removeChild(catalogo.firstChild);
        }
    }
}

const cerrarDetalle =  () => {
    detalle.splice (0, detalle.length)
    ocultarModalDetalle()
    main.removeChild(modalDetalle)
}

//FINALIZAR COMPRA

const modalFinalizarCompra = d.createElement('section'),
modalDivForm = d.createElement('div'),
modalForm = d.createElement('form'),
modalCerrar = d.createElement('button'),
modalDivTitulo = d.createElement('div'),
modalTitulo = d.createElement('h3'),
modalDivNombreMail = d.createElement('div'),
modalLabelNombre = d.createElement('label'),
modalInputNombre = d.createElement('input'),
modalLabelApellido = d.createElement('label'),
modalInputApellido = d.createElement('input'),
modalDivApellidoTelefono = d.createElement('div'),
modalLabelMail = d.createElement('label'),
modalInputMail = d.createElement('input'),
modalLabelTelefono = d.createElement('label'),
modalInputTelefono = d.createElement('input'),
modalFormTarjeta = d.createElement('form'),
modalDivTituloPago = d.createElement('div'),
modalTituloPago = d.createElement('h3'),
modalDivNumeroTarjeta = d.createElement('div'),
modalLabelNumeroTarjeta = d.createElement('label'),
modalInputNumeroTarjeta = d.createElement('input'),
modalDivVencimientoCVV = d.createElement('div'),
modalDivVencimiento = d.createElement('div'),
modalDivCVV = d.createElement('div'),
modalLabelFechaVencimiento = d.createElement('label'),
modalInputFechaVencimiento = d.createElement('input'),
modalLabelCVV = d.createElement('label'),
modalInputCVV = d.createElement('input'),
modalDivButtonsFinalizar = d.createElement('div'),
modalBotonFinalizarCompra = d.createElement('button'),
modalBotonVolverCarrito = d.createElement('button'),
divCampoIncompleto = d.createElement('div'),
modalpCampoIncompleto = d.createElement('p'),
pNombreIncompleto = d.createElement('p'),
pApellidoIncompleto = d.createElement('p'),
pMailIncompleto = d.createElement('p'),
pTelefonoIncompleto = d.createElement('p'),
pNumeroTarjetaIncompleto = d.createElement('p'),
pVencimientoIncompleto = d.createElement('p'),
pCVVIncompleto = d.createElement('p');
modalFinalizarCompra.setAttribute("class", "modalFinalizarCompra")
modalDivForm.setAttribute("class", "modalDivForm")
modalForm.setAttribute("class", "modalForm")
modalDivTitulo.setAttribute("class", "modalDivTitulo")
modalDivTituloPago.setAttribute("class", "modalDivTitulo")
modalDivButtonsFinalizar.setAttribute("class", "modalDivButtonsFinalizar")

/* TARJETA CREATE */
const modalContenedorTarjeta = d.createElement('div'),
modalDivTarjetaImg = d.createElement('div'),
modalTarjetaImg = d.createElement('img'),
modalDivTarjetaNumImg = d.createElement('div'),
modalInputTarjetaNumImg = d.createElement('input'),
modalDivTarjetaVencimientoImg = d.createElement('div'),
modalInputTarjetaVencimientoImg = d.createElement('input'),
modalDivTarjetaCVVImg = d.createElement('div'),
modalInputTarjetaCVVImg = d.createElement('input');
modalContenedorTarjeta.setAttribute("class", "contenedor-tarjeta")
modalDivTarjetaImg.setAttribute("class", "div-tarjeta-img")
modalDivTarjetaNumImg.setAttribute("class", "numero-en-tarjeta")
modalInputTarjetaNumImg.setAttribute("type", "text-field")
modalInputTarjetaNumImg.setAttribute("name", "tarjeta")
modalInputTarjetaNumImg.setAttribute("id", "tarjeta")
modalInputTarjetaNumImg.setAttribute("placeholder", "1234  4567  8910  1112")
modalInputTarjetaNumImg.setAttribute("readonly",'')
modalDivTarjetaVencimientoImg.setAttribute("class", "vencimiento-en-tarjeta")
modalInputTarjetaVencimientoImg.setAttribute("type", "text-field")
modalInputTarjetaVencimientoImg.setAttribute("name", "vencimiento")
modalInputTarjetaVencimientoImg.setAttribute("id", "vencimiento")
modalInputTarjetaVencimientoImg.setAttribute("placeholder", "05/25")
modalInputTarjetaVencimientoImg.setAttribute("readonly",'')
modalDivTarjetaCVVImg.setAttribute("class", "cvv-en-tarjeta")
modalInputTarjetaCVVImg.setAttribute("type", "text-field")
modalInputTarjetaCVVImg.setAttribute("name", "cvv")
modalInputTarjetaCVVImg.setAttribute("id", "cvv")
modalInputTarjetaCVVImg.setAttribute("placeholder", "123")
modalInputTarjetaCVVImg.setAttribute("readonly",'') 

const ocultarModalForm = () =>{
    const modalForm = d.querySelector(".modalFinalizarCompra");
    if (modalForm) {
        modalForm.remove();
    }
}

//FORMULARIO DE COMPRA

const finalizarCompra = () =>{
    main.appendChild(modalFinalizarCompra);
    cerrarCarrito()
    modalFinalizarCompra.appendChild(modalDivForm);
    modalDivForm.appendChild(modalCerrar);
    modalCerrar.addEventListener('click', function(){ocultarModalForm()});
    modalCerrar.textContent='X';
    modalCerrar.classList.add('botonCerrar')
    modalDivForm.appendChild(modalDivTitulo);
    modalDivTitulo.appendChild(modalTitulo);
    modalTitulo.textContent='Información Personal';
    modalDivForm.appendChild(modalForm);
    modalForm.setAttribute('method', 'post')
    modalForm.appendChild(modalDivNombreMail);
    modalDivNombreMail.appendChild(modalLabelNombre);
    modalDivNombreMail.setAttribute('class', 'modalDivNombreMail')
    modalLabelNombre.textContent='Nombre';
    modalDivNombreMail.appendChild(modalInputNombre);
    modalInputNombre.setAttribute('type', 'text')
    modalInputNombre.setAttribute('id', 'name')
    modalInputNombre.setAttribute('name', 'name')
    modalInputNombre.setAttribute('required', 'obligatorio')
    modalInputNombre.setAttribute('minlength', '1')
    modalInputNombre.setAttribute('maxlength', '30')
    modalInputNombre.setAttribute('placeholder', 'Ej: Joaquín')
    modalDivApellidoTelefono.appendChild(modalLabelApellido);
    modalDivApellidoTelefono.setAttribute('class', 'modalDivApellidoTelefono')
    modalLabelApellido.textContent='Apellido';
    modalDivApellidoTelefono.appendChild(modalInputApellido);
    modalInputApellido.setAttribute('type', 'text')
    modalInputApellido.setAttribute('id', 'lastname')
    modalInputApellido.setAttribute('name', 'lastname')
    modalInputApellido.setAttribute('required', 'obligatorio')
    modalInputApellido.setAttribute('minlength', '1')
    modalInputApellido.setAttribute('maxlength', '30')
    modalInputApellido.setAttribute('placeholder', 'Ej:Cahue')
    modalForm.appendChild(modalDivApellidoTelefono);
    modalDivNombreMail.appendChild(modalLabelMail);
    modalLabelMail.textContent='Mail';
    modalDivNombreMail.appendChild(modalInputMail);
    modalInputMail.setAttribute('type', 'email')
    modalInputMail.setAttribute('id', 'email')
    modalInputMail.setAttribute('name', 'email')
    modalInputMail.setAttribute('required', 'obligatorio')
    modalInputMail.setAttribute('minlength', '5')
    modalInputMail.setAttribute('maxlength', '30')
    modalInputMail.setAttribute('placeholder', 'Ej:test@mail.com')
    modalDivApellidoTelefono.appendChild(modalLabelTelefono);
    modalLabelTelefono.textContent='Telefono';
    modalDivApellidoTelefono.appendChild(modalInputTelefono);
    modalInputTelefono.setAttribute('type', 'number')
    modalInputTelefono.setAttribute('id', 'telefono')
    modalInputTelefono.setAttribute('name', 'telefono')
    modalInputTelefono.setAttribute('required', 'obligatorio')
    modalInputTelefono.setAttribute('minlength', '5')
    modalInputTelefono.setAttribute('maxlength', '30')
    modalInputTelefono.setAttribute('placeholder', '11123456789')
    modalDivForm.appendChild(modalDivTituloPago);
    modalDivTituloPago.appendChild(modalTituloPago);
    modalDivForm.appendChild(modalFormTarjeta);
    modalFormTarjeta.setAttribute('class', 'modalFormTarjeta')
    modalFormTarjeta.setAttribute('method', 'post')
    modalTituloPago.textContent='Datos de pago';
    modalFormTarjeta.appendChild(modalDivNumeroTarjeta);
    modalDivNumeroTarjeta.appendChild(modalLabelNumeroTarjeta);
    modalDivNumeroTarjeta.setAttribute('class', 'modalDivNumeroTarjeta')
    modalLabelNumeroTarjeta.textContent='Numero de la tarjeta';
    modalFormTarjeta.appendChild(modalInputNumeroTarjeta);
    modalInputNumeroTarjeta.setAttribute('id', 'numerotarjeta')
    modalInputNumeroTarjeta.setAttribute('oninput', 'InputTarjeta(this.value)')
    modalInputNumeroTarjeta.setAttribute('placeholder', 'Ej: 9999-9999-9999-9999')
    modalInputNumeroTarjeta.setAttribute('maxlength', '16')
    modalInputNumeroTarjeta.setAttribute('inputmode', 'numeric')
    modalFormTarjeta.appendChild(modalDivVencimientoCVV);
    modalDivVencimientoCVV.setAttribute('class', 'modalDivVencimientoCVV')
    modalDivVencimientoCVV.appendChild(modalDivVencimiento);
    modalDivVencimiento.appendChild(modalLabelFechaVencimiento);
    modalLabelFechaVencimiento.textContent='Fecha de vencimiento';
    modalDivVencimiento.appendChild(modalInputFechaVencimiento);
    modalInputFechaVencimiento.setAttribute('id', 'fechavencimiento')
    modalInputFechaVencimiento.setAttribute('oninput', 'InputVencimiento(this.value)')
    modalInputFechaVencimiento.setAttribute('placeholder', 'Ej: 05/25')
    modalInputFechaVencimiento.setAttribute('maxlength', '5')
    modalDivVencimientoCVV.appendChild(modalDivCVV);
    modalDivCVV.appendChild(modalLabelCVV);
    modalLabelCVV.textContent='CVV';
    modalDivCVV.appendChild(modalInputCVV);
    modalInputCVV.setAttribute('id', 'CVV')
    modalInputCVV.setAttribute('oninput', 'InputCVV(this.value)')
    modalInputCVV.setAttribute('placeholder', 'Ej: 123')
    modalInputCVV.setAttribute('maxlength', '3')
    modalDivForm.appendChild(modalContenedorTarjeta);
    modalContenedorTarjeta.appendChild(modalDivTarjetaImg);
    modalContenedorTarjeta.appendChild(divCampoIncompleto);
    divCampoIncompleto.setAttribute('class', 'divCampoIncompleto')
    modalDivTarjetaImg.appendChild(modalTarjetaImg);
    modalTarjetaImg.src='assets/img/tarjeta-credito.png'
    modalContenedorTarjeta.appendChild(modalDivTarjetaNumImg);
    modalDivTarjetaNumImg.appendChild(modalInputTarjetaNumImg);
    modalContenedorTarjeta.appendChild(modalDivTarjetaVencimientoImg);
    modalDivTarjetaVencimientoImg.appendChild(modalInputTarjetaVencimientoImg);
    modalContenedorTarjeta.appendChild(modalDivTarjetaCVVImg);
    modalDivTarjetaCVVImg.appendChild(modalInputTarjetaCVVImg);
    modalDivForm.appendChild(modalDivButtonsFinalizar);
    modalDivButtonsFinalizar.appendChild(modalBotonFinalizarCompra);
    modalBotonFinalizarCompra.textContent='Finalizar Compra';
    modalDivButtonsFinalizar.appendChild(modalBotonVolverCarrito);
    modalBotonVolverCarrito.textContent='Volver Al Carrito';
    modalBotonVolverCarrito.addEventListener('click', volverACarrito);
    modalBotonFinalizarCompra.addEventListener('click', function formulario () {
        if(modalInputNombre.value.length<=0){
            modalInputNombre.setAttribute('class', 'input-error')
            divCampoIncompleto.appendChild(pNombreIncompleto);
            pNombreIncompleto.textContent='Ingrese un nombre válido';
        }else{
            modalInputNombre.removeAttribute('class', 'input-error');
            pNombreIncompleto.textContent='';
        }
        if(modalInputApellido.value.length<=0){
            modalInputApellido.setAttribute('class', 'input-error')
            divCampoIncompleto.appendChild(pApellidoIncompleto);
            pApellidoIncompleto.textContent='Ingrese un apellido válido';
        }else{
            modalInputApellido.removeAttribute('class', 'input-error')
            pApellidoIncompleto.textContent='';
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(modalInputMail.value)) {
            modalInputMail.setAttribute('class', 'input-error')
            divCampoIncompleto.appendChild(pMailIncompleto);
            pMailIncompleto.textContent='Ingrese una dirección de correo electrónico válida';
        }else{
            modalInputMail.removeAttribute('class', 'input-error')
            pMailIncompleto.textContent='';
        }
        if(modalInputTelefono.value.length<=0 || isNaN(modalInputTelefono.value) ){
            modalInputTelefono.setAttribute('class', 'input-error')
            divCampoIncompleto.appendChild(pTelefonoIncompleto);
            pTelefonoIncompleto.textContent='Ingrese un número de teléfono válido';
        }else{
            modalInputTelefono.removeAttribute('class', 'input-error')
            pTelefonoIncompleto.textContent='';
        }
        if(modalInputNumeroTarjeta.value.length!==16 || isNaN(modalInputNumeroTarjeta.value)){
            modalInputNumeroTarjeta.setAttribute('class', 'input-error')
            divCampoIncompleto.appendChild(pNumeroTarjetaIncompleto);
            pNumeroTarjetaIncompleto.textContent='Ingrese un número de tarjeta válido';
        }else{
            modalInputNumeroTarjeta.removeAttribute('class', 'input-error')
            pNumeroTarjetaIncompleto.textContent='';
        }
        if(modalInputFechaVencimiento.value.length!==5){
            modalInputFechaVencimiento.setAttribute('class', 'input-error')
            divCampoIncompleto.appendChild(pVencimientoIncompleto);
            pVencimientoIncompleto.textContent='Ingrese una fecha de vencimiento válida';
        }else{
            modalInputFechaVencimiento.removeAttribute('class', 'input-error')
            pVencimientoIncompleto.textContent='';
        }
        if(modalInputCVV.value.length!==3){
            modalInputCVV.setAttribute('class', 'input-error')
            divCampoIncompleto.appendChild(pCVVIncompleto);
            pCVVIncompleto.textContent='Ingrese un número de clave válida';
        }else{
            modalInputCVV.removeAttribute('class', 'input-error')
            pCVVIncompleto.textContent='';
        }
        if(modalInputNombre.value.length>0 && modalInputApellido.value.length>0 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(modalInputMail.value) && modalInputTelefono.value.length>0 && !isNaN(modalInputTelefono.value) && modalInputNumeroTarjeta.value.length===16 && !isNaN(modalInputNumeroTarjeta.value) && modalInputFechaVencimiento.value.length===5 && modalInputCVV.value.length===3){
            carrito.splice(0,carrito.length)
            pcantidad.textContent= carrito.length
            localStorage.clear();
            carritoMostrado = false;
            pNombreIncompleto.textContent=''; pApellidoIncompleto.textContent=''; pMailIncompleto.textContent='';  pTelefonoIncompleto.textContent=''; pNumeroTarjetaIncompleto.textContent=''; pVencimientoIncompleto.textContent=''; pCVVIncompleto.textContent='';
            modalInputTarjetaNumImg.value=''
            modalInputTarjetaVencimientoImg.value=''
            modalInputTarjetaCVVImg.value=''
            modalForm.reset()
            modalFormTarjeta.reset()
            const graciasElemento = d.createElement('div'), graciasTitulo = d.createElement('h3');
            main.appendChild(graciasElemento);
            graciasElemento.appendChild(graciasTitulo);
            graciasElemento.setAttribute('class', 'graciasElemento')
            graciasElemento.setAttribute('id', 'gracias')
            graciasTitulo.textContent= '¡GRACIAS POR TU COMPRA!'
            modalFinalizarCompra.remove();
            setTimeout(desaparecerGracias, 3000) 
        }
    });
}

const desaparecerGracias= ()=>{
    let graciasElementos = document.querySelector('#gracias')
    graciasElementos.remove()
}

const volverACarrito = () =>{
    const formulario = d.querySelector(".modalFinalizarCompra");
    if (formulario) {
        while (formulario.firstChild) {
            formulario.removeChild(formulario.firstChild);
        }
    }
    main.removeChild(formulario)
    mostrarCarrito()
    carritoMostrado=true
} 

/* 
TARJETA */

function InputTarjeta(value) {
    value = value.replace(/(\d{4})/g, '$1   ');
    document.getElementById('tarjeta').value = value;
  }

function InputVencimiento(value) {
    value = value.replace(/(\d{2})(?=\d)/g, '$1/');
    document.getElementById('vencimiento').value = value;
    document.getElementById('fechavencimiento').value = value;
  }

function InputCVV(value) {
    document.getElementById('cvv').value = value;
  }


//EventListeners de ESC

document.addEventListener("keydown", function(event) {
    if(event.key === 'Escape'){
        cerrarDetalle()
    } });
document.addEventListener("keydown", function(event) {
    if(event.key === 'Escape'){
    	cerrarCarrito()
    } });

document.addEventListener("keydown", function(event) {
    if(event.key === 'Escape'){
        ocultarModalForm()
    } });
