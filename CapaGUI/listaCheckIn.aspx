<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="listaCheckIn.aspx.cs" Inherits="CapaGUI.listaCheckIn" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
	    <link href="estilos/index.css" rel="stylesheet" />
    <link href="assets/css/fontawesome-all.min.css" rel="stylesheet" />
    <link href="css/departamento.css" rel="stylesheet" />
    <link href="jqueryUi/jquery-ui.min.css" rel="stylesheet" />

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<link rel="stylesheet" href="estilos/index.css" />
</head>
<body>
    <body class="is-preload homepage">
		<div id="page-wrapper">
			<!-- Header -->
				<div id="header-wrapper">
					<header id="header" class="container">
						<!-- Logo -->
							<div id="logo">
								<h1><a href="index.aspx">Turismo Real</a></h1>
							</div>
						<!-- Nav -->
							<nav id="nav">
								<ul>
									<li class="current"><a href="index.aspx">Inicio</a></li>
									<li><a href="listaCheckIn.aspx">Lista Check In</a></li>
									<li><a href="listaCheckOut.aspx">Lista Check Out</a></li>
									<li><a href="departamentos.aspx">Departamentos</a></li>
									<li><a href="">Cerrar Sesion</a></li>
								</ul>
							</nav>
					</header>
				</div>
			<!-- Banner -->
			<div id="contenedorListaCheckIn" class="lista">
				<!--Aqui van los dptos-->
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
										<p><b>Direccion <br />Vicuña Mackenna 7110, La Florida.</b>
										<br />
										</p>
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


    <script src="assets/js/jquery.min.js"></script>
	<script src="jqueryUi/jquery-ui.min.js"></script>
	<script src="assets/js/jquery.dropotron.min.js"></script>
	<script src="assets/js/browser.min.js"></script>
	<script src="assets/js/breakpoints.min.js"></script>
    <script src="js/listaCheckIn.js"></script>
        <script src="js/CheckIn.js"></script>
</body>
</html>
