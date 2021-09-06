var billAmount = 100;
var tipPercentage = 0.05;
var numberOfPeople = 5;


//Make $ an ID-selector.
function $(name) {return document.getElementById(name)}

function calculate() {
  var tipPerPerson = (billAmount * tipPercentage)/numberOfPeople;
  var billPerPerson = billAmount/numberOfPeople + tipPerPerson;

  $("tipPerPerson").innerHTML = "$ " +  (12).toFixed(2);
  $("billPerPerson").innerHTML = "$ " + billPerPerson;
}

calculate();
