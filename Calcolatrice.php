<?php

class calcolatrice
{

    private $memoria;

    public function risToStrDisplay()
    {
        return '<script type="text/javascript">
        risToStrDisplay();
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
        echo "setmem(" . $this->memoria . ")";
        return $stringToCalc;
    }

    public function addMem(String $stringToCalc)
    {
        $this->memoria;
        echo "prima(" . $this->memoria . ")";
        $memoria = $this->evalString($stringToCalc);
        echo "dopo(" . $this->memoria . ")";
        return $stringToCalc;
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
            default:
                return $string;
                break;
        }
    }
}
