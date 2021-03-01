window.onload = function () {

    const words = [{
        term: "Procrastination",
        definition: "Avoidance of doing a task that needs to be accomplished"
    }, {
        term: "Tautology",
        definition: "logical argument constructed in such a way that it is logically irrefutable"
    }, {
        term: "Oxymoron",
        definition: "figure of speech that juxtaposes elements that appear to be contradictory"
    }];

    const dictionary = document.createElement("dl");

    words.forEach(word => {
        const dt = document.createElement("dt")
        const strong = document.createElement("strong");
        strong.textContent = word.term;
        const dd = document.createElement("dd");
        dd.textContent = word.definition;

        dt.appendChild(strong);
        dictionary.appendChild(dt);
        dictionary.appendChild(dd);
    })

    document.getElementById("content").appendChild(dictionary)
}