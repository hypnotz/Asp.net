using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.Models
{
    public class ReporteZona
    {
        private String region;
        private int ganancia;

        public string Region { get => region; set => region = value; }
        public int Ganancia { get => ganancia; set => ganancia = value; }
    }
}