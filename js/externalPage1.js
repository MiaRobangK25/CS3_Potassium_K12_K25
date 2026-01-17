function settingActivePage() 
{
    var links = document.querySelectorAll(".navbar a");
    var page = window.location.pathname.split("/").pop();

    for (var i = 0; i < links.length; i++) 
    {
        links[i].classList.remove("active");

        if ((links[i].getAttribute("href") === page) || 
            (page === "" && links[i].getAttribute("href") === "Q2WebsiteMainframe.html")) 
        {
            links[i].classList.add("active");
        }
    }
}

window.onload = function() 
{
    settingActivePage();

    var headings = document.getElementsByClassName('toggle');

    for (var i = 0; i < headings.length; i++) 
    {
        headings[i].addEventListener('click', function() 
        {
            var content = this.nextElementSibling;

            // Toggle the 'show' class instead of display
            content.classList.toggle('show');
        });
    }
};
