let convertMeters = document.getElementById("length-convert");
let convertLiters = document.getElementById("volume-convert");
let specificNum = document.getElementById("specific-num");
let convertMass = document.getElementById("mass-convert");
let numberHead = document.getElementById("number-head");
let number = parseInt(prompt());

function calcUnit() {
  let toFeet = number * 3.281;
  let toMeters = number * 0.3048;
  numberHead.textContent = number;
  convertMeters.textContent = `${number} meters = ${toFeet.toFixed(
    3
  )} feet | ${number} feet = ${toMeters.toFixed(3)} meters`;

  let toGallons = number * 0.264172;
  let toLiters = number * 3.78541;
  convertLiters.textContent = `${number} liters = ${toGallons.toFixed(
    3
  )} gallons | ${number} gallons = ${toLiters.toFixed(3)} liters`;

  let toPounds = number * 2.20462;
  let toKilos = number * 0.453592;
  convertMass.textContent = `${number} kilos = ${toPounds.toFixed(
    3
  )} pounds | ${number} pounds = ${toKilos.toFixed(3)} kilos`;
}
