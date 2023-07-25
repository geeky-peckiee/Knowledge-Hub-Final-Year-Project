
//   // Function to get URL parameters
//   function getParameterByName(name, url) {
//     window.location.href = `../Registration/Registration.html`
//     // window.location.href = `display-name.html?full-name=${encodeURIComponent(fullName)}`
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
//   }

//   // Get the full name from the URL parameter
//   const fullName = getParameterByName('full-name');
//   if (fullName) {
//     const userNameDisplay= document.getElementById('user-name-display');
//     userNameDisplay.textContent = `Hello, ${fullName}!`;
//   }
