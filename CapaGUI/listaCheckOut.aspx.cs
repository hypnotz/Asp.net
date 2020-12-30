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
    public partial class listaCheckOut : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (((string)Session["privilegio"] == "2" || (string)Session["privilegio"] == null || (string)Session["usuario"] == null))
            {
                Response.Redirect("iniciarSesion.aspx");
            }
        }

        [WebMethod]
        public static List<ReservaDto> getReservasCheckOut()
        {
            List<ReservaDto> lista = new List<ReservaDto>();
            try
            {
                ServicioReservaClient auxReserva = new ServicioReservaClient();
                 lista = auxReserva.consultaReservasOut().Select(x => new ReservaDto
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
            catch (Exception ex)
            {
                lista = null;
                
            }
            return lista;
        }
    }
}