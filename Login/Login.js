function handleLoginSubmit() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
  
    const username = usernameInput.value;
    const password = passwordInput.value;
  
    // Validation patterns
    const usernameRegex = /^[A-Za-z]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])[0-9a-zA-Z!@#$%^&*()]{8,}$/;
  
    // Validation
    let isValid = true;
  
    if (!usernameRegex.test(username)) {
      isValid = false;
      showErrorModal('Username must contain only alphabets.');
    }
  
    if (!passwordRegex.test(password)) {
      isValid = false;
      showErrorModal('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.');
    }
  
    // If login is successful, redirect to dashboard
    if (isValid) {
      // Replace this with your dashboard URL
      window.location.href = '../Dashboard/Dashboard.html';
    }
  }
  
  function showErrorModal(message) {
    const errorModal = document.getElementById('error-modal');
    const errorMessage = document.getElementById('error-message');
  
    errorMessage.textContent = message;
    errorModal.style.display = 'block';
  }
  
  function hideErrorModal() {
    const errorModal = document.getElementById('error-modal');
    errorModal.style.display = 'none';
  }
  
  // Add click event listener to the submit button
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    handleLoginSubmit();
  });
  
  // Add click event listener to the close button in the error modal
  const closeModal = document.querySelector('.close');
  closeModal.addEventListener('click', hideErrorModal);
  

const passwordInput = document.getElementById('password');
const showPasswordToggle = document.getElementById('show-password-toggle');

showPasswordToggle.addEventListener('change', function() {
  if (this.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});
