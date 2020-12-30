using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CapaGUI.Models
{
    public class Departamento
    {

        private int cantidadPiezas;
        private int cantidadBanos;
        private String nombreComuna;
        private String condiciones;
        private int idDepto;
        private int idEstado;
        private int tarifa;
        private String tipoEstado;
        private String direccion;
        private byte[] image;
        private String base64Image;

        public int CantidadPiezas { get => cantidadPiezas; set => cantidadPiezas = value; }
        public int CantidadBanos { get => cantidadBanos; set => cantidadBanos = value; }
        public string NombreComuna { get => nombreComuna; set => nombreComuna = value; }
        public string Condiciones { get => condiciones; set => condiciones = value; }
        public int IdDepto { get => idDepto; set => idDepto = value; }
        public int IdEstado { get => idEstado; set => idEstado = value; }
        public int Tarifa { get => tarifa; set => tarifa = value; }
        public string TipoEstado { get => tipoEstado; set => tipoEstado = value; }
        public string Direccion { get => direccion; set => direccion = value; }
        public byte[] Image { get => image; set => image = value; }
        public string Base64Image { get => base64Image; set => base64Image = value; }
    }
}