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