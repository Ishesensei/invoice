console.log("tax math executed");


var nights = document.querySelector(".frame71-frame272 .Editable-text");
var perNight = document.querySelector(".frame71-frame291 .Editable-text");

nights.tabIndex = -1;
perNight.tabIndex = -1;

var taxable = document.querySelector(".frame71-frame292 .Editable-text");

var cgst = document.querySelector(".frame71-frame301 .Editable-text");
var sgst = document.querySelector(".frame71-frame311 .Editable-text");


function calcTax() {
  console.log("calcgst executed");
  // code
  var taxableamt = nights.innerHTML * perNight.innerHTML;
  taxable.innerHTML = taxableamt;

  function cgstcalculator(taxableamt, totalTaxableAmt) {
    // cgst calc
    if (taxableamt <= 7500) {
      console.log(" amt below 7500 calccgst & sgst executed");
      var cgstcalc = Math.round((taxableamt * 12) / 100 / 2);
      calctotaltaxable()
    } else if (taxableamt < 7500) {
      console.log("amt below 7500 calccgst & sgst executed");
      var cgstcalc = Math.round((taxableamt * 18) / 100 / 2);
      calctotaltaxable()
    }
   

    console.log(` returned ${cgstcalc}`);
    return cgstcalc;
  }

  cgst.innerHTML = cgstcalculator(taxableamt);
  sgst.innerHTML = cgstcalculator(taxableamt);
}

function calctotaltaxable() {
  var totalTaxableAmt =
  Number((document.querySelector(".frame71-frame292 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame294 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame296 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame298 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, ""));

var totalTax =
  Number((document.querySelector(".frame71-frame301 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame302 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame303 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame304 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, ""));

var netPayable = 
Number((document.querySelector(".frame71-frame301 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
Number((document.querySelector(".frame71-frame302 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
Number((document.querySelector(".frame71-frame303 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
Number((document.querySelector(".frame71-frame304 .Editable-text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, ""));

document.querySelector(".frame71-text162 .Editable-text").innerHTML = totalTaxableAmt;
document.querySelector(".frame71-frame531 .Editable-text").innerHTML = totalTax;
document.querySelector(".frame71-frame532 .Editable-text").innerHTML = netPayable;

return [totalTaxableAmt,totalTax,netPayable]
}
