using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.Models
{
    public class TurismoDto
    {
        private int idTurismo;
        private string descripcion;
        private int precio;
        private string disponibilidad;
        private string fecha;
        public int IdTurismo { get => idTurismo; set => idTurismo = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
        public int Precio { get => precio; set => precio = value; }
        public string Disponibilidad { get => disponibilidad; set => disponibilidad = value; }
        public string Fecha { get => fecha; set => fecha = value; }
    }
}