const inputNode = document.querySelector(".js-input");
const outputNode = document.querySelector(".js-output");
const buttonNode = document.querySelector(".js-button");

buttonNode.addEventListener("click", function () {
  const answer = inputNode.value;
  let output = "Ответ правильный";
  if (answer !== "2023") {
    output = "Год неверный";
  }
  outputNode.innerHTML = output;
});
