using CapaGUI.ServicioCheckIn;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaGUI
{
    public partial class checkIn : System.Web.UI.Page
    {
        int idRecurso;
        static int capturaIdCheckIn;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (((string)Session["privilegio"] == "2" || (string)Session["privilegio"] == null || (string)Session["usuario"] == null))
            {
                Response.Redirect("index.aspx");
            }

            idRecurso = int.Parse(Session["idRecursoHumano"].ToString());

        }

        //private string devolverFecha(string fecha)
        //{
        //    String str = txtFecha.Text;
        //    String año = str.Substring(0, 4);
        //    String mes = str.Substring(5, 2);
        //    String dia = str.Substring(8, 2);

        //    fecha = dia + "/" + mes + "/" + año;

        //    return fecha;
        //}

        protected void btnRegistrar_Click(object sender, EventArgs e)
        {
            ServicioCheckInClient auxServicioCheck = new ServicioCheckInClient();
            
            //auxServicioCheck.insertarCheckIn(devolverFecha(txtFecha.Text), int.Parse(txtPagoRestante.Text), int.Parse(txtIdReserva.Text), idRecurso);
        }
        [WebMethod]
        public static void almacenarIdCheckINn(int idCheckInzz)
        {
            capturaIdCheckIn = idCheckInzz;
        }
        [WebMethod]
        public static void registrarCheckIn(string fecha, int pagoRestante, int idRecursoHumano)
        {
            ServicioCheckInClient auxServicioCheck = new ServicioCheckInClient();

            auxServicioCheck.insertarCheckIn(fecha, pagoRestante, capturaIdCheckIn, idRecursoHumano);
        }


    }
}