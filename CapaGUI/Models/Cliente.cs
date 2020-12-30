using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.Models
{
    public class Cliente
    {

        private int idCliente;
        private String rut;
        private String nombres;
        private String apellidoPaterno;
        private String apellidoMaterno;
        private String correo;
        private String fechaNacimiento;
        private int telefono;
        private int idUsuario;

        public int IdCliente { get => idCliente; set => idCliente = value; }
        public string Rut { get => rut; set => rut = value; }
        public string Nombres { get => nombres; set => nombres = value; }
        public string ApellidoPaterno { get => apellidoPaterno; set => apellidoPaterno = value; }
        public string ApellidoMaterno { get => apellidoMaterno; set => apellidoMaterno = value; }
        public string Correo { get => correo; set => correo = value; }
        public string FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
        public int Telefono { get => telefono; set => telefono = value; }
        public int IdUsuario { get => idUsuario; set => idUsuario = value; }
    }
}