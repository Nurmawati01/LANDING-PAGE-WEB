const form = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const cityInput = document.getElementById('city');
const emailInput = document.getElementById('email');
const zipCodeInput = document.getElementById('zip-code');
const statusCheckbox = document.getElementById('status');
const warningDiv = document.getElementById('warning');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  submit();
});

function handleGetFormData() {
  const formData = {
    name: nameInput.value,
    city: cityInput.value,
    email: emailInput.value,
    zipCode: zipCodeInput.value,
    status: statusCheckbox.checked
  };

  return formData;
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  return statusCheckbox.checked;
}

function validateFormData(formData) {
  if (!formData) {
    return false;
  }

  if (formData.name === '') {
    return false;
  }

  if (formData.city === '') {
    return false;
  }

  if (formData.email === '') {
    return false;
  }

  if (formData.zipCode === '') {
    return false;
  }

  if (!isNumber(formData.zipCode)) {
    return false;
  }

  if (!checkboxIsChecked()) {
    return false;
  }

  return true;
}

function submit() {
  const formData = handleGetFormData();
  const isFormValid = validateFormData(formData);

  if (isFormValid) {
    warningDiv.textContent = '';
    return;
  }
  else {
    warningDiv.textContent = 'Periksa form anda sekali lagi';
    return;
  }
}