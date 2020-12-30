using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaGUI
{
    public partial class index : System.Web.UI.Page
    {

        static bool sesionIniciada = false;
        static bool seCerroSesion = false;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (seCerroSesion)
            {
                Session["usuario"] = null;
                Session["privilegio"] = null;
                seCerroSesion = false;
                sesionIniciada = false;
                Response.Redirect("index.aspx");
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

            if ((string)Session["privilegio"] == "1")
            {
                Response.Redirect("funcionarios.aspx");
            }
           

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
    }
}