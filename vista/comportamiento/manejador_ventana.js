
/*window.onload = function () {
 document.getElementById("id_consultas").onclick = cargar_consultas;
 document.getElementById("id_pacientes").onclick = cargar_menu_pacientes;
 
 };
 */

$(document).ready(function () {
    document.getElementById("id_consultas").onclick = cargar_consultas;
    document.getElementById("id_pacientes").onclick = cargar_menu_pacientes;
});

function cargar_consultas() {
    var div_consultas = document.getElementById("sector");
    div_consultas.innerHTML = "<div class=\"sub_sector\"><a href=\"#\">Apuntar Consulta</a></div>";
    div_consultas.innerHTML = div_consultas.innerHTML + "<div class=\"sub_sector\"><a href=\"#\">Ver Consultas</a></div>";
}

function cargar_menu_pacientes() {
    var div_pacientes = document.getElementById("sector");
    div_pacientes.innerHTML = "<div class=\"sub_sector\" id=\"id_nuevo_paciente\"><a href=\"#\">Nuevo Paciente</a></div>";
    div_pacientes.innerHTML = div_pacientes.innerHTML + "<div class=\"sub_sector\"><a href=\"#\">Busqueda</a></div>";
    div_pacientes.innerHTML = div_pacientes.innerHTML + "<div class=\"sub_sector\" id=\"id_lista_pacientes\"><a href=\"#\">Pacientes</a></div>";

    document.getElementById("id_nuevo_paciente").onclick = cargar_formulario_paciente;
    document.getElementById("id_lista_pacientes").onclick = cargar_vista_pacientes;
    
    
}

function cargar_formulario_paciente() {
    var parrafo = document.createElement("h2");
    var contenido = document.createTextNode("Nuevo Paciente");
    parrafo.setAttribute("align", "center");
    parrafo.appendChild(contenido);
    var div_right = document.getElementById("right");
    div_right.innerHTML = "";
    div_right.appendChild(parrafo);

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var fila = document.createElement("tr");

    var dato = document.createElement("td");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Nombres");
    parrafo.appendChild(texto);
    dato.appendChild(parrafo);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    var dato = document.createElement("td");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "38");
    input.setAttribute("id", "nombres");
    input.setAttribute("name", "nombre");
    dato.appendChild(input);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    var fila = document.createElement("tr");

    var dato = document.createElement("td");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Apellido Paterno");
    parrafo.appendChild(texto);
    dato.appendChild(parrafo);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    var dato = document.createElement("td");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "38");
    input.setAttribute("id", "apellido_paterno");
    input.setAttribute("name", "app_paterno");
    dato.appendChild(input);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    var fila = document.createElement("tr");

    var dato = document.createElement("td");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Apellido Materno");
    parrafo.appendChild(texto);
    dato.appendChild(parrafo);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    var dato = document.createElement("td");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "38");
    input.setAttribute("id", "apellido_materno");
    input.setAttribute("name", "app_materno");
    dato.appendChild(input);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    var fila = document.createElement("tr");

    var dato = document.createElement("td");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Fecha de Nacimiento");
    parrafo.appendChild(texto);
    dato.appendChild(parrafo);
    fila.appendChild(dato);
    tblBody.appendChild(fila);
    
   
    var dato = document.createElement("td");
    var div_fecha = document.createElement("div");
    var input = document.createElement("select");
    input.setAttribute("id", "fecha_dia");
    input.setAttribute("name", "fecha_dia");
    var option = document.createElement("option");
    var text = document.createTextNode("Dia");
    input.appendChild(option);
    option.appendChild(text);
    for(var i = 1; i <= 31; i++){
        option = document.createElement("option");
        text = document.createTextNode(i);
        
        input.appendChild(option);
        option.appendChild(text);
    }
    div_fecha.appendChild(input);
    
    var input = document.createElement("select");
    input.setAttribute("id", "fecha_mes");
    input.setAttribute("name", "fecha_mes");
    var option = document.createElement("option");
    var text = document.createTextNode("Mes");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "01");
    var text = document.createTextNode("Enero");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "02");
    var text = document.createTextNode("Febrero");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "03");
    var text = document.createTextNode("Marzo");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "04");
    var text = document.createTextNode("Abril");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "05");
    var text = document.createTextNode("Mayo");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "06");
    var text = document.createTextNode("Junio");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "07");
    var text = document.createTextNode("Julio");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "08");
    var text = document.createTextNode("Agosto");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "09");
    var text = document.createTextNode("Septiembre");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "10");
    var text = document.createTextNode("Octubre");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "11");
    var text = document.createTextNode("Noviembre");
    input.appendChild(option);
    option.appendChild(text);
    var option = document.createElement("option");
    option.setAttribute("value", "12");
    var text = document.createTextNode("Diciembre");
    input.appendChild(option);
    option.appendChild(text);
    div_fecha.appendChild(input);
    
    var input = document.createElement("select");
    input.setAttribute("id", "fecha_anio");
    input.setAttribute("name", "fecha_anio");
    var option = document.createElement("option");
    var text = document.createTextNode("Anio");
    input.appendChild(option);
    option.appendChild(text);
    for(var i = 2014; i >= 1905; i--){
        option = document.createElement("option");
        text = document.createTextNode(i);
        
        input.appendChild(option);
        option.appendChild(text);
    } 
    div_fecha.appendChild(input);
    
    dato.appendChild(div_fecha);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    var fila = document.createElement("tr");

    var dato = document.createElement("td");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Telefono");
    parrafo.appendChild(texto);
    dato.appendChild(parrafo);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    var dato = document.createElement("td");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "38");
    input.setAttribute("id", "telefono_paciente");
    input.setAttribute("name", "telefono_paciente");
    dato.appendChild(input);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    var fila = document.createElement("tr");

    var dato = document.createElement("td");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Direccion");
    parrafo.appendChild(texto);
    dato.appendChild(parrafo);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    var dato = document.createElement("td");
    var input = document.createElement("textarea");
    input.setAttribute("rows", "5");
    input.setAttribute("cols", "40");
    input.setAttribute("name", "direccion");
    dato.appendChild(input);
    fila.appendChild(dato);
    tblBody.appendChild(fila);

    tabla.appendChild(tblBody);

    div_right.appendChild(document.createElement("br"));

    enviar = document.createElement("input");
    enviar.setAttribute("type", "button");
    enviar.setAttribute("id", "envio_form_paciente");
    enviar.setAttribute("value", "Guardar");

    tabla.setAttribute("align", "center");
    tabla.setAttribute("cellspacing", "3");

    var formulario = document.createElement("form");
    formulario.setAttribute("action", "../../controlador/controlador.php?vista=registrar");
    formulario.setAttribute("id", "formulario_paciente");
    formulario.setAttribute("method", "post");

    formulario.appendChild(tabla);

    var centrar = document.createElement("center");
    centrar.appendChild(enviar);
    formulario.appendChild(centrar);

    div_right.appendChild(formulario);


    document.getElementById("telefono_paciente").onkeypress = validarNumeros;
    document.getElementById("envio_form_paciente").onclick = validar_form_paciente;
}

function cargar_vista_pacientes() {
    
    var titulo = document.createElement("h2");
    var contenido = document.createTextNode("Lista de Pacientes");
    titulo.setAttribute("align", "center");
    titulo.appendChild(contenido);
    var div_right = document.getElementById("right");
    div_right.innerHTML = "";
    div_right.appendChild(titulo);
    enviar_datos_consulta_pacientes();
}