function hitungBMI() {
  // Get input values
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('Tinggi badan').value);

  // Convert height from cm to meters
  const heightM = heightCm / 100;

  // Calculate BMI
  const bmi = weight / Math.pow(heightM, 2);

  // Display the result
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
}

function resetForm() {
  // Clear input fields and result
  document.getElementById('weight').value = '';
  document.getElementById('Tinggi badan').value = '';
  document.getElementById('result').textContent = '';
}