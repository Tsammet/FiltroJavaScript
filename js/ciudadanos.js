const listaCiudadanos = [];

const loadCiudadanos = async () => {

    try {
        // listaCiudadanos.length = 0;
        const respuesta = await fetch('http://localhost:3000/ciudadanos');

        if (!respuesta.ok) {
            throw new Error('Error al cargar Los Ciudadanos. Estado', respuesta.status);
        }

        const ciudadanos = await respuesta.json();
        listaCiudadanos.push(...ciudadanos);


    } catch (error) {
        console.error("Error al cargar los ciudadanos. ", error.meesage)
    }

}

const mostrarListadoCiudadanos = async () => {

    await loadCiudadanos();

    const ciudadanosForm = document.getElementById('ciudadanos-form');
    const listadoCiudadanos = document.getElementById('listado-ciudadanos');

    ciudadanosForm.style.display = "none";
    listadoCiudadanos.style.display = "block";

    const tablaCiudadanos = document.getElementById('tablaCiudadanos')
    tablaCiudadanos.innerHTML = ``


    for (const ciudadano of listaCiudadanos) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${ciudadano.nombre_completo}</td>
            <td>${ciudadano.direccion}</td>
            <td>${ciudadano.celular}</td>            
            <td>${ciudadano.codigo_adn}</td>            
            <td>${ciudadano.id}</td>   
        `

        tablaCiudadanos.appendChild(tr)

    }


    const existingButton = listadoCiudadanos.querySelector('#volverButton');
    if (!existingButton) {
        const volverButton = document.createElement('button');
        volverButton.textContent = 'Volver al Formulario';
        volverButton.id = 'volverButton';
        volverButton.addEventListener('click', volverAlFormularioCiudadanos);
        listadoCiudadanos.appendChild(volverButton);
    }

}

const volverAlFormularioCiudadanos = () => {

    const ciudadanosForm = document.getElementById('ciudadanos-form');
    const listadoCiudadanos = document.getElementById('listado-ciudadanos');

    ciudadanosForm.style.display = "block";
    listadoCiudadanos.style.display = "none";

}

const cargarFormularioProfesores = async () => {

    const ciudadanosForm = document.getElementById('ciudadanos-form');
    ciudadanosForm.innerHTML = `
    <form>
    <div id="ciudadanos-form-container">
        <div id="ciudadanos-formulario">

            <h1> Nuevo Ciudadano </h1>

            <label for = "nombreCiudadano">Nombre Completo: </label>
            <input type = "text" id = "nombreCiudadano" required> 

            <label for = "direccion">Direcciòn: </label>
            <input type = "text" id = "direccion" required> 

            <label for = "celular">Celular: </label>
            <input type = "number" id = "celular" required> 

            <label for = "adn">ADN Ciudadano: </label>
            <input type = "text" id = "adn" required> 

            <label for = "id_ciudadano">Id Ciudadano: </label>
            <input type = "text" id = "id_ciudadano" required> 

            <button type = "button" onclick = "crearCiudadano()">Agregar Ciudadano</button>

            <button type = "button" onclick = "mostrarListadoCiudadanos()">Mostrar Ciudadanos</button>


        </div>
    </div>
    </form>
    `;

    const listadoCiudadanos = document.getElementById('listado-ciudadanos');
    listadoCiudadanos.style.display = "none"


}

const crearCiudadano = async () => {

    const nombreCompletoInput = document.getElementById('nombreCiudadano');
    const direccionInput = document.getElementById('direccion');
    const celularInput = document.getElementById('celular');
    const adnInput = document.getElementById('adn');
    const idCiudadanoInput = document.getElementById('id_ciudadano')

    const nombre_completo = nombreCompletoInput.value;
    const direccion = direccionInput.value;
    const celular = celularInput.value;
    const adn = adnInput.value;
    const idCiudadano = idCiudadanoInput.value;


    const ciudadanoAdn = listaCiudadanos.find((ciudadano) => ciudadano.codigo_adn === adn)

    if(ciudadanoAdn){
        alert('Lo siento, ya hay un adn exactamente igual')
        return;
    }
    

    const nuevoCiudadano = {
        nombre_completo: nombre_completo,
        direccion: direccion,
        celular: celular,
        codigo_adn: adn,
        id: idCiudadano,
    }

    await guardarCiudadanoJson(nuevoCiudadano);
    await loadCiudadanos();

    nombreCompletoInput.value = '';
    direccionInput.value = '';
    celularInput.value = '';
    adnInput.value = '';
    idCiudadanoInput.value = '';

    alert('Ciudadano Registrado Con Exito! ¡Bienvenido! :D');


    return nuevoCiudadano


}

const guardarCiudadanoJson = async (nuevoCiudadano) => {

    try {
        const respuesta = await fetch('http://localhost:3000/ciudadanos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoCiudadano),
        });

        if (!respuesta.ok) {
            throw new Error('Error al registrar el ciudadano. Estado: ', respuesta.status);
        }
        const ciudadanoCreado = await respuesta.json();

        console.log('Profesor registrado:', ciudadanoCreado);


    } catch (error) {
        console.log("Error al cargar Ciudadanos", error.meesage)

    }



}