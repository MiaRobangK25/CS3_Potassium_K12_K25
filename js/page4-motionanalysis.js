// Page 4: Motion Analysis PLS toggling paortion
document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            const content = this.nextElementSibling; 
            if (content && content.classList.contains("toggle-content")) {
                content.classList.toggle("show"); 
            }
        });
    });
});

let currentCard = 0;
const cards = document.querySelectorAll(".flashcard");

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove("active");
        if (i === index) card.classList.add("active");
    });
}

function nextCard() {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
}

function prevCard() {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    showCard(currentCard);
}