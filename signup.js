window.addEventListener("load", function() {
  setTimeout(function() {
    // Fade out loader
    document.getElementById("loader").classList.add("hidden");

    // After fade-out ends
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";

      // Fetch and display the text file
      fetch("data.txt")
        .then(response => response.text())
        .then(text => {
          document.getElementById("fileContent").textContent = text;
        })
        .catch(err => {
          document.getElementById("fileContent").textContent = "Error loading file.";
          console.error(err);
        });

    }, 500); // match fade duration
  }, 3000); // loader delay
});


