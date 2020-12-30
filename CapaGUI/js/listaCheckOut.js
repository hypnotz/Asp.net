const contenedor = document.getElementById('contenedorListaCheckOut');
var idEnvia = "";

window.onload = function getListaCheckOut() {
	$.ajax({
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'listaCheckOut.aspx/getReservasCheckOut',
		async: true,
		success: function (result) {
			console.log(result.d)
			let html = "";
			$("#contenedorListaCheckOut").empty();
			html += `
					<div id="banner-wrapper" class="lista">
					<div id="banner" class="box container">
						<div class="row">
							<div class="col-lg-3">`
			result.d.map((elemento) => {
				html += `<p>Departamento: ${elemento.IdDpto}</p>
								<p>Id Reserva: ${elemento.IdReserva}</p>
                                <p>Id Cliente:  ${elemento.IdCliente}</p>
								<p>Fecha de Reserva: ${elemento.Fecha}</p>
                                <p>Fecha de inicio: ${elemento.FechaInicio}</p>
								<p>Fecha Fin:  ${elemento.FechaFin}</p>
								<br>
								<input type="button" value="Ingresar Check Out" onclick="enviarIdNet(${elemento.IdReserva}); ">
								<br>
								<br>
							`
				}
			)
			contenedor.innerHTML = html;
		},
		error: function (error) {
			console.log(error);
		}
	})
}
function enviarIdNet(idCheckInID) {
	const dataJson = {
		idCheckInz: idCheckInID
	}
	const dataString = JSON.stringify(dataJson);
	$.ajax({
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'CheckOut.aspx/almacenarIdCheckIN',
		data: dataString,
		async: false,
		success: function (result) {
			
		},
		error: function (e) {
			console.log(e);
		}
	})
	window.location.href = 'CheckOut.aspx';
}

















