using CapaGUI.Models;
using CapaGUI.ServicioReservaLista;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.ServiceModel;
using System.Web.Services;
using CapaGUI.ServicioDepto;
using CapaGUI.ServicioAcompaniante;
using CapaGUI.ServicioTransporte;
using CapaGUI.ServicioTurismo;
using CapaGUI.ServicioServicioTurismo;

namespace CapaGUI
{
    public partial class misReservas : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            ServicioReservaClient auxReservaUsuario = new ServicioReservaClient();

            if ((string)Session["usuario"] == null)
            {
                Response.Redirect("iniciarSesion.aspx");
            }
            else
            if (auxReservaUsuario.reservaUsuario2(Session["usuario"].ToString()) == null)
            {
                lblReservas.Text = "No posees reservas";
                //Response.Redirect("index.aspx");
                //Agregar que no tiene reservas.
            }
            else
            {
                lblReservas.Text = "";
                List<ReservaUsuario> lista = auxReservaUsuario.reservaUsuario2(Session["usuario"].ToString()).Select(x => new ReservaUsuario
                {
                    Depto1 = x.depto,
                    Fecha = x.fecha.ToString(),
                    FechaFin = x.fechaFin.ToString(),
                    FechaInicio = x.fechaInicio.ToString(),
                    IdReserva = x.idReserva,
                    Pago = x.pago
                }).ToList();

                DataList1.DataSource = lista;
                DataList1.DataBind();

            }
        }


        [WebMethod]
        public static int cancelarReserva(int idReserva)
        {

            ServicioDepartamentoClient auxReserva = new ServicioDepartamentoClient();
            int respuesta = auxReserva.CancelarRegistro(idReserva);
            return respuesta;
        }

        [WebMethod]
        public static void addAcompaniantes(string rut, int idReserva, string nombre, string apellido)
        {
            ServicioAcompanianteClient auxServicio = new ServicioAcompanianteClient();
            auxServicio.insertarAcompanianteAsync(rut, idReserva, nombre, apellido);
        }

        [WebMethod]
        public static List<TransporteDto> getTransporte()
        {

            List<TransporteDto> auxLista = new List<TransporteDto>();


            try
            {
                ServicioTransporteClient auxServicio = new ServicioTransporteClient();
                var servicio = auxServicio.listarTransporte();
                if (servicio == null)
                {
                    return auxLista;
                }
                foreach (var item in servicio)
                {
                    TransporteDto auxTransporte = new TransporteDto();
                    auxTransporte.Capacidad = item.capacidad;
                    auxTransporte.Descripcion = item.descripcion;
                    auxTransporte.Precio = item.precio;
                    auxTransporte.IdTransporte = item.idTransporte;
                    auxLista.Add(auxTransporte);
                }

                return auxLista;

            }
            catch (Exception)
            {

                return auxLista;
            }


        }


        [WebMethod]
        public static void insertTransporte(int idTransporte, string direccion, string horario, int idReserva)
        {

            ServicioTransporteClient auxServicio = new ServicioTransporteClient();
            auxServicio.insertReservaService(idTransporte, direccion, horario, idReserva);

        }

        [WebMethod]
        public static List<TurismoDto> getServiceTurismo()
        {
            List<TurismoDto> auxLista = new List<TurismoDto>();

            try
            {
                ServicioTurismoClient auxServicio = new ServicioTurismoClient();
                var servicio = auxServicio.listarTurismo();

                if (servicio == null)
                {
                    return auxLista;
                }

                foreach (var item in servicio)
                {
                    TurismoDto auxTurismo = new TurismoDto();
                    auxTurismo.Descripcion = item.descripcion;
                    auxTurismo.Precio = item.precio;
                    auxTurismo.IdTurismo = item.idTurismo;
                    auxTurismo.Disponibilidad = item.disponibilidad;
                    auxTurismo.Fecha = item.fecha;
                    auxLista.Add(auxTurismo);
                }
                return auxLista;
            }
            catch (Exception)
            {
                return auxLista;
            }


        }

        [WebMethod]
        public static void insertTurismo(int idReserva, int idTurismo)
        {
            ServicioServicioTurismoClient auxServicio = new ServicioServicioTurismoClient();
            auxServicio.insertServiceTurismo(idTurismo, idReserva);

        }

        [WebMethod]
        public static List<String> GetAcompaniantes(int idReserva)
        {
            List<String> lista = new List<String>();
            try
            {
                ServicioReservaClient auxServicio = new ServicioReservaClient();
                var servicio = auxServicio.GetAcompaniantesByReserva(idReserva);

                if (servicio == null)
                {
                    return lista;
                }

                foreach (var item in servicio)
                {
                    lista.Add(item.nombre);
                }

                return lista;

            }
            catch
            {
                return lista;
            }
        }

        [WebMethod]
        public static List<ServiciosGeneralDto> GetServiciosTransporteTurismo(int idReserva)
        {
            List<ServiciosGeneralDto> lista = new List<ServiciosGeneralDto>();
            try
            {
                ServicioReservaClient auxServicio = new ServicioReservaClient();
                var turismo = auxServicio.GetTurismoByReserva(idReserva);
                var transporte = auxServicio.GetTransporteByReserva(idReserva);

                if (turismo != null)
                {
                    foreach (var item in turismo)
                    {
                        ServiciosGeneralDto servicio = new ServiciosGeneralDto();
                        servicio.NombreServicio = item.descripcion;
                        servicio.Fecha = item.fecha;
                        lista.Add(servicio);
                    }
                }

                if (transporte != null)
                {
                    foreach (var item in transporte)
                    {
                        ServiciosGeneralDto servicio = new ServiciosGeneralDto();
                        servicio.NombreServicio = item.descripcion;
                        servicio.Fecha = item.fecha;
                        lista.Add(servicio);
                    }
                }



                return lista;

            }
            catch
            {
                return lista;
            }
        }




    }


}