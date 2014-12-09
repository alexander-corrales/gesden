
var READY_STATE_UNINITIALIZED = 0;
var READY_STATE_LOADING = 1;
var READY_STATE_LOADED = 2;
var READY_STATE_INTERACTIVE = 3;
var READY_STATE_COMPLETE = 4;

var peticion_http;

function cargaContenido(url, metodo, funcion) {
    peticion_http = inicializa_xhr();
    if (peticion_http) {
        peticion_http.onreadystatechange = funcion;
        peticion_http.open(metodo, url, true);
        peticion_http.send(null);
    }
}

function inicializa_xhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function mostrar_pacientes() {
    if (peticion_http.readyState == READY_STATE_COMPLETE) {
        if (peticion_http.status == 200) {
            var pacientes = peticion_http.responseText;
            alert(pacientes);
            alert("hola");
            var oPacientes = JSON.parse(pacientes);
            
            alert("por q m... no funciona");
            crear_tabla_pacientes(oPacientes);
            
        }
    }
}


function enviar_datos_consulta_pacientes() {
    cargaContenido("http://localhost/gesden/controlador/controlador.php?vista=mostrar_pacientes",
    "GET", mostrar_pacientes);
}

function crear_tabla_pacientes(oPacientes) {
    alert("hasta aqui");
    var div_contenedor = document.getElementById("right");
    var tabla = document.createElement("table");
    tabla.setAttribute("align", "center");
    var tblBody = document.createElement("tbody");

    var fila = document.createElement("tr");
    
    var encabezado = document.createElement("th");
    var texto = document.createTextNode("Nombres");
    encabezado.appendChild(texto);
    fila.appendChild(encabezado);
    
    encabezado = document.createElement("th");
    texto = document.createTextNode("Apellido Paterno");
    encabezado.appendChild(texto);
    fila.appendChild(encabezado);
    
    encabezado = document.createElement("th");
    texto = document.createTextNode("Apellido Materno");
    encabezado.appendChild(texto);
    fila.appendChild(encabezado);
    
    encabezado = document.createElement("th");
    texto = document.createTextNode("Direccion");
    encabezado.appendChild(texto);
    fila.appendChild(encabezado);
    
    tblBody.appendChild(fila);
    
    for(var i = 0; i < oPacientes.length; i++) {
        fila = document.createElement("tr");
        
        encabezado = document.createElement("td");
        texto = document.createTextNode(oPacientes[i].nombre);
        encabezado.appendChild(texto);
        
        fila.appendChild(encabezado);
        
        encabezado = document.createElement("td");
        texto = document.createTextNode(oPacientes[i].apellido_paterno);
        encabezado.appendChild(texto);
        
        fila.appendChild(encabezado);
        
        encabezado = document.createElement("td");
        texto = document.createTextNode(oPacientes[i].apellido_materno);
        encabezado.appendChild(texto);
        
        fila.appendChild(encabezado);
        
        encabezado = document.createElement("td");
        texto = document.createTextNode(oPacientes[i].direccion);
        encabezado.appendChild(texto);
        
        fila.appendChild(encabezado);
        
        
        tblBody.appendChild(fila);
    }
    
    
    tabla.appendChild(tblBody);
    div_contenedor.appendChild(tabla);
    
    $("th").parent().addClass("cabecera-tabla");
    $("tr:not([th]):even").addClass("even");
    $("tr:not([th]):odd").addClass("odd");
    
}