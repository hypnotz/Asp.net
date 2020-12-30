using CapaGUI.ServicioLogin;
using CapaGUI.ServicioUsuario;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaGUI
{
    public partial class registroUsuario : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }
        private string devolverFecha(string fecha)
        {
            String str = txtFecha.Text;
            String año = str.Substring(0, 4);
            String mes = str.Substring(5, 2);
            String dia = str.Substring(8, 2);

            fecha = dia + "/" + mes + "/" + año;

            return fecha;
        }
        protected void btnRegistrar_Click(object sender, EventArgs e)
        {
            ServicioUsuarioClient auxServicio = new ServicioUsuarioClient();

            auxServicio.ingresarUsuario2(txtRut.Text, txtNombres.Text, txtApellidoPaterno.Text, txtApellidoMaterno.Text, txtCorreo.Text, devolverFecha(txtFecha.Text), int.Parse(txtTelefono.Text), txtnombreUsuario.Text.ToLower(), txtContraseña.Text, 2, 2);

            enviarCorreo(txtnombreUsuario.Text, txtCorreo.Text);

            Response.Redirect("index.aspx");
        }

        private void enviarCorreo(string nombreUsuario, string correoUsuario)
        {
            string uniqueCode = string.Empty;
            SqlCommand cmd = new SqlCommand();
            try
            {
                uniqueCode = Convert.ToString(System.Guid.NewGuid());
                StringBuilder strBody = new StringBuilder();
                strBody.Append("<img src=i.ibb.co/v3skhcz/image.png>" + "<h1> Bienvenido " + txtNombres.Text + " a Turismo Real </h1>" + "<br>" + " <h2>Tu cuenta estará activa dentro de las próximas 24 horas</h2>" + "<br> " + "<h3><a href=https://localhost:44332/departamentos.aspx" + ">Click aquí para ver los departamentos disponibles.</a></h3>");
               
                System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage("SenderEmailIAddress@gmail.com", correoUsuario, "Registro de usuario Arriendos de Temporada", strBody.ToString());
                //pasing the Gmail credentials to send the email

                System.Net.NetworkCredential mailAuthenticaion = new System.Net.NetworkCredential("ArriendosTemporadaDuoc@gmail.com", "PUNKRIST123");
                
                System.Net.Mail.SmtpClient mailclient = new System.Net.Mail.SmtpClient("smtp.gmail.com", 587);
                mailclient.EnableSsl = true;
                mailclient.UseDefaultCredentials = false;
                mailclient.Credentials = mailAuthenticaion;
                mail.IsBodyHtml = true;
                mailclient.Send(mail);
               
                cmd.ExecuteReader();
                cmd.Dispose();
            }catch(Exception ex)
            {

            }
            cmd.Dispose();
         }

        [WebMethod]
        public static bool checkUser(string usuario)
        {
            ServicioLoginClient auxService = new ServicioLoginClient();
            return auxService.validarUsernameExists(usuario);

        }
    }
  }

