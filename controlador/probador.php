<?php
    include '../modelo/clinica.php';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    $clinica = new Clinica();
    
    $pacientes = $clinica->get_pacientes();
        $json = "[";
        for($i = 0; $i < count($pacientes); $i++) {
            if($i == count($pacientes) - 1) {
                $json = $json . "{\"nombre\":\"" . $pacientes[$i]->get_nombre() . "\","
                    . "\"apellido_paterno\":\"" . $pacientes[$i]->get_apellido_paterno() . "\","
                    . "\"apellido_materno\":\"" . $pacientes[$i]->get_apellido_materno() . "\","
                    . "\"direccion\":\"" .$pacientes[$i]->get_direccion() . "\"}";
            }
            else {
                $json = $json . "{\"nombre\":\"" . $pacientes[$i]->get_nombre() . "\","
                    . "\"apellido_paterno\":\"" . $pacientes[$i]->get_apellido_paterno() . "\","
                    . "\"apellido_materno\":\"" . $pacientes[$i]->get_apellido_materno() . "\","
                    . "\"direccion\":\"" .$pacientes[$i]->get_direccion() . "\"},";
            }
        }
        $json = $json . "]";
        echo $json;

