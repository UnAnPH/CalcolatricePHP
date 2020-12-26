//variables Definition

var operazioni = ['+', '-', '*', '/'];

var strDisplay = "";
var opHidden = [];
var opHiddenIndex = -1;

var lastOperation = "";
var lastSpecialOperation = "";
var lastNumber = "";

var boolVirg = false;
var operandoType = 0;

//onClick listeners

//onClick Numeri
//#region
function onClickUno() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 1;
  strDisplay += "1";

  insertOpHidden("1");
  refreshDisplay();
}

function onClickDue() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 1;
  strDisplay += "2";

  insertOpHidden("2");
  refreshDisplay();
}
function onClickTre() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 1;
  strDisplay += "3";
  insertOpHidden("3");
  refreshDisplay();
}
function onClickQuattro() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 1;
  strDisplay += "4";
  insertOpHidden("4");
  refreshDisplay();
}
function onClickCinque() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 1;
  strDisplay += "5";
  insertOpHidden("5");
  refreshDisplay();
}
function onClickSei() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 1;
  strDisplay += "6";
  insertOpHidden("6");
  refreshDisplay();
}
function onClickSette() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 1;
  strDisplay += "7";
  insertOpHidden("7");
  refreshDisplay();
}
function onClickOtto() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 1;
  strDisplay += "8";
  insertOpHidden("8");
  refreshDisplay();
}
function onClickNove() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 1;
  strDisplay += "9";
  insertOpHidden("9");
  refreshDisplay();
}
function onCLickZero() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 1;
  strDisplay += "0";
  insertOpHidden("0");
  refreshDisplay();
}
//#endregion

//onClick operazioni
//#region
function onClickadd() {
  if (operandoType == 1) { opHiddenIndex++; }
  operandoType = 2;
  strDisplay += "+";
  insertOpHidden("+");
  refreshDisplay();
}
function onCLicksott() {
  if (operandoType == 1) { opHiddenIndex++; }
  operandoType = 2;
  opHiddenIndex++;
  strDisplay += "-";
  insertOpHidden("-");
  refreshDisplay();
}
function onClickmol() {
  if (operandoType == 1) { opHiddenIndex++; }
  operandoType = 2;
  opHiddenIndex++;
  strDisplay += "*";
  insertOpHidden("*");
  refreshDisplay();
}
function onClickDiv() {
  if (operandoType == 1) { opHiddenIndex++; }
  operandoType = 2;
  opHiddenIndex++;
  strDisplay += "/";
  insertOpHidden("/");
  refreshDisplay();
}
//#endregion

//onClick modifica numeri
//#region
function onClickRec() {
  if (operandoType == 2) { opHiddenIndex++; }
  strDisplay += "rec(";
  refreshDisplay();
  operandoType = 3;
  insertOpHidden("0");
}
function onClickpiumeno() {
  strDisplay += "(-";
  refreshDisplay();

}
//#endregion

//onClick operazioni speciali
//#region
function onClickCos() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "cos(";

  operandoType = 3;
  insertOpHidden("cos(");
  refreshDisplay();
}
function onClickSin() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "sin(";

  operandoType = 3;
  insertOpHidden("sin(");
  refreshDisplay();
}
function onClickTan() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "tan(";

  operandoType = 3;
  insertOpHidden("tan(");
  refreshDisplay();
}
function onClickAcos() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "acos(";

  operandoType = 3;
  insertOpHidden("acos(");
  refreshDisplay();
}
function onClickAsin() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "asin(";

  operandoType = 3;
  insertOpHidden("asin(");
  refreshDisplay();
}
function onClickAtan() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "atan(";

  operandoType = 3;
  insertOpHidden("atan(");
  refreshDisplay();
}
function onClickLog() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "log10(";

  operandoType = 3;
  insertOpHidden("log10(");
  refreshDisplay();
}
function onClickLn() {
  if (operandoType != 1) { opHiddenIndex++; }
  operandoType = 3;
  insertOpHidden("ln(");
  strDisplay += "ln(";
  refreshDisplay();
}
function onClickfatt() { //transform in gmp_fact
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "fact(";

  operandoType = 3;
  insertOpHidden("fact(");
  refreshDisplay();
}
function onClickRadX() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "radX(";

  operandoType = 3;
  insertOpHidden("radX(");
  refreshDisplay();
}
function onCLickRadQuad() {//transform in sqrt
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "rad2(";

  operandoType = 3;
  insertOpHidden("rad2(");
  refreshDisplay();
}
function onClickElevX() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "pow(";

  operandoType = 3;
  insertOpHidden("pow(");
  refreshDisplay();
}
function onClickElevQuad() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "pow2(";

  operandoType = 3;
  insertOpHidden("pow2(");
  refreshDisplay();
}
function onClickConvInRad() { //transform in deg2rad
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "conv(";

  operandoType = 3;
  insertOpHidden("conv(");
  refreshDisplay();
}
function onClickVirg() {
  strDisplay += ".";
  refreshDisplay();
}
//#endregion

//onClick parentesi
//#region 
function onClickOpenPar() {
  strDisplay += "(";
  insertOpHidden("(");
  refreshDisplay();
}
function onClickClosePar() {
  strDisplay += ")";
  insertOpHidden(")");
  refreshDisplay();
}
//#endregion

//onClick memoria
//#region
function onClickGetMem() {
  var div = document.getElementById("dom-target");
  var myData = div.textContent;
}
function onClickSetMem() {
  var elem = document.getElementById("ris");
  elem.value = "1+2+cos(90)";
}
function onClickaddMem() {
  var elem = document.getElementById("ris");
  elem.value = "1+2+cos(90)";
}
//#endregion

//onClick Clear
//#region 
function onClickClearAll() {
  strDisplay = "";
  opHidden.length = 0;
  refreshDisplay();
}
function onClickClearOne() {
  strDisplay = strDisplay.slice(0, -1);
  refreshDisplay();
}
//#endregion

//onClick sistema
function onClickUguale() {
  var elem = document.getElementById("ris");
  elem.value = strDisplay;
}

function risToStrDisplay() {
  var ris = document.getElementById("upperDisplay");
  strDisplay = ris.textContent;
function refreshDisplay() {
  // if(checkString()){
  document.getElementById('upperDisplay').innerHTML = strDisplay;
  // }else{

  // }
  document.getElementById('lowerDisplay').innerHTML = opHidden.join();
}

function insertOpHidden(stringa) {
  if (opHidden[opHiddenIndex] == 'undefined' || opHidden[opHiddenIndex] == null) {
    opHidden[opHiddenIndex] = stringa;
  }
  else {
    opHidden[opHiddenIndex] += stringa;
  }
}



//checking functions
//#region 
function checkString() { }


function checkOperazione(carattere) {
  var i = 0;

  while (i < operazioni.length && carattere != operazioni[i]) {
    i++;
  }
  if (i > operazioni.length) {
    return false;
  } else {
    return true;
  }
}

function checkOperazioneSpeciale(carattere) {
  var i = 0;

  while (i < operazioni.length && carattere != operazioni[i]) {
    i++;
  }
  if (i > operazioni.length) {
    return false;
  } else {
    return true;
  }
}
//#endregion

//Button enabler
//#region 
function disableButton() {
  var elem = document.getElementById("esp");
  elem.disabled = true;
}
function enableButton() {
  var elem = document.getElementById("esp");
  elem.disabled = false;
}
//#endregion




