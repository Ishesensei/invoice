console.log("tax math executed");
var i1 = ".innerHTML";
var q1 = "document.querySelector";

var nights = document.querySelector(".frame71-frame272 .Editable-Text");
var perNight = document.querySelector(".frame71-frame291 .Editable-Text");

nights.tabIndex = -1;
perNight.tabIndex = -1;

var taxable = document.querySelector(".frame71-frame292 .Editable-Text");

var cgst = document.querySelector(".frame71-frame301 .Editable-Text");
var sgst = document.querySelector(".frame71-frame311 .Editable-Text");

var totalTaxableAmt =
  Number((document.querySelector(".frame71-frame292 .Editable-Text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame294 .Editable-Text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame296 .Editable-Text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame298 .Editable-Text").innerHTML.match(/[0-9]/g) || "" ).toString().replace(/[^0-9]/g, ""));

var totalTax =
  Number((document.querySelector(".frame71-frame301 .Editable-Text")
        .innerHTML.match(/[0-9]/g) || "" ) .toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame302 .Editable-Text")
        .innerHTML.match(/[0-9]/g) || "" ) .toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame303 .Editable-Text")
        .innerHTML.match(/[0-9]/g) || "" ) .toString().replace(/[^0-9]/g, "")) +
  Number((document.querySelector(".frame71-frame304 .Editable-Text")
        .innerHTML.match(/[0-9]/g) || ""
    )
      .toString()
      .replace(/[^0-9]/g, "")
  );
var netPayable = document.querySelector(".frame71-frame532 .Editable-Text");

function calcTax() {
  console.log("calctaxable executed");
  // code
  var taxableamt = nights.innerHTML * perNight.innerHTML;
  taxable.innerHTML = taxableamt;

  function cgstcalculator(taxableamt, totalTaxableAmt) {
    // cgst calc
    if (taxableamt <= 7500) {
      console.log(" amt below 7500 calccgst & sgst executed");
      var cgstcalc = Math.round((taxableamt * 12) / 100 / 2);
    } else if (taxableamt < 7500) {
      console.log("amt below 7500 calccgst & sgst executed");
      var cgstcalc = Math.round((taxableamt * 18) / 100 / 2);
    }
    // replace taxable amts
    document.querySelector(".frame71-frame53 .Editable-Text").innerHTML =
      totalTaxableAmt;
    // document.querySelector(".frame71-frame53 .Editable-Text").innerHTML =
    //   totalTaxAmtsssss;

    console.log(` returned ${cgstcalc}`);
    return cgstcalc;
  }

  cgst.innerHTML = cgstcalculator(taxableamt);
  sgst.innerHTML = cgstcalculator(taxableamt);
}
