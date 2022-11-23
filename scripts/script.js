const clickMeButton = document.querySelector(".click-me")
// console.log(clickMeButton)

const clickHandler = () => {
    alert("You clicked me!")
}

clickMeButton.addEventListener("click", clickHandler)