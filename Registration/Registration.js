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

  // Regular expression for registration number validation
  const regNumberRegex = /^(\d{2})\/(EG)\/(CO|AE|CE|EE|FE|ME|CV|PE)\/(\d{3,4})$/;
  const adminRegNumberRegex = /^(EG)\/(CO|AE|CE|EE|FE|ME|CV|PE)\/(\d{3})$/;
  // Check if the registration number matches the required format
  if (regNumberRegex.test(registrationNumber)) {
    // Extract the department code from the registration number
    const departmentCode = registrationNumber.split('/')[2];
    const departmentCodeUpper = departmentCode.toUpperCase();

    // Redirect the user to the appropriate dashboard based on the department code
    if (departmentCodeUpper === 'CO') {
      window.location.href = '../Dashboard/co-dashboard.html';

    } else if (departmentCodeUpper === 'AE') {
      
      window.location.href = '../Dashboard/ae-dashboard.html';
    } else if (departmentCodeUpper === 'CE') {
   
      window.location.href = '../Dashboard/ce-dashboard.html';
    } else if (departmentCodeUpper === 'EE') {
     
      window.location.href = '../Dashboard/ee-dashboard.html';
    } else if (departmentCodeUpper === 'FE') {
      
      window.location.href = '../Dashboard/fe-dashboard.html';
    } else if (departmentCodeUpper === 'ME') {
      
      window.location.href = '../Dashboard/me-dashboard.html';
    } else if (departmentCodeUpper === 'CV') {
     
      window.location.href = '../Dashboard/cv-dashboard.html';                                
    } else if (departmentCodeUpper === 'PE') {
      
      window.location.href = '../Dashboard/pe-dashboard.html';
    } else {
      // Display error message for invalid department code
      showErrorModal('Invalid department code. Please enter a valid registration number.');
    }
  } else if (adminRegNumberRegex.test(registrationNumber)) {
    if (departmentCodeUpper === 'CO') {
      
      window.location.href = '../Dashboard/co-admin-dashboard.html';
    } else if (departmentCodeUpper === 'AE') {
      
      window.location.href = '../Dashboard/ae-admin-dashboard.html';
    } else if (departmentCodeUpper === 'CE') {
      
      window.location.href = '../Dashboard/ce-admin-dashboard.html';
    } else if (departmentCodeUpper === 'EE') {
      
      window.location.href = '../Dashboard/ee-admin-dashboard.html';
    } else if (departmentCodeUpper === 'FE') {
      
      window.location.href = '../Dashboard/fe-admin-dashboard.html';
    } else if (departmentCodeUpper === 'ME') {
      
      window.location.href = '../Dashboard/me-admin-dashboard.html';
    } else if (departmentCodeUpper === 'CV') {
   
      window.location.href = '../Dashboard/cv-admin-dashboard.html';
    } else if (departmentCodeUpper === 'PE') {
      
      window.location.href = '../Dashboard/pe-admin-dashboard.html';
    } else {
      
      showErrorModal('You are not an admin');
    }
  }
  else {
  
    showErrorModal('Invalid registration number format. Please enter a valid registration number.');
  }

if (username.length < 5 || !/^[A-Za-z]+$/.test(username)) {
    isValid = false;
    showErrorModal('Username must be at least 5 alphabet characters.');
  }

  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/.test(password)) {
    isValid = false;
    showErrorModal('Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.');
  }

  // if (isValid) {
  //   // Registration logic here (store user details in database)
  //   // Replace with appropriate backend implementation
  //   //registerUser(fullName, registrationNumber, department, username, password);
  //   window.location.href = '../Dashboard/Dashboard.html'
// }
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
