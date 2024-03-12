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

    let newCount = 0
    let maxCount = 0
    let maxSospechoso = ''

    for (let ciudadano of listaCiudadanos){
        newCount = 0
        const adnCiudadano1 = ciudadano.codigo_adn.split("")

        for ( i = 0; i < 20; i++){

            if(adnCiudadano1[i] === adnSospechosoSplit[i]){

                newCount += 5

                if(newCount > maxCount){
                    maxCount = newCount;
                    maxSospechoso = ciudadano.nombre_completo
                }
            }
        }
        
        
        
    }
    console.log(maxSospechoso + " RESPUESTA")

    alert(`EL ciudadano màs sospechoso fue: ${maxSospechoso} Con un % de ${maxCount}`)


    return maxSospechoso, maxCount
}