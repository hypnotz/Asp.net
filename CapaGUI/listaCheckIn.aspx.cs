using CapaGUI.DTO;
using CapaGUI.ServicioReserva;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaGUI
{
    public partial class listaCheckIn : System.Web.UI.Page
    {

        static int capturaIdCheckIn;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (((string)Session["privilegio"] == "2" || (string)Session["privilegio"] == null || (string)Session["usuario"] == null))
            {
                Response.Redirect("iniciarSesion.aspx");
            }
        }

        [WebMethod]
        public static List<ReservaDto> getReservasCheckIn()
        {

            List<ReservaDto> lista = new List<ReservaDto>();
            try
            {
                ServicioReservaClient auxReserva = new ServicioReservaClient();

                lista = auxReserva.consultaReservas("").Select(x => new ReservaDto
                {
                    Fecha = x.fecha,
                    FechaFin = x.fecha_fin,
                    FechaInicio = x.fecha_inicio,
                    IdCliente = x.id_cliente,
                    IdDpto = x.id_departamento,
                    IdReserva = x.id_reserva,

                }).ToList();
                return lista;
            }
            catch (Exception Ex)
            {

                lista = null;
            }

            return lista;
           
        }

    }
}
