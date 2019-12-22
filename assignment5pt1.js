function changeinch() {
  document.getElementById("results").innerHTML = "Centimeters";
}
function changeCM() {
  document.getElementById("results").innerHTML = "Inches";
}
// TREATS EVERY CONTENT AS TEXT.
function convert() {
  var numberunits = document.getElementById("results").innerHTML;
  var number = document.getElementById("units").value;
  var ans = 0;
  if(numberunits == "Inches"){
    ans = number * 2.54;
  }
  else if(numberunits == "Centimeters"){
    ans = number / 2.54;
  }
  else{
    alert("Please pick your units");
  }
  document.getElementById("ans").innerHTML = ans;
}
