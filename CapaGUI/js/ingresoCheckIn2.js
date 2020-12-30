const divMuestraIn = document.getElementById('ContenedorMuestraIn');



window.onload = () => {

    let html;

    html = `
  <b><label for="lname">Pago restante:</label></b>
  <input type="text" id="pagoRestante" name="lname"><br>
    <br>
    <input type="button" onclick="cargaCheckIN()" value="Ingresar Check In">
    `;

    divMuestraIn.innerHTML = html;
}


const cargaCheckIN = () => {
    let hoy = new Date();
    let momentHoy = moment(hoy).format("DD/MM/YYYY");
    
    const pagoRest = document.getElementById('pagoRestante').value;

        let multaTotal = 0;
        
    const dataJson = {
                fecha: momentHoy,
                pagoRestante: pagoRest,
                idRecursoHumano : 5
            }
            const dataString = JSON.stringify(dataJson);
            $.ajax({
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                url: 'checkIn.aspx/registrarCheckIn',
                data: dataString,
                async: false,
                success: function (result) {
                    console.log('CheckIN OK')
                    window.location.href = 'listaCheckOut.aspx';
                },
                error: function (e) {
                    console.log(e);
                }
            })
            
        }
   
