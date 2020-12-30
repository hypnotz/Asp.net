
const contenedorDpto = this.document.getElementById('contenedorDpto');
let pago;
let fechaIni;
let fechaFin;
let sesionIni = false;

let fechaIniPago = '';
let fechaFinPago = '';


let tarjetaValida = false;
let cvvValido = false;

window.onload = function () {
	$.ajax({
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'departamentos.aspx/estaConectado',
		async: true,
		success: function (result) {

			if (result.d) {
				document.getElementById('sesion').textContent = "Cerrar Sesion";
				document.getElementById('registro').textContent = "Mis Reservas";
				document.getElementById('sesion').addEventListener('click', cerrarSesion);
				document.getElementById('registro').addEventListener('click', registrar);

				sesionIni = true;
			}

		}


	})

	getDepartamento();


}

function registrar(evt) {
	if (document.getElementById('registro').text === "Mis Reservas") {
		evt.preventDefault();
		location.href = "misReservas.aspx";
	}
}


function cerrarSesion(evt) {
	if (document.getElementById('sesion').text === "Cerrar Sesion") {
		evt.preventDefault();
		$.ajax({
			type: 'POST',
			contentType: 'application/json; charset=utf-8',
			url: 'departamentos.aspx/cerrarSesion',
			async: true,
			success: function (result) {
				document.getElementById('sesion').textContent = "Iniciar Sesión";
				document.getElementById('registro').textContent = "Registrarse";
				sesionIni = false;
				location.reload();
			},
			error: function (e) {
				console.log(e.message());
			}

		})
	}
}


///////////////////////


function getDepartamento() {
	$.ajax({
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'departamentos.aspx/getDepartamento',
		async: true,
		success: function (result) {
			console.log(result.d)
			let html = "";
			$("#contenedorDpto").empty();
			result.d.map((elemento) => {
				let imagen = "";
				if (elemento.Base64Image === "No Image") {
					imagen = '<h2>Aún no hay imagen disponible para este departamento :(</h2>'
				} else {
					imagen = `<img src="${elemento.Base64Image}" class="imagenLista" />`;
				}
				console.log(elemento);
				html += `
				<div id="banner-wrapper" class="lista">
					<div id="banner" class="box container">
						<div class="row">
							<div class="contenedorInfoDpto col-7 col-12-medium">
								<h2>${elemento.Direccion}</h2>
								<p>${elemento.Condiciones}</p>
                                <p>Cantidad de piezas ${elemento.CantidadPiezas}</p>
                                <p>Cantidad de baños ${elemento.CantidadBanos}</p>
								<p>Tarifa diaria $${elemento.Tarifa}</p>

							</div>
							<div class="col-5 col-12-medium">
								${imagen}`
				if (sesionIni) {
					html += `<li><a href="#" class="button large icon solid fa-arrow-circle-right btnGoDpto" onclick="goDpto(${elemento.IdDepto}, '${elemento.Direccion}'); return false; ">Arrendar Ahora</a></li>
							</div>
						</div>
					</div>
				</div>`;
				}
				else {
					html += `<li><a href="iniciarSesion.aspx" class="button large icon solid fa-arrow-circle-right btnGoDpto">Iniciar Sesión</a></li>
							</div>
						</div>
					</div>
				</div>`;
				}
			})
			contenedorDpto.innerHTML = html;
		},
		error: function (error) {
			console.log(error);
		}
	})
}

function goDpto(idDpto, direccion) {
	$("#contenedorDpto").empty();
	$('html, body').animate({ scrollTop: 0 }, 'slow');
	contenedorDpto.innerHTML = `
			<div id="banner-wrapper" class="lista">
				<div id="banner" class="box container">
					<h2 class="fontHeader">Reserva</h2>
						<div class="row formDpto">            
							<form>
								<div class="form-group">
									<label for="fechaInicio">Fecha Inicio</label>
									<input type="text" id="fechaIni" autocomplete="off" class="datepicker"/>
									<div class="cr-error" id="error-ini">
										Error
									</div>
								</div>
								<div class="form-group">
									<label for="fechaFin">Fecha Fin</label>
									<input type="text" id="fechaFin" autocomplete="off" class="datepicker"/>
									<div class="cr-error" id="error-fin">
										Error
									</div>
								</div>
								<div class="form-group">
									<label for="pago">Pago</label>
									<input type="text" class="form-control" id="pago" disabled="true" placeholder="$" />
								</div>
								<div class="form-group">
									<label for="dpto">Departamento</label>
									<input type="text" class="form-control" id="dpto" placeholder="" />
								</div>
								<div class="btnForm">
									<button type="button" onClick="crearReserva(${idDpto});return false;" class="btn btn-primary btnEnviar">Enviar</button>
									<button type="button" onclick="getDepartamento();return false;" class="btn btn-light btnCancelar">Cancelar</button>
								</div>
								
							</form>
						</div>
					</div>
				</div>
			</div>`
	$("#fechaIni").datepicker({
		dateFormat: 'dd/mm/yy', onSelect: function (evt) {
			fechaIniPago = evt;
			getTarifa(idDpto);
		}
	});
	$("#fechaFin").datepicker({
		dateFormat: 'dd/mm/yy', onSelect: function (evt) {
			fechaFinPago = evt;
			getTarifa(idDpto);
		}
	}); const dpto = document.getElementById('dpto');
	dpto.value = direccion;
	dpto.disabled = true;
	contenedorDpto.focus();
	document.getElementById('fechaIni').addEventListener('blur', comprobarDia);

}


function getTarifa(idDpto) {
	if (fechaIniPago !== '' && fechaFinPago !== '') {
		//Errores
		let error = false;
		let errorIni = document.getElementById('error-ini');
		let errorFin = document.getElementById('error-fin');
		//Obtener fechas
		const fechaInicio = document.getElementById('fechaIni').value;
		const fechaTermino = document.getElementById('fechaFin').value;
		//Parsear la fecha
		let dateInicio = moment(fechaInicio, "DD/MM/YYYY").toDate();
		let dateTermino = moment(fechaTermino, "DD/MM/YYYY").toDate();
		let hoy = new Date();

		if (dateInicio < hoy) {
			errorIni.style.display = 'block';
			errorIni.innerHTML = "Fecha no puede ser menor a la fecha actual";
			error = true;
		} else {
			errorIni.style.display = 'none'
			errorIni.innerHTML = "";
		}

		if (dateTermino < dateInicio) {
			errorFin.style.display = 'block';
			errorFin.innerHTML = "Fecha no puede ser menor a la fecha inicial";
			error = true;
		}
		else {
			errorFin.style.display = 'none'
			errorFin.innerHTML = '';
		}

		if (fechaInicio === '' || fechaTermino === '') {
			alert('Porfavor complete todos los campos');
			return;
		}

		if (error) {
			return;
		}
		console.log('ahora');
		const dataToSend = {
			idDpto: idDpto,
			fechaInicio: fechaIniPago,
			fechaFin: fechaFinPago
		}

		const dataString = JSON.stringify(dataToSend);

		$.ajax({
			type: 'POST',
			contentType: 'application/json; charset=utf-8',
			url: 'departamentos.aspx/getTarifa',
			data: dataString,
			async: true,
			success: function (result) {
				document.getElementById('pago').value = (result.d);
				pago = (result.d / 2);
			},
			error: function (error) {
				alert("Error al consultar al realizar la reserva: " + error.message, "_self");
			}
		});
	}
}

function comprobarDia(evt) {
	console.log(document.getElementById('fechaIni').value);
}


function pagar(dataToString) {
	console.log(dataToString)
	//console.log("pagado");
	//$.ajax({

	//	type: 'POST',
	//	contentType: 'application/json; charset=utf-8',
	//	url: 'departamentos.aspx/getReserva',
	//	data: dataToSendString,
	//	async: true,
	//	success: function (result) {

	//		let html = `<div id="banner-wrapper" class="lista">
	//				<div id="banner" class="box container">
	//					<div class="cr-success">
	//						<h2>Reserva Lista</h2>
	//						<img src="Image/victo-bueno.png" class="victoBueno"/>
	//                       </div>
	//				</div>
	//			</div>`;
	//		$("#contenedorDpto").empty();
	//		$("#contenedorDpto").append(html);
	//	},
	//	error: function (error) {
	//		alert("Error al consultar al realizar la reserva: " + error.message, "_self");
	//	}


	//});
}


function crearReserva(idDpto) {
	//Errores
	let error = false;
	let errorIni = document.getElementById('error-ini');
	let errorFin = document.getElementById('error-fin');
	//Obtener fechas
	const fechaInicio = document.getElementById('fechaIni').value;
	const fechaTermino = document.getElementById('fechaFin').value;
	//Parsear la fecha
	let dateInicio = moment(fechaInicio, "DD/MM/YYYY").toDate();
	let dateTermino = moment(fechaTermino, "DD/MM/YYYY").toDate();
	let hoy = new Date();

	if (dateInicio < hoy) {
		errorIni.style.display = 'block';
		errorIni.innerHTML = "Fecha no puede ser menor a la fecha actual";
		error = true;
	} else {
		errorIni.style.display = 'none'
		errorIni.innerHTML = "";
	}

	if (dateTermino < dateInicio) {
		errorFin.style.display = 'block';
		errorFin.innerHTML = "Fecha no puede ser menor a la fecha inicial";
		error = true;
	}
	else {
		errorFin.style.display = 'none'
		errorFin.innerHTML = '';
	}

	if (fechaInicio === '' || fechaTermino === '') {
		alert('Porfavor complete todos los campos');
		return;
	}

	if (error) {
		return;
	}


	const data1 = {
		fechaFin: fechaTermino,
		fechaIni: fechaInicio,
		idDpto
	}

	const dataToSend1 = JSON.stringify(data1);

	$.ajax({

		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'departamentos.aspx/FechasValidas',
		data: dataToSend1,
		async: true,
		success: function (result) {

			console.log(result.d)

			if (result.d.length <= 0) {

				const pagoCorreo = document.getElementById('pago').value;


				const dataJson = {
					FechaInicio: fechaInicio,
					FechaFin: fechaTermino,
					Pago: pagoCorreo,
					IdDpto: idDpto
				}

				const dataToSend = {
					reserva: dataJson
				}

				const dataToSendString = JSON.stringify(dataToSend);
				const montoAPagar = document.getElementById('pago').value;
				console.log(dataToSendString);
				let html = `<div id="banner-wrapper" class="lista">
					<div id="banner" class="box container">
						<div class="pago">
							<div class="headerPago">
								<div class="contenedorTarjeta">
									<img src="Image/tarjetaCredito.png" class="logoTarjeta"/>
									<h3 class="font-tarjeta">Tarjeta Crédito</h3>
								</div>
								<div class="monto">
									<h4>$${montoAPagar}</h4>
								</div>

							</div>
							<div class="contenedorPago">
								<div class="form-group">
									<input type="text" id="inputTarjeta" class="inputTarjeta" placeholder="N° de tarjeta de crédito"/>
									<div>
										<select class="inputTarjetaSecundaria">
										  <option value="volvo">01</option>
										  <option value="saab">02</option>
										  <option value="mercedes">03</option>
										  <option value="audi">04</option>
										  <option value="volvo">05</option>
										  <option value="saab">06</option>
										  <option value="mercedes">07</option>
										  <option value="audi">08</option>
										  <option value="volvo">09</option>
										  <option value="saab">10</option>
										  <option value="mercedes">11</option>
										  <option value="audi">12</option>
										</select>
										<select class="inputTarjetaSecundaria">
										  <option value="volvo">2020</option>
										  <option value="saab">2021</option>
										  <option value="mercedes">2022</option>
										  <option value="audi">2023</option>
										  <option value="volvo">2024</option>
										  <option value="saab">2025</option>
										  <option value="mercedes">2026</option>
										</select>
									</div>

									<input type="text" id="inputTarjetaSecundaria" class="inputTarjetaSecundaria" placeholder="CVV"/>
									<div class="btnForm">
										<button type="button" id="pagar" class="btn btn-primary">Pagar</button>
										<button type="button" onclick="getDepartamento();return false;" class="btn btn-light btnCancelar">Cancelar</button>
									</div>

								</div>
							</div>
                            
						</div>
					</div>
				</div>`
				$("#contenedorDpto").empty();
				$("#contenedorDpto").append(html);


				document.getElementById('inputTarjeta').addEventListener("blur", () => {

					const tarjeta = document.getElementById('inputTarjeta')
					if (tarjeta.value.length !== 16) {
						console.log(tarjeta.value.length)
						tarjeta.style.borderColor = "red";
						tarjetaValida = false;
						return;
					} else {
						tarjeta.style.borderColor = "green";
						tarjetaValida = true;
					}
				})

				document.getElementById('inputTarjetaSecundaria').addEventListener("blur", () => {

					const cvv = document.getElementById('inputTarjetaSecundaria')
					if (cvv.value.length !== 3) {
						cvv.style.borderColor = "red"
						cvvValido = false;
						return;

					} else {
						cvv.style.borderColor = "green"
						cvvValido = true;
					}
				})
				$("#pagar").click(function () {

					if (!tarjetaValida || !cvvValido) {
						return;
					}

					console.log("pagado");
					$.ajax({

						type: 'POST',
						contentType: 'application/json; charset=utf-8',
						url: 'departamentos.aspx/getReserva',
						data: dataToSendString,
						async: true,
						success: function (result) {

							let html = `<div id="banner-wrapper" class="lista">
					<div id="banner" class="box container">
						<div class="cr-success">
							<h2>Reserva Lista</h2>
							<img src="Image/victo-bueno.png" class="victoBueno"/>
                        </div>
					</div>
				</div>`;
							$("#contenedorDpto").empty();
							$("#contenedorDpto").append(html);
						},
						error: function (error) {
							alert("Error al consultar la reserva: " + error.message, "_self");
						}


					});
				})








			} else {
				alert(`Departamento ocupado desde el ${result.d[0]} hasta el ${result.d[1]}`, '_self')
			}






		},
		error: function (error) {
			alert("Error al consultar al consultar las fechas " + error.message, "_self");
		}


	});


	// 	document.getElementById('error-ini').style.display = "block";



}


function comprobarFecha(evt) {
	console.log(evt.target.value);
}
