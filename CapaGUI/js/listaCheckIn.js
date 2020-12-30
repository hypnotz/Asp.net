const contenedor = document.getElementById('contenedorListaCheckIn');

window.onload = function getListaCheckIn() {
	$.ajax({
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'listaCheckIn.aspx/getReservasCheckIn',
		async: true,
		success: function (result) {
			console.log(result.d)

			let html = "";
			$("#contenedorListaCheckIn").empty();
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
								<input type="button" onclick="enviarIdFirstx(${elemento.IdReserva});" value="Ingresar Check In">
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





















