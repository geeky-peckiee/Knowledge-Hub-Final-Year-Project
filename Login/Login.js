function handleLoginSubmit() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  const requestBody = {
    email: email,
    password: password,
  };

  // Make the API call using the Fetch API
  fetch('https://inventory-management-api.adaptable.app/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
  
        const user = data.data.user;
        const accessToken = data.data.accessToken;

        document.getElementById('error_message').textContent = (`Login successful!\nUsername: ${user.username}\nEmail: ${user.email}\nAccess Token: ${accessToken}`);
        const dashboardUrl = './Dashboard/co-dashboard.html';
        window.location.href = dashboardUrl;
      } else {
  
        const errorMessage = "Invalid username or password. Please try again.";
        document.getElementById('error-message').textContent = errorMessage;
        document.getElementById('error-modal').style.display = 'block';
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
    });
}


function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const showPasswordToggle = document.getElementById('show-password-toggle');

  if (showPasswordToggle.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}


function closeErrorModal() {
  document.getElementById('error-modal').style.display = 'none';
}

document.getElementById('error-modal').addEventListener('click', closeErrorModal);



function handleForgotPasswordSubmit() {
  const email = document.getElementById('email').value;


  const requestBody = {
    email: email,
  };

  
  fetch('https://inventory-management-api.adaptable.app/auth/forgot-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
       
        const successMessage = "A password reset link has been sent to your email address.";
        document.getElementById('error-message').textContent = successMessage;
        document.getElementById('error-modal').style.display = 'block';

        document.getElementById('forgot-password-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
      } else {

        const errorMessage = "Failed to send the password reset link. Please try again later.";
        document.getElementById('error-message').textContent = errorMessage;
        document.getElementById('error-modal').style.display = 'block';
      }
    })
    .catch(error => {
      console.error('Error during password reset:', error);
    });
}

function toggleForgotPasswordForm() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('forgot-password-form').style.display = 'block';
}

function showForgotPasswordForm() {
  const loginForm = document.getElementById('login-form');
  const forgotPasswordForm = document.getElementById('forgot-password-form');
  const forgotPasswordLink = document.getElementById('forgot-password-link');

  if (loginForm.style.display === 'none') {
  
    loginForm.style.display = 'block';
    forgotPasswordForm.style.display = 'none';
    forgotPasswordLink.textContent = 'Forgot password?';
  } else {
  
    loginForm.style.display = 'none';
    forgotPasswordForm.style.display = 'block';
    forgotPasswordLink.textContent = 'Back to login';
  }
}
