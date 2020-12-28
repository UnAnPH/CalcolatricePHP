<?php

    function risToStrDisplay(){
        return '<script type="text/javascript">
        risToStrDisplay();
        </script>' ;
    }

    function evalString(String $stringToCalc) {
        $array= explode("_",$stringToCalc);
        for($i=0;$i<count($array);$i++){
            $array[$i]=changeString($array[$i]);
        }
        $stringToEval = implode("", $array);
        $result = eval("return " . $stringToEval . ";" );
        return $result;
    }

    //posso fare funzioni che eval va a chiamare
    function rec($num){
        return 1/$num;
    }
    
    function fact($num){
        $num=eval("return " . $num . ";" );
        $ris=1;
        while($num >= 1)
        {
            $ris = $num * $ris;
            $num--;
        }
        return $ris;
    }
    
    function radx($numero,$esp=1){
        $ciao=eval("return " . $numero . ";" );
        return powX($numero,1/$esp);
    }
    
    function powX($numero,$esp=1){
        $ciao=eval("return " . $numero . ";" );
        return $ciao ** $esp;
    }
    
    function rad2($numero){
            $ris=eval("return " . $numero . ";" );
            return sqrt($ris);
        }

        function pow2($numero){
            $ciao=eval("return " . $numero . ";" );
            return $ciao**2;
        }

    function changeString($string){
        switch ($string) {
            case 'log':
                return 'log10';
                break;
            case 'ln':
                return 'log';
                break;  
            case "conv":
                return 'deg2rad' ;                 
            default:
                return $string;
                break;
        }
    }

    

?>