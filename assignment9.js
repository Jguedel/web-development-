function fetchTerm() {
  var part = document.getElementById("type").value;
  var myXMLRequest = new XMLHttpRequest();
  myXMLRequest.onload = createPossibleAnswers;
  myXMLRequest.open("GET", "assignment9.php?part=" + part, true);
  myXMLRequest.send();
}

function createPossibleAnswers() {
  //TASK 1: CLEAR OUT ANY PREVIOUS OUTPUT
  document.getElementById("result").innerHTML = ""; // set the output to nothing
  var part = document.getElementById("type").value;
  var json = JSON.parse(this.responseText);
  //TASK 1: GET THE WORD
  document.getElementById("word").innerHTML = "What answer best applies to the " + json.name + ":  " + json.word;

  //TASK 2: GET THE MULTIPLE CHOICE ANSWERS
  document.getElementById("choices").innerHTML = "";
  for (var i = 0; i < json.choices.length; i++) {
    var button = document.createElement("button");
    button.innerHTML = json.choices[i].definition;
    button.className = json.choices[i].correct ? "correct" : "incorrect";
    button.onclick = showResult;
    button.style.display = "block";
    document.getElementById("choices").appendChild(button);
  }
}

function showResult() {
  document.getElementById("result").innerHTML = "You are " + this.className;
}