const image = document.querySelector('#image1');
      
image.addEventListener('mouseover', function() {
  // Change the image source when the mouse is over it
  image.src = 'images/image1_2.jpg'; // Replace 'image2.jpg' with the new image's filename
});

// Optional: Add a listener for mouseout event to revert the image when the mouse moves away
image.addEventListener('mouseout', function() {
  image.src = 'images/image1.jpg';
});