const displayDiv = document.querySelector('#displayDiv');
    
const input = document.querySelector('#name');

input.addEventListener('input', function() {
  
  displayDiv.textContent = input.value;
});