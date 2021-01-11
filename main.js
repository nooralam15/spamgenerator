//spam main js 

//global variabe 
document.addEventListener("click", spamSentence)
let containerEl = document.getElementById("container")
let countEl = document.getElementById("count")

let spamArray = []
for (let i = 0; i < 6000; i ++) {
    spamArray.push("Good for you :)")
}
console.log(spamArray)

function spamSentence() {
    let count = 0
    let divStr = ""
    for (i = 0; i < spamArray.length; i++) {
        divStr += `<div>${spamArray[i]}</div>`
        count ++
    }
    containerEl.innerHTML = divStr
    countEl.innerHTML = `The total number of times I have written this is ${count} times`

}

