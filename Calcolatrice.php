<?php
    //implementare la classe calcolatrice
    // method declaration
    function evalString(String $stringa) {
       $result = eval("return " . $stringa . ";" );
       return $result;
    }

    function risToStrDisplay(){
        return '<script type="text/javascript">
        risToStrDisplay();
        </script>' ;
    }

?>