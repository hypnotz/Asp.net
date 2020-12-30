using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.Models
{
    public class ServiciosGeneralDto
    {
        private string nombreServicio;
        private string fecha;

        public string NombreServicio { get => nombreServicio; set => nombreServicio = value; }
        public string Fecha { get => fecha; set => fecha = value; }
    }
}