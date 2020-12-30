<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="registroUsuario.aspx.cs" Inherits="CapaGUI.registroUsuario" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<%-- <link rel="stylesheet" href="estilos/estiloRegistro.css" />--%>
 <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<link rel="stylesheet" href="estilos/index.css" />
    <title></title>
</head>
<body class="is-preload no-sidebar">
		<div id="page-wrapper">
			<!-- Header -->
				<div id="header-wrapper">
					<header id="header" class="container">
						<!-- Logo -->
							<div id="logo">
								<h1><a href="index.aspx">Turismo real</a></h1>
								<span>by DeMaster</span>
							</div>
						<!-- Nav -->
							<nav id="nav">
								<ul>
									<li><a href="index.aspx">Home</a></li>
									<li><a href="departamentos.aspx">Departamentos</a></li>
								</ul>
							</nav>
					</header>
				</div>
			<!-- Main -->
				<div id="main-wrapper">
					<div class="container">
						<div id="content">
							<!-- Content -->
								<article>
						<form id="form1" runat="server">
						<div class="form-group">
							<h2>Crear cuenta</h2>
						</div>
						<%--NOMBRE USUARIO--%>
						<div class="form-groupp">
							<label class="control-label" for="nombreUsuario">Nombre de usuario</label>
							<div class="testNombreUsuario">
								<asp:TextBox ID="txtnombreUsuario" type="text" AutoCompleteType="None"  maxlength="50" runat="server"></asp:TextBox>
								<p style="color: red; display: none" id="mensajeNombreUsuario"></p>
							</div>
						</div>
						<%--CONTRASEÑA--%>
						<div class="form-groupp">
							<label class="control-label" for="signupPassword">Contraseña (Letras, números, simbolos, mayúsculas y minúsculas)</label>
							<div class="textBox"><asp:TextBox ID="txtContraseña" AutoCompleteType="None" runat="server" type="password" maxlength="25"  length="40"></asp:TextBox></div>
						</div>
						<%--	RUT--%>
						<div class="form-groupp">
							<label class="control-label" for="signupPassword">Rut</label>
							<div class="textBoxx"><asp:TextBox ID="txtRut" runat="server" AutoCompleteType="None" type="text" maxlength="25"  length="90"></asp:TextBox></div>
						</div>
						<%--	NOMBRES--%>

						<div class="form-groupp">
							<label class="control-label" for="signupPassword">Nombres</label>
							<div class="textBox"><asp:TextBox ID="txtNombres" AutoCompleteType="None" runat="server" type="text" maxlength="25"  length="90"></asp:TextBox></div>
						</div>

						<%--	APELLIDO_PATERNO--%>
						<div class="form-group">
							<label class="control-label" for="signupPassword">Apellido Paterno</label>
							<div class="textBox"><asp:TextBox ID="txtApellidoPaterno" AutoCompleteType="None" runat="server" type="text" maxlength="25" length="40"></asp:TextBox></div>
						</div>

						<%--	APELLIDO_MATERNO--%>
						<div class="form-groupp">
							<label class="control-label" for="signupPassword">Apellido Materno</label>
							<div class="textBox">
							<asp:TextBox ID="txtApellidoMaterno" AutoCompleteType="None" runat="server" type="text" maxlength="25"  length="40"></asp:TextBox></div>
						</div>
						<%--	CORREO--%>
						<div class="form-groupp">
							<label class="control-label" for="signupPassword">Correo</label>
							<div class="textBox"><asp:TextBox ID="txtCorreo" AutoCompleteType="None" runat="server" type="text" maxlength="90"  length="96"></asp:TextBox></div>
						</div>
						<%--	FECHA NACIMIENTO--%>
						<div class="form-groupp">
							<label class="control-label" for="signupPassword">Fecha Nacimiento</label>
						<div class="textBox"><asp:TextBox ID="txtFecha" AutoCompleteType="None" textmode="Date" runat="server"></asp:TextBox></div>
                            
						</div>
						<%--	TELEFONO--%>
						<div class="form-groupp">
							<label class="control-label" for="signupPassword">Telefono</label>
							<div class="textBox"><asp:TextBox ID="txtTelefono" AutoCompleteType="None" runat="server" type="text" maxlength="25"  length="40"></asp:TextBox></div>
						</div>
							<br />
						<div class="form-groupp">
<%--							<button id="signupSubmit" type="submit" class="btn btn-info btn-block">Crea tu cuenta</button>--%>
							<asp:Button ID="btnRegistrar" runat="server" Text="Crea tu cuenta" OnClick="btnRegistrar_Click" Enabled="False" BackColor="#CCCCCC" />
						</div>
						<p class="form-group">Al crear una cuenta, usted acepta nuestros <a href="#">Terminos de uso</a> y nuestra <a href="#">Politica de privacidad</a>.</p>
						
						<p>Tienes cuenta? <a href="iniciarSesion.aspx">Ingresa aqui!</a></p>
					</form>
								</article>
						</div>
					</div>
				</div>
			<!-- Footer -->
				<div id="footer-wrapper">
					<footer id="footer" class="container">
						<div class="row">
						
						
						<div class="col-6 col-6-medium col-12-small">
							<!-- Links -->
								<section class="widget links">
									<h3>Nuestra oficina</h3>
									<ul class="style2">
									
										<li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.321448445874!2d-70.60249214899974!3d-33.519027180659826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d06757799979%3A0x913dd02e5daeb4b7!2sMallplaza%20Vespucio!5e0!3m2!1ses-419!2scl!4v1604101668485!5m2!1ses-419!2scl" width="500" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></li>
									</ul>
								</section>
						</div>
							<div class="col-6 col-6-medium col-12-small">
								<!-- Contact -->
									<section class="widget contact last">
										<h3>Contactanos</h3>
										<br />
										<ul>
											<li><a href="#" class="icon brands fa-faceb"><img src="Fotos/facebook.png" width="40" height="40"/></a></li>
											<li><a href="#" class="icon brands fa-faceb"><img src="Fotos/instagram.png" width="40" height="40"/></a></li>
											<li><a href="#" class="icon brands fa-faceb"><img src="Fotos/gmail.png" width="40" height="40"/></a></li>
											<li><a href="#" class="icon brands fa-faceb"><img src="Fotos/gorjeo.png" width="40" height="40"/></a></li>
										</ul>
										<p>PONERUNADIRECCION<br />
										ASDASDASD<br />
										(ASDSADASDASDASD</p>
									</section>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<div id="copyright">
									<ul class="menu">
										<li>&copy; Todos los derechos reservados - 2020</li>
									</ul>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		<!-- Scripts -->
			<script src="js/jquery.min.js"></script>
			<script src="js/jquery.dropotron.min.js"></script>
			<script src="js/browser.min.js"></script>
			<script src="js/breakpoints.min.js"></script>
			<script src="js/util.js"></script>
			<script src="js/main.js"></script>
			<script src="js/cerrarSesion.js"></script>
			<script src="js/registrar.js"></script>
	</body>
</html>