// Deel 1 - Elementen toevoegen aan de DOM
let btns = document.getElementsByClassName('big-five-button')
let spotted = document.getElementById("spotted-animals-list")
Array.from(btns).forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let parent = document.getElementById("mainDiv").getElementsByTagName("ul")[0];
        let child = parent.getElementsByTagName("li")[0];
        let remove1 = parent.removeChild(child);
        spotted.appendChild(remove1)
        // console.log(e.target)
        // console.log(e)
    })
})


// Deel 2 - 1 element verwijderen uit de DOM
let removeFirst = document.getElementById('remove-first-item-button')
removeFirst.addEventListener('click', function (e) {
    let parent = document.getElementById("mainDiv").getElementsByTagName("ul")[0];
    let child = parent.getElementsByTagName("li")[0];
    let remove1 = parent.removeChild(child);
    spotted.appendChild(remove1)
    // console.log(e.target)
    // console.log(e)
})


// Deel 3 - Meerdere element verwijderen uit de DOM
let removeAll = document.getElementById('remove-all-button')
let notSpottedYet = document.getElementsByClassName('big-five-list')
let parent2 = document.getElementById("mainDiv").getElementsByTagName("ul")[1];
let child2 = Array.from(parent2.querySelectorAll("li"));


removeAll.addEventListener('click', function () {
    for (i = 0; i < 6; i++) {
        child2[i].remove()

    }
})

