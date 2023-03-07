console.log("tax math executed");

var nights = document.querySelector(".frame71-frame272 .Editable-Text");
var perNight = document.querySelector(".frame71-frame291 .Editable-Text");

nights.tabIndex = -1;
perNight.tabIndex = -1;

var taxable = document.querySelector(".frame71-frame292 .Editable-Text");

var cgst = document.querySelector(".frame71-frame301 .Editable-Text");
var sgst = document.querySelector(".frame71-frame311 .Editable-Text");

var totalTaxableAmount = document.querySelector(
  ".frame71-frame53 .Editable-Text"
);
var totalTax = document.querySelector(".frame71-frame531 .Editable-Text");
var netPayable = document.querySelector(".frame71-frame532 .Editable-Text");

function calcTax() {
  console.log("calctaxable executed");
  // code
  var taxableamt = nights.innerHTML * perNight.innerHTML;
  taxable.innerHTML = taxableamt;
  
  function cgstcalculator(taxableamt) {
    // cgst calc
    if (taxableamt <= 7500) {
      console.log(" amt below 7500 calccgst & sgst executed");
     var cgstcalc = Math.round((taxableamt * 12) / 100 / 2);
    } else if (taxableamt < 7500) {
      console.log("amt below 7500 calccgst & sgst executed");
      var cgstcalc = Math.round((taxableamt * 18) / 100 / 2);
    }
    console.log(` returned ${cgstcalc}`);
    return cgstcalc;
  }

  cgst.innerHTML = cgstcalculator(taxableamt);;
  sgst.innerHTML = cgstcalculator(taxableamt);;
}
