// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Find the button element by its ID
    const button = document.getElementById("colorChangeBtn");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Change the text color when the button is clicked
        document.body.style.color = "#4CAF50";  // Green color
    });
});
