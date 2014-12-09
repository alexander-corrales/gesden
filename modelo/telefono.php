<?php

/**
 * 
 */
class Telefono {

    private $tipo;
    private $numero;
    private $descripcion;
    
    public static $NUMERO_DOMICILIO = 1;
    public static $NUMERO_CELULAR = 2;
    public static $NUMERO_TRABAJO = 3;
    public static $NUMERO_VARIOS = 4;

    public function __construct($tipo, $numero, $descripcion) {
        $this->tipo = $tipo;
        $this->numero = $numero;
        $this->descripcion = $descripcion;
    }

    public function get_tipo() {
        return $this->tipo;
    }
    
    public function get_numero() { 
        return $this->numero;
    }
    
    public function get_descripcion() { 
        return $this->descripcion;
    }
    
    public function set_tipo($tipo) {
        $this->tipo = $tipo;
    }
    
    public function set_numero($numero) {
        $this->numero = $numero;
    }
}

?>