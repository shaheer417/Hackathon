// Function to toggle visibility of sections
function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle("hide");
    }
}
// This will compile to the `script.js` that is linked in the HTML file.
