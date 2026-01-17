// Page 3: Speaker Roles Toggle.. as it didn't work (asked for help here)
document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            let content = this.nextElementSibling;

            if (content && content.classList.contains("toggle-content")) {
                content.classList.toggle("show"); 
            }
        });
    });
});
