const AjaxRequest = require('../services/ajax_request.js');
const requestMamaApi = new AjaxRequest("http://localhost:3000/api/mamapig");

const MamaPigView = function() {
  this.image;
}

MamaPigView.prototype.render = function() {

    requestMamaApi.get(function(animal) {
      this.image = animal.ppImage;
      console.log(animal);
      console.log(animal.ppImage);
      // const ul = document.querySelector('#quotes');
      //   const li = document.createElement('li');
      //   const text = document.createElement('p');
      //   text.innerText = `${quote.name}: "${quote.quote}"`;
      //   li.appendChild(text);
      //   ul.appendChild(li);
    });

}

module.exports = MamaPigView;
