function getId(reserva) {
    console.log(reserva.id);
    const dataJson = {
        idReserva: reserva.id
    }
    const dataJsonString = JSON.stringify(dataJson);
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'misReservas.aspx/cancelarReserva',
        data: dataJsonString,
        async: true,
        success: function (result) {
            console.log('RETORNAR',result.d);
            if (result.d === -1) {
                alert('No se pudo cancelar la reserva');
            } else {
                location.reload();
            }
        },
        error: function (e) {
            alert("Error: " + e);
        }
        });
}