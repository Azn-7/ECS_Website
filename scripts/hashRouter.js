//uses # to do navigation
const routes = {
    404: {
        template: "404.html",
        title: "404",
        description: "Page not found"
    },
    home: {
        template: "home.html",
        title: "ECS Home",
        description: "Welcome to the ECS Club homepage!"
    },
    projects: {
        template: "projects.html",
        title: "ECS Projects",
        description: ""
    },
    officers: {
        template: "officers.html",
        title: "ECS Club Members",
        description: "Meet our team!"
    },
    calendar: {
        template: "calendar.html",
        title: "ECS Club Calendar",
        description: ""
    }
    
}

const locationHandler = async () => {
    var location = window.location.hash.replace("#","");
    if (location.length === 0) {
        location ="home";
    }
    const route = routes[location] || routes[404];
    navigate(route.template);
}

//navigates to a page by changing updating "content" to the page's contents
function navigate(page, caller) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        //4 idicates a success
        if (this.readyState == 4) {
            if (this.status == 200) { 
                //
                document.getElementById("content").innerHTML = this.responseText; 

                //includeHTML(null, document.getElementById("content"));
            }
            if (this.status == 404) { document.getElementById("content").innerHTML = "Page not found."; }
        }
    }
    xhttp.open("GET", page, true);
    xhttp.send();
    
    var navlist = document.getElementsByClassName("navbar-item");
    console.log("ok",navlist.length);
    for(var i=0; i<navlist.length; i++) {
        console.log("workpls",navlist[i].getAttribute('onclick')=="navigate(\'"+page+"\')");
        if(navlist[i].getAttribute('onclick')=="navigate(\'"+page+"\')"){
            navlist[i].classList.add('active');
        }
        else{
            console.log("NO");
        }
    }   
}
