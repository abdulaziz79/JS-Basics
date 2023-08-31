const images = document.querySelectorAll('.hover-image');


function changeImageSource(image, index) {
  const originalSrc = image.src; 
  
  image.addEventListener('mouseover', function() {
    const newSrc = originalSrc.replace('.jpg', `_2.jpg`);
    image.src = newSrc;
  });

}
images.forEach((image, index) => {
  changeImageSource(image, index);
});