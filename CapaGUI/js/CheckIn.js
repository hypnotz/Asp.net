
const divCheckIn = document.getElementById('contenedorListaCheckIn');



function enviarIdFirstx(idRecibeIn) {
	console.log(idRecibeIn);
	const dataJson = {
		idCheckInzz: idRecibeIn
	}
	const dataString = JSON.stringify(dataJson);
	$.ajax({
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'checkIn.aspx/almacenarIdCheckINn',
		data: dataString,
		async: false,
		success: function (result) {

		},
		error: function (e) {
			console.log(e);
		}
	})
	window.location.href = 'checkIn.aspx';
}





