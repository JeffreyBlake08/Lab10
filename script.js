function createInputs() {
  const howMany = parseInt(document.getElementById("howMany").value);
  if (!howMany || howMany < 1) return;

  const container = document.getElementById("inputs");
  container.innerHTML = "";

  for (let i = 0; i < howMany; i++) {
    container.innerHTML += `<label>Number ${i + 1}: </label><input type="number" id="num${i}"><br>`;
  }

  document.getElementById("submitBtn").style.display = "block";
}

function calculate() {
  const howMany = parseInt(document.getElementById("howMany").value);
  const numbers = [];

  for (let i = 0; i < howMany; i++) {
    let val = Number(document.getElementById("num" + i).value);
    numbers.push(val);
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  const mean = sum / numbers.length;

  document.getElementById("output").innerHTML =
    `<p><strong>Numbers:</strong> ${numbers.join(", ")}</p>
     <p><strong>Sum:</strong> ${sum}</p>
     <p><strong>Mean:</strong> ${mean}</p>`;
}
