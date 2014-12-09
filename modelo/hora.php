<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Hora
 *
 * @author Alexander
 */
class Hora {
    private $minutos;
    private $horas;
            
    function __construct() {
        $this->minutos = 0;
        $this->horas = 0;
    }
    
    public function get_minutos() {
        return $this->minutos;
    }
    
    public function get_horas() { 
        return $this->horas;
    }
    
    public function set_minutos($minutos) {
        if($minutos >= 0 && $minutos <=59) {
            $this->minutos = $minutos;
        }
    }
    
    public function set_horas($horas) { 
        if($horas >= 0 && $horas <=24) { 
            $this->horas = $horas;
        }
    }
    
    public function toString() { 
        $cadena = "";
        if($this->horas < 10) { 
            $cadena = "0" . $this->horas . ":"; 
        }
        else {
            $cadena = $this->horas . ":";
        }
        if($this->minutos < 10) {
            $cadena = $cadena . "0" . $this->minutos;
        }
        else {
            $cadena = $cadena . $this->minutos;
        }
        
        return $cadena;
    }
}
