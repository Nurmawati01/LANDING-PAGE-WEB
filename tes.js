function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;
  
  return {
    name,
    city,
    email,
    zipCode,
    status
  };
}
function isNumber(str) {
  return !isNaN(str);
}
function checkboxIsChecked() {
  return document.getElementById('status').checked;
}
function validateFormData(formData) {
  return (
    formData &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked()
  );
}
function submit(event) {
  event.preventDefault();

  if (!validateFormData(getFormData())) {
    const warning = document.getElementById('warning');
    warning.textContent = 'Periksa form anda sekali lagi';
  } else {
    const warning = document.getElementById('warning');
    warning.textContent = '';
    // lakukan aksi submit form di sini
  }
}

const form = document.getElementById('form');
form.addEventListener('submit', submit);

