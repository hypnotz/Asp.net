using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.Models
{
    public class ReporteMensualReservas
    {
        private String mes;
        private int arriendos;

        public string Mes { get => mes; set => mes = value; }
        public int Arriendos { get => arriendos; set => arriendos = value; }

    }
}