using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.Models
{
    public class CheckOut
    {
        private int idCheckIn;
        private String fecha;
        private int idRecursoHumano;

        public int IdCheckIn { get => idCheckIn; set => idCheckIn = value; }
        public string Fecha { get => fecha; set => fecha = value; }
        public int IdRecursoHumano { get => idRecursoHumano; set => idRecursoHumano = value; }
    }
}