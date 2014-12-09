<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include 'hora.php';
class Consulta {

    private $hora_inicio;
    private $estado_consulta;
    private $notas;
    
    public static $CONSULTA_PENDIENTE = 0;
    public static $CONSULTA_CANCELADA = 1;
    public static $CONSULTA_ASISTIDA = 2;
    public static $CONTULTA_NO_ASISTIDA = 3;
    
    function __construct($hora_inicio) {
        $this->hora_inicio = $hora_inicio;
        $this->estado_consulta = Consulta::$CONSULTA_PENDIENTE;
    }
    
    public function set_notas($notas) {
        $this->notas = $notas;
    }

}