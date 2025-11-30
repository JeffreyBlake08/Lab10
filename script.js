function calculateSumAndMean() {
  let howMany = parseInt(prompt("Enter amount:"), 10);
  if (isNaN(howMany) || howMany <= 0 || howMany > 20) return;

  const numbers = [];

  for (let i = 0; i < howMany; i++) {
    let value = Number(prompt("Enter number:"));
    if (isNaN(value)) value = 0;
    numbers[i] = value;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const mean = sum / numbers.length;

  document.getElementById("output").innerHTML = `
    <p>${numbers.join(", ")}</p>
    <p>${sum}</p>
    <p>${mean}</p>
  `;
}

