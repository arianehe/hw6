window.onload = function () {
    var newTable = document.createElement("table")
    newTable.setAttribute("style", "text-align:center;")
    newTable.setAttribute("border", 1)

    for (var i = 1; i <= 12; i++) {
        var tempTR = document.createElement("tr")
        var tempTD = document.createElement("td")
        tempTD.innerText = i.toString()
        if (i % 4 == 0) {
            tempTD.setAttribute("style", "background-color:lightskyblue;")
        }
        tempTR.appendChild(tempTD)
        newTable.appendChild(tempTR)

    }

    document.getElementById("output").appendChild(newTable)

}
