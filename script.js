function startFunction(){
    //Animated gifs
    let buttonClass = document.getElementsByClassName("animatedButton");

    for(let i = 0; i < buttonClass.length; i++){
        let currentButton = buttonClass.item(i);

        currentButton.addEventListener("mouseenter", function (action){
            const srcAtt = currentButton.getAttribute("src");
            let result = srcAtt.slice(0, srcAtt.length - 3);
            currentButton.setAttribute("src", result+"gif")
        }, false)

        currentButton.addEventListener("mouseleave", function (action){
            const srcAtt = currentButton.getAttribute("src");
            let result = srcAtt.slice(0, srcAtt.length - 3);
            currentButton.setAttribute("src", result+"png")
        }, false)
    }
}

function selectTab(tab){
    switch(tab){
        case 1:
            document.getElementById("gamesContent").style.display = "inline";
            document.getElementById("musicContent").style.display = "none";
            document.getElementById("otherContent").style.display = "none";
            document.getElementById("homeContent").style.display = "none";
            break;
        case 2:
            document.getElementById("gamesContent").style.display = "none";
            document.getElementById("musicContent").style.display = "inline";
            document.getElementById("otherContent").style.display = "none";
            document.getElementById("homeContent").style.display = "none";
            break;
        case 3:
            document.getElementById("gamesContent").style.display = "none";
            document.getElementById("musicContent").style.display = "none";
            document.getElementById("otherContent").style.display = "inline";
            document.getElementById("homeContent").style.display = "none";
            break;
        case 4:
            document.getElementById("gamesContent").style.display = "none";
            document.getElementById("musicContent").style.display = "none";
            document.getElementById("otherContent").style.display = "none";
            document.getElementById("homeContent").style.display = "inline";
            break;
    }
}