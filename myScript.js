// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick () {

  // Store the data in a JSON
  myJSON = {
    "q1": document.getElementById('q1').value,
    "false1": document.getElementById('false1').checked,
    "false2": document.getElementById('false2').checked,
    "true1": document.getElementById('true1').checked,
    "true2": document.getElementById('true2').checked,
    "true3": document.getElementById('true3').checked,
  }

  // Display stuff

  if (myJSON['q1'] == "" || (!myJSON['false1'] && !myJSON['false2']) || (!myJSON['true1'] && !myJSON['true2'] && !myJSON['true3'])) {
    myDiv.innerHTML += "\t\t<h1> You didn't even answer everything! You lazy bum. I predicted this would happen. Your thoughts are not beyond me, mortal. </h1>\n"
    return;
  }

  myDiv.innerHTML = "\n";
  myDiv.innerHTML += "\t\t<h3>The answer was FALSE!</h3>\n"
  myDiv.innerHTML += "\t\t<p> You answered '" + myJSON['q1'] + "' for the first question.</p>\n";
  if (myJSON['false1']) {
    myDiv.innerHTML += "\t\t<p> You answered 'False' for the second question.</p>\n";
  } else if (myJSON['false2']) {
    myDiv.innerHTML += "\t\t<p> You answered 'False, please' for the second question.</p>\n";
  } else {
    myDiv.innerHTML += "\t\t<p> Hmmmm. You should not be seeing this message. Perhaps there is a hidden treasure! Or perhaps I'm just tricking you. Who knows.</p>\n";
  }

  if (myJSON['true1']) {
     myDiv.innerHTML += "\t\t<p> You answered 'True' for the third question.</p>\n"
  }
  if (myJSON['true2']) {
    myDiv.innerHTML += "\t\t<p> You answered 'Very True' for the third question.</p>\n"

  }
  if (myJSON['true3']) {
    myDiv.innerHTML += "\t\t<p> You answered 'It appears to be true' for the third question.</p>\n"
  }

  if (myJSON['q1'].toLowerCase() == "false" || myJSON['q1'].toLowerCase() == "f") {
    myDiv.innerHTML += "\t\t<p> You were correct! </p>\n"
  } else if (myJSON['q1'].toLowerCase() == "true" || myJSON['q1'].toLowerCase() == "t") {
    myDiv.innerHTML += "\t\t<p> You were wrong! </p>\n"
  } else {
    myDiv.innerHTML += "\t\t<p> Your text is nonsense, and by extension, you are nonsense. </p>\n"
  }


  // Retrieve number of times visited
  var timesVisited = localStorage.getItem("timesVisited");
  console.log(timesVisited);
  if (timesVisited == null) {
    myDiv.innerHTML += "\t\t<p> Is this your first time here? Not to worry, you'll never be first again! </p>\n"
    localStorage.setItem("timesVisited", 1);
  } else {

    localStorage.setItem("timesVisited", parseInt(timesVisited) + 1);
    myDiv.innerHTML += "\t\t<p> Oh dear. You have visited this site " + timesVisited + " times already!</p>\n";
  }


  // Retrieve previous answer
  var prevAns = localStorage.getItem("prevAns");
  console.log(prevAns);
  if (typeof(prevAns) == "undefined") {
    console.log("NULL");
    var someList = [];
    someList.push(myJSON);
    localStorage.setItem("prevAns", JSON.stringify(someList));
  } else {
    myDiv.innerHTML += "\t\t <p>Here are your previous answers:</p> \n"
    console.log(prevAns);

    prevAns = JSON.parse(prevAns);
    for (var i = 0; i < prevAns.length; i++) {
      var prevJSON = prevAns[i];
      console.log(prevJSON);
      myDiv.innerHTML += "\t\t <hr /> \n"
      myDiv.innerHTML += "\t\t<p>You previously answered " + prevJSON['q1'] + " for question 1.</p>\n";
    }

    console.log(typeof prevAns);
    console.log(prevAns);
    prevAns.push(myJSON);
    localStorage.setItem("prevAns", JSON.stringify(prevAns));
    // localStorage.removeItem("prevAns");
  }

}
