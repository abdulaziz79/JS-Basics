document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.querySelector('#resetButton');
    const nameInput = document.querySelector('#name');
    const surnameInput = document.querySelector('#surname');
    const cityInput = document.querySelector('#city');
  
    resetButton.addEventListener('click', function() {
      const confirmed = confirm("Are you sure you want to reset the fields?");
      if (confirmed) {
        nameInput.value = '';
        surnameInput.value = '';
        cityInput.value = '';
      }
    });
  });
  