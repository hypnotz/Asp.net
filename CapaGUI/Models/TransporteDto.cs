using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.Models
{
    public class TransporteDto
    {
        private int idTransporte;
        private int precio;
        private int capacidad;
        private string descripcion;

        public int IdTransporte { get => idTransporte; set => idTransporte = value; }
        public int Precio { get => precio; set => precio = value; }
        public int Capacidad { get => capacidad; set => capacidad = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
    }
}