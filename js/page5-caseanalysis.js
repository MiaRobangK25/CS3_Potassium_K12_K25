document.addEventListener("DOMContentLoaded", function() {

    let currentQuestion = 0;
    let currentSet = [];
    let argumentList = [];

    const questions = {
        life: [
            {
                question: "What does the narrative 'life goes on' mean?",
                options: [
                    { text: "It's where people accept things and move forward", correct: true },
                    { text: "Everything is meaningless", correct: false },
                    { text: "You should ignore emotions completely", correct: false },
                    { text: "It's about going with the flow despite setbacks", correct: true }
                ],
                argument: "The narrative promotes passive acceptance instead of deeper engagement."
            },
            {
                question: "How does this narrative help people?",
                options: [
                    { text: "Helps people accept reality instead of taking things personally", correct: true },
                    { text: "Gives people hope for future happiness", correct: true },
                    { text: "Eliminates all emotional struggles", correct: false },
                    { text: "Makes every situation positive", correct: false }
                ],
                argument: "Although it provides comfort, it can dismiss deeper emotional processing."
            }
        ],

        body: [
            {
                question: "What does advocating for weight loss under health mean?",
                options: [
                    { text: "Public figures encourage weight loss as something good", correct: true },
                    { text: "They force people to lose weight", correct: false },
                    { text: "They frame it as beneficial for insecure audiences", correct: true },
                    { text: "They ignore all health concerns", correct: false }
                ],
                argument: "Framing weight loss as health can still reinforce harmful standards."
            },
            {
                question: "Are these body-positive figures necessary?",
                options: [
                    { text: "Yes, they can motivate and support audiences", correct: true },
                    { text: "No, they have zero influence", correct: false },
                    { text: "They provide a form of support system", correct: true },
                    { text: "They always manipulate people", correct: false }
                ],
                argument: "Their influence can both support and complicate public messaging."
            },
            {
                question: "What does the world look like without them?",
                options: [
                    { text: "Toxic communities may dominate weight-loss spaces", correct: true },
                    { text: "Everything becomes healthier automatically", correct: false },
                    { text: "Extreme dieting advice may increase", correct: true },
                    { text: "Nothing changes at all", correct: false }
                ],
                argument: "Without them, more harmful and extreme narratives may take over."
            }
        ]
    };

    window.startOpposition = function(type, containerId) {
        currentSet = questions[type];
        currentQuestion = 0;
        argumentList = [];

        const container = document.getElementById(containerId);
        const quizBox = container.querySelector(".quizBox");
        const argumentBox = container.querySelector(".argumentBox");
        const argumentListEl = container.querySelector("ul");

        quizBox.style.display = "block";
        argumentBox.style.display = "block";

        quizBox.innerHTML = `<h3 class="question"></h3><div class="answers"></div>`;
        argumentListEl.innerHTML = "";

        showQuestion(container);
    };

    function showQuestion(container) {
        const q = currentSet[currentQuestion];

        const questionEl = container.querySelector(".question");
        const answersDiv = container.querySelector(".answers");

        questionEl.textContent = q.question;
        answersDiv.innerHTML = "";

        q.options.forEach((opt, index) => {
            const label = document.createElement("label");
            const checkbox = document.createElement("input");

            checkbox.type = "checkbox";
            checkbox.addEventListener("change", () => evaluateAnswer(container));

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" " + opt.text));

            answersDiv.appendChild(label);
        });

        const feedback = document.createElement("p");
        feedback.className = "feedback";
        answersDiv.appendChild(feedback);
    }

    function evaluateAnswer(container) {
        const q = currentSet[currentQuestion];
        const checkboxes = container.querySelectorAll("input");
        const feedback = container.querySelector(".feedback");

        let selected = [];
        checkboxes.forEach((cb, i) => {
            if (cb.checked) selected.push(i);
        });

        let correctIndexes = q.options
            .map((opt, i) => opt.correct ? i : null)
            .filter(i => i !== null);

        let hasWrong = selected.some(i => !correctIndexes.includes(i));
        let missing = correctIndexes.some(i => !selected.includes(i));

        if (!hasWrong && !missing) {
            feedback.textContent = "✅✅ Correct!";
            feedback.style.color = "lightgreen";

            addArgument(container, q.argument);

            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < currentSet.length) {
                    showQuestion(container);
                } else {
                    container.querySelector(".question").textContent = "Argument Complete!";
                    container.querySelector(".answers").innerHTML = "";
                }
            }, 700);

        } else if (hasWrong) {
            feedback.textContent = "❌❌ One of your choices is incorrect.";
            feedback.style.color = "salmon";
        } else {
            feedback.textContent = "⚠️ You're missing some correct answers.";
            feedback.style.color = "orange";
        }
    }

    function addArgument(container, text) {
        const ul = container.querySelector("ul");

        const li = document.createElement("li");
        li.textContent = text;

        ul.appendChild(li);
    }

});