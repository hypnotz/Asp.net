

function fnProcesaPaciente(comp) {
    //alert(comp.id);
    let id = comp.id;
    let dataToSend = `{'id' : ${id}}`;
    //console.log(id);
    $.ajax({

        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'autenticarCliente.aspx/habilitarCuenta',
        data: dataToSend,
        async: true,
        success: function (result) {
            console.log('Ivanovich');
            alert('Funcionó');
        },
        error: function (error) {
            alert("Error al consultar el login", "_self");
        }
    });
}