<?php

include "../modelo/clinica.php";

$clinica = new Clinica();

$vista = $_GET["vista"];

//echo $vista;
switch ($vista) {
    case "mostrar_pacientes":
        
        $pacientes = $clinica->get_pacientes();
        $json = "[";
        for ($i = 0; $i < count($pacientes); $i++) {
            if ($i == count($pacientes) - 1) {
                $json = $json . "{\"nombre\":\"" . $pacientes[$i]->get_nombre() . "\","
                        . "\"apellido_paterno\":\"" . $pacientes[$i]->get_apellido_paterno() . "\","
                        . "\"apellido_materno\":\"" . $pacientes[$i]->get_apellido_materno() . "\","
                        . "\"direccion\":\"" . $pacientes[$i]->get_direccion() . "\"}";
            } else {
                $json = $json . "{\"nombre\":\"" . $pacientes[$i]->get_nombre() . "\","
                        . "\"apellido_paterno\":\"" . $pacientes[$i]->get_apellido_paterno() . "\","
                        . "\"apellido_materno\":\"" . $pacientes[$i]->get_apellido_materno() . "\","
                        . "\"direccion\":\"" . $pacientes[$i]->get_direccion() . "\"},";
            }
        }
        $json = $json . "]";
        echo $json; 
        break;
    case "login":
        if(isset($_POST["usuario"]) && isset($_POST["clave"])) {
            verificar_usuario($_POST["usuario"], $_POST["clave"]);
        }
        break;
    case "registrar":
        registrar_paciente();
    break;
}
     
function verificar_usuario($usuario, $clave) { 
    $conexion_bd = Conexion_BD::get_instance();
    $sql = "select * from usuario where "
            . "nombre_usuario='" . $usuario . "' and "
            . "clave_usuario='" .$clave . "'";
    $conexion_bd->ejecutar_sql($sql);
    if($conexion_bd->cantidad_registros() == 1) {
        header("location: http://localhost/gesden/vista/presentacion/index.html");
    }
    else
        echo "El usuario no existe";
}

function registrar_paciente() {
    if(isset($_POST["nombre"]) && isset($_POST["app_paterno"]) && 
            isset($_POST["app_materno"])) {
        
        $dia = $_POST["fecha_dia"];
        $mes = $_POST["fecha_mes"];
        $anio = $_POST["fecha_anio"];
        $fecha;
        if($dia != "Dia" && $mes != "Mes" && $anio != "Anio") { 
            $fecha = $dia . "/" . $mes . "/" . $anio;
        }
        
        global $clinica;
        $paciente = $clinica->registrar_paciente($_POST["nombre"], $_POST["app_paterno"],
                $_POST["app_materno"], $_POST["direccion"], $fecha);
        if(!is_null($paciente)) {
            echo "paciente registrado<br>";
            if(isset($_POST["telefono_paciente"])) {
                $telefono = new Telefono(Telefono::$NUMERO_VARIOS, 
                        $_POST["telefono_paciente"], "breve descripcion");
                $paciente->add_telefono($telefono);
                
            }
            else
                echo "No entre en el if";
        }
        else 
            echo "no registrado";
    }
    
}