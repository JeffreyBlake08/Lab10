function createInputs() {
  const howMany = parseInt(document.getElementById("howMany").value);

  // stop if nothing or invalid
  if (isNaN(howMany) || howMany < 1) {
    return;
  }

  const container = document.getElementById("inputs");
  container.innerHTML = ""; // clear old inputs

  // create one input per number
  for (let i = 0; i < howMany; i++) {
    container.innerHTML +=
      'Number ' + (i + 1) + ': <input type="number" id="num' + i + '"><br>';
  }

  // show submit button
  document.getElementById("submitBtn").style.display = "inline-block";

  // clear old result
  document.getElementById("output").innerHTML = "";
}

function calculate() {
  const howMany = parseInt(document.getElementById("howMany").value);
  const numbers = [];

  // read numbers from the inputs
  for (let i = 0; i < howMany; i++) {
    let val = Number(document.getElementById("num" + i).value);
    if (isNaN(val)) {
      val = 0; // treat empty as 0
    }
    numbers.push(val);
  }

  // sum
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // mean
  const mean = sum / numbers.length;

  // show labelled output
  document.getElementById("output").innerHTML =
    '<p><strong>Numbers:</strong> ' + numbers.join(", ") + '</p>' +
    '<p><strong>Sum:</strong> ' + sum + '</p>' +
    '<p><strong>Mean:</strong> ' + mean + '</p>';
}

