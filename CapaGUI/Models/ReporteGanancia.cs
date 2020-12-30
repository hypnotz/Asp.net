using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.Models
{
    public class ReporteGanancia
    {
        private int idDepto;
        private String direccion;
        private int ganancia;

        public int IdDepto { get => idDepto; set => idDepto = value; }
        public string Direccion { get => direccion; set => direccion = value; }
        public int Ganancia { get => ganancia; set => ganancia = value; }
    }
}