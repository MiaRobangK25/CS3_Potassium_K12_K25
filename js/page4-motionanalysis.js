// Makiing toggle buttons work.. pls
document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const content = toggle.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
