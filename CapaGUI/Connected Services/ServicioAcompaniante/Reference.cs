﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.42000
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CapaGUI.ServicioAcompaniante {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(Namespace="http://Servicios/", ConfigurationName="ServicioAcompaniante.ServicioAcompaniante")]
    public interface ServicioAcompaniante {
        
        // CODEGEN: Se está generando un contrato de mensaje, ya que el nombre de elemento rut del espacio de nombres  no está marcado para aceptar valores nil.
        [System.ServiceModel.OperationContractAttribute(Action="http://Servicios/ServicioAcompaniante/insertarAcompanianteRequest", ReplyAction="http://Servicios/ServicioAcompaniante/insertarAcompanianteResponse")]
        CapaGUI.ServicioAcompaniante.insertarAcompanianteResponse insertarAcompaniante(CapaGUI.ServicioAcompaniante.insertarAcompanianteRequest request);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://Servicios/ServicioAcompaniante/insertarAcompanianteRequest", ReplyAction="http://Servicios/ServicioAcompaniante/insertarAcompanianteResponse")]
        System.Threading.Tasks.Task<CapaGUI.ServicioAcompaniante.insertarAcompanianteResponse> insertarAcompanianteAsync(CapaGUI.ServicioAcompaniante.insertarAcompanianteRequest request);
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class insertarAcompanianteRequest {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="insertarAcompaniante", Namespace="http://Servicios/", Order=0)]
        public CapaGUI.ServicioAcompaniante.insertarAcompanianteRequestBody Body;
        
        public insertarAcompanianteRequest() {
        }
        
        public insertarAcompanianteRequest(CapaGUI.ServicioAcompaniante.insertarAcompanianteRequestBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute(Namespace="")]
    public partial class insertarAcompanianteRequestBody {
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=0)]
        public string rut;
        
        [System.Runtime.Serialization.DataMemberAttribute(Order=1)]
        public int idReserva;
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=2)]
        public string nombre;
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=3)]
        public string apellidos;
        
        public insertarAcompanianteRequestBody() {
        }
        
        public insertarAcompanianteRequestBody(string rut, int idReserva, string nombre, string apellidos) {
            this.rut = rut;
            this.idReserva = idReserva;
            this.nombre = nombre;
            this.apellidos = apellidos;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class insertarAcompanianteResponse {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="insertarAcompanianteResponse", Namespace="http://Servicios/", Order=0)]
        public CapaGUI.ServicioAcompaniante.insertarAcompanianteResponseBody Body;
        
        public insertarAcompanianteResponse() {
        }
        
        public insertarAcompanianteResponse(CapaGUI.ServicioAcompaniante.insertarAcompanianteResponseBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute()]
    public partial class insertarAcompanianteResponseBody {
        
        public insertarAcompanianteResponseBody() {
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface ServicioAcompanianteChannel : CapaGUI.ServicioAcompaniante.ServicioAcompaniante, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class ServicioAcompanianteClient : System.ServiceModel.ClientBase<CapaGUI.ServicioAcompaniante.ServicioAcompaniante>, CapaGUI.ServicioAcompaniante.ServicioAcompaniante {
        
        public ServicioAcompanianteClient() {
        }
        
        public ServicioAcompanianteClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public ServicioAcompanianteClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServicioAcompanianteClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServicioAcompanianteClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        CapaGUI.ServicioAcompaniante.insertarAcompanianteResponse CapaGUI.ServicioAcompaniante.ServicioAcompaniante.insertarAcompaniante(CapaGUI.ServicioAcompaniante.insertarAcompanianteRequest request) {
            return base.Channel.insertarAcompaniante(request);
        }
        
        public void insertarAcompaniante(string rut, int idReserva, string nombre, string apellidos) {
            CapaGUI.ServicioAcompaniante.insertarAcompanianteRequest inValue = new CapaGUI.ServicioAcompaniante.insertarAcompanianteRequest();
            inValue.Body = new CapaGUI.ServicioAcompaniante.insertarAcompanianteRequestBody();
            inValue.Body.rut = rut;
            inValue.Body.idReserva = idReserva;
            inValue.Body.nombre = nombre;
            inValue.Body.apellidos = apellidos;
            CapaGUI.ServicioAcompaniante.insertarAcompanianteResponse retVal = ((CapaGUI.ServicioAcompaniante.ServicioAcompaniante)(this)).insertarAcompaniante(inValue);
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        System.Threading.Tasks.Task<CapaGUI.ServicioAcompaniante.insertarAcompanianteResponse> CapaGUI.ServicioAcompaniante.ServicioAcompaniante.insertarAcompanianteAsync(CapaGUI.ServicioAcompaniante.insertarAcompanianteRequest request) {
            return base.Channel.insertarAcompanianteAsync(request);
        }
        
        public System.Threading.Tasks.Task<CapaGUI.ServicioAcompaniante.insertarAcompanianteResponse> insertarAcompanianteAsync(string rut, int idReserva, string nombre, string apellidos) {
            CapaGUI.ServicioAcompaniante.insertarAcompanianteRequest inValue = new CapaGUI.ServicioAcompaniante.insertarAcompanianteRequest();
            inValue.Body = new CapaGUI.ServicioAcompaniante.insertarAcompanianteRequestBody();
            inValue.Body.rut = rut;
            inValue.Body.idReserva = idReserva;
            inValue.Body.nombre = nombre;
            inValue.Body.apellidos = apellidos;
            return ((CapaGUI.ServicioAcompaniante.ServicioAcompaniante)(this)).insertarAcompanianteAsync(inValue);
        }
    }
}