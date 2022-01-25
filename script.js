function $(name) {return document.getElementById(name)}

var billAmount = 0;
var tipPercentage = 0;
var numberOfPeople = 0;
var tipsArray = [5, 10, 15, 25, 50]; //same as ID name



//TIP BUTTONS FUNCTIONS
//Tip button event listeners
for (let i = 0; i < tipsArray.length; i++) {
  $(tipsArray[i]).onclick = () => {
    tipPercentage = tipsArray[i]/100;
    removeActiveClass();
    $(tipsArray[i]).classList.add("active");
    $("customTip").value = "";
    checkIfcompleted();
  }
}

//Custom tip
$("customTip").oninput = () => {
  tipPercentage = ($("customTip").value / 100);
  removeActiveClass();
  $("customTip").classList.add("active");
  checkIfcompleted();
}

function removeActiveClass () {
  var elements = document.getElementsByClassName('active');
  while(elements.length > 0){
    elements[0].classList.remove('active');
  }
}

//RESET BUTTON FUNCTIONS
function activateResetButton() {
    $("resetButton").classList.remove("grayout");
    $("resetButton").addEventListener("click", resetEverything);
}

//Reset button press
function resetEverything() {
  $("resetButton").classList.add("grayout");
  $("resetButton").removeAttribute("onclick");
  $("bill").value = "";
  $("customTip").value = "";
  $("numOfPeople").value = "";
  $("tipPerPerson").innerHTML = "$ 0.00";
  $("billPerPerson").innerHTML = "$ 0.00";
  billAmount = 0;
  tipPercentage = 0;
  numberOfPeople = 0;
}

//FORM FIELDS
$("bill").oninput = () => {
    billAmount = $("bill").value;
    checkIfcompleted();
}

$("numOfPeople").oninput = () => {
    numberOfPeople = $("numOfPeople").value;
    checkIfcompleted();
}

$("numOfPeople").oninput = () => {
    numberOfPeople = $("numOfPeople").value;
    checkIfcompleted();
}

//CHECK IF COMPLETED
function checkIfcompleted() {
  if (billAmount > 0 && numberOfPeople > 0 && tipPercentage != "") {
    calculate();
    activateResetButton();
  }
}

//CALCULATE
function calculate() {
  tipPerPerson = (billAmount * tipPercentage)/numberOfPeople;
  billPerPerson = billAmount/numberOfPeople + tipPerPerson;
  $('tipPerPerson').innerHTML = "$ " +  (tipPerPerson).toFixed(2);
  $('billPerPerson').innerHTML = "$ " + (billPerPerson).toFixed(2);
}

// FILTER INPUTS
// Respect max numberlength
var elements = document.querySelectorAll("[type='number']");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", function() {
    if (this.value.length > this.getAttribute("data-length")) {
      this.value = this.value.slice(0, this.maxLength);
    }
  });
}

//Prevent more than two decimal places in "bill"
$("bill").addEventListener("input", removeAfterDecimal);
function removeAfterDecimal() {
  let input = this.value;
  // use forEach, to do this for every character
  let decimalCharacters = [".", ","];
  decimalCharacters.forEach((item) => {
    if (input.indexOf(item) >= 0) {
       $("bill").value = input.substr(0, input.indexOf(item)) + input.substr(input.indexOf(item), 3);
    }
  });
};


//Prevent decimal places and Eletters in the fields
$("bill").addEventListener("keydown", (key) => {
  if (key.keyCode == 69) { // prevent e
    key.preventDefault();
  }
});

$("customTip").addEventListener("keydown", (key) => {
  if (key.keyCode == 188 || key.keyCode == 190 || key.keyCode == 69) { // prevent , . e
    key.preventDefault();
  }
});

$("numOfPeople").addEventListener("keydown", (key) => {
  if (key.keyCode == 188 || key.keyCode == 190 || key.keyCode == 69) { // prevent , . e
    key.preventDefault();
  }
});
