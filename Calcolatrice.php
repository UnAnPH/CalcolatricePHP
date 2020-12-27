<?php
    //implementare la classe calcolatrice
    // method declaration
    // function evalString(String $stringToCalc) {

    // $arrayString= explode(",",$stringToCalc);

    // for($i=0;$i<count($arrayString);$i++){
    //     switch ($arrayString[$i]) {
    //         case 'rec':
                
    //             break;
            
    //         default:
    //             # code...
    //             break;
    //     }
    // }

    // $arrayString = array_filter($arrayString, 'strlen');
    // // $result = eval("return " . $stringa . ";" );
    // // return $result;
    // }

    function risToStrDisplay(){
        return '<script type="text/javascript">
        risToStrDisplay();
        </script>' ;
    }

    function evalString(String $stringToCalc) {
        $result = eval("return " . $stringToCalc . ";" );
        return $result;
    }

    


    

?>