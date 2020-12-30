using CapaGUI.Models;
using CapaGUI.ServicioRegion;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaGUI
{
    public partial class listarClientes : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ServicioRegionClient auxRegion = new ServicioRegionClient();
            List<RegionDTO> lista = auxRegion.ListarRegion().Select(x => new RegionDTO { IdRegion = x.idRegion, Nombre = x.nombreRegion }).ToList();

            DataList1.DataSource = lista;
            DataList1.DataBind();
        }
    }
}