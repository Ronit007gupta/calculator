function Add(){
    var x = Number(document.getElementById("Number1").value);
    var y = Number(document.getElementById("Number2").value);
   var sumResult = x+y;
   document.getElementById("result").value = "Your answer is : " + sumResult;
}

function Sub(){
    var x = Number(document.getElementById("Number1").value);
    var y = Number(document.getElementById("Number2").value);
    var minusResult = x-y;
   document.getElementById("result").value = "Your answer is : " + minusResult;
}

function Multi(){
    var x = Number(document.getElementById("Number1").value);
    var y = Number(document.getElementById("Number2").value);
   var multiResult = x*y;
   document.getElementById("result").value = "Your answer is : " + multiResult;
}

function Div(){
    var x = Number(document.getElementById("Number1").value);
    var y = Number(document.getElementById("Number2").value);
   var DivResult = x/y;
   document.getElementById("result").value = "Your answer is : " + DivResult;
}

function Remind(){
    var x = Number(document.getElementById("Number1").value);
    var y = Number(document.getElementById("Number2").value);
   var remainderResult = x%y;
   document.getElementById("result").value = "Your answer is : " + remainderResult;
}

