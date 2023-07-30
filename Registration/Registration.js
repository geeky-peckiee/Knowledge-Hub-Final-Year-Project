function handleRegistrationSubmit() {
  const fullName = document.getElementById('full-name').value;
  const regNumber = document.getElementById('registration-number').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirm_password = document.getElementById('confirm_password').value;
  const email = document.getElementById('email').value;

  if (password !== confirm_password) {
    const errorMessage = "Passwords do not match. Please re-enter your password.";
    document.getElementById('error-message').textContent = errorMessage;
    document.getElementById('error-modal').style.display = 'block';
    return;
  }

 const regNumberRegex = /^(\d{2})\/(EG)\/(CO|AE|CE|EE|FE|ME|CV|PE)\/(\d{3,4})$/;
  const adminRegNumberRegex = /^(EG)\/(CO|AE|CE|EE|FE|ME|CV|PE)\/(\d{3})$/;


  if (!regNumber.match(regNumberRegex) && !regNumber.match(adminRegNumberRegex)) {
    const errorMessage = "Invalid registration number format. Please enter a valid registration number.";
    document.getElementById('error-message').textContent = errorMessage;
    document.getElementById('error-modal').style.display = 'block';
    return;

    
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
  

   const requestBody = {
    fullName: fullName,
    regNumber: regNumber,
    username: username,
    password: password,
    confirmPassword: confirm_password,
    email : email,
  };

  fetch('https://inventory-management-api.adaptable.app/auth/signup', {
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

        // Signup was successful
        alert(`Signup successful!\nUsername: ${user.username}\nEmail: ${user.email}\nAccess Token: ${accessToken}`);

        // Redirect to the appropriate dashboard based on the departmentCode
        let dashboardUrl = 'co-dashboard.html'; // Default URL for regular dashboard
        if (regNumber.match(regNumberRegex)) {
          const departmentCode = regNumber.match(regNumberRegex)[3];
          switch (departmentCode) {
            case 'CO':
              dashboardUrl = '../Dashboard/department/department.html';
              break;
            case 'AE':
              dashboardUrl = '../AgriculturalEngineering.html';
              break;
            case 'CE':
              dashboardUrl = '../CivilEngineering.html';
              break;
            // Add more cases for other departments as needed
            default:
              // dashboardUrl remains the same
              break;
          }
        } else if (regNumber.match(adminRegNumberRegex)) {
          dashboardUrl = '../AdminDashboard.html';
        }

        // Redirect to the dashboard after successful signup
        window.location.href = dashboardUrl;

      } else {
        // Signup failed
        const errorMessage = "Signup failed. Please try again.";
        document.getElementById('error-message').textContent = errorMessage;
        document.getElementById('error-modal').style.display = 'block';
      }
    })
    .catch(error => {
      console.error('Error during registration:', error);
    });
}
function closeErrorModal() {
  document.getElementById('error-modal').style.display = 'none';
}