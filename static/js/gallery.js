function update_gallery_img(img_src) {
  const mainPhoto = document.getElementById("main-photo");

  // Add the fade-out class to start the fade-out transition
  mainPhoto.classList.add("fade-out");

  // Wait for the fade-out to complete (300ms to match the new transition duration)
  setTimeout(() => {
    // Force a reflow (to ensure the browser resets the image loading)
    mainPhoto.offsetHeight; // This forces the browser to reflow and recalculate the layout

    // Update the image source once the fade-out is done
    mainPhoto.setAttribute('src', img_src);

    // After changing the image, fade in the new image
    mainPhoto.classList.remove("fade-out"); // Remove fade-out class
    mainPhoto.classList.add("fade-in"); // Add fade-in class

    // Remove the fade-in class after the transition is complete (300ms)
    setTimeout(() => {
      mainPhoto.classList.remove("fade-in");
    }, 300);  // Adjust this time to match the transition duration
  }, 300);  // Shortened fade-out time to match the faster fade
}
