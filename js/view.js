export class View {
  renderMemesList(memes) {
    const memesList = document.querySelector(".memes__list");

    let memesHTML = "";
    memes.forEach((meme) => {
      memesHTML += `<option value="${meme.url}" data-url="${meme.url}">${meme.name}</option>`;
    });

    memesList.innerHTML = memesHTML;
  }

  //метод для отображения текста сверху на картинке.
  displayUpperText(text) {
    const upperTextElement = document.querySelector(".upper__text");
    upperTextElement.value = text;
  }

  //метод для отображения текста снизу на картинке.
  displayBottomText(text) {
    const bottomTextElement = document.querySelector(".bottom__text");
    bottomTextElement.value = text;
  }

  getUpperText() {
    const upperTextElement = document.querySelector(".upper__text");
    return upperTextElement.value;
  }

  getBottomText() {
    const bottomTextElement = document.querySelector(".bottom__text");
    return bottomTextElement.value;
  }

  renderPreviewImage(url) {
    const previewImage = document.querySelector(".meme__image");
    const image = new Image();

    image.onload = () => {
      previewImage.src = url;

      const upperText = this.getUpperText();
      const bottomText = this.getBottomText();
      const newImage = this.renderTextOnImage(image, upperText, bottomText);
      previewImage.src = newImage.src;
    };

    image.crossOrigin = "anonymous"; //загружаем изображение с другого домена с помощью анонимного доступа и избегаем ошибки "Tainted canvases may not be exported".
    image.src = url;
  }

  renderTextOnImage(image, upperText, bottomText) {
    //код для отображения текста на изображении.
    //!тег <canvas> добавляет растровый холст на страницу, этот холст можно использовать для отрисовки 2D- или 3D-графики, анимаций, видео.
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    //устанавливаем размеры canvas равными размерам изображения.
    canvas.width = image.width;
    canvas.height = image.height;

    //рисуем изображение на canvas.
    context.drawImage(image, 0, 0);

    //устанавливаем стили для текста.
    context.font = "bold 30px Arial";
    context.fillStyle = "white";
    context.strokeStyle = "black";
    context.lineWidth = 2;

    //отображаем верхний текст.
    context.textAlign = "center";
    context.fillText(upperText, canvas.width / 2, 50);
    context.strokeText(upperText, canvas.width / 2, 50);

    //отображаем нижний текст.
    context.textAlign = "center";
    context.fillText(bottomText, canvas.width / 2, canvas.height - 50);
    context.strokeText(bottomText, canvas.width / 2, canvas.height - 50);

    //заменяем src изображения на src полученного изображения с текстом.
    const newImage = new Image();
    newImage.src = canvas.toDataURL();

    return newImage;
  }
}