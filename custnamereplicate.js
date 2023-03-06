console.log("custnamereplicate has been executed");




let custname = document.querySelector(".custname");
custname.addEventListener("click", custnamesync);

function custnamesync() {
    console.log("custnamesynced");
  let custnamecopy = document.querySelector(".custnamecopy");

  custnamecopy.innerhtml = custname.innerhtml;
}





function custaddsync() {
  let custadd = document.querySelector(".custadd");
  let custaddcopy = document.querySelector(".custaddcopy");

  custnamecopy.innerhtml = custname.innerhtml;
}

function gstinNosync() {
  console.log("gstsynced");

  let gstinNo = document.querySelector(".gstinNo");
  let gstinNocopy = document.querySelector(".gstinNocopy");

  custnamecopy.innerhtml = custname.innerhtml;
}
