//LOGIN IN PAGE
function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  console.log(email);
  console.log(pass);
  //IF ANY ELEMENTS ARE EMPTY ERROR
  if (email == "" || pass == "") {
    alert("Please enter a valid email or password.");
  } else {
    var myXMLRequest = new XMLHttpRequest();
    myXMLRequest.onload = openWorkout;
    var url = "assignment10.php?em=" + email + "&pass=" + pass;
    myXMLRequest.open("POST", url, true);
    myXMLRequest.send();
  }
}

//CHEIKING PASSWROD
function openWorkout() {
  var step = this.responseText;
  console.log(step);
  var response = JSON.parse(step);
  console.log(response);
  var test = response.data;
  console.log(step);
  console.log(test);
  //CHECKING TO SEE IF EMAIL AND PASSSWORD ARE VALID
  if (test == "invalid") {
    alert("The email or password you entered is invalid. Please try again.");
  } else {
    window.location = "#workoutPage";
  }
}
//SIGN UP PAGE
function signUp() {
  var emailT = document.getElementById("emailT").value;
  var passT = document.getElementById("passwordT").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  //IF ANY ELEMENTS ARE EMPTY ERROR
  if (emailT == "" || passT == "" || firstName == "" || lastName == "") {
    alert("Please fill out all the fields.");
  } else {
    var myXMLRequest2 = new XMLHttpRequest();
    myXMLRequest2.onload = openWorkout;
    var url2 = "assignment10pt2.php?em=" + emailT + "&pass=" + passT + "&first=" + firstName + "&last=" + lastName;
    myXMLRequest2.open("POST", url2, true);
    myXMLRequest2.send();
  }
}
//GET SELECTED GROUP AND DISPLAY
function EX() {
  var exer = document.getElementById("group").value;
  console.log(exer);
  var phpString = "assignment10pt3.php?name=" + exer;
  var myXMLRequest3 = new XMLHttpRequest();
  myXMLRequest3.onload = display;
  myXMLRequest3.open("GET", phpString, true);
  myXMLRequest3.send();
}

function display() {
  var intro = "Exercise Activities: <br><br>";

  document.getElementById("exercises").innerHTML = intro + this.responseText;
}