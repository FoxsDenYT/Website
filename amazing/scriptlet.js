        if(localStorage.getItem("allowed") != "nope"){
            alert("Seeya looser! Hah!")
            localStorage.allowed = "nope"
            localStorage.key = "User tried to access lol."
            window.location.href = "about:blank"
        }
        if(window.localStorage.getItem("key") == "112342"){
            window.location.href = "./invidious.html"
        }
        else{
            alert("Seeya looser! Hah!")
            localStorage.allowed = "nope"
            localStorage.key = "User tried to access lol."
            window.location.href = "about:blank"
        }
