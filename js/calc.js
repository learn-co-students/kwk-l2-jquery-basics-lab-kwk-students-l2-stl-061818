//add your code here
let num1=$('#number1');
let operater=$('#operation');
let num2=$('#number2');
function validate(operater,num1,num2)
  if (operater == "+" || operater == "-"||operater=="*"||operater=="/"){
    if (isNaN(num1)||num1===""|| isNaN(num2) || num2 ==="") { $("#result").text("Sorry, one of those is not a valid number!"); }
  else {answer(operater,num1,num2);
    }
  }
}
  else {
    $("#result").html("Sorry that is not a valid operator")
    }

