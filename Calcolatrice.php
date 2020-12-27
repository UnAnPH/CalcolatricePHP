<?php

    function risToStrDisplay(){
        return '<script type="text/javascript">
        risToStrDisplay();
        </script>' ;
    }

    function evalString(String $stringToCalc) {
        $result = eval("return " . $stringToCalc . ";" );
        return $result;
    }

    //posso fare funzioni che eval va a chiamare
    function rec($ciao){
        return 1/$ciao;
    }
    
    function fact($ciao){
        $ciao=eval("return " . $ciao . ";" );
        $ffact=1;
        while($ciao >= 1)
        {
            $ffact = $ciao * $ffact;
            $ciao--;
        }
        return $ffact;
    }
    
    function radx($numero,$esp){
        pow($numero,$esp);
    }
    
    function pow($numero,$esp){
        $ciao=eval("return " . $numero . ";" );
        return $ciao ** $esp;
    }
    
    function rad2($numero){
            $ciao=eval("return " . $numero . ";" );
            return sqrt($ciao);
        }

    

?>