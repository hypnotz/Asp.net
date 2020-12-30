let auxUsuario = false;
let auxContrasena = false;
let auxRut = false;
let auxNombre = false;
let auxApellidoP = false;
let auxApellidoM = false;
let auxCorreo = false;
let auxFechaNac = false;
let auxFono = false;

$(document).ready(function () {
    $("#txtnombreUsuario").attr("autocomplete", "off");
    $("#txtNombres").attr("autocomplete", "off");
    $("#txtApellidoMaterno").attr("autocomplete", "off");
    $("#txtCorreo").attr("autocomplete", "off");
    $("#txtTelefono").attr("autocomplete", "off");
    $("#txtRut").attr("autocomplete", "off");
    $("#txtFecha").attr("autocomplete", "off");
    $("#txtApellidoPaterno").attr("autocomplete", "off");

});


const validarEmail = (email) => {
    const expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email)) {
        return false;
    } else {
        return true;
    }

}

const utilValidateName = (nombre) => {
    const expr = /^[A-Za-z\s'äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+$/;
    return expr.test(nombre);
}

const utilValidateNumber = (nombre) => {
    const expr = /^[0-9]+$/;
    return expr.test(nombre);
}

const validarClave = (contrasenna) => {
    if (contrasenna.length >= 8) {
        let mayuscula = false;
        let minuscula = false;
        let numero = false;
        let caracterRaro = false;
        for (let i = 0; i < contrasenna.length; i++) {
            if (contrasenna.charCodeAt(i) >= 65 && contrasenna.charCodeAt(i) <= 90) {
                mayuscula = true;
            }
            else if (contrasenna.charCodeAt(i) >= 97 && contrasenna.charCodeAt(i) <= 122) {
                minuscula = true;
            }
            else if (contrasenna.charCodeAt(i) >= 48 && contrasenna.charCodeAt(i) <= 57) {
                numero = true;
            }
            else {
                caracterRaro = true;
            }
        }
        if (mayuscula === true && minuscula === true && caracterRaro === true && numero === true && caracterRaro === true) {
            return true;
        }
    }
    return false;
}



$("#txtnombreUsuario").blur(function (e) {
    e.preventDefault();
    const nombre = $("#txtnombreUsuario").val();
    const mensaje = document.getElementById('mensajeNombreUsuario');
    if (nombre.length >= 3) {

        const data = {
            usuario: nombre
        }

        const dataToSend = JSON.stringify(data);

        $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: 'registroUsuario.aspx/checkUser',
            data: dataToSend,
            async: true,
            success: function (result) {
                if (result.d) {
                    $("#txtnombreUsuario").css("border-color", "green");
                    mensaje.innerHTML = "";
                    mensaje.style.display = "none";
                    auxUsuario = true;
                } else {
                    mensaje.innerHTML = "Usuario no disponible";
                    mensaje.style.display = "block";
                    $("#txtnombreUsuario").css("border-color", "red");
                    auxUsuario = false;
                }

            },
            error: function (error) {
                $("#txtnombreUsuario").css("border-color", "red");
                mensaje.innerHTML = "Servicio no disponible";
                mensaje.style.display = "block";
                auxUsuario = false;
            }
        });


    } else {
        $("#txtnombreUsuario").css("border-color", "red");
        auxUsuario = false;
    }
    validarCampos();
})


$("#txtNombres").blur(function (e) {
    e.preventDefault();
    const nombre = $("#txtNombres").val();
    if (utilValidateName(nombre)) {
        $("#txtNombres").css("border-color", "green");
        auxNombre = true;
    } else {
        $("#txtNombres").css("border-color", "red");
        auxNombre = false;
    }
    validarCampos();
})

$("#txtApellidoPaterno").blur(function (e) {
    e.preventDefault();
    const nombre = $("#txtApellidoPaterno").val();
    if (utilValidateName(nombre)) {
        $("#txtApellidoPaterno").css("border-color", "green");
        auxApellidoP = true;
    } else {
        $("#txtApellidoPaterno").css("border-color", "red");
        auxApellidoP = false;
    }
    validarCampos();
})

$("#txtApellidoMaterno").blur(function (e) {
    e.preventDefault();
    const nombre = $("#txtApellidoMaterno").val();
    if (utilValidateName(nombre)) {
        $("#txtApellidoMaterno").css("border-color", "green");
        auxApellidoM = true;
    } else {
        $("#txtApellidoMaterno").css("border-color", "red");
        auxApellidoM = false;
    }
    validarCampos();
})


$("#txtCorreo").blur(function (e) {
    e.preventDefault();
    const nombre = $("#txtCorreo").val();
    if (validarEmail(nombre)) {
        $("#txtCorreo").css("border-color", "green");
        auxCorreo = true;
    } else {
        $("#txtCorreo").css("border-color", "red");
        auxCorreo = false;
    }
    validarCampos();
})

$("#txtTelefono").blur(function (e) {
    e.preventDefault();
    const nombre = $("#txtTelefono").val();
    if (nombre.length === 9 && utilValidateNumber(nombre)) {
        $("#txtTelefono").css("border-color", "green");
        auxFono = true;
    } else {
        $("#txtTelefono").css("border-color", "red");
        auxFono = false;
    }
    validarCampos();
})

$("#txtContraseña").blur(function (e) {
    e.preventDefault();
    const nombre = $("#txtContraseña").val();
    if (validarClave(nombre)) {
        $("#txtContraseña").css("border-color", "green");
        auxContrasena = true;
    } else {
        $("#txtContraseña").css("border-color", "red");
        auxContrasena = false;
    }
    validarCampos();
})

$("#txtRut").blur(function (e) {
    e.preventDefault();

    const nombre = $("#txtRut").val();
    const nombreToSend = nombre.replace(/[\W_]/g, '');

    if (!Rut(nombreToSend) || nombreToSend.length < 8 || nombreToSend.length > 9) {
        $("#txtRut").css("border-color", "red");
        auxRut = false;

    } else {
        $("#txtRut").css("border-color", "green");
        $("#txtRut").val(formaterRut(nombreToSend));
        auxRut = true;
    }
    validarCampos();
})

$("#txtFecha").blur(function (e) {
    e.preventDefault();
    const nombre = $("#txtFecha").val();
    console.log(nombre);
    const fecha = new Date(nombre);
    const hoy = new Date();
    const fechaSinParse = (hoy.getFullYear() - 18) + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate();
    const fechaParse = new Date(fechaSinParse);
    if (fecha <= fechaParse) {
        $("#txtFecha").css("border-color", "green");
        $("#txtFecha").val(formaterRut(nombre));
        auxFechaNac = true;
    } else {
        $("#txtFecha").css("border-color", "red");
        auxFechaNac = false;
    }

    validarCampos();
})


const validarCampos = () => {
    if (auxUsuario && auxContrasena && auxRut && auxNombre && auxApellidoP && auxApellidoM && auxCorreo && auxFechaNac && auxFono) {
        $("#btnRegistrar").css("background-color", "#0090c5");
        $("#btnRegistrar").attr("disabled", false);

    } else {
        $("#btnRegistrar").css("background-color", "#CCCCCC");
    }

}