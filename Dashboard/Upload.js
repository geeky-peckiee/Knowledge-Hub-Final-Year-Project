const uploadForm = document.getElementById('upload-form');
const confirmationModal = document.getElementById('confirmation-modal');
const confirmationMessage = document.getElementById('confirmation-message');
const confirmationKeyInput = document.getElementById('confirmation-key');
const closeModal = document.querySelector('.close');

uploadForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const materialTypeInput = document.getElementById('material-type');
  const departmentInput = document.getElementById('department');
  const courseTitleInput = document.getElementById('course-title');
  const courseCodeInput = document.getElementById('course-code');
  const fileInput = document.getElementById('file');

  const materialType = materialTypeInput.value;
  const department = departmentInput.value;
  const courseTitle = courseTitleInput.value;
  const courseCode = courseCodeInput.value;
  const file = fileInput.files[0];

  const fileName = `${courseCode}.pdf`;

  // Perform other form validations if needed

  // Show confirmation modal
  showConfirmationModal(materialType, department, courseTitle, courseCode, fileName);
});

closeModal.addEventListener('click', hideConfirmationModal);

function showConfirmationModal(materialType, department, courseTitle, courseCode, fileName) {
  const confirmationText = `
    Type of Material: ${materialType}<br>
    Department: ${department}<br>
    Course Title: ${courseTitle}<br>
    Course Code: ${courseCode}<br>
    File Name: ${fileName}
  `;
  confirmationMessage.innerHTML = confirmationText;
  confirmationModal.style.display = 'block';
}

function hideConfirmationModal() {
  confirmationModal.style.display = 'none';
}

function verifyKey() {
  const confirmationKey = confirmationKeyInput.value;

  // Perform key verification (e.g., check against the correct key)

  if (confirmationKey === 'YOUR_CORRECT_KEY') {
    // Call a function to upload the file to Google Drive
    uploadToGoogleDrive();
  } else {
    alert('Incorrect key. Upload terminated.');
  }

  hideConfirmationModal();
}

function uploadToGoogleDrive() {
  // Implement the file upload to Google Drive here
  // This typically involves server-side processing and using Google Drive API
  // Consult the Google Drive API documentation for more details on file uploads
  // You will need to handle authentication, file upload, and saving based on the provided parameters
  // The implementation of Google Drive upload is beyond the scope of this response
  alert('File uploaded successfully to Google Drive!');
}
