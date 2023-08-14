function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let showOutput = document.getElementById('output');
    let classification;
  
    // BMI Calculation
    let bmiRange = weight / (height / 100) ** 2; // BMI Formula
    bmiRange = bmiRange.toFixed(2);
  
    if (bmiRange < 16) {
      classification = 'Delgadez severa';
    } else if (bmiRange > 16 && bmiRange < 17) {
      classification = 'Delgadez moderada';
    } else if (bmiRange > 17 && bmiRange < 18.5) {
      classification = 'Delgadez leve';
    } else if (bmiRange > 18.5 && bmiRange < 25) {
      classification = 'Normal';
    } else if (bmiRange > 25 && bmiRange < 30) {
      classification = 'Exceso de peso';
    } else if (bmiRange > 30 && bmiRange < 34) {
      classification = 'Clase obesa I';
    } else if (bmiRange > 35 && bmiRange < 40) {
      classification = 'Clase obesa II';
    } else if (bmiRange > 40) {
      classification = 'Clase obesa III';
    }
    showOutput.innerHTML = `Rango IMC: ${bmiRange} | ${classification} `;
  }