const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton)

const clickHandler = () => {
  alert("You clicked me!");
  // clickMeButton.removeEventListener("click", clickHandler)
};

clickMeButton.addEventListener("click", clickHandler, { once: true });

const changeBGPink = () => {
  // document.body.style.backgroundColor = "pink"
  document.body.classList.add("pink");
};

clickMeButton.addEventListener("click", changeBGPink);
