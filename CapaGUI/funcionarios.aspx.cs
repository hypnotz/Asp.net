using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaGUI
{
    public partial class funcionarios : System.Web.UI.Page
    {
     
        protected void Page_Load(object sender, EventArgs e)
        {
            if (((string)Session["privilegio"] == "2" || (string)Session["privilegio"] == null || (string)Session["usuario"] == null))
            {
                Response.Redirect("index.aspx");
            }
        }
    }
}