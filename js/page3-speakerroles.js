document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            const content = this.nextElementSibling;
            if (content && content.classList.contains("toggle-content")) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null; // close
                } else {
                    content.style.maxHeight = content.scrollHeight + "px"; // open
                }
            }
        });
    });
});
