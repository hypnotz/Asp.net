$(document).ready(function () {

    let tabla = document.getElementsByClassName('tableContainer');
    for (let item of tabla) {
        let idTabla = item.id.substr(5, item.id.length);
        getAcompaniantesByReserva(idTabla);
        getServiciosByReserva(idTabla);
    }


});



const getAcompaniantesByReserva = (idReserva) => {

    const data = {
        idReserva
    }

    const dataString = JSON.stringify(data)

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'misReservas.aspx/GetAcompaniantes',
        data: dataString,
        async: false,
        success: function (result) {

            let table = document.getElementById(`tabla${idReserva}`);

            console.log(result.d);
            result.d.map((elemento) => {
                console.log(elemento)
                let row = table.insertRow(0);
                let cell1 = row.insertCell(0);
                cell1.innerHTML = `Acompañante: <b>${elemento}</b>`;
            })

        },
        error: function (e) {
            console.log(e);
        }

    })
    console.log('Agregado')
}


const getServiciosByReserva = (idReserva) => {
    const data = {
        idReserva
    }

    const dataString = JSON.stringify(data)

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'misReservas.aspx/GetServiciosTransporteTurismo',
        data: dataString,
        async: false,
        success: function (result) {
            let table = document.getElementById(`tabla${idReserva}`);

            console.log(result.d);
            result.d.map((elemento) => {
                console.log(elemento)
                let row = table.insertRow(0);
                let cell1 = row.insertCell(0);
                cell1.innerHTML = `Servicio: <b>${elemento.NombreServicio}</b> Horario: ${elemento.Fecha}`;

            })
        },
        error: function (e) {
            console.log(e);
        }

    })
    console.log('Agregado')
}

