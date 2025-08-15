window.addEventListener("load", function() {
  setTimeout(function() {
    // Fade out loader
    document.getElementById("loader").classList.add("hidden");

    // After fade-out ends
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      const content = document.getElementById("content");
      content.style.display = "block";
      // Add animation class
      content.classList.add("page-animate");
    }, 500); // match fade duration
  }, 3000); // loader delay
});


