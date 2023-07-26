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

})