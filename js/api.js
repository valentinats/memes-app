class API {
  static fetchMemes() {
    return fetch("https://api.imgflip.com/get_memes")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((response) => {
        return response.data.memes;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
