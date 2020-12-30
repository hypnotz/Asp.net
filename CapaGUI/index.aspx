<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="CapaGUI.index" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title></title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<link rel="stylesheet" href="estilos/index.css" />
<link rel="stylesheet1" href="estilos/Custom.css" />

<link href="css/bootstrap-social.css" rel="stylesheet"/>
</head>
<body class="is-preload homepage">
		<div id="page-wrapper">
			<!-- Header -->
				<div id="header-wrapper">
					<header id="header" class="container">
						<!-- Logo -->
							<div id="logo">
								<h1><a href="index.aspx">Turismo Real</a></h1>
								<span>by DeMaster</span>
							</div>
							<nav id="nav">
								<ul>
									<li class="current"><a href="index.aspx">Home</a></li>
									<%--<li>
										<ul>
											<li>
												<ul>
												</ul>
											</li>
											<li><a href="#">Veroeros feugiat</a></li>
										</ul>
									</li>--%>
									<li><a  href="departamentos.aspx">Departamentos</a></li>
									<li><a id="sesion" href="iniciarSesion.aspx">Iniciar Sesión</a></li>
									<li><a id="registro" href="registroUsuario.aspx">Registrarse</a></li>
								</ul>
							</nav>
					</header>
				</div>
			<!-- Banner -->
				<div id="banner-wrapper">
					<div id="banner" class="box container">
						<div class="row">
							<div class="col-7 col-12-medium">
								<h2>Somos Turismo Real</h2>
								<p>La empresa líder en calidad de arriendos a lo largo de todo Chile.</p>
							</div>
							<div class="col-5 col-12-medium">
								<ul>
									<li><a href="#" class="button large icon solid fa-arrow-circle-right">Turismo real</a></li>
									<li><a href="#" class="button alt large icon solid fa-question-circle">Info</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			<!-- Features -->
				<div id="features-wrapper">
					<div class="container">
						<div class="row">
							<div class="col-4 col-12-medium">
								<!-- Box -->
									<section style="min-height:580px" class="box feature">
										<a style="max-width:100%; height:auto"  class="image featured"><img src="Fotos/calidadd.png" alt="" /></a>
										<div class="inner">
											<header>
												<h2>Calidad Garantizada</h2>
												
											</header>
											<p>Nos aseguramos de que nuestros clientes obtengan un servicio con la mejor calidad de Chile.</p>
										</div>
									</section>
							</div>
							<div class="col-4 col-12-medium">
								<!-- Box -->
									<section style="min-height:580px" class="box feature">
										<a style="width:100%; height:auto" class="image featured"><img src="Fotos/calll.png" alt="" /></a>
										<div class="inner">
											<header>
												<h2 style="margin-top:50px">Atención 24/7</h2>
												
											</header>
											<p>Nuestros operadores estarán para ti las 24 horas, los 7 días de la semana para cualquier cosa que necesites.</p>
										</div>
									</section>
							</div>
							<div class="col-4 col-12-medium">
								<!-- Box -->
									<section style="min-height:570px" class="box feature">
										<a style="width:100%; height:auto" class="image featured"><img src="Fotos/wifi_hogar.png" alt="" /></a>
										<div class="inner">
											<header>
												<h2 style="margin-top:10px">Conexión</h2>
												
											</header>
											<p>Nuestros departamentos cuentan con las mejores comodidades que te puedas encontrar, como WIFI, cable, calefacción, etc.</p>
										</div>
									</section>
							</div>
						</div>
					</div>
				</div>
			<!-- Main -->
				<div id="main-wrapper">
					<div class="container">
						<div class="row gtr-200">
							<div class="col-4 col-12-medium">
								<!-- Sidebar -->
									<div id="sidebar">
										<section class="widget thumbnails">
											<h3></h3>
											<div class="grid">
												<div class="row gtr-50">
													<div class="col-6"><a href="#" class="image fit"><img src="Fotos/depto3.jpg" alt="" /></a></div>
													<div class="col-6"><a href="#" class="image fit"><img src="Fotos/depto2.jpg" alt="" /></a></div>
													<div class="col-6"><a href="#" class="image fit"><img src="Fotos/depto5.png" alt="" /></a></div>
													<div class="col-6"><a href="#" class="image fit"><img src="Fotos/depto4.jpg" alt="" /></a></div>
												</div>
											</div>
											<a href="departamentos.aspx" class="button icon fa-file-alt">Ver departamentos</a>
										</section>
									</div>
							</div>
							<div class="col-8 col-12-medium imp-medium">
								<!-- Content -->
									<div id="content">
										<section class="last">
											<h2>Quiénes somos?</h2>
											<p><strong></strong>Somos una una empresa familiar que se dedica al arriendo de departamentos propiedad de la empresa, y otros servicios en zonas turísticas del país.
												Tenemos 10 años en el mercado y de a poco se nos han conocido por la calidad de nuestros departamentos, su ubicación y trato gentil hacia los clientes.
												Actualmente nuestra empresa cuenta con 10 departamentos ubicados en zonas de alto interés turístico para los clientes 
												(Viña del Mar, La Serena, Pucón, Puerto Varas, etc.), todos ellos acondicionados con un alto estándar de calidad.</strong></p>
										</section>
									</div>
							</div>
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
		<!-- Scripts -->
			<script src="js/jquery.min.js"></script>
			<script src="js/jquery.dropotron.min.js"></script>
			<script src="js/browser.min.js"></script>
			<script src="js/breakpoints.min.js"></script>
			<script src="js/util.js"></script>
			<script src="js/main.js"></script>
			<script src="js/cerrarSesion.js"></script>
	</body>
</html>