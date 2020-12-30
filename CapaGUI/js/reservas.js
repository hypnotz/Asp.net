let contador = 0;
let idReserva;
function addAcompaniante(id) {
    idReserva = id.id;
    const contenedorReservas = document.getElementById('contenedor-reservas');
    contenedorReservas.innerHTML = "";
    let html = `<div class="participantes" id=${id.id}>
                            <table id=tabla>
                                <thead>
                                    <th>Rut</th>
                                    <th>Nombre</th>
                                    <th>Apellidos</th>
                                    <th>Eliminar</th>

                                </thead>
                                <tbody id="tbodyContainer">
                                    <tr id=${contador}>
                                        <td><input type='text' class="txtRut" placeholder='Rut'></td>
                                        <td><input type='text' class="txtNombre" placeholder='Nombre'></td>
                                        <td><input type='text' class="txtApellido" placeholder='Apellidos'></td>
                                        <td><button type="button" onclick="borrarFila(this);return false;" id="btnBorrar${contador}" class="btnBorrar">Borrar</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="cr-btn-add">
                                <button id="registrarUsuarios">Registrar Acompañantes</button>
                                <button id="addNewAcompaniante">Agregar Fila</button>
                            </div>

                        </div>`;
    contenedorReservas.innerHTML = html;
    document.getElementById('addNewAcompaniante').addEventListener('click', agregarFila);
    document.getElementById('registrarUsuarios').addEventListener('click', registrarReservas);
}

function agregarFila() {
    contador++;
    document.getElementById("tabla").insertRow(-1).id = contador;
    document.getElementById(contador).innerHTML = `<td><input type='text' class="txtRut" placeholder='Rut'></td>
                                       <td><input type='text' class="txtNombre" placeholder='Nombre'></td>
                                      <td><input type='text' class="txtApellido" placeholder='Apellidos'></td>
                                        <td><button type="button" onclick="borrarFila(this);return false;" id="btnBorrar${contador}" class="btnBorrar">Borrar</button></td>`;
}

function borrarFila(btn) {
    const btnId = btn.id

    const numberId = btnId.substring(9, btnId.length);
    document.getElementById(numberId).remove();
    console.log(numberId);
}

function registrarReservas(evt) {

    const arregloRut = document.getElementsByClassName('txtRut');
    const arregloNombre = document.getElementsByClassName('txtNombre');
    const arregloApellido = document.getElementsByClassName('txtApellido');
    let validador = false;
    for (let i = 0; i < arregloRut.length; i++) {
        const rut = arregloRut[i].value;
        const rutToSend = rut.replace(/[\W_]/g, '')
        if (!Rut(rutToSend) || rutToSend.length < 8 || rutToSend.length > 9 || arregloNombre[i].value.length === 0 || arregloApellido[i].value.length === 0) {
            arregloRut[i].style.borderColor = "red";
            arregloNombre[i].style.borderColor = "red";
            arregloApellido[i].style.borderColor = "red";
            validador = true;
        } else {
            arregloRut[i].style.borderColor = "black";
            arregloNombre[i].style.borderColor = "black";
            arregloApellido[i].style.borderColor = "black";
        }
    }

    if (validador) {
        return;
    }

    for (let i = 0; i < arregloRut.length; i++) {

        const dataJson = {
            rut: arregloRut[i].value,
            idReserva,
            nombre: arregloNombre[i].value,
            apellido: arregloApellido[i].value
        }
        const dataString = JSON.stringify(dataJson);
        $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: 'misReservas.aspx/addAcompaniantes',
            data: dataString,
            async: false,
            success: function (result) {
            },
            error: function (e) {
                console.log(e);
            }

        })
        console.log('Agregado')
    }
    location.reload();
}


function addService(id, flag) {
    if (flag) {
        idReserva = id.id;
    } else {
        idReserva = id;
    }
    const contenedorReservas = document.getElementById('contenedor-reservas');
    contenedorReservas.innerHTML = "";
    let html = `<div>
							<h3>Servicios</h3>
							<div class="container-service">
								<div id="transporte" class="img-service">
									<div class="absoluto" id="abs-transporte" onclick="addServiceTransporte(${idReserva});return false;">
										<h2 class="absoluto-font">Transporte</h2>
									</div>
								</div>
								
								<div id="turismo" class="img-service">
									<div class="absoluto" id="abs-turismo" onclick="addServiceTurismo(${idReserva});return false;">
										<h2 class="absoluto-font">Turismo</h2>
									</div>
								</div>
							</div>
						</div>
                            <div style="margin-top: 20px; align-self: center"><button style="margin-left: 20px; background-color: red"  onclick = "goBackReserva();return false;" >Volver</button ></div>`;
    contenedorReservas.innerHTML = html;

}

function goBackReserva() {
    location.reload();
}

function addServiceTransporte(id) {
    const contenedorReservas = document.getElementById('contenedor-reservas');
    contenedorReservas.innerHTML = "";
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'misReservas.aspx/getTransporte',
        async: true,
        success: function (result) {
            let html = `<h3>Transporte</h3>`;
            result.d.map((elemento) => {
                console.log(elemento)
                html += `
                <table>
                <th><h3>${elemento.Descripcion}</h3></th>
				<tr><td>Precio: ${elemento.Precio}</td></tr>
				<tr><td>Capacidad: ${elemento.Capacidad}</td></tr>
				<br />
				</table>
                <button style="margin-left: 20px"  onclick = "addServiceDetalle(${id}, ${elemento.IdTransporte});return false;" >Contratar</button >`
            });
            html += `<div style="margin-top: 20px"><button style="margin-left: 20px"  onclick = "addService(${id}, false);return false;" >Volver</button ></div>`

            contenedorReservas.innerHTML = html;
        },
        error: function (e) {
            console.log(e.message());
        }

    })

}




function addServiceDetalle(idReserva, idTransporte) {
    console.log(idTransporte)
    const contenedorReservas = document.getElementById('contenedor-reservas');
    contenedorReservas.innerHTML = "";
    let html = `<div id="banner-wrapper" class="lista">
				<div id="banner" class="box container">
					<h2 class="fontHeader">Reserva</h2>
						<div class="row formDpto">            
							<form>
								

								<div class="form-group">
									<label for="hora">Horario</label>
									<input type="time" class="form-control" id="hora" placeholder="00:00" />
                                    <div id="error-hora" style="color: red; display: none">Ingrese una hora valida por favor</div>
									<label for="direccion">Dirección</label>
									<input type="text" class="form-control" id="direccion" placeholder="Direción..." />
                                    <div id="error-dirección" style="color: red; display: none">*Campo obligatirio</div>
								</div>
								<div class="btnForm" style="margin-top: 20px">
									<button type="button" class="btn btn-primary" onclick="agendarTransporte(${idReserva}, ${idTransporte});return false;"">Agendar</button>
									<button type="button" onclick="addServiceTransporte(${idReserva});return false;" style="background-color: red" class="btn btn-light btnCancelar">Cancelar</button>
								</div>
								
							</form>
						</div>
					</div>
				</div>
			</div>`
    contenedorReservas.innerHTML = html;

}

function agendarTransporte(idReserva, idTransporte) {
    const hora = document.getElementById('hora').value;
    if (hora === '') {
        document.getElementById('error-hora').style.display = "block";
        return;
    } else {
        document.getElementById('error-hora').style.display = "none";
        $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: 'misReservas.aspx/getTransporte',
            async: true,
            success: function (result) {

            },
            error: function (e) {
                console.log(e.message());
            }

        })
    }
    console.log(hora);
}

function addServiceTurismo(id) {
    const contenedorReservas = document.getElementById('contenedor-reservas');
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'misReservas.aspx/getServiceTurismo',
        async: true,
        success: function (result) {
            let html = `<h3>Turismo</h3>`;
            result.d.map((elemento) => {
                console.log(elemento.Fecha);
                html +=
                    `<table>
                <th><h3>${elemento.Descripcion}</h3></th>
				<tr><td>Fecha: ${elemento.Fecha}</td></tr>
				<tr><td>Precio: ${elemento.Precio}</td></tr>
				<br />
				</table>
                <button style="margin-left: 20px"  onclick = "addServiceDetalleTurismo(${id}, ${elemento.IdTurismo});return false;" >Contratar</button >`
            });
            html += `<div style="margin-top: 20px"><button style="margin-left: 20px"  onclick = "addService(${id}, false);return false;" >Volver</button ></div>`

            contenedorReservas.innerHTML = html;
        },
        error: function (e) {
            console.log(e.message());
        }

    })
}

function addServiceDetalleTurismo(idReserva, idTurismo) {
    const contenedorReservas = document.getElementById('contenedor-reservas');
    contenedorReservas.innerHTML = "";

    const data = {
        idReserva,
        idTurismo
    }

    const dataToSend = JSON.stringify(data);

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'misReservas.aspx/insertTurismo',
        data: dataToSend,
        async: true,
        success: function (result) {
            let html = `<div id="banner-wrapper" class="lista">
					<div id="banner" class="box container">
						<div class="cr-success">
							<h2>Servicio Listo</h2>
							<img src="Image/victo-bueno.png" class="victoBueno"/>
                        </div>
					</div>
				</div>`;
            $("#contenedor-reservas").empty();
            $("#contenedor-reservas").append(html);
            setTimeout(function () { goBackReserva() }, 5000);
        },
        error: function (e) {
            console.log(e.message());
        }

    })

    let html = `<div id="banner-wrapper" class="lista">
					<div id="banner" class="box container">
						<div class="cr-success">
							<h2>Servicio Listo</h2>
							<img src="Image/victo-bueno.png" class="victoBueno"/>
                        </div>
					</div>
				</div>`;
    contenedorReservas.innerHTML = html;
    setTimeout(function () { goBackReserva() }, 5000);

}


function agendarTransporte(idReserva, idTransporte) {
    const horario = document.getElementById('hora').value;
    const direccion = document.getElementById('direccion').value;
    if (horario === '') {
        document.getElementById('error-hora').style.display = "block";
        return;
    }
    else if (direccion === '') {
        document.getElementById('error-dirección').style.display = "block";
        return;
    } else {
        document.getElementById('error-hora').style.display = "none";
        document.getElementById('error-dirección').style.display = "none";
        console.log(idReserva);
        console.log(idTransporte);

        const data = {
            idTransporte,
            direccion,
            horario,
            idReserva
        }

        const dataToSend = JSON.stringify(data);
        console.log(dataToSend);
        $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: 'misReservas.aspx/insertTransporte',
            data: dataToSend,
            async: true,
            success: function (result) {
                let html = `<div id="banner-wrapper" class="lista">
					<div id="banner" class="box container">
						<div class="cr-success">
							<h2>Servicio Listo</h2>
							<img src="Image/victo-bueno.png" class="victoBueno"/>
                        </div>
					</div>
				</div>`;
                $("#contenedor-reservas").empty();
                $("#contenedor-reservas").append(html);
                setTimeout(function () { goBackReserva() }, 5000);
            },
            error: function (e) {
                console.log(e.message());
            }

        })
    }
    console.log(hora);
}
















