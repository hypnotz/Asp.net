﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.42000
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CapaGUI.ServicioRegion {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(Namespace="http://Servicios/", ConfigurationName="ServicioRegion.ServicioRegion")]
    public interface ServicioRegion {
        
        // CODEGEN: El parámetro 'return' requiere información adicional de esquema que no se puede capturar con el modo de parámetros. El atributo específico es 'System.Xml.Serialization.XmlElementAttribute'.
        [System.ServiceModel.OperationContractAttribute(Action="http://Servicios/ServicioRegion/ListarRegionRequest", ReplyAction="http://Servicios/ServicioRegion/ListarRegionResponse")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        [return: System.ServiceModel.MessageParameterAttribute(Name="return")]
        CapaGUI.ServicioRegion.ListarRegionResponse ListarRegion(CapaGUI.ServicioRegion.ListarRegionRequest request);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://Servicios/ServicioRegion/ListarRegionRequest", ReplyAction="http://Servicios/ServicioRegion/ListarRegionResponse")]
        System.Threading.Tasks.Task<CapaGUI.ServicioRegion.ListarRegionResponse> ListarRegionAsync(CapaGUI.ServicioRegion.ListarRegionRequest request);
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Xml", "4.8.3752.0")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="http://Servicios/")]
    public partial class region : object, System.ComponentModel.INotifyPropertyChanged {
        
        private int idRegionField;
        
        private string nombreRegionField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified, Order=0)]
        public int idRegion {
            get {
                return this.idRegionField;
            }
            set {
                this.idRegionField = value;
                this.RaisePropertyChanged("idRegion");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified, Order=1)]
        public string nombreRegion {
            get {
                return this.nombreRegionField;
            }
            set {
                this.nombreRegionField = value;
                this.RaisePropertyChanged("nombreRegion");
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(WrapperName="ListarRegion", WrapperNamespace="http://Servicios/", IsWrapped=true)]
    public partial class ListarRegionRequest {
        
        public ListarRegionRequest() {
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(WrapperName="ListarRegionResponse", WrapperNamespace="http://Servicios/", IsWrapped=true)]
    public partial class ListarRegionResponse {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://Servicios/", Order=0)]
        [System.Xml.Serialization.XmlElementAttribute("return", Form=System.Xml.Schema.XmlSchemaForm.Unqualified)]
        public CapaGUI.ServicioRegion.region[] @return;
        
        public ListarRegionResponse() {
        }
        
        public ListarRegionResponse(CapaGUI.ServicioRegion.region[] @return) {
            this.@return = @return;
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface ServicioRegionChannel : CapaGUI.ServicioRegion.ServicioRegion, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class ServicioRegionClient : System.ServiceModel.ClientBase<CapaGUI.ServicioRegion.ServicioRegion>, CapaGUI.ServicioRegion.ServicioRegion {
        
        public ServicioRegionClient() {
        }
        
        public ServicioRegionClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public ServicioRegionClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServicioRegionClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServicioRegionClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        CapaGUI.ServicioRegion.ListarRegionResponse CapaGUI.ServicioRegion.ServicioRegion.ListarRegion(CapaGUI.ServicioRegion.ListarRegionRequest request) {
            return base.Channel.ListarRegion(request);
        }
        
        public CapaGUI.ServicioRegion.region[] ListarRegion() {
            CapaGUI.ServicioRegion.ListarRegionRequest inValue = new CapaGUI.ServicioRegion.ListarRegionRequest();
            CapaGUI.ServicioRegion.ListarRegionResponse retVal = ((CapaGUI.ServicioRegion.ServicioRegion)(this)).ListarRegion(inValue);
            return retVal.@return;
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        System.Threading.Tasks.Task<CapaGUI.ServicioRegion.ListarRegionResponse> CapaGUI.ServicioRegion.ServicioRegion.ListarRegionAsync(CapaGUI.ServicioRegion.ListarRegionRequest request) {
            return base.Channel.ListarRegionAsync(request);
        }
        
        public System.Threading.Tasks.Task<CapaGUI.ServicioRegion.ListarRegionResponse> ListarRegionAsync() {
            CapaGUI.ServicioRegion.ListarRegionRequest inValue = new CapaGUI.ServicioRegion.ListarRegionRequest();
            return ((CapaGUI.ServicioRegion.ServicioRegion)(this)).ListarRegionAsync(inValue);
        }
    }
}