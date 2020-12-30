<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="misReservas.aspx.cs" Inherits="CapaGUI.misReservas" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="estilos/index.css" />
    <link href="css/reservas.css" rel="stylesheet" />
    <link href="css/servicios.css" rel="stylesheet" />
    <link href="css/departamento.css" rel="stylesheet" />
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


                    <h2>Mis Reservas</h2>

                    <asp:Label ID="lblReservas" runat="server" Text="Label"></asp:Label>

                    <div id="contenedor-reservas">


                        <form id="form1" runat="server">
                            <div>
                                <div class="row">

                                    <asp:DataList ID="DataList1" CssClass="tabla-cr" runat="server" RepeatColumns="1" CellPadding="40">
                                        <ItemTemplate>
                                            <table id="tabla<%#Eval("IdReserva") %>" class="tableContainer">
                                                <tr>
                                                    <td>ID Reserva: <%#Eval("IdReserva") %></td>
                                                </tr>
                                                <tr>
                                                    <td>Departamento: <%#Eval("Depto1") %></td>
                                                </tr>
                                                <tr>
                                                    <td>Fecha de reserva: <%#Eval("Fecha") %></td>
                                                </tr>
                                                <tr>
                                                    <td>Fecha inicio: <%#Eval("FechaInicio") %></td>
                                                </tr>
                                                <tr>
                                                    <td>Fecha fin: <%#Eval("FechaFin") %></td>
                                                </tr>
                                            </table>
                                            <br />
                                            <br />
                                            <div class="contenedor-btn-cr">
                                                <button id="<%#Eval("IdReserva") %>" onclick="getId(this);return false;" style="background-color: red">Cancelar</button>
                                                <button id="<%#Eval("IdReserva") %>" style="margin-left: 20px" onclick="addService(this, true);return false;">Servicios Extra</button>
                                                <img id="<%#Eval("IdReserva") %>" src="Image/addUser.png" class="image-cr" onclick="addAcompaniante(this);return false;" />
                                            </div>

                                        </ItemTemplate>
                                    </asp:DataList>
                                </div>
                            </div>
                        </form>

                    </div>


                </div>



            </div>
        </div>
    </div>

    <!-- Footer -->
    <!-- Footer -->
    <div id="footer-wrapper">
        <footer id="footer" class="container">
            <div class="row">


                <div class="col-6 col-6-medium col-12-small">
                    <!-- Links -->
                    <section class="widget links">
                        <h3>Nuestra oficina</h3>
                        <ul class="style2">

                            <li>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.321448445874!2d-70.60249214899974!3d-33.519027180659826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d06757799979%3A0x913dd02e5daeb4b7!2sMallplaza%20Vespucio!5e0!3m2!1ses-419!2scl!4v1604101668485!5m2!1ses-419!2scl" width="500" height="300" frameborder="0" style="border: 0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </li>
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
    <script src="js/moment.js"></script>
    <script src="js/reservas.js"></script>
    <script src="js/cancelarReservas.js"></script>
    <script src="js/ReservasView.js"></script>
</body>
</html>



