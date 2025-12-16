    // External JS file for page identification (Pages 3-5)
      
      function settingActivePage()
        {
            var links = document.querySelectorAll(".navbar a");
            var page = window.location.pathname.split("/").pop();
            
            for (i=0; i<links.length; i++)
            {
                links[i].classList.remove("active"); 
                
                if ((links[i].getAttribute("href") === page) || (page === "" && links[i].getAttribute("href") === "Q2WebsiteMainframe.html"))
                {
                    links[i].classList.add("active"); 
                }
            }
        }

        window.onload = settingActivePage(); 

        var headings = document.getElementsByClassName('toggle');

        for (var i = 0; i < headings.length; i++) 
        {
            headings[i].onclick = function() 
            {
                var content = this.nextElementSibling;
            
                if (content.style.display === 'none') 
                {
                    content.style.display = 'block';
                } 
                else 
                {
                    content.style.display = 'none';
                }
            }
        }