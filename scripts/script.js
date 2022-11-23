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

const updateImage = (e) => {
  // console.log(e.target.textContent)
  const image = document.querySelector("#shoppingCart");
  image.setAttribute("src", "images/shoppingcart.png");
  image.setAttribute("width", "100");
  image.setAttribute("height", "100");
};
clickMeButton.addEventListener("click", updateImage);

const buttonContainer = document.querySelector(".button-container");
const changeBGGreen = (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.classList.add("green");
  }
};
buttonContainer.addEventListener("mouseover", changeBGGreen);

const changeTextColor = (event) => {
  event.target.style.color = event.target.textContent;
};
buttonContainer.addEventListener("click", changeTextColor);
