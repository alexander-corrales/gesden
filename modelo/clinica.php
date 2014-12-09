<?php

/**
 * 
 */
include("conexion_bd.php");
include("persona.php");

class Clinica {

    private $conexion_bd;
    private $cache_pacientes;
    
    private $puntero;
    
    function __construct() {
        $this->conexion_bd = Conexion_BD::get_instance();
        $this->cache_pacientes = array();
        $this->puntero = 0;
    }

    /*
     * funcion que registra un paciente y devuelve un objeto
     * de la clase persona
     */
    public function registrar_paciente($nombre, $app_paterno, 
            $app_materno, $direccion, $fnac) {
        $res = null;
        if($this->verificar_persona_db($nombre, 
                $app_paterno, $app_materno, $fnac) == 0) {
            $sql = "insert into persona values(default,'"
                    . $nombre. "','" . $app_paterno . "','" . $app_materno . 
                    "','" . $direccion . "','" . $fnac . "')";
            
            $this->conexion_bd->ejecutar_sql($sql);
            
            $res = new Persona($nombre, $app_paterno, 
                    $app_materno, $direccion, $fnac);
            $this->cache_pacientes[$this->puntero] = $res;
            $this->puntero ++;
        }
        return $res;
    }

    public function get_pacientes() {
        $res = array();
        $sql = "select * from persona";
        $this->conexion_bd->ejecutar_sql($sql);
        $pacientes = $this->conexion_bd->get_tuplas();
        $index = 0;
        foreach ($pacientes as $i) {
            $oPersona = new Persona($i[1], $i[2], $i[3], $i[4], $i[5]);            
            $res[$index] = $oPersona;
            $index ++;
        }
        return $res;
    }

    /*
     * funcion devuelve 3 valores 
     * 0 no existe el registro
     * 1 existe el registro y es unico 
     * -1 hay mas de un registro en la base de datos 
     */

    public function verificar_persona_db($nombre, 
            $apellido_paterno, $apellido_materno, $fnac) {
        $res = -1;
        $sql = "select * from persona "
                . "where nombre='" . $nombre . "' and app_paterno='" . $apellido_paterno
                . "' and app_materno='" . $apellido_materno
                . "' and f_nac ='" . $fnac . "'";
        
        $this->conexion_bd->ejecutar_sql($sql);
        if ($this->conexion_bd->cantidad_registros() == 0) {
            $res = 0;
        } elseif ($this->conexion_bd->cantidad_registros() == 1) {
            $res = 1;
        }    
        return $res;
    }

}
?>