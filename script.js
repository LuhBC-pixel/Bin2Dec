function binIntoDecimal(binary) {
  return parseInt(binary, 2);
}

function getElementAndShowResult() {
  const binary = document.getElementById('binary').value;
  const decimal = binIntoDecimal(binary);
  document.getElementById('result').innerHTML = decimal;
  
  return false;
}
