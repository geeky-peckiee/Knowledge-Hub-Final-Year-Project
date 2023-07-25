const registrationForm = document.getElementById('registration-form');
const errorModal = document.getElementById('error-modal');
const errorMessage = document.getElementById('error-message');
const closeModal = document.querySelector('.close');

registrationForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const fullNameInput = document.getElementById('full-name');
  const registrationNumberInput = document.getElementById('registration-number');
  const departmentInput = document.getElementById('department');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const fullName = fullNameInput.value;
  const registrationNumber = registrationNumberInput.value;
  const department = departmentInput.value;
  const username = usernameInput.value;
  const password = passwordInput.value;

  let isValid = true;

  if (fullName.trim().length < 9) {
    isValid = false;
    showErrorModal('Full Name must be at least 9 characters long.');
  }

  if (!registrationNumber.startsWith('17/EG')) {
    isValid = false;
    showErrorModal('Registration Number must start with "17/EG".');
  }

  if (username.length < 5 || !/^[A-Za-z]+$/.test(username)) {
    isValid = false;
    showErrorModal('Username must be at least 5 alphabet characters.');
  }

  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/.test(password)) {
    isValid = false;
    showErrorModal('Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.');
  }

  if (isValid) {
    // Registration logic here (store user details in database)
    // Replace with appropriate backend implementation
    //registerUser(fullName, registrationNumber, department, username, password);
    window.location.href = '../Dashboard/Dashboard.html'
}
});

closeModal.addEventListener('click', hideErrorModal);

function showErrorModal(message) {
  errorMessage.textContent = message;
  errorModal.style.display = 'block';
}

function hideErrorModal() {
  errorModal.style.display = 'none';
}

function registerUser(fullName, registrationNumber, department, username, password) {
  // Send an AJAX request to your server to store user details in the database
  // You will need to use a server-side language like PHP or Node.js to handle the database operations
  // This example shows a simple alert with the registered user's details
  const userDetails = {
    fullName,
    registrationNumber,
    department,
    username,
    password
  };
  alert('User registered successfully!\n\n' + JSON.stringify(userDetails));
}
