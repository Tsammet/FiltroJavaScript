const mostrarFormularioCmparar = () => {
    const adnCompararForm = document.getElementById('compararAdn-form');
    adnCompararForm.innerHTML = `

    <form>
    <div id="compararAdn-form-container">
        <div id="compararAdn-formulario">

            <h1> Muestra ADN </h1>

            <label for = "adn_sospechoso">ADN SOSPECHOSO: </label>
            <input type = "text" id = "adn_sospechoso" required> 

            <button type = "button" onclick = "compararAdnCulpable()">Comparar ADN</button>

        </div>
    </div>
    </form>
    `;
}

const compararAdnCulpable = () => {
    
    const adnCompararForm = document.getElementById('compararAdn-form');

    const adnSospechoso = document.getElementById('adn_sospechoso').value

    const adnSospechosoSplit = adnSospechoso.split("")

    let resultados = [];

    for (let ciudadano of listaCiudadanos){
        let newCount = 0;
        const adnCiudadano1 = ciudadano.codigo_adn.split("");

        for (let i = 0; i < 20; i++){

            if(adnCiudadano1[i] === adnSospechosoSplit[i]){
                newCount += 5;
            }
        }

        resultados.push({
            nombre: ciudadano.nombre_completo,
            porcentaje: newCount
        });
    }

    resultados.sort((a, b) => b.porcentaje - a.porcentaje);

    const cincoPrimeros = resultados.slice(0, 5);

    let mensaje = "Los cinco ciudadanos más sospechosos son:\n";
    cincoPrimeros.forEach((resultado, index) => {
        mensaje += `${index + 1}. ${resultado.nombre} - ${resultado.porcentaje} %\n`;
    });

    console.log(cincoPrimeros);
    alert(mensaje);
}