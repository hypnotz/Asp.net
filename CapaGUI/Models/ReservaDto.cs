using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.DTO
{
    public class ReservaDto
    {
        private int idReserva;
        private String fecha;
        private String fechaInicio;
        private String fechaFin;
        private int pago;
        private int idDpto;
        private int idCliente;

        public int IdReserva { get => idReserva; set => idReserva = value; }
        public string Fecha { get => fecha; set => fecha = value; }
        public string FechaInicio { get => fechaInicio; set => fechaInicio = value; }
        public string FechaFin { get => fechaFin; set => fechaFin = value; }
        public int Pago { get => pago; set => pago = value; }
        public int IdDpto { get => idDpto; set => idDpto = value; }
        public int IdCliente { get => idCliente; set => idCliente = value; }
    }
}