// Get references to elements
const userInput = document.getElementById('userInput');
const checkButton = document.getElementById('checkButton');
const restartButton = document.getElementById('restartButton');
const result = document.getElementById('result');

// Function to check if a string is a palindrome
const isPalindrome = (str) => {
  const cleanStr = str.replace(/\s+/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
};

// Function to display result
const displayResult = (message) => {
  result.textContent = message;
};

// Event listener for the "Check" button
checkButton.addEventListener('click', () => {
  const input = userInput.value.trim();

  if (!input) {
    displayResult('Please enter a valid string!');
    return;
  }

  const message = isPalindrome(input) 
    ? `"${input}" is a palindrome! 🎉` 
    : `"${input}" is NOT a palindrome. Try again! ❌`;

  displayResult(message);

  // Toggle button visibility
  restartButton.style.display = 'inline-block';
  checkButton.style.display = 'none';
});

// Event listener for the "Check Another" button
restartButton.addEventListener('click', () => {
  userInput.value = '';
  result.textContent = '';

  // Toggle button visibility
  restartButton.style.display = 'none';
  checkButton.style.display = 'inline-block';
});
