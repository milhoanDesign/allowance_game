

// Get references to HTML elements
const shoppingDoneCheckbox = document.getElementById('shoppingDone');
const calculateAllowanceButton = document.getElementById('calculateAllowance');
const allowanceDisplay = document.getElementById('allowanceDisplay');

// Event listener for button click
calculateAllowanceButton.addEventListener('click', () => {
  // Get the state of the shoppingDone checkbox
  const shoppingDone = shoppingDoneCheckbox.checked;

  // Calculate allowance based on shoppingDone state
  let childsAllowance;
  if (shoppingDone) {
    childsAllowance = 10;
  } else {
    childsAllowance = 5;
  }

  // Display the allowance
  allowanceDisplay.textContent = `Child's allowance: $${childsAllowance}`;
});
