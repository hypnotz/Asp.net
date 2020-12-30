using CapaGUI.ServicioLogin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Channels;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaGUI
{
    public partial class iniciarSesion : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (((string)Session["usuario"] != null))
            {
                Response.Redirect("index.aspx");
            }
        }

        protected void txtIniciar_Click(object sender, EventArgs e)
        {

            ServicioLoginClient auxServicioLogin = new ServicioLoginClient();

            String usuario = txtUsuario.Text.ToLower();
            String contrasena = txtContrasena.Text;
            String privilegio;

            privilegio = auxServicioLogin.login(usuario, contrasena);

            if (privilegio != null)
            {
                Session["idUsuario"] = auxServicioLogin.getIdByName(txtUsuario.Text);
                if (auxServicioLogin.getidByUserID(Convert.ToInt32(Session["idUsuario"])) == 2)
                {
                    Label1.Text = "Cuenta en proceso de validación por parte del administrador";
                }
                else
                {
                    if (privilegio == "2")
                    {
                        //Cliente
                        //Session["idUsuario"] = auxServicioLogin.getIdByName(txtUsuario.Text);
                        Session["usuario"] = usuario;
                        Session["privilegio"] = privilegio;
                        Response.Redirect("index.aspx");

                    }
                    else if (privilegio == "3")
                    {
                        //Funcionario
                        Session["idRecursoHumano"] = auxServicioLogin.getIdByUserName(usuario);
                        //Session["idUsuario"] = auxServicioLogin.getIdByName(txtUsuario.Text);
                        Session["correoUsuario"] = auxServicioLogin.getCorreo(Convert.ToInt32(Session["idUsuario"]));
                        Session["usuario"] = usuario;
                        Session["privilegio"] = privilegio;
                        Response.Redirect("funcionarios.aspx");
                    }
                    else if (privilegio == "1")
                    {
                        //Administrador
                        Session["idRecursoHumano"] = auxServicioLogin.getIdByUserName(usuario);
                        //Session["idUsuario"] = auxServicioLogin.getIdByName(txtUsuario.Text);
                        Session["correoUsuario"] = auxServicioLogin.getCorreo(Convert.ToInt32(Session["idUsuario"]));
                        Session["usuario"] = usuario;
                        Session["privilegio"] = privilegio;
                        Response.Redirect("funcionarios.aspx");

                    }
                }
            }
            if (privilegio == null)
            {
                Label1.Text = "Usuario o contraseña incorrecto";
            }
        }
    }
}
