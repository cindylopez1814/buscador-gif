window.onload = () => {
  const txt = document.getElementById('gif-text').value;
  const divElemento = document.getElementById('elementos');
  const btn = document.getElementById('buscar-gif');
  btn.addEventListener('click', (data) => {
  let drawGif = (data) => {
    let gif = '';
    let url = '';
    data.forEach(element => {
      gif = element.images.downsized_large.url;
      url = element.bitly_gif_url;
      divElemento.innerHTML += armarTemplate(gif,url);
    });
    let armarTemplate = (gif, url) => {
      let t = "<div class = 'elemento'><img src='" + gif + " ' /><a href= ' " + url + "'> Ver más</a></div>"
    return t;
    }
  } 
  let ajaxGif = (gif) => {
    fetch (`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=rUIEQAQzTIJVy0kE5Q4cp8xx3ZHyuw6X`)
      .then ((response) => {
      if (response === ok) {
        return response.json ();
      } else {
        throw new Error("mala respuesta");
      }
    }) .then((gifJson) => {
      gifJson.forEach((jsonElement) => {
        jsonElement.forEach((gifi) => {
            return gifJson
        });
    })
    })
    .catch((error) => {
      divElemento.innerHTML = ("Lo siento no se a encontrado");
    });  
  }
});
}