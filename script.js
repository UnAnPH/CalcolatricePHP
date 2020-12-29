//variables Definition

var operazioniValide = ['+', '-', '*', '/', 'cos', 'sin', 'tan', 'acos', 'asin', 'atan', 'log', 'ln', 'fact', 'radx', 'rad2', 'pow', 'pow2', 'conv', '(', ')', ','];

var strDisplay = "";
var opHidden = [];
var opHiddenIndex = -1;

var operandoType = 0;

var openParIndex = 0;
var closeParIndex = 0;

var parBool = false;


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
  if (operandoType == 1 || operandoType == 4) { opHiddenIndex++; }
  operandoType = 2;
  strDisplay += "+";
  insertOpHidden("+");
  refreshDisplay();
}
function onCLicksott() {
  if (operandoType == 1) { opHiddenIndex++; }
  operandoType = 2;
  strDisplay += "-";
  insertOpHidden("-");
  refreshDisplay();
}
function onClickmol() {
  if (operandoType == 1) { opHiddenIndex++; }
  operandoType = 2;
  strDisplay += "*";
  insertOpHidden("*");
  refreshDisplay();
}
function onClickDiv() {
  if (operandoType == 1) { opHiddenIndex++; }
  operandoType = 2;
  strDisplay += "/";
  insertOpHidden("/");
  refreshDisplay();
}
//#endregion

//onClick modifica numeri
//#region
function onClickRec() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "rec(";
  operandoType = 3;
  insertOpHidden("rec");
  refreshDisplay();
}
function onClickpiumeno() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "(-";
  insertOpHidden("(");
  opHiddenIndex++;
  insertOpHidden("-");
  operandoType = 2;
  openParIndex++;
  refreshDisplay();
}
function onClickVirg() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += ".";
  insertOpHidden(".");
  if (operandoType == 2) { opHiddenIndex--; }
  refreshDisplay();
}
function onClickEsp() {
  if (operandoType == 1) { opHiddenIndex++; }
  strDisplay += ",";
  insertOpHidden(",");
  operandoType = 3;
  disableEspButton();
  refreshDisplay();
}

//#endregion

//onClick operazioni speciali
//#region
function onClickCos() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "cos(";
  operandoType = 3;
  insertOpSpec("cos");
  refreshDisplay();
}
function onClickSin() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "sin(";
  operandoType = 3;
  insertOpSpec("sin");
  refreshDisplay();
}
function onClickTan() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "tan(";
  operandoType = 3;
  insertOpSpec("tan");
  refreshDisplay();
}
function onClickAcos() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "acos(";
  operandoType = 3;
  insertOpSpec("acos");
  refreshDisplay();
}
function onClickAsin() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "asin(";
  operandoType = 3;
  insertOpSpec("asin");
  refreshDisplay();
}
function onClickAtan() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "atan(";
  operandoType = 3;
  insertOpSpec("atan");
  refreshDisplay();
}
function onClickLog() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "log(";
  operandoType = 3;
  insertOpSpec("log");
  refreshDisplay();
}
function onClickLn() {
  if (operandoType != 1 || operandoType == 4) { opHiddenIndex++; }
  operandoType = 3;
  insertOpSpec("ln");
  strDisplay += "ln(";
  refreshDisplay();
}
function onClickfatt() { //transform in gmp_fact
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "fact(";
  operandoType = 3;
  insertOpSpec("fact");
  refreshDisplay();
}
function onClickRadX() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "radX(";
  operandoType = 3;
  insertOpSpec("radx");
  enableEspButton();
  refreshDisplay();
}
function onCLickRadQuad() {//transform in sqrt
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "rad2(";
  operandoType = 3;
  insertOpSpec("rad2");
  refreshDisplay();
}
function onClickElevX() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "pow(";
  operandoType = 3;
  insertOpSpec("pow");
  enableEspButton();
  refreshDisplay();
}
function onClickElevQuad() {
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "pow2(";
  operandoType = 3;
  insertOpSpec("pow2");
  refreshDisplay();
}
function onClickConvInRad() { //transform in deg2rad
  if (operandoType != 1) { opHiddenIndex++; }
  strDisplay += "conv(";
  operandoType = 3;
  insertOpSpec("conv");
  refreshDisplay();
}

//#endregion

//onClick parentesi
//#region 
function onClickOpenPar() {
  if (operandoType != 1 || strDisplay.charAt(strDisplay.length - 1) == "(") { opHiddenIndex++; }
  strDisplay += "(";
  insertOpHidden("(");
  openParIndex++;
  refreshDisplay();
}
function onClickClosePar() {
  if (operandoType == 1 || strDisplay.charAt(strDisplay.length - 1) == ")") { opHiddenIndex++; }
  strDisplay += ")";
  insertOpHidden(")");
  closeParIndex++;
  refreshDisplay();
}
//#endregion

//onClick memoria
//#region
function onClickGetMem() {
  var elem = document.getElementById("getMem");
  elem.value = "getMem";
  localStorage.setItem("strDisplayStorage", strDisplay);
  localStorage.setItem("opHiddenString", opHidden.join("_"));
  localStorage.setItem("opHiddenStringIndex", opHiddenIndex.toString());
}

function getMem(){
  var div = document.getElementById("dom-target");
  strDisplay= localStorage.getItem("strDisplayStorage");
  strDisplay += div.textContent;
  // opHidden[opHiddenIndex] = parseFloat(div.textContent).toString();
  opHidden= localStorage.getItem("opHiddenString").split("_");
  opHidden[parseInt(localStorage.getItem("opHiddenStringIndex"))+1]= div.textContent;
  opHiddenIndex= localStorage.getItem("OpHiddenStringIndex");
  operandoType = 1;
  refreshDisplay();
}
function onClickSetMem() {
  if (checkString()) {
    var elem = document.getElementById("setMem");
    elem.value = opHidden.join("_");
  } else {
    document.getElementById('errorDisplay').innerHTML = "error1";
  }
}
function onClickaddMem() {
  if (checkString()) {
    var elem = document.getElementById("addMem");
    elem.value = opHidden.join("_");
  } else {
    document.getElementById('errorDisplay').innerHTML = "error1";
  }
}
//#endregion

//onClick Clear
//#region 
function onClickClearAll() {
  strDisplay = "";
  opHidden = [];
  opHiddenIndex = 0;
  operandoType = 0;
  openParIndex = 0;
  closeParIndex = 0;
  refreshDisplay();
}
function onClickClearOne() {
  if (strDisplay.charAt(strDisplay.length - 1) == "(") { openParIndex--; } else if (strDisplay.charAt(strDisplay.length - 1) == ")") { closeParIndex--; } else { }
  strDisplay = strDisplay.slice(0, -1);
  opHidden[opHiddenIndex] = opHidden[opHiddenIndex].slice(0, -1);
  if (opHidden[opHiddenIndex] == "") { opHiddenIndex--; }
  if (opHiddenIndex == -1) { opHiddenIndex = 0 }
  refreshDisplay();
}
//#endregion

function onClickUguale() {
  if (checkString()) {
    var elem = document.getElementById("ris");
    elem.value = opHidden.join("_");
  } else {
    document.getElementById('errorDisplay').innerHTML = "error1";
  }
}

//Display functions
//#region 
function risToStrDisplay() {
  var ris = document.getElementById("upperDisplay");
  strDisplay = ris.textContent;
  opHiddenIndex = 0;
  opHidden[opHiddenIndex] = ris.textContent.toString();
  operandoType = 1;
  openParIndex = 0;
  closeParIndex = 0;
  refreshDisplay();
}


function refreshDisplay() {
  document.getElementById('upperDisplay').innerHTML = strDisplay;
  document.getElementById('lowerDisplay').innerHTML = opHidden.join("_");
  if (!checkString()) {
    document.getElementById('errorDisplay').innerHTML = "error";
  } else {
    document.getElementById('errorDisplay').innerHTML = "";
  }
}

function memToHiddenDisplay(){
  var mem = document.getElementById("HiddenDisplay");
  

}
//#endregion

//insert functions
//#region 
function insertOpHidden(stringa) {
  if (opHidden[opHiddenIndex] == 'undefined' || opHidden[opHiddenIndex] == null) {
    opHidden[opHiddenIndex] = stringa;
  }
  else {
    opHidden[opHiddenIndex] += stringa;
  }
}

function insertOpSpec(stringa) {
  insertOpHidden(stringa);
  opHiddenIndex++;
  openParIndex++;
  insertOpHidden("(");
}
//#endregion

//checking functions
//#region 
function checkString() {
  var i = 1;
  var error = false;
  while (i < opHidden.length && !error) {
    if (!(isNumeric(opHidden[i]) || operazioniValide.indexOf(opHidden[i]) > -1 || opHidden[i] == "")) {
      error = true;
    }
    //alert("1"+isNumeric(opHidden[i]));
    //alert("2:"+(operazioniValide.indexOf(opHidden[i])>-1));
    //alert("3:"+opHidden[i]);
    i++;
  }
  // alert(openParIndex);
  // alert(closeParIndex);
  if (openParIndex != closeParIndex) {
    error = true;
  }
  if (error) {
    return false;
  } else {
    return true;
  }
}

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
//#endregion

//Button enabler
//#region 
function disableEspButton() {
  var elem = document.getElementById("esp");
  elem.disabled = true;
}
function enableEspButton() {
  var elem = document.getElementById("esp");
  elem.disabled = false;
}
//#endregion




