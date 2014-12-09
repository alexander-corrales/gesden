<?php

/**
 * 
 */
require_once 'conexion_bd.php';
include 'telefono.php';

class Persona {

    private $nombre;
    private $apellido_paterno;
    private $apellido_materno;
    //private $numero_doc_identidad;
    private $direccion;
    private $fnac;
    private $telefonos;
    private $cont_telefonos;
    private $sql_identificativo;
    
    private $consultas;

    public function __construct($nombre, $apellido_paterno, $apellido_materno, $direccion, $fnac) {
        $this->nombre = $nombre;
        $this->apellido_paterno = $apellido_paterno;
        $this->apellido_materno = $apellido_materno;
        $this->direccion = $direccion;
        $this->fnac = $fnac;
        $this->telefonos = array();
        $this->consultas = array();

        $this->cont_telefonos = count($this->telefonos);
        $this->conexion_bd = Conexion_BD::get_instance();

        $this->sql_identificativo = "select * from persona where "
                . "persona.nombre='" . $this->nombre . "' and "
                . "persona.app_paterno='" . $this->apellido_paterno . "' and "
                . "persona.app_materno='" . $this->apellido_materno . "' and "
                . "persona.f_nac='" . $this->fnac . "' ";
    }

    public function get_nombre() {
        return $this->nombre;
    }

    public function get_apellido_paterno() {
        return $this->apellido_paterno;
    }

    public function get_apellido_materno() {
        return $this->apellido_materno;
    }

    public function get_direccion() {
        return $this->direccion;
    }

    public function get_telefonos() {
        return $this->telefonos;
    }

    public function set_nombre($nombre) {
        $this->nombre = $nombre;
    }

    public function set_apellido_paterno($apellido_paterno) {
        $this->apellido_paterno = $apellido_paterno;
    }

    public function set_apellido_materno($apellido_materno) {
        $this->apellido_materno = $apellido_materno;
    }

    public function set_direccion($direccion) {
        $this->direccion = $direccion;
    }

    public function add_telefono($telefono) {
        $conexion_bd = Conexion_BD::get_instance();
        
        $conexion_bd->ejecutar_sql($this->sql_identificativo);
        $array = $conexion_bd->get_tuplas();
        $id_persona = $array[0][0];
        
        $sql = "select * from persona, numero 
                where persona.id = numero.id and 
                numero.numero = '" . $telefono->get_numero() . "' and "
                . "persona.id='" . $id_persona . "'";

        $conexion_bd->ejecutar_sql($sql);
        if ($conexion_bd->cantidad_registros() == 0) {
            $insert = "insert into numero values(default, '"
                    . $id_persona . "','" . $telefono->get_numero() . "','"
                    . $telefono->get_descripcion() . "')";
            $conexion_bd->ejecutar_sql($insert);
        }
        
    }
    
    public function add_consulta($consulta) {
        
    }

}

?>