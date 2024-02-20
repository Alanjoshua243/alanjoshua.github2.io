// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Wait for the video to finish playing
    document.getElementById("video").addEventListener("ended", function() {
        // Hide the video
        document.getElementById("video").style.display = "none";
        // Show the main content
        document.getElementById("main-content").style.display = "block";
    });
});

// Function to toggle the visibility of the navigation menu
function openMenu() {
    // Select the <nav> element in the document
    const nav = document.querySelector('nav');
    
    // Toggle the 'open' class on the <nav> element
    nav.classList.toggle('open');
}