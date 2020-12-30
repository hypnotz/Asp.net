let contador = 0;
let idReserva;
let idGlobal;

function agregarMultaCheckOut (id) {
    //idReserva = id.id;
    const contenedorReservas = document.getElementById('contenedorMulta');
    contenedorReservas.innerHTML = "";
    let html = `<div class="participantes" >
                            <table id=tabla>
                                <thead>
                                    <th>VALOR </th>
                                    <th>DESCRIPCION</th>
                                    <th>Eliminar</th>
                                </thead>
                                <tbody id="tbodyContainer">
                                    <tr id=${contador}>
                                        <td><input type='number' class="txtTotal" placeholder='Valor Multa'></td>
                                        <td><input type='text' class="txtDescripcion" placeholder='Descripcion'></td>
                                        <td><button type="button" onclick="borrarFila(this);return false;" id="btnBorrar${contador}" class="btnBorrar">Borrar</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="cr-btn-add">
                                
                                <button id="addNewAcompaniante">Agregar Fila</button>
                            </div>
                        </div>`;
    contenedorReservas.innerHTML = html;
    document.getElementById('addNewAcompaniante').addEventListener('click', agregarFila);
    document.getElementById('registrarUsuarios').addEventListener('click', registrarCheckoutMultaDetalle);
}
function agregarFila() {
    event.preventDefault();
    console.log('testeando' + idGlobal);

    contador++;
    document.getElementById("tabla").insertRow(-1).id = contador;
    document.getElementById(contador).innerHTML = `
                                        <td><input type='text' class="txtTotal" placeholder='Valor Multa'></td>
                                        <td><input type='text' class="txtDescripcion" placeholder='Descripcion'></td>
                                        <td><button type="button" onclick="borrarFila(this);return false;" id="btnBorrar${contador}" class="btnBorrar">Borrar</button></td>`;
}
function borrarFila(btn) {
    const btnId = btn.id
    const numberId = btnId.substring(9, btnId.length);
    document.getElementById(numberId).remove();
    console.log(numberId);
}

function registrarCheckoutMultaDetalle() {
    
    const arregloTotal = document.getElementsByClassName('txtTotal');
    const arregloDescripcion = document.getElementsByClassName('txtDescripcion');

    let multaTotal = 0;
    let hoy = new Date();
    let momentHoy = moment(hoy).format("DD/MM/YYYY");

    for (let i = 0; i < arregloTotal.length; i++) {
        multaTotal = parseInt(arregloTotal[i].value) + multaTotal
        }
        const dataJson = {
            multaTotal,
            idRecursoHumano: 5,
            fecha: momentHoy
         }

        const dataString = JSON.stringify(dataJson);
        $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: 'CheckOut.aspx/agregarMultayDetalle',
            data: dataString,
            async: false,
            success: function (result) {
            },
            error: function (e) {
                console.log(e);
            }
        })
    if (arregloTotal.length > 0) {
        registrarDetalle();
    } else {
        console.log('Agregado sin detalle')
    }
}

function registrarDetalle() {

    const arregloTotal = document.getElementsByClassName('txtTotal');
    const arregloDescripcion = document.getElementsByClassName('txtDescripcion');

    let multaTotal = 0;

    for (let i = 0; i < arregloTotal.length; i++) {
        const dataJson = {
            totalMulta: parseInt(arregloTotal[i].value),
            descripcion: arregloDescripcion[i].value 
        }
    
    const dataString = JSON.stringify(dataJson);
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'CheckOut.aspx/agregarDetalle',
        data: dataString,
        async: false,
        success: function (result) {
            window.location.href = 'listaCheckOut.aspx';
        },
        error: function (e) {
            console.log(e);
        }
    })
        console.log('Agregado')
    }
}


