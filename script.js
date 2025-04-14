
document.querySelectorAll('input[name="logo"]').forEach((input) => {
  input.addEventListener('change', () => {
    const selectedLogo = input.value;
    document.getElementById('mainLogo').src = selectedLogo;
    localStorage.setItem('selectedLogo', selectedLogo);
  });
});

window.addEventListener('load', () => {
  const savedLogo = localStorage.getItem('selectedLogo') || 'logo.png';
  document.getElementById('mainLogo').src = savedLogo;
  const radioToCheck = document.querySelector(`input[value="${savedLogo}"]`);
  if (radioToCheck) radioToCheck.checked = true;
});
