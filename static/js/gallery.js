function update_gallery_img(img_src) {
  const mainPhoto = document.getElementById("main-photo");

  // Add fade-out class to the current image
  mainPhoto.classList.add("fade");

  // Wait for the fade-out animation to complete before changing the image
  setTimeout(function() {
      // Change the image source
      mainPhoto.setAttribute('src', img_src);

      // After changing the image source, ensure that the new image fades in
      mainPhoto.onload = function() {
          // Remove the fade class (for fade-in effect)
          mainPhoto.classList.remove("fade");
      }
  }, 300); // Delay should match the fade-out duration (e.g., 300ms)
}

