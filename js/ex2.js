window.onload = function () {
    const displayText400 = () => {
        toDisplay = document.getElementsByClassName("400level")
        for (var i = 0; i < toDisplay.length; i++) {
            console.log(toDisplay[i].innerHTML)
        }

    }

    displayText400();

}
