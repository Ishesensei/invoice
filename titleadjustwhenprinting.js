// to remove title in print mode -print codes
console.log("titleadjustwhenprinting has been executed");
var originalTitle = document.title;

function rmTitle() {
  document.title = `${document.querySelector(".invNo").innerText}_${
    document.querySelector(".invDate").innerText
  }_${document.querySelector(".custName").innerText}_${
    document.querySelector(".invRef").innerText
  }`;
  console.log("blank filled in title");

  if (document.querySelector(".gstinNo").innerText) {
  }
}

window.onafterprint = () => {
  document.title = originalTitle;
  console.log("Printing completed...");
};

// registered or not code
