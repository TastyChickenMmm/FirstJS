// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick () {

  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.
  var q1 = document.getElementById('q1').value;
  var false1 = document.getElementById('false1').checked;
  var false2 = document.getElementById('false2').checked;
  var true1 = document.getElementById('true1').checked;
  var true2 = document.getElementById('true2').checked;
  var true3 = document.getElementById('true3').checked;

  if (q1 == "" || (!false1 && !false2) || (!true1 && !true2 && !true3)) {
    myDiv.innerHTML += "\t\t<h1> You didn't even answer everything! You lazy bum. I predicted this would happen. Your thoughts are not beyond me, mortal. </h1>\n"
    return;
  }

  myDiv.innerHTML = "\n";
  myDiv.innerHTML += "\t\t<h3>The answer was FALSE!</h3>\n"
  myDiv.innerHTML += "\t\t<p> You answered '" + q1 + "' for the first question.</p>\n";
  if (false1) {
    myDiv.innerHTML += "\t\t<p> You answered 'False' for the second question.</p>\n";
  } else if (false2) {
    myDiv.innerHTML += "\t\t<p> You answered 'False, please' for the second question.</p>\n";
  } else {
    myDiv.innerHTML += "\t\t<p> Hmmmm. You should not be seeing this message. Perhaps there is a hidden treasure! Or perhaps I'm just tricking you. Who knows.</p>\n";
  }

  if (true1) {
     myDiv.innerHTML += "\t\t<p> You answered 'True' for the third question.</p>\n"
  }
  if (true2) {
    myDiv.innerHTML += "\t\t<p> You answered 'Very True' for the third question.</p>\n"

  }
  if (true3) {
    myDiv.innerHTML += "\t\t<p> You answered 'It appears to be true' for the third question.</p>\n"
  }

  if (q1.toLowerCase() == "false" || q1.toLowerCase() == "f") {
    myDiv.innerHTML += "\t\t<p> You were correct! </p>\n"
  } else if (q1.toLowerCase() == "true" || q1.toLowerCase() == "t") {
    myDiv.innerHTML += "\t\t<p> You were wrong! </p>\n"
  } else {
    myDiv.innerHTML += "\t\t<p> Your text is nonsense, and by extension, you are nonsense. </p>\n"
  }


  // Retrieve
  var timesVisited = localStorage.getItem("timesVisited");
  console.log(timesVisited);
  if (timesVisited == null) {
    myDiv.innerHTML += "\t\t<p> Is this your first time here? Not to worry, you'll never be first again! </p>\n"
    localStorage.setItem("timesVisited", 1);
  } else {

    localStorage.setItem("timesVisited", parseInt(timesVisited) + 1);
    myDiv.innerHTML += "\t\t<p> Oh dear. You have visited this site " + timesVisited + " times already!</p>\n";
  }

}
