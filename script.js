// Function to toggle menu
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("responsive");
}

// Variables
const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('number-people');
const calculateBtn = document.getElementById('calculate');
const tipButtons = document.querySelectorAll('.tip-button');
const customInput = document.getElementById('custom');
const tipResult = document.getElementById('tip-amount');
const amountPerPerson = document.getElementById('total-amount');
let selectedTipValue = null;
let customPercentage = null;

// Event listeners for tip buttons
tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    tipButtons.forEach(btn => btn.style.backgroundColor = "");
    button.style.backgroundColor = "green";
    selectedTipValue = button.value;
  });
});

// Event listener for "Calculate" button
calculateBtn.addEventListener('click', () => {
  const numberOfPeople = Number(peopleInput.value);
  const billValue = Number(billInput.value);
  const customValue = Number(customInput.value);

  if (isNaN(selectedTipValue) || isNaN(billValue) || isNaN(numberOfPeople)) {
    tipResult.innerText = "Input a valid number";
    amountPerPerson.innerText = "Input a valid number";
  } else if (selectedTipValue !== null && customValue === 0) {
    calculateTip(selectedTipValue, billValue, numberOfPeople);
  } else if (selectedTipValue == null && !isNaN(customValue)) {
    customPercentage = customValue / 100;
    calculateTip(customPercentage, billValue, numberOfPeople);
  } else {
    tipResult.innerText = 'Select a tip please';
  }
});

// Calculate tip and total per person
function calculateTip(tipPercentage, billAmount, peopleCount) {
  const mainTip = (tipPercentage * billAmount) / peopleCount;
  tipResult.innerText = mainTip.toFixed(2);
  const totalPerPerson = (billAmount / peopleCount) + mainTip;
  amountPerPerson.innerText = `$ ${totalPerPerson.toFixed(2)}`;
}

// Event listener for "Reset" button
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
  tipButtons.forEach(btn => btn.style.backgroundColor = "");
  billInput.value = '';
  peopleInput.value = '';
  tipResult.innerText = '';
  amountPerPerson.innerText = '';
});
