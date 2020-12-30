window.onload = function () {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'index.aspx/estaConectado',
        async: true,
        success: function (result) {

            if (result.d) {
                document.getElementById('sesion').textContent = "Cerrar Sesion";
                document.getElementById('registro').textContent = "Mis Reservas";
                document.getElementById('sesion').addEventListener('click', cerrarSesion);
                document.getElementById('registro').addEventListener('click', registrar);

            }

        }


    })

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
            url: 'index.aspx/cerrarSesion',
            async: true,
            success: function (result) {
                document.getElementById('sesion').textContent = "Iniciar Sesión";
                document.getElementById('registro').textContent = "Registrarse";
                location.reload();
            },
            error: function (e) {
                console.log(e);
            }

        })
    }
}
