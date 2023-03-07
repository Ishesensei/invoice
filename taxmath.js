var nights = document.querySelector(".frame71-frame272 .Editable-Text");
var perNight = document.querySelector(".frame71-frame291 .Editable-Text");

nights.tabIndex = -1;
perNight.tabIndex = -1;

var taxable = document.querySelector(".frame71-frame292 .Editable-Text");

var cgst = document.querySelector(".frame71-frame301 .Editable-Text");
var sgst = document.querySelector(".frame71-frame311 Editable-Text");

var totalTaxableAmount = document.querySelector(
  ".frame71-frame53 .Editable-Text"
);
var totalTax = document.querySelector(".frame71-frame531 .Editable-Text");
var netPayable = document.querySelector(".frame71-frame532 .Editable-Text");

function calcTax() {
  console.log("calctax executed");
  // code
 taxable.innerHTML = nights.innerHTML*perNight.innerHTML;
}
