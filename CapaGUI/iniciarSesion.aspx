<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="iniciarSesion.aspx.cs" Inherits="CapaGUI.iniciarSesion" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    <link rel="stylesheet" href="estilos/estiloLogin.css" />
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <link href="css/inicio-sesion.css" rel="stylesheet" />

</head>
<body>
    <form id="form1" runat="server" class="form">
        <div class="container-cr">
            <div class="contenedor-login">
                <h4 class="text-center font-weight-bold">Iniciar sesion </h4>
                <label class="lbl" for="InputEmail1">Usuario</label>
                <%--<input type="email" class="form-control" id="InputEmail1"  placeholder="Ingresa tu usuario" />--%>
                <asp:TextBox ID="txtUsuario" type="text" autocomplete="off" MaxLength="50" runat="server"></asp:TextBox>
                <label class="lbl" for="InputPassword1">Contraseña</label>
                <%--<input type="password" class="form-control" id="InputPassword1" placeholder="Ingresa tu contraseña" />--%>
                <asp:TextBox ID="txtContrasena" type="password" autocomplete="off" MaxLength="50" runat="server"></asp:TextBox>
               
                <asp:Button ID="txtIniciar" runat="server" Text="Iniciar sesion" class="btn btn-primary btn-block btnIniciar" OnClick="txtIniciar_Click" />
                <br />
                <asp:Label ID="Label1" runat="server" ForeColor="Red"></asp:Label>
                <div class="form-footer">
                    <p>Si no tienes cuenta <a href="registroUsuario.aspx">Registrate aquí</a></p>
                </div>
            </div>
        </div>

    </form>
</body>
</html>
