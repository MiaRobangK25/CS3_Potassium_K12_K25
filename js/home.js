function settingActivePage() {
    const links = document.querySelectorAll(".navbar a");
    const page = window.location.pathname.split("/").pop();

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");

        if (
            links[i].getAttribute("href") === page ||
            (page === "" && links[i].getAttribute("href") === "index.html")
        ) {
            links[i].classList.add("active");
        }
    }
}

window.onload = settingActivePage;

// dealling with... active page things... again..


// CRUD stuff I didnt want to do but did anytwyah
const COMMENT_KEY = "motionNotionComments";

document.addEventListener("DOMContentLoaded", renderComments);

function getComments() {
    return JSON.parse(localStorage.getItem(COMMENT_KEY)) || [];
}

function saveComments(comments) {
    localStorage.setItem(COMMENT_KEY, JSON.stringify(comments));
}

function addComment() {
    const input = document.getElementById("commentInput");
    const text = input.value.trim();

    if (!text) return;

    const comments = getComments();

    comments.push({
        text: text,
        time: new Date().toLocaleString()
    });

    saveComments(comments);
    input.value = "";
    renderComments();
}


function deleteComment(index) {
    const comments = getComments();
    comments.splice(index, 1);
    saveComments(comments);
    renderComments();
}

function renderComments() {
    const container = document.getElementById("commentList");
    const comments = getComments();

    container.innerHTML = "";

    if (comments.length === 0) {
        container.innerHTML = "<p>No comments yet.</p>";
        return;
    }

    comments.forEach((c, index) => {
        const div = document.createElement("div");
        div.className = "comment";

        div.innerHTML = `
            <p>${c.text}</p>
            <small>${c.time}</small>
            <br>
            <button onclick="deleteComment(${index})">Delete</button>
            <hr>
        `;

        
        container.appendChild(div);
    });
}