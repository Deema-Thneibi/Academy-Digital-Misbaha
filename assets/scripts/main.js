const countButtons = document.querySelectorAll(".count");
const resetButtons = document.querySelectorAll(".reset");

countButtons.forEach((countButton) => {
  countButton.addEventListener("click", () => {
    const screenCount = countButton
      .closest("div")
      .querySelector(".screen-count");
    let count = parseInt(screenCount.textContent);
    count++;
    screenCount.textContent = count;
  });
});

resetButtons.forEach((resetButton) => {
  resetButton.addEventListener("click", () => {
    const screenCount = resetButton
      .closest("div")
      .querySelector(".screen-count");
    screenCount.textContent = 0;
  });
});
