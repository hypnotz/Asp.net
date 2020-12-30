using CapaGUI.DTO;
using CapaGUI.Models;
using CapaGUI.ServicioCalculo;
using CapaGUI.ServicioDepto;
using CapaGUI.ServicioLogin;
using CapaGUI.ServicioReserva;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaGUI
{
    public partial class departamentos : System.Web.UI.Page
    {
        static int idUsuario;
        static bool sesionIniciada = false;
        static bool seCerroSesion = false;
        static String correoUsuario;
        static String nombreUsuario;
        static String nombreUsuario2;
        protected void Page_Load(object sender, EventArgs e)
        {

            try
            {
               

            }
            catch(Exception ex)
            {
               
            }

            if (seCerroSesion)
            {
                Session["usuario"] = null;
                Session["privilegio"] = null;
                seCerroSesion = false;
                sesionIniciada = false;
                Response.Redirect("departamentos.aspx");
            }
            if ((string)Session["usuario"] == null)
            {
                Session["usuario"] = null;
                Session["privilegio"] = null;
                seCerroSesion = false;
                sesionIniciada = false;
                //Response.Redirect("departamentos.aspx");
                //Response.Redirect("departamentos.aspx");
            }
            else
            {
                sesionIniciada = true;
            }
            idUsuario = Convert.ToInt32(Session["idUsuario"]);

        }

        [WebMethod]
        public static List<Departamento> getDepartamento()
        {
            List<Departamento> lista = new List<Departamento>();
            try
            {
                ServicioDepartamentoClient auxDepto = new ServicioDepartamentoClient();

               

                lista = auxDepto.ListarDepto().Select(x => new Departamento
                {
                    CantidadBanos = x.cantidadBanos,
                    CantidadPiezas = x.cantidadPiezas,
                    NombreComuna = x.comuna,
                    Condiciones = x.condiciones,
                    Direccion = x.direccion,
                    IdDepto = x.idDepartamento,
                    IdEstado = x.idEstado,
                    Tarifa = x.tarifa,
                    TipoEstado = x.tipoEstado,
                    Image = x.image
                }).ToList();

                List<Departamento> auxListaToSend = new List<Departamento>();

                foreach (var item in lista)
                {
                    Departamento auxDeparta = new Departamento();
                    String base64St = "";
                    if (item.Image != null)
                    {
                        base64St = "data:image/jpeg;base64," + Convert.ToBase64String(item.Image, 0, item.Image.Length);
                    }
                    else
                    {
                        // base64St = "Image/edificio-viña.jpg";
                        base64St = "No Image";
                    }

                    auxDeparta.CantidadBanos = item.CantidadBanos;
                    auxDeparta.CantidadPiezas = item.CantidadPiezas;
                    auxDeparta.NombreComuna = item.NombreComuna;
                    auxDeparta.Condiciones = item.Condiciones;
                    auxDeparta.Direccion = item.Direccion;
                    auxDeparta.IdDepto = item.IdDepto;
                    auxDeparta.IdEstado = item.IdEstado;
                    auxDeparta.Tarifa = item.Tarifa;
                    auxDeparta.TipoEstado = item.TipoEstado;
                    auxDeparta.Base64Image = base64St;
                    auxListaToSend.Add(auxDeparta);
                }
                return auxListaToSend;
            }
            catch(Exception ex)
            {
                return lista;
            }
        }
        [WebMethod]
        public static void getReserva(ReservaDto reserva)
        {
            
            ServicioReservaClient auxReserva = new ServicioReservaClient();
            auxReserva.insertReserva(reserva.FechaInicio, reserva.FechaFin, reserva.Pago, reserva.IdDpto, idUsuario);


            departamentos auxDepto = new departamentos();
            ServicioLoginClient auxServicioLogin = new ServicioLoginClient();

            correoUsuario = auxServicioLogin.getCorreo(idUsuario);
            nombreUsuario = auxDepto.Session["usuario"].ToString();

            auxDepto.enviarCorreoReserva(auxDepto.Session["usuario"].ToString(), correoUsuario,
                reserva.FechaInicio, reserva.FechaFin, reserva.Pago.ToString(), reserva.IdDpto.ToString(), idUsuario.ToString());
            // auxReserva.insertReserva();
        }
        [WebMethod]
        public static bool estaConectado()
        {
            return sesionIniciada;
        }
        [WebMethod]
        public static void cerrarSesion()
        {
            seCerroSesion = true;
        }

        [WebMethod]
        public static int getTarifa(int idDpto, string fechaInicio, string fechaFin)
        {
            ServicioCalculoPagoClient auxServicio = new ServicioCalculoPagoClient();
            return auxServicio.calculoPago(idDpto, fechaInicio, fechaFin);
            // auxReserva.insertReserva();
        }

        private void enviarCorreoReserva(string nombreUsuario, string correoUsuario, string FechaInicio, 
            string FechaFin,  string Pago, string IdDpto, string idUsuario)
        {
            string uniqueCode = string.Empty;
            SqlCommand cmd = new SqlCommand();
            nombreUsuario2 = Session["usuario"].ToString();
            try
            {
                uniqueCode = Convert.ToString(System.Guid.NewGuid());
                StringBuilder strBody = new StringBuilder();
                strBody.Append("<img src=i.ibb.co/v3skhcz/image.png>" +
                                "<h1>Hola  " + nombreUsuario2 + " </h1>" +
                                "<br>" +
                                "<h2>Tu reserva fue registrada</h2> " +
                                "<h3>Fecha Inicio: " + FechaInicio + "</h3>" +
                                "<h3>Pago $" + Pago + "</h3>" +
                                "<h3>Nro Depto: " + IdDpto + "</h3>" +
                                "<h3>Fecha Fin: " + FechaFin + "</h3>" +
                                "<h3>Te esperamos! </h3>" + "<br>" +
                                "<h3>Si tienes alguna duda sobre tu reserva nos puedes contactar al número 9999999 o al email ArriendosTemporadaDuoc@gmail.com</h3>");

                System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage("SenderEmailIAddress@gmail.com", correoUsuario, "Registro de usuario Arriendos de Temporada", strBody.ToString());
                System.Net.NetworkCredential mailAuthenticaion = new System.Net.NetworkCredential("ArriendosTemporadaDuoc@gmail.com", "PUNKRIST123");

                System.Net.Mail.SmtpClient mailclient = new System.Net.Mail.SmtpClient("smtp.gmail.com", 587);
                mailclient.EnableSsl = true;
                mailclient.UseDefaultCredentials = false;
                mailclient.Credentials = mailAuthenticaion;
                mail.IsBodyHtml = true;
                mailclient.Send(mail);
                cmd.ExecuteReader();
                cmd.Cancel();
                cmd.Dispose();
            }
            catch (Exception ex)
            {

            }
            cmd.Dispose();
        }



        [WebMethod]
        public static List<String> FechasValidas(string fechaFin, string fechaIni, int idDpto)
        {

            List<String> auxLista = new List<string>();

            try
            {
                ServicioReservaClient auxServicio = new ServicioReservaClient();
                var respuesta = auxServicio.validarFechaReserva(idDpto, fechaIni, fechaFin);

                if (respuesta == null)
                {
                    return auxLista;
                }
                else
                {
                    foreach (var item in respuesta)
                    {
                        auxLista.Add(item);
                    }

                    return auxLista;
                }
            }
            catch
            {
                return auxLista;

            }


        }

    }
}