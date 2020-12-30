using CapaGUI.ServicioCheckOut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaGUI
{
    public partial class CheckOut : System.Web.UI.Page
    {
        int idRecurso;
        int idRecursoHumano;
        static int idCheckINx;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (((string)Session["privilegio"] == "2" || (string)Session["privilegio"] == null || (string)Session["usuario"] == null))
            {
                Response.Redirect("index.aspx");
            }
            idRecurso = int.Parse(Session["idRecursoHumano"].ToString());
            idRecursoHumano = Convert.ToInt32(Session["idRecursoHumano"]);
            
        }
        //private string devolverFecha(string fecha)
        //{
        //    //String str = txtFecha.Text;
        //    String año = str.Substring(0, 4);
        //    String mes = str.Substring(5, 2);
        //    String dia = str.Substring(8, 2);

        //    fecha = dia + "/" + mes + "/" + año;

        //    return fecha;
        //}
        //protected void btnRegistrar_Click(object sender, EventArgs e)
        //{
        //    ServicioCheckOutClient auxCheckout = new ServicioCheckOutClient();

        //    auxCheckout.insertarCheckOut(int.Parse(txtIdCheckIn.Text), devolverFecha(txtFecha.Text), idRecurso);
        //}
        [WebMethod]
        public static void agregarMultayDetalle(int multaTotal, String fecha, int idRecursoHumano)
        {
            ServicioCheckOutClient auxCheckout = new ServicioCheckOutClient();
            auxCheckout.insertarCheckOutMulta(multaTotal, idCheckINx, idCheckINx, fecha, idRecursoHumano);
        }
        //[WebMethod]
        //public static void agregarMultayDetalle(int multaTotal, int idCheckout, int idCheckIn, String fecha, int idRecursoHumano)
        //{
        //    ServicioCheckOutClient auxCheckout = new ServicioCheckOutClient();
        //    auxCheckout.insertarCheckOutMulta(multaTotal, idCheckout, idCheckIn, fecha, idRecursoHumano);
        //}
        [WebMethod]
        public static void agregarDetalle(int totalMulta, String descripcion)
        {
            ServicioCheckOutClient auxCheckout = new ServicioCheckOutClient();
            auxCheckout.insertarDetalleMulta(totalMulta, descripcion, auxCheckout.getLastID());
        }
        [WebMethod]
        public static void almacenarIdCheckIN(int idCheckInz)
        {
            idCheckINx = idCheckInz;
        }
    }
}