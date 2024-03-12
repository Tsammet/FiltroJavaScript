const pagComparar = document.getElementById('policia')

const paginaCiudadanos = document.getElementById('ciudadanos')


const paginaComparar = () => {

    pagComparar.style.display = "block"
    paginaCiudadanos.style.display = "none";

}

const pagCiudadanos = () => {

    pagComparar.style.display = "none"
    paginaCiudadanos.style.display = "block";

}


const funcionPaginas = () => {

    const paginaCompararNavLink = document.getElementById('comparar-Nav');
    paginaCompararNavLink.addEventListener('click', paginaComparar);

    const ciudadanosNavLink = document.getElementById('ciudadanos-Nav');
    ciudadanosNavLink.addEventListener('click', pagCiudadanos);

}