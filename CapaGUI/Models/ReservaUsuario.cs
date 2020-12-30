using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.Models
{
    public class ReservaUsuario
    {
        private int idReserva;
        private String Depto;
        private String fecha;
        private String fechaInicio;
        private String fechaFin;
        private int pago;

        public int IdReserva { get => idReserva; set => idReserva = value; }
        public string Depto1 { get => Depto; set => Depto = value; }
        public string Fecha { get => fecha; set => fecha = value; }
        public string FechaInicio { get => fechaInicio; set => fechaInicio = value; }
        public string FechaFin { get => fechaFin; set => fechaFin = value; }
        public int Pago { get => pago; set => pago = value; }
    }
}