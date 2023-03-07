console.log("custnamereplicate has been executed");
// TEMPRORY MAKE SPAN MAKE CLICKABLE ONBLUR
// USING tabindex javascript or attribute on tag
let custname = document.querySelector(".custname");
let custnamecopy = document.querySelector(".custnamecopy");
let custadd = document.querySelector(".custadd");
let custaddcopy = document.querySelector(".custaddcopy");
let gstinNo = document.querySelector(".gstinNo");
let gstinNocopy = document.querySelector(".gstinNocopy");

custname.tabIndex = -1;
custadd.tabIndex = -1;
gstinNo.tabIndex = -1;

function custnamesync() {
  console.log("custnamesynced");

  custnamecopy.innerHTML = custname.innerHTML;
}

function custaddsync() {
  console.log("custaddsynced");

  custaddcopy.innerHTML = custadd.innerHTML;
}

function gstinNosync() {
  console.log("gstsynced");

  gstinNocopy.innerHTML = gstinNo.innerHTML;
}
