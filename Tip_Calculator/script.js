function $(name) {return document.getElementById(name)}

var billAmount = 0;
var tipPercentage = 0;
var numberOfPeople = 0;
var tipsArray = [5, 10, 15, 25, 50] //same as ID name



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
  tipPercentage = $("customTip").value;
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
}

//Reset button press
function resetEverything() {
  $("resetButton").classList.add("grayout");
  removeActiveClass();
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
$("bill").onchange = () => {
    billAmount = $("bill").value;
    checkIfcompleted();
}

$("numOfPeople").onchange = () => {
    numberOfPeople = $("numOfPeople").value;
    checkIfcompleted();
}

//CHECK IF COMPLETED
function checkIfcompleted() {
  if (billAmount > 0 && numberOfPeople > 0 && tipPercentage > 0) {
    calculate();
    activateResetButton();
  }
}

//CALCULATE
function calculate() {
  var tipPerPerson = (billAmount * tipPercentage)/numberOfPeople;
  var billPerPerson = billAmount/numberOfPeople + tipPerPerson;

  $('tipPerPerson').innerHTML = "$ " +  (tipPerPerson).toFixed(2);
  $('billPerPerson').innerHTML = "$ " + (billPerPerson).toFixed(2);
}

//FILTER INPUTS


var elements = document.querySelector("type");

  // elements.addEventListener()

elements.forEach(myFunction);

function myFunction() {
  this.style.fontSize = "200px";
}



$("numOfPeople").oninput = () => {
  let input = $("numOfPeople");
  if (input.value.length > input.getAttribute("maxlength"))
  { input.value = input.value.slice(0, input.maxLength); }
}

$("customTip").oninput = () => {
  let input = $("bill");
  if (input.value.length > input.getAttribute("customTip"))
  { input.value = input.value.slice(0, input.maxLength); }
}

$("bill").oninput = () => {
  let input = $("bill");
  if (input.value.length > input.getAttribute("maxlength"))
  { input.value = input.value.slice(0, input.maxLength); }
}
