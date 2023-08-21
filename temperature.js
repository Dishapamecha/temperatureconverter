document.getElementById("convert").addEventListener("click", function () {
  const celsiusInput = parseFloat(document.getElementById("celsius").value);
  if (!isNaN(celsiusInput)) {
    const fahrenheitOutput = (celsiusInput * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheitOutput.toFixed(2);
  } 
  else {
    alert("Please enter a valid number.");
  }
});
