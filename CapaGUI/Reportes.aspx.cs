using CapaGUI.Models;
using CapaGUI.ServicioReporte;
using CapaGUI.ServicioReserva;
using MigraDoc.DocumentObjectModel;
using MigraDoc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaGUI
{
    public partial class Reportes : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (((string)Session["privilegio"] == "2" || (string)Session["privilegio"] == null || (string)Session["usuario"] == null))
            {
                Response.Redirect("iniciarSesion.aspx");
            }
        }

        public static DataTable ConvertToDataTable<T>(List<T> data)
        {
            PropertyDescriptorCollection properties =
               TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
            foreach (PropertyDescriptor prop in properties)
                table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
            foreach (T item in data)
            {
                DataRow row = table.NewRow();
                foreach (PropertyDescriptor prop in properties)
                    row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
                table.Rows.Add(row);
            }
            return table;
        }
        [WebMethod]
        public static List<ReporteGanancia> GetTable()
        {
            ServicioReporteClient auxReporte = new ServicioReporteClient();

            List<ReporteGanancia> lista = auxReporte.getReporteGanancia(20).Select(x => new ReporteGanancia
            {
                Direccion = x.direccion,
                Ganancia = x.ganancia,
                IdDepto = x.idDepto

            }).ToList();



            return lista;
        }

        [WebMethod]
        public static List<ReporteMensualReservas> getReservaReporteMensual()
        {

            List<ReporteMensualReservas> lista = new List<ReporteMensualReservas>();
            List<ReporteMensualReservas> test = new List<ReporteMensualReservas>();


            try
            {
                ServicioReporteClient auxReserva = new ServicioReporteClient();

                lista = auxReserva.getReporteM().Select(x => new ReporteMensualReservas
                {
                    Arriendos = x.arriendos,
                    Mes = x.mes

                }).ToList();
            }
            catch (Exception)
            {

                
            }
            return lista;
        }

        [WebMethod]
        public static List<ReporteGanancia> getReservaReportePorAno(int ano)
        {

            List<ReporteGanancia> lista = new List<ReporteGanancia>();
            try
            {
                ServicioReporteClient auxReserva = new ServicioReporteClient();

                lista = auxReserva.getReporteGanancia(ano).Select(x => new ReporteGanancia
                {
                    Direccion = x.direccion,
                    Ganancia = x.ganancia,
                    IdDepto = x.idDepto

                }).ToList();

                return lista;
            }
            catch (Exception ex)
            {

               
            }

            return lista;
        }
        [WebMethod]
        public static List<ReporteGanancia> getReservaReporteMensuAno(int mes, int ano)
        {
            List<ReporteGanancia> lista = new List<ReporteGanancia>();
            try
            {
                ServicioReporteClient auxReserva = new ServicioReporteClient();

                lista = auxReserva.getReporteGananciaMensual(mes, ano).Select(x => new ReporteGanancia
                {
                    Direccion = x.direccion,
                    Ganancia = x.ganancia,
                    IdDepto = x.idDepto
                }).ToList();

                return lista;
            }
            catch (Exception)
            {

               
            }
            return lista;
        }


        [WebMethod]
        public static List<ReporteGanancia> getreporteGananciaDiariaDiaMesAno()
        {

            List<ReporteGanancia> lista = new List<ReporteGanancia>();
            try
            {
                ServicioReporteClient auxReserva = new ServicioReporteClient();

                lista = auxReserva.reporteGananciaDiaria(23, 12, 20).Select(x => new ReporteGanancia
                {
                    Direccion = x.direccion,
                    Ganancia = x.ganancia,
                    IdDepto = x.idDepto
                }).ToList();

                return lista;
            }
            catch (Exception)
            {

               
            }
            return lista;
        }

        [WebMethod]
        public static List<ReporteZona> getReporteGananciaZona(int ano)
        {
            List<ReporteZona> lista = new List<ReporteZona>();
            try
            {
                ServicioReporteClient auxReserva = new ServicioReporteClient();
                lista = auxReserva.reporteGananciaZona(ano).Select(x => new ReporteZona
                {
                    Ganancia = x.ganancia,
                    Region = x.region
                }).ToList();

                return lista;
            }
            catch (Exception ex)
            {

                
            }
            return lista;
        }

        [WebMethod]
        public static List<ReporteZona> getReporteGananciaZonaEx(int mes, int ano)
        {
            List<ReporteZona> lista = new List<ReporteZona>();
            try
            {
                ServicioReporteClient auxReserva = new ServicioReporteClient();
                lista = auxReserva.reporteGananciaMensualZona(mes, ano).Select(x => new ReporteZona
                {
                    Ganancia = x.ganancia,
                    Region = x.region
                }).ToList();

                return lista;
            }
            catch (Exception ex)
            {

               
            }
            return lista;
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            //            try
            //            {
            //                PDF pdfForm = new PDF(GetTable(), "RUTA-LOGO", "Reporte mensual reservas 2020");

            //                // Create a MigraDoc document
            //                Document document = pdfForm.CreateDocument();
            //                document.UseCmykColor = true;

            //#if DEBUG
            //                // for debugging only...
            //                MigraDoc.DocumentObjectModel.IO.DdlWriter.WriteToFile(document, "MigraDoc.mdddl");
            //                document = MigraDoc.DocumentObjectModel.IO.DdlReader.DocumentFromFile("MigraDoc.mdddl");
            //#endif

            //                // Create a renderer for PDF that uses Unicode font encoding
            //                PdfDocumentRenderer pdfRenderer = new PdfDocumentRenderer(true);

            //                // Set the MigraDoc document
            //                pdfRenderer.Document = document;


            //                // Create the PDF document
            //                pdfRenderer.RenderDocument();

            //                // Save the PDF document...
            //                string filename = "PatientsDetail.pdf";
            //                #if DEBUG
            //                // I don't want to close the document constantly...
            //                filename = "Invoice-" + Guid.NewGuid().ToString("N").ToUpper() + ".pdf";
            //                #endif
            //                pdfRenderer.Save(filename);
            //                // ...and start a viewer.
            //                Process.Start(filename);
            //            }
            //            catch (Exception ex)
            //            {
            //                Console.WriteLine(ex.Message);
            //                Console.ReadLine();
            //            }
            //        }
        }
    }
}
