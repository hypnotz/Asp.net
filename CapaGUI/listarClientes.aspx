<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="listarClientes.aspx.cs" Inherits="CapaGUI.listarClientes" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
              <div class="row">
              <div class="col-lg-12">
                  <asp:DataList ID="DataList1" runat="server" RepeatColumns="2" CellPadding="40">
                      
              <ItemTemplate>
                <table>
                
                <tr><td>ID Estacionamiento: <%#Eval("IdRegion") %></td></tr>
                <tr><td>Direccion: <%#Eval("Nombre") %></td></tr>
               
                 </table>
                  <br />
                  <asp:Button ID="Button1" runat="server" Text="Habilitar cuenta" />
                  <asp:Button ID="Button2" runat="server" Text="Deshabilitar cuenta" />
                  <td></td>
                  <td></td>
                  <td></td>
                <br />
        </ItemTemplate>
          </asp:DataList>
          </div>
          </div>
</div>
    </form>
</body>
</html>
