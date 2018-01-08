const AjaxRequest = require('../services/ajax_request.js');
const requestMamaApi = new AjaxRequest("http://localhost:3000/api/mamapig");

const MamaPigView = function() {
  this.name;
  this.type;
  this.ppImage;
  this.realImage;
  this.sound;
}

MamaPigView.prototype.render = function() {

    requestMamaApi.get(function(animal) {
      this.name = animal.name;
      this.type = animal.type;
      this.image = animal.ppImage;
      this.realImage = animal.realImage;
      this.sound = animal.sound;
      
      console.log(animal);
      console.log(this.image);
      const renderDiv = document.querySelector('#render_area');
      renderDiv.innerHTML = "";
      const ppImageDiv = document.createElement('div');
      renderDiv.appendChild(ppImageDiv);
      const ppImage = document.createElement('img');
      ppImage.src = __dirname + this.image;
      ppImageDiv.appendChild(ppImage);
      // const ul = document.querySelector('#quotes');
      //   const li = document.createElement('li');
      //   const text = document.createElement('p');
      //   text.innerText = `${quote.name}: "${quote.quote}"`;
      //   li.appendChild(text);
      //   ul.appendChild(li);
    }.bind(this));

}

module.exports = MamaPigView;
