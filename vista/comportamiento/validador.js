/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validar_form_paciente() {
    var res = false;
    var nombre = document.getElementById("nombres");
    var app_paterno = document.getElementById("apellido_paterno");
    var app_materno = document.getElementById("apellido_materno");
    var fnac = document.getElementById("fecha_nacimiento");

    var fecha_valida = false;
    var dia = document.getElementById("fecha_dia").value;
    var mes = document.getElementById("fecha_mes").value;
    var anio = document.getElementById("fecha_anio").value;
    
    if(dia !== "Dia" && mes !== "Mes" && anio !== "Anio") {
        var fecha = dia + "/" + mes + "/" + anio;
        if(existeFecha(fecha)){
            fecha_valida = true;
        }
    }
    
    res = !es_vacio(nombre) && !es_vacio(app_paterno) && !es_vacio(app_materno);
    
    if(res == false && fecha_valida == false) { 
        alert("1: Debe llemar los campos obligatorios \n\
                    2: La fecha ingresada no es valida");
    }
    else if(res == true && fecha_valida == false) {
        alert("La fecha ingresada no es valida!");
    }
    else if(res == false && fecha_valida == true) { 
        alert("Debe llenar los campos obligatorios!");
    }
    
    if(res && fecha_valida) { 
        
        document.getElementById("formulario_paciente").submit();
    }
}   

function validarNumeros(e) { // 1
    var res = false;
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key).toLowerCase();

    if (tecla == "1" || tecla == "2" || tecla == "3" || tecla == "4"
            || tecla == "5" || tecla == "6" || tecla == "7"
            || tecla == "8" || tecla == "9") {
        res = true;
    }

    return res;
}

function existeFecha(fecha) {
    var fechaf = fecha.split("/");
    var day = fechaf[0];
    var month = fechaf[1];
    var year = fechaf[2];
    var date = new Date(year, month, '0');
    if ((day - 0) > (date.getDate() - 0)) {
        return false;
    }
    else
        return true;
}

function es_vacio(input) {
    if (input.value != "" && vacio(input.value) == false) {

        return false;
    }
    else
        return true;
}

function vacio(q) {
    for (i = 0; i < q.length; i++) {
        if (q.charAt(i) != " ") {
            return false;
        }
    }
    return true;
}
 