var tela = document.getElementById('numScreen');
var telaNum = document.getElementById('numScreen').innerText;
var past1 = document.getElementById('numPast1');
var past2 = document.getElementById('numPast2');
var metodo;
var Num1;
var Num2;

function clearNum(){
  tela.innerHTML = "";
  past1.innerHTML = "";
  past2.innerHTML = "";
};

//Screen Button functions listener
document.getElementById('somaNum').addEventListener("click", somaNum);
document.getElementById('subNum').addEventListener("click", subNum);
document.getElementById('divNum').addEventListener("click", divNum);
document.getElementById('multNum').addEventListener("click", multNum);
document.getElementById('resultNum').addEventListener("click", resultNum);

//Screen numbers functions listener
document.getElementById('cero').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat("0");}));
document.getElementById('uno').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat("1");}));
document.getElementById('dos').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat("2");}));
document.getElementById('tres').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat("3");}));
document.getElementById('cuatro').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat("4");}));
document.getElementById('cinco').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat("5");}));
document.getElementById('seis').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat("6");}));
document.getElementById('siete').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat("7");}));
document.getElementById('ocho').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat("8");}));
document.getElementById('nueve').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat("9");}));
document.getElementById('puntoNum').addEventListener("click", (function(){ tela.innerHTML = tela.innerHTML.concat(".");}));

//Numpad keydown function listener
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 96 || event.keyCode == 48)tela.innerHTML = tela.innerHTML.concat("0");
    else if(event.keyCode == 97 || event.keyCode == 49)tela.innerHTML = tela.innerHTML.concat("1");
    else if(event.keyCode == 98 || event.keyCode == 50)tela.innerHTML = tela.innerHTML.concat("2");
    else if(event.keyCode == 99 || event.keyCode == 51)tela.innerHTML = tela.innerHTML.concat("3");
    else if(event.keyCode == 100 || event.keyCode == 52)tela.innerHTML = tela.innerHTML.concat("4");
    else if(event.keyCode == 101 || event.keyCode == 53)tela.innerHTML = tela.innerHTML.concat("5");
    else if(event.keyCode == 102 || event.keyCode == 54)tela.innerHTML = tela.innerHTML.concat("6");
    else if(event.keyCode == 103 || event.keyCode == 55)tela.innerHTML = tela.innerHTML.concat("7");
    else if(event.keyCode == 104 || event.keyCode == 56)tela.innerHTML = tela.innerHTML.concat("8");
    else if(event.keyCode == 105 || event.keyCode == 57)tela.innerHTML = tela.innerHTML.concat("9");
    else if(event.keyCode == 110)tela.innerHTML = tela.innerHTML.concat(".");
    else if(event.keyCode == 107) somaNum();
    else if(event.keyCode == 109) subNum();
    else if(event.keyCode == 111) divNum();
    else if(event.keyCode == 106) multNum();
    else if(event.keyCode == 13) resultNum();
    else if(event.keyCode == 8)tela.innerHTML = tela.innerHTML.substring(0, (tela.innerHTML.length - 1));
});




function somaNum(){
  telaNum = tela.innerText;
    if(telaNum == "") return;
  Num1 = parseFloat(telaNum);
  tela.innerHTML = "";
  past1.innerHTML = Num1 + " + ";
  metodo = 1;
}
function subNum(){
  telaNum = tela.innerText;
    if(telaNum == ""){
      tela.innerHTML = tela.innerHTML.concat("-");
      return;
    };
  Num1 = parseFloat(telaNum);
  tela.innerHTML = "";
  past1.innerHTML = Num1 + " - ";
  metodo = 2;
}
function divNum(){
  telaNum = tela.innerText;
    if(telaNum == "") return;
  Num1 = parseFloat(telaNum);
  tela.innerHTML = "";
  past1.innerHTML = Num1 + " / ";
  metodo = 3;
}
function multNum(){
  telaNum = tela.innerText;
    if(telaNum == "") return;
  Num1 = parseFloat(telaNum);
  tela.innerHTML = "";
  past1.innerHTML = Num1 + " * ";
  metodo = 4;
}
function resultNum(){
  telaNum = tela.innerText;
  Num2 = parseFloat(telaNum);
  past2.innerHTML = Num2 +" =";
    if(metodo == 1){
      tela.innerHTML = " " + (Num1 + Num2);
    }else if(metodo == 2){
      tela.innerHTML = " " + (Num1 - Num2);
    }else if(metodo == 3){
      tela.innerHTML = " " + (Num1 / Num2);
    }else if(metodo == 4){
      tela.innerHTML = " " + (Num1 * Num2);
    }
}
