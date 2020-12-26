    var operazioni= ['+','-','*','/'];
    
    var strDisplay="";
    var opHidden=[];
    var opHiddenIndex=0;

    var lastOperation="";
    var lastSpecialOperation="";
    var lastNumber="";


    var operandoType=0;

    //onClick listeners
    //onClick Numeri
    function onClickUno(){
      if(operandoType!=1){opHiddenIndex++;}
      operandoType=1;
      strDisplay+="1";
      opHidden[opHiddenIndex]+="1";
      refreshDisplay();
    }
    function onClickDue(){
      if(operandoType!=1){opHiddenIndex++;}
      operandoType=1;
      strDisplay += "2";
      opHidden[opHiddenIndex]+="2";
      refreshDisplay(); 
    }
    function onClickTre(){
      if(operandoType!=1){opHiddenIndex++;}
      operandoType=1;
      strDisplay += "3";
      opHidden[opHiddenIndex]+="3";
      refreshDisplay(); 
    }
    function onClickQuattro(){
      if(operandoType!=1){opHiddenIndex++;}
      operandoType=1;
      strDisplay += "4";
      opHidden[opHiddenIndex]+="4";
      refreshDisplay(); 
    }
    function onClickCinque(){
      if(operandoType!=1){opHiddenIndex++;}
      operandoType=1;
      strDisplay += "5";
      opHidden[opHiddenIndex]+="5";
      refreshDisplay(); 
    }
    function onClickSei(){
      if(operandoType!=1){opHiddenIndex++;}
      operandoType=1;
      strDisplay += "6";
      opHidden[opHiddenIndex]+="6";
      refreshDisplay(); 
    }
    function onClickSette(){
      if(operandoType!=1){opHiddenIndex++;}
      operandoType=1;
      strDisplay += "7";
      opHidden[opHiddenIndex]+="7";
      refreshDisplay(); 
    }
    function onClickOtto(){
      if(operandoType!=1){opHiddenIndex++;}
      operandoType=1;
      strDisplay += "8";
      opHidden[opHiddenIndex]+="8";
      refreshDisplay(); 
    }
    function onClickNove(){
      if(operandoType!=1){opHiddenIndex++;}
      operandoType=1;
      strDisplay += "9";
      opHidden[opHiddenIndex]+="9";
      refreshDisplay(); 
    }
    function onCLickZero(){
      if(operandoType!=1){opHiddenIndex++;}
      operandoType=1;
      strDisplay += "0";
      opHidden[opHiddenIndex]+="0";

      refreshDisplay(); 
    }

    //onClick operazioni

    function onClickadd(){
      operandoType=2;
        opHiddenIndex++;
        opHidden[opHiddenIndex]+="+";
        strDisplay += "+";
        refreshDisplay(); 
    }
    function onCLicksott(){
      operandoType=2;
      opHiddenIndex++;
      strDisplay += "-";
      opHidden[opHiddenIndex]+="-";
      refreshDisplay(); 
    }
    function onClickmol(){
      operandoType=2;
      opHiddenIndex++;
      strDisplay += "*";
      opHidden[opHiddenIndex]+="*";
      refreshDisplay(); 
    }
    function onClickDiv(){
      operandoType=2;
      opHiddenIndex++;
      strDisplay += "/";
      opHidden[opHiddenIndex]+="/";
      refreshDisplay(); 
    }

    //onClick modifica numeri

    function onClickRec(){ 
      strDisplay +="rec(";
      refreshDisplay(); 
      
    }
    function onClickpiumeno(){
      strDisplay += "(-";
      refreshDisplay(); 
      
    }

    //onClick operazioni speciali

    function onClickCos(){
      strDisplay += "cos(";
      refreshDisplay(); 
      
    }
    function  onClickSin(){
      strDisplay += "sin(";
      refreshDisplay(); 
      
    }
    function onClickTan(){
      strDisplay += "tan(";
      refreshDisplay(); 
      
    }
    function  onClickAcos(){
      strDisplay +="acos(";
      refreshDisplay(); 
      
    }
    function  onClickAsin(){
      strDisplay +="asin(";
      refreshDisplay(); 
      
    }
    function  onClickAtan(){
      strDisplay += "atan(";
      refreshDisplay(); 
      
    }
    function onClickLog(){
      strDisplay += "log10(";
      refreshDisplay(); 
      
    }
    function onClickLn(){
      strDisplay += "log(";
      refreshDisplay(); 
      
    }
    function  onClickfatt(){ //transform in gmp_fact
      strDisplay += "gmp_fact(";
      refreshDisplay(); 
      
    }
    function onClickRadX(){
      strDisplay += "radX(";
      refreshDisplay(); 
      
    }
    function onCLickRadQuad(){//transform in sqrt
      strDisplay += "rad2(";
      refreshDisplay(); 
      
    }
    function onClickElevX(){
      strDisplay +="pow(";
      refreshDisplay(); 
      
    }
    function onClickElevQuad(){
      strDisplay += "pow2(";
      refreshDisplay(); 
      
    }
    function onClickConvInRad(){ //transform in deg2rad
      strDisplay += "conv(";
      refreshDisplay(); 
      
    }

    //onClick parentesi

    function onClickOpenPar(){
      strDisplay +=  "(";
      refreshDisplay(); 
     
    }
    function onClickClosePar(){
      strDisplay += ")";
      refreshDisplay(); 
      
    }


    //onClick memoria

    function onClickGetMem(){
      var div = document.getElementById("dom-target");
      var myData = div.textContent;
    }
    function onClickSetMem(){
      var elem = document.getElementById("ris");
      elem.value = "1+2+cos(90)";
    }
    function onClickaddMem(){
      var elem = document.getElementById("ris");
      elem.value = "1+2+cos(90)";
    }

    //onClick sistema

    function onClickClearAll(){
      strDisplay= "";
      refreshDisplay();
    }
    function onClickClearOne(){
      strDisplay = strDisplay.slice(0, -1); 
      refreshDisplay();


    }
    function onClickUguale(){
      var elem = document.getElementById("ris");
      elem.value = strDisplay;

    }

    function formatString(){

    }

    function checkString(){ }
    

    function checkOperazione(carattere){
       var i=0;

       while(i<operazioni.length&&carattere!=operazioni[i]){
         i++;
       }
       if(i>operazioni.length){
         return false;
       }else{
         return true;
       }
    }

    function checkOperazioneSpeciale(carattere){
      var i=0;

       while(i<operazioni.length&&carattere!=operazioni[i]){
         i++;
       }
       if(i>operazioni.length){
         return false;
       }else{
         return true;
       }
    }

    function refreshDisplay(){
      // if(checkString()){
      document.getElementById('display').innerHTML = strDisplay;
      // }else{

      // }
    }

    function risToStrDisplay(){
      var ris= document.getElementById("display");
      strDisplay= ris.textContent;
    }

    function disableButton(){
      var elem = document.getElementById("esp");
      elem.disabled = true;
    }
    function enableButton(){
      var elem = document.getElementById("esp");
      elem.disabled = false;
    }

    function insertDollar(){

    }




