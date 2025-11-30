function createInputs() {
  const howMany = parseInt(document.getElementById("howMany").value);
  if (isNaN(howMany) || howMany < 1) return;

  const container = document.getElementById("inputs");
  container.innerHTML = "";

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

  document.getElementById("submitBtn").style.display = "inline-block";
  document.getElementById("output").innerHTML = "";
}

function calculate() {
  const howMany = parseInt(document.getElementById("howMany").value);
  const numbers = [];

  for (let i = 0; i < howMany; i++) {
    let val = Number(document.getElementById("num" + i).value);
    if (isNaN(val)) val = 0;
    numbers.push(val);
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  const mean = sum / numbers.length;

  document.getElementById("output").innerHTML =
    "<p><strong>Array (numbers):</strong> " + numbers.join(", ") + "</p>" +
    "<p><strong>Sum of array:</strong> " + sum + "</p>" +
    "<p><strong>Mean of array:</strong> " + mean + "</p>";
}
