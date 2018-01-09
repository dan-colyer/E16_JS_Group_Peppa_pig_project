const AjaxRequest = require('../services/ajax_request.js');
const requestMamaApi = new AjaxRequest("http://localhost:3000/api/mamapig");

const MamaPigView = function() {
  this.name;
  this.species;
  this.ppImage;
  this.realImage;
  this.sound;
}


MamaPigView.prototype.render = function() {

    requestMamaApi.get(function(animal) {
      this.name = animal.name;
      this.species = animal.type;
      this.ppImage = animal.ppImage;
      this.realImage = animal.realImage;
      this.sound = animal.sound;


      const renderDiv = document.querySelector('#render_area');
      renderDiv.innerHTML = "";

      const nameAndSpecies = addNameAndSpeciesToDiv(renderDiv, this.name, this.species);
      const peppaImage = addImageToDiv(renderDiv, 'ppImage', __dirname + this.ppImage);
      const realImage = addImageToDiv(renderDiv,'realImage', __dirname + this.realImage);
      const animalSound = createSoundElement(this.sound);
      const soundButton = addButtonToDiv(renderDiv, 'soundButton', animalSound);


    }.bind(this));

}

let addNameAndSpeciesToDiv = function(div, name, species) {
  const thisName = document.createElement('h2');
  thisName.innerText = name;
  const thisSpecies = document.createElement('h4');
  thisSpecies.innerText = species;
  div.appendChild(thisName);
  div.appendChild(thisSpecies);
}

let addDivToAnotherDiv = function(anotherDiv, id) {
  const div = document.createElement('div');
  div.id = id;
  anotherDiv.appendChild(div);
  return div;
};

let addImageToDiv = function(div, id, src) {
  const img = document.createElement('img');
  img.id = id;
  img.src = src;
  div.appendChild(img);
  return img;
}

let addButtonToDiv = function(div, id, sound) {
  const button = document.createElement('button');
  button.id = id;
  button.innerText = 'Listen'
  div.appendChild(button);
  button.addEventListener('click', function() {
    sound.play();
  })
  return button;
}

let createSoundElement = function(src) {
  const sound = document.createElement('audio');
  sound.id = 'sound';
  sound.src = src;
  return sound;
}

// let onSoundButtonClicked = {
//   this.animalSound.play();
// }

module.exports = MamaPigView;
