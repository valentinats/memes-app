import { View } from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);

  controller.getAndRenderMemes();

  const memesList = document.querySelector(".memes__list");
  memesList.addEventListener(
    "change",
    controller.handleMemeSelection.bind(controller)
  );

  const upperTextElement = document.querySelector(".upper__text");
  upperTextElement.addEventListener(
    "input",
    controller.handleUpperTextChange.bind(controller)
  );

  const bottomTextElement = document.querySelector(".bottom__text");
  bottomTextElement.addEventListener(
    "input",
    controller.handleBottomTextChange.bind(controller)
  );
});