document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#name');
  
    input.addEventListener('blur', function() {
      // Show a dialog when the input loses focus
      alert("Thank you for participating!");
    });
  });
  