// Create the number input boxes
function createInputs() {
  const howMany = parseInt(document.getElementById("howMany").value);

  // Check that user entered a positive number
  if (isNaN(howMany) || howMany < 1) {
    alert("Please enter how many numbers you want (1 or more).");
    return;
  }

  const container = document.getElementById("inputs");
  container.innerHTML = ""; // clear old inputs, if any

  // Create one labelled input for each number
  for (let i = 0; i < howMany; i++) {
    const label = document.createElement("label");
    label.textContent = "Number " + (i + 1) + ": ";

    const input = document.createElement("input");
    input.type = "number";
    input.id = "num" + i;

    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }

  // Show the submit button
  document.getElementById("submitBtn").style.display = "inline-block";

  // Clear any previous result
  document.getElementById("output").innerHTML = "";
// Calculate sum and mean of the array
function calculate() {
  const howMany = parseInt(document.getElementById("howMany").value);
  const numbers = [];

  // Read all the numbers from the inputs
  for (let i = 0; i < howMany; i++) {
    let val = Number(document.getElementById("num" + i).value);
    if (isNaN(val)) {
      val = 0; // treat empty as 0, so the array still has that position
    }
    numbers.push(val);
  }

  // Calculate sum
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // Calculate mean
  const mean = sum / numbers.length;

  // Output clearly labelled results
  document.getElementById("output").innerHTML =
    "<p><strong>Array (numbers):</strong> " + numbers.join(", ") + "</p>" +
    "<p><strong>Sum of array:</strong> " + sum + "</p>" +
    "<p><strong>Mean of array:</strong> " + mean + "</p>";
}

