// to remove title in print mode -print codes
console.log("printmodeTitle has been executed");
var originalTitle = document.title;

function rmTitle() {
  console.log("print executed so replaced title");
  document.title = `${document.querySelector(".invNo").innerText}_${document.querySelector(".invDate").innerText}_${document.querySelector(".custName").innerText}_${document.querySelector(".invRef").innerText}_${document.querySelector(".gstinNo").innerText}`;
    console.log("blank filled in title");
}

window.onafterprint = () => {
  document.title = originalTitle;
  console.log("Printing completed...");
};


