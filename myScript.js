// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick () {
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.
  var q1 = document.getElementById('q1').value;
  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";
  // Now, using += we are *appending* to the new contents of the div tag.
  myDiv.innerHTML += "\t\t<h3>The answer was FALSE!</h3>\n"
  // Notice here that we are appending the values of the variables.
  myDiv.innerHTML += "\t\t<p> You answered " + q1 + "</p>\n";

  if (q1.toLowerCase() == "false" || q1.toLowerCase() == "f") {
    myDiv.innerHTML += "\t\t<p> You were correct! </p>\n"
  } else if (q1 == "") {
    myDiv.innerHTML += "\t\t<p> You didn't even answer anything! You lazy bum. I predicted this would happen. Your thoughts are not beyond me, mortal. </p>\n"
  } else {
    myDiv.innerHTML += "\t\t<p> You were wrong! </p>\n"
  }
}
