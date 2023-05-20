el = document.createElement("a");el.href = "https://forms.office.com/r/xp9hAGSDLL";el.innerText = "Got an issue / Suggestion?";el.style.zIndex = 9999;el.style.background = "red";document.body.appendChild(el)
if(window.localStorage.allowed == "nope"){
            alert("Seeya looser. Hah!")
            localStorage.allowed = "nope"
            localStorage.key = "User tried to access lol."
            window.location.href = "about:blank"
        }
        if(window.localStorage.getItem("key") == "112342"){
                if(!window.location.href.endsWith("invidious.html")){
                        window.location.href = "./invidious.html"
                }
            
        }
        else{
            alert("Seeya looser! Hah!")
            localStorage.allowed = "nope"
            localStorage.key = "User tried to access lol."
            window.location.href = "about:blank"
        }
