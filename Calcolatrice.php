<?php

$_SESSION["mem"];

class calcolatrice
{

    private $memoria;

    public function risToStrDisplay()
    {
        return '<script type="text/javascript">
        risToStrDisplay();
        </script>';
    }

    public function memToHiddenDisplay()
    {
        return '<script type="text/javascript">
        getMem();
        </script>';
    }

    public function evalString(String $stringToCalc)
    {
        $array = explode("_", $stringToCalc);
        for ($i = 0; $i < count($array); $i++) {
            $array[$i] = $this->changeString($array[$i]);
        }
        $stringToEval = implode("", $array);
        $result = eval("return " . $stringToEval . ";");
        return $result;
    }

    public function setMem(String $stringToCalc)
    {
        $this->memoria = $this->evalString($stringToCalc);
        $_SESSION["mem"] = $this->memoria;
        return str_replace("_", "", $stringToCalc);
    }

    public function addMem(String $stringToCalc)
    {
        $_SESSION["mem"] += $this->evalString($stringToCalc);
        return str_replace("_", "", $stringToCalc);
    }

    public function getMem()
    {
        return $_SESSION["mem"];
    }

    //posso fare funzioni che eval va a chiamare
    public function rec($num)
    {
        return 1 / $num;
    }

    public function fact($num)
    {
        $num = eval("return " . $num . ";");
        $ris = 1;
        while ($num >= 1) {
            $ris = $num * $ris;
            $num--;
        }
        return $ris;
    }

    public function radx($numero = "0", $esp = "1")
    {
        $ciao = eval("return " . $numero . ";");
        return $this->powX((string)$ciao, 1 / $esp);
    }

    public function powx($numero = "0", $esp = "1")
    {
        $ciao = eval("return " . $numero . ";");
        return $ciao ** (float)$esp;
    }

    public function rad2($numero)
    {
        $ris = eval("return " . $numero . ";");
        return sqrt($ris);
    }

    public function pow2($numero)
    {
        $ciao = eval("return " . $numero . ";");
        return $ciao ** 2;
    }

    public function myCos($numero){
        $ris = eval("return " . $numero . ";");
        return round(cos(deg2rad($ris)), 3);
    }

    public function mySin($numero){
        $ris = eval("return " . $numero . ";");
        return round(sin(deg2rad($ris)), 3);
    }

    public function myTan($numero){
        $ris = eval("return " . $numero . ";");
        return round(tan(deg2rad($ris)), 3);
    }

    public function myAcos($numero){
        $ris = eval("return " . $numero . ";");
        return rad2deg(acos($ris));
    }

    public function myAsin($numero){
        $ris = eval("return " . $numero . ";");
        return rad2deg(asin($ris));
    }

    public function myAtan($numero){
        $ris = eval("return " . $numero . ";");
        return rad2deg(atan($ris));
    }

    public function changeString($string)
    {
        switch ($string) {
            case 'log':
                return 'log10';
                break;
            case 'ln':
                return 'log';
                break;
            case "conv":
                return 'deg2rad';
                break;
            case "pow":
                return '$this->powx';
                break;
            case "radx":
                return '$this->radx';
                break;
            case "rad2":
                return '$this->rad2';
                break;
            case "pow2":
                return '$this->pow2';
                break;
            case "fact":
                return '$this->fact';
                break;
            case "rec":
                return '$this->rec';
                break;
            case "cos":
                return '$this->myCos';
                break;
            case "sin":
                return '$this->mySin';
                break;
            case "tan":
                return '$this->myTan';
                break;
            case "acos":
                return '$this->myAcos';
                break;
            case "asin":
                return '$this->myAsin';
                break;
            case "atan":
                return '$this->myAtan';
                break;

            default:
                return $string;
                break;
        }
    }
}
