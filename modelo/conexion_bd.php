<?php

class Conexion_BD {

    private static $servidor = 'localhost';
    private static $usuario = 'postgres';
    private static $password = 'root';
    private $base_datos = 'gesden';
    private $link;
    private $stmt;
    private $array;
    static $_instance;

    private function __construct() {
        $this->conectar();
    }

    private function conectar() {
        $cadena = "host=" . self::$servidor . " port=5432 user=" . self::$usuario . " password=" . self::$password . " dbname=" . $this->base_datos;
        $this->link = pg_connect($cadena);
    }

    public static function get_instance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }

        return self::$_instance;
    }

    public function ejecutar_sql($sql) {
        $this->stmt = pg_query($this->link, $sql);
    }

    public function cantidad_registros() {
        return pg_num_rows($this->stmt);
    }

    public function get_tuplas() {
        
        $array = array();
	$i = 0;
	while($tupla = pg_fetch_row($this->stmt)){
		$array[$i] = $tupla;
		$i ++;
	}
	
	return $array;
    }
}

?>