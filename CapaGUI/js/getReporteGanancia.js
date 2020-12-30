const capturaDiv = document.getElementById('contenedorHerrera');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const capturaDivBoton = document.getElementById('contenedorBotonesArriendos');
let idTemporal;
let mesTemporal;
let anoTemporal;

ArriendosPorMes = () => {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReservaReporteMensual',
        async: true,
        success: function (result) {
            console.log(result.d)
            let html = "";
            $("#capturaDivBoton").empty();

            html += ` <div id="customers">
    <table id="tab_customers" class="table table-striped">
        <colgroup>
            <col width="20%">
                <col width="20%">
                    <col width="20%">
                        <col width="20%">
        </colgroup>
        <thead>
            <tr class='warning'>
                <th>Mes</th>
                <th>Cantidad Arriendos</th>
            </tr>
        </thead>
        <tbody>
			`
            result.d.map((elemento) => {
                let imagen = "";
                console.log(elemento);
                html += `
             <tr>
                <td>${elemento.Mes}</td>
                <td>${elemento.Arriendos}</td>
                
              
            </tr>
							`
            })
            html += ` </tbody>
                        </table>`

            //$("#capturaDivBoton").empty();
            // html += ``;

            capturaDivBoton.innerHTML = html;
        },
        error: function (error) {
            console.log(error);
        }
    })
}
ArriendosPorMes = () => {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReservaReporteMensual',
        async: true,
        success: function (result) {
            console.log(result.d)
            let html = "";
            $("#capturaDivBoton").empty();

            html += ` <div id="customers">
    <table id="tab_customers" class="table table-striped">
        <colgroup>
            <col width="20%">
                <col width="20%">
                    <col width="20%">
                        <col width="20%">
        </colgroup>
        <thead>
            <tr class='warning'>
                <th>Mes</th>
                <th>Dias arrendados</th>
            </tr>
        </thead>
        <tbody>
			`
            result.d.map((elemento) => {
                let imagen = "";
                console.log(elemento);
                html += `
             <tr>
                <td>${elemento.Mes}</td>
                <td>${elemento.Arriendos}</td>
                
              
            </tr>
							`
            })
            html += ` </tbody>
                        </table>
            <button onclick="pdfArriendosMes(); return false;"> Descargar PDF</button>
           `

            //$("#capturaDivBoton").empty();
            // html += ``;

            capturaDivBoton.innerHTML = html;
        },
        error: function (error) {
            console.log(error);
        }
    })
}

const pdfArriendosMes = () => {
	$.ajax({
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReservaReporteMensual',
		async: true,
        success: function (result) {

            var img = new Image();
            img.src = 'data:image/png;base64,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';
            var pdf = new jsPDF('p', 'pt', 'letter');
            pdf.addImage(img, 'png', 190, 20, 250, 50);

            pdf.text(190, 120, "Arriendos Por Mes");

            // source can be HTML-formatted string, or a reference
            // to an actual DOM element from which the text will be scraped.
            source = $('#customers')[0];

            // we support special element handlers. Register them with jQuery-style 
            // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
            // There is no support for any other type of selectors 
            // (class, of compound) at this time.
            specialElementHandlers = {
                // element with id of "bypass" - jQuery style selector
                '#bypassme': function (element, renderer) {
                    // true = "handled elsewhere, bypass text extraction"
                    return true
                }
            };
            margins = {
                top: 150,
                bottom: 60,
                left: 70,
                width: 900
            };
            // all coords and widths are in jsPDF instance's declared units
            // 'inches' in this case
            pdf.fromHTML(
                source, // HTML string or DOM elem ref.
                margins.left, // x coord
                margins.top, { // y coord
                'width': margins.width, // max width of content on PDF
                'elementHandlers': specialElementHandlers
            },

                function (dispose) {
                    // dispose: object with X, Y of the last line add to the PDF 
                    //          this allow the insertion of new lines after html
                    pdf.save('Test.pdf');
                }, margins);


		},
		error: function (error) {
			console.log(error);
		}
	})
}
const arriendosPorAño = () => {

    let html = "";
    $("#capturaDivBoton").empty();

    html = `  <b><label for="lname">Año : </label></b>
        <input type="text" id="lname" name="Año"/>
        <button onclick="muestraTablaxAño();">Filtrar por año</button>`;

    capturaDivBoton.innerHTML = html;

}

const muestraTablaxAño = () => {

    const anho = document.getElementById('lname').value;
    idTemporal = document.getElementById('lname').value;

    let cambiaStr = document.getElementById('lname').value;

    let xd = cambiaStr.substr(2, 3);
   
    const dataToSend = {
        ano: xd
    }
    console.log(anho);

    const dataString = JSON.stringify(dataToSend);

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReservaReportePorAno',
        data: dataString,
        async: true,
        success: function (result) {
            console.log(result.d)
            let html = "";
            $("#capturaDivBoton").empty();

            html += ` <div id="customers">
    <table id="tab_customers" class="table table-striped">
        <colgroup>
            <col width="20%">
                <col width="20%">
                    <col width="20%">
                        <col width="20%">
        </colgroup>
        <thead>
            <tr class='warning'>
                <th>ID Depto</th>
                <th>Direccion</th>
                <th>Ganancia</th>
            </tr>
        </thead>
        <tbody>
			`
            result.d.map((elemento) => {
                let imagen = "";
                console.log(elemento);
                html += `
             <tr>
                <td>${elemento.IdDepto}</td>
                <td>${elemento.Direccion}</td>
                <td>${elemento.Ganancia}</td>
                
            </tr>
							`
            })
            html += ` </tbody>
                        </table>
            <button onclick="pdfGananciaxAño()"; return false;"> Descargar PDF</button>
            `

            //$("#capturaDivBoton").empty();
            // html += ``;

            capturaDivBoton.innerHTML = html;
        },
        error: function (error) {
            console.log(error);
        }
    })
}

const pdfGananciaxAño = () => {
    console.log(idTemporal);

    const dataToSend = {
        ano: idTemporal
    }
  
    const dataString = JSON.stringify(dataToSend);

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReservaReportePorAno',
        data: dataString,
        async: true,
        success: function (result) {

            var img = new Image();
            img.src = 'data:image/png;base64,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';
            var pdf = new jsPDF('p', 'pt', 'letter');
            pdf.addImage(img, 'png', 190, 20, 250, 50);

            pdf.text(190, 120, "Ganancia por año");

            // source can be HTML-formatted string, or a reference
            // to an actual DOM element from which the text will be scraped.
            source = $('#customers')[0];

            // we support special element handlers. Register them with jQuery-style 
            // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
            // There is no support for any other type of selectors 
            // (class, of compound) at this time.
            specialElementHandlers = {
                // element with id of "bypass" - jQuery style selector
                '#bypassme': function (element, renderer) {
                    // true = "handled elsewhere, bypass text extraction"
                    return true
                }
            };
            margins = {
                top: 150,
                bottom: 60,
                left: 70,
                width: 900
            };
            // all coords and widths are in jsPDF instance's declared units
            // 'inches' in this case
            pdf.fromHTML(
                source, // HTML string or DOM elem ref.
                margins.left, // x coord
                margins.top, { // y coord
                'width': margins.width, // max width of content on PDF
                'elementHandlers': specialElementHandlers
            },

                function (dispose) {
                    // dispose: object with X, Y of the last line add to the PDF 
                    //          this allow the insertion of new lines after html
                    pdf.save('Test.pdf');
                }, margins);


        },
        error: function (error) {
            console.log(error);
        }
    })
}

const getReporteGananciaMensual = () => {

    let html = "";
    $("#capturaDivBoton").empty();

    html = ` <b><label for="lname">Mes : </label></b>
            <input type="text" id="mes" name="Mes">
            <br><b><label for="lname">Año : </label></b>
            <input type="text" id="año" name="Año">
            <br>
            <button onclick="muestraTablaMesAnoGanancia()"; return false;">Filtrar por año</button>`;

    capturaDivBoton.innerHTML = html;

}
const muestraTablaMesAnoGanancia = () => {

    const mes = document.getElementById('mes').value;
    const año = document.getElementById('año').value;

    mesTemporal = document.getElementById('mes').value;
    anoTemporal = document.getElementById('año').value;



    let añoh = anoTemporal.substr(2, 3);
   


    const dataToSend = {
        mes: mes,
        ano: añoh
    }

    const dataString = JSON.stringify(dataToSend);

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReservaReporteMensuAno',
        data: dataString,
        async: true,
        success: function (result) {
            console.log(result.d)
            let html = "";
            $("#capturaDivBoton").empty();

            html += ` <div id="customers">
    <table id="tab_customers" class="table table-striped">
        <colgroup>
            <col width="20%">
                <col width="20%">
                    <col width="20%">
                        <col width="20%">
        </colgroup>
        <thead>
            <tr class='warning'>
                <th>ID Depto</th>
                <th>Dirección</th>
                <th>Ganancia</th>
            </tr>
        </thead>
        <tbody>
			`
            result.d.map((elemento) => {
                let imagen = "";
                console.log(elemento);
                html += `
             <tr>
                <td>${elemento.IdDepto}</td>
                <td>${elemento.Direccion}</td>
                <td>${elemento.Ganancia}</td>
                
            </tr>
							`
            })
            html += ` </tbody>
                        </table>
            <button onclick="reporteGananciaDiaria3(); return false;"> Descargar PDF</button>
            `

            //$("#capturaDivBoton").empty();
            // html += ``;

            capturaDivBoton.innerHTML = html;
        },
        error: function (error) {
            console.log(error);
        }
    })
}

const reporteGananciaDiaria3 = () => {

  
    const dataToSend = {
        mes: mesTemporal,
        ano: anoTemporal
    }

    const dataString = JSON.stringify(dataToSend);

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReservaReportePorAno',
        data: dataString, 
        async: true,
        success: function (result) {

            var img = new Image();
            img.src = 'data:image/png;base64,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';
            var pdf = new jsPDF('p', 'pt', 'letter');
            pdf.addImage(img, 'png', 190, 20, 250, 50);

            pdf.text(190, 120, "Ganancia diaria ");

            // source can be HTML-formatted string, or a reference
            // to an actual DOM element from which the text will be scraped.
            source = $('#customers')[0];

            // we support special element handlers. Register them with jQuery-style 
            // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
            // There is no support for any other type of selectors 
            // (class, of compound) at this time.
            specialElementHandlers = {
                // element with id of "bypass" - jQuery style selector
                '#bypassme': function (element, renderer) {
                    // true = "handled elsewhere, bypass text extraction"
                    return true
                }
            };
            margins = {
                top: 150,
                bottom: 60,
                left: 70,
                width: 900
            };
            // all coords and widths are in jsPDF instance's declared units
            // 'inches' in this case
            pdf.fromHTML(
                source, // HTML string or DOM elem ref.
                margins.left, // x coord
                margins.top, { // y coord
                'width': margins.width, // max width of content on PDF
                'elementHandlers': specialElementHandlers
            },

                function (dispose) {
                    // dispose: object with X, Y of the last line add to the PDF 
                    //          this allow the insertion of new lines after html
                    pdf.save('Test.pdf');
                }, margins);


        },
        error: function (error) {
            console.log(error);
        }
    })
}
const reporteGananciaDiariaDiaMesAno = () => {

    let html = "";
    $("#capturaDivBoton").empty();

    html = ` 
            <b><label for="lname">Dia : </label></b>
            <input type="text" id="lname" name="Dia">
            <br><b><label for="lname">Mes : </label></b>
            <input type="text" id="lname" name="Mes">
            <br><b><label for="lname">Año : </label></b>
            <input type="text" id="lname" name="Año">
            <br>
            <button onclick="reporteGananciaDiariaMesAno()"; return false;">Filtrar por año</button>`;

    capturaDivBoton.innerHTML = html;

}
const reporteGananciaDiariaMesAno = () => {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getreporteGananciaDiariaDiaMesAno',
        async: true,
        success: function (result) {
            console.log(result.d)
            let html = "";
            $("#capturaDivBoton").empty();

            html += ` <div id="customers">
    <table id="tab_customers" class="table table-striped">
        <colgroup>
            <col width="20%">
                <col width="20%">
                    <col width="20%">
                        <col width="20%">
        </colgroup>
        <thead>
            <tr class='warning'>
                <th>ID Depto</th>
                <th>Dirección</th>
                <th>Ganancia</th>
            </tr>
        </thead>
        <tbody>
			`
            result.d.map((elemento) => {
                let imagen = "";
                console.log(elemento);
                html += `
             <tr>
                <td>${elemento.IdDepto}</td>
                <td>${elemento.Direccion}</td>
                <td>${elemento.Ganancia}</td>
                
            </tr>
							`
            })
            html += ` </tbody>
                        </table>
            <button onclick="reporteGananciaDiariaMesAnoPDF(); return false;"> Descargar PDF</button>
            `

            //$("#capturaDivBoton").empty();
            // html += ``;

            capturaDivBoton.innerHTML = html;
        },
        error: function (error) {
            console.log(error);
        }
    })
}
const reporteGananciaDiariaMesAnoPDF = () => {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReservaReportePorAno',
        async: true,
        success: function (result) {

            var img = new Image();
            img.src = 'data:image/png;base64,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';
            var pdf = new jsPDF('p', 'pt', 'letter');
            pdf.addImage(img, 'png', 190, 20, 250, 50);

            pdf.text(190, 120, "Ganancia diaria por mes y año");

            // source can be HTML-formatted string, or a reference
            // to an actual DOM element from which the text will be scraped.
            source = $('#customers')[0];

            // we support special element handlers. Register them with jQuery-style 
            // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
            // There is no support for any other type of selectors 
            // (class, of compound) at this time.
            specialElementHandlers = {
                // element with id of "bypass" - jQuery style selector
                '#bypassme': function (element, renderer) {
                    // true = "handled elsewhere, bypass text extraction"
                    return true
                }
            };
            margins = {
                top: 150,
                bottom: 60,
                left: 70,
                width: 900
            };
            // all coords and widths are in jsPDF instance's declared units
            // 'inches' in this case
            pdf.fromHTML(
                source, // HTML string or DOM elem ref.
                margins.left, // x coord
                margins.top, { // y coord
                'width': margins.width, // max width of content on PDF
                'elementHandlers': specialElementHandlers
            },

                function (dispose) {
                    // dispose: object with X, Y of the last line add to the PDF 
                    //          this allow the insertion of new lines after html
                    pdf.save('Test.pdf');
                }, margins);


        },
        error: function (error) {
            console.log(error);
        }
    })
}

const gananciaZonaAno = () => {



    let html = "";
    $("#capturaDivBoton").empty();

    html = ` 
            <br><b><label for="lname">Año : </label></b>
            <input type="text" id="año" name="Año">
            <br>
            <button onclick="reporteGananciaDiariaMesAnoxd(); return false;">Filtrar por año</button>`;

    capturaDivBoton.innerHTML = html;
}

const reporteGananciaDiariaMesAnoxd = () => {
    const getGananciaAno = document.getElementById('año').value;

    anoTemporal = document.getElementById('año').value;

    let añho = anoTemporal.substr(2, 3);


    const dataToSend = {
        ano: añho
    }

    const dataString = JSON.stringify(dataToSend);

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReporteGananciaZona',
        data: dataString,
        async: true,
        success: function (result) {
            console.log(result.d)
            let html = "";
            $("#capturaDivBoton").empty();

            html += ` <div id="customers">
            <table id="tab_customers" class="table table-striped">
            <colgroup>
            <col width="20%">
                <col width="20%">
                    <col width="20%">
                        <col width="20%">
        </colgroup>
        <thead>
            <tr class='warning'>
                <th>Region</th>
                <th>Ganancia</th>
               
            </tr>
        </thead>
        <tbody>`
            result.d.map((elemento) => {
                let imagen = "";
                console.log(elemento);
                html += `
             <tr>
               <td>${elemento.Region}</td>
                <td>${elemento.Ganancia}</td>
            </tr>`
            })
            html += ` </tbody>
                        </table>
            <button onclick="reporteGananciaDiariaMexPDF(); return false;"> Descargar PDF</button>
            `
            //$("#capturaDivBoton").empty();
            // html += ``;
            capturaDivBoton.innerHTML = html;
        },
        error: function (error) {
            console.log(error);
        }
    })
}
const reporteGananciaDiariaMexPDF = () => {


    const dataToSend = {
        ano: anoTemporal
    }

    const dataString = JSON.stringify(dataToSend);

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReporteGananciaZona',
        data: dataString,
        async: true,
        success: function (result) {

            var img = new Image();
            img.src = 'data:image/png;base64,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';
            var pdf = new jsPDF('p', 'pt', 'letter');
            pdf.addImage(img, 'png', 190, 20, 250, 50);

            pdf.text(190, 120, "Ganancia por Zona");

            // source can be HTML-formatted string, or a reference
            // to an actual DOM element from which the text will be scraped.
            source = $('#customers')[0];

            // we support special element handlers. Register them with jQuery-style 
            // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
            // There is no support for any other type of selectors 
            // (class, of compound) at this time.
            specialElementHandlers = {
                // element with id of "bypass" - jQuery style selector
                '#bypassme': function (element, renderer) {
                    // true = "handled elsewhere, bypass text extraction"
                    return true
                }
            };
            margins = {
                top: 150,
                bottom: 60,
                left: 70,
                width: 900
            };
            // all coords and widths are in jsPDF instance's declared units
            // 'inches' in this case
            pdf.fromHTML(
                source, // HTML string or DOM elem ref.
                margins.left, // x coord
                margins.top, { // y coord
                'width': margins.width, // max width of content on PDF
                'elementHandlers': specialElementHandlers
            },

                function (dispose) {
                    // dispose: object with X, Y of the last line add to the PDF 
                    //          this allow the insertion of new lines after html
                    pdf.save('Test.pdf');
                }, margins);


        },
        error: function (error) {
            console.log(error);
        }
    })
}

const reporteGananciaZona = () => {

    let html = "";
    $("#capturaDivBoton").empty();

    html = ` 
            <br><b><label for="mes">Mes : </label></b>
            <input type="text" id="mes" name="Año">
            <br><b><label for="año">Año : </label></b>
            <input type="text" id="año" name="Año">
            <br>
            <button onclick="reporteGananciaxE(); return false;">Filtrar por año</button>`;

    capturaDivBoton.innerHTML = html;
}

const reporteGananciaxE = () => {

    const mes = document.getElementById('mes').value;
    const año = document.getElementById('año').value;

    anoTemporal = document.getElementById('año').value;
    mesTemporal = document.getElementById('mes').value;


    let ahño = anoTemporal.substr(2, 3);

    const dataToSend = {
        ano: ahño,
        mes: mes
    }

    const dataString = JSON.stringify(dataToSend);

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReporteGananciaZonaEx',
        data: dataString,
        async: true,
        success: function (result) {
            console.log(result.d)
            let html = "";
            $("#capturaDivBoton").empty();

            html += ` <div id="customers">
            <table id="tab_customers" class="table table-striped">
            <colgroup>
            <col width="20%">
                <col width="20%">
                    <col width="20%">
                        <col width="20%">
        </colgroup>
        <thead>
            <tr class='warning'>
                <th>Region</th>
                <th>Ganancia</th>
               
            </tr>
        </thead>
        <tbody>`
            result.d.map((elemento) => {
                let imagen = "";
                console.log(elemento);
                html += `
             <tr>
               <td>${elemento.Region}</td>
                <td>${elemento.Ganancia}</td>
            </tr>`
            })
            html += ` </tbody>
                        </table>
            <button onclick="reporteGananciaDiariaMexPDFx(); return false;"> Descargar PDF</button>
            `
            //$("#capturaDivBoton").empty();
            // html += ``;
            capturaDivBoton.innerHTML = html;
        },
        error: function (error) {
            console.log(error);
        }
    })
}
const reporteGananciaDiariaMexPDFx = () => {

    const dataToSend = {
        ano: anoTemporal,
        mes: mesTemporal
    }

    const dataString = JSON.stringify(dataToSend);

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: 'Reportes.aspx/getReporteGananciaZonaEx',
        data: dataString,
        async: true,
        success: function (result) {

            var img = new Image();
            img.src = 'data:image/png;base64,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';
            var pdf = new jsPDF('p', 'pt', 'letter');
            pdf.addImage(img, 'png', 190, 20, 250, 50);

            pdf.text(190, 120, "Reporta Ganancia por Mes y Año");

            // source can be HTML-formatted string, or a reference
            // to an actual DOM element from which the text will be scraped.
            source = $('#customers')[0];

            // we support special element handlers. Register them with jQuery-style 
            // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
            // There is no support for any other type of selectors 
            // (class, of compound) at this time.
            specialElementHandlers = {
                // element with id of "bypass" - jQuery style selector
                '#bypassme': function (element, renderer) {
                    // true = "handled elsewhere, bypass text extraction"
                    return true
                }
            };
            margins = {
                top: 150,
                bottom: 60,
                left: 70,
                width: 900
            };
            // all coords and widths are in jsPDF instance's declared units
            // 'inches' in this case
            pdf.fromHTML(
                source, // HTML string or DOM elem ref.
                margins.left, // x coord
                margins.top, { // y coord
                'width': margins.width, // max width of content on PDF
                'elementHandlers': specialElementHandlers
            },

                function (dispose) {
                    // dispose: object with X, Y of the last line add to the PDF 
                    //          this allow the insertion of new lines after html
                    pdf.save('Test.pdf');
                }, margins);
        },
        error: function (error) {
            console.log(error);
        }
    })
}