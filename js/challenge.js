// code for timer increments every second
const tickTock = document.querySelector("#counter")
let intervalId = setInterval(updateTickTock, 1000)
let increment = 0
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const allButtons = [minus, plus, heart]



function updateTickTock(){
    increment += 1
    return tickTock.innerHTML = increment
}

// code for pause button

const pauseButton = document.querySelector("#pause")

pauseButton.addEventListener("click", stopEverything)

function stopEverything(){
    if(pauseButton.innerHTML === "pause"){
        clearInterval(intervalId)
        pauseButton.innerHTML = "resume"
        for(const singleButton of allButtons) {
            singleButton.setAttribute("disabled", "")
        }
    } else {
        pauseButton.innerHTML = "pause"
        intervalId = setInterval(updateTickTock, 1000)
        for(const singleButton of allButtons) {
            singleButton.removeAttribute("disabled")
        }
    }}

// code for incrementing the timer via plus button

plus.addEventListener("click", updateTickTock)

// code for decrementing the timer via plus button

minus.addEventListener("click", minusOneToTimer)

function minusOneToTimer(){
    increment -= 1
    return tickTock.innerHTML = increment
}

// code for licking the number displayed
let numberOfLikes = 0

heart.addEventListener("click", likeCurrentNumber)

let postingLikes = document.getElementsByTagName("ul")[0]

function likeCurrentNumber(){
    let newElement = document.getElementById(`${increment}`)
    if(newElement === null){
    let list = document.createElement("li")
    list.setAttribute("Id", `${increment}`)
    numberOfLikes = 1
    postingLikes.appendChild(list)
    list.innerHTML = `you liked ${increment}, ${numberOfLikes} time(s)! `}
    else {
        numberOfLikes += 1
        newElement.innerHTML = `you liked ${increment}, ${numberOfLikes} time(s)!`
    }
}

// code for adding comments

const formNode = document.querySelector("#comment-form")

formNode.addEventListener("submit", (e) => {
    e.preventDefault()
    handleToDo(e.target[0].value)
})

function handleToDo(e){
    commentListContainer = document.querySelector("#list")
    let newComment = document.createElement("p")
    newComment.innerHTML = e
    commentListContainer.appendChild(newComment)
}