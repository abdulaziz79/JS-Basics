const images = document.querySelectorAll('.hover-image');


function changeImageSource(image, index) {
  const originalSrc = image.src; // Store the original source
  
  image.addEventListener('mouseover', function() {
    // Replace the original image source with the new one
    const newSrc = originalSrc.replace('.jpg', `_2.jpg`);
    image.src = newSrc;
  });

  image.addEventListener('mouseout', function() {
    // Revert the image source back to the original
    image.src = originalSrc;
  });
}

// Attach the event listeners to each image
images.forEach((image, index) => {
  changeImageSource(image, index);
});