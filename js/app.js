document.addEventListener('DOMContentLoaded', async () => {
    funcionPaginas();
    pagCiudadanos();

    await loadCiudadanos();
    cargarFormularioProfesores();
    mostrarListadoCiudadanos();

    mostrarFormularioCmparar();
})
