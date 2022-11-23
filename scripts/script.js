const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton)
const clickHandler = () => {
  alert("You clicked me!");
  // clickMeButton.removeEventListener("click", clickHandler)
};
clickMeButton.addEventListener("click", clickHandler, { once: true });

const changeBGPink = () => {
  // document.body.style.backgroundColor = "pink"
  document.body.classList.toggle("pink");
};
clickMeButton.addEventListener("click", changeBGPink);

const changeText = () => {
  if (clickMeButton.textContent === "Click Me!") {
    clickMeButton.textContent = "clicked!";
  } else if (clickMeButton.textContent === "clicked!") {
    clickMeButton.textContent = "Click Me!";
  }
};
clickMeButton.addEventListener("click", changeText);
