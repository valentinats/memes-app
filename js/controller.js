class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  getAndRenderMemes() {
    API.fetchMemes()
      .then((memes) => {
        this.model.setMemes(memes);
        this.view.renderMemesList(memes);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleUpperTextChange() {
    const upperText = this.view.getUpperText();
    this.view.displayUpperText(upperText);
    const selectedMemeUrl = document.querySelector(".memes__list").value;
    this.view.renderPreviewImage(selectedMemeUrl);
  }

  handleBottomTextChange() {
    const bottomText = this.view.getBottomText();
    this.view.displayBottomText(bottomText);
    const selectedMemeUrl = document.querySelector(".memes__list").value;
    this.view.renderPreviewImage(selectedMemeUrl);
  }

  handleMemeSelection(event) {
    const selectedOption = event.target.selectedOptions[0];
    const selectedMemeUrl = selectedOption.dataset.url;
    this.view.displayBottomText(this.view.getBottomText());
    this.view.renderPreviewImage(selectedMemeUrl);
  }
}