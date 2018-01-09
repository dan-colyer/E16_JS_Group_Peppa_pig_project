const AjaxRequest = require('../services/ajax_request.js');
const requestMamaApi = new AjaxRequest("http://localhost:3000/api/mamapig");

const MamaPigView = function() {
  this.name;
  this.species;
  this.ppImage;
  this.realImage;
  this.sound;
  this.button;
}


MamaPigView.prototype.render = function() {

    requestMamaApi.get(function(animal) {
      this.name = animal.name;
      this.species = animal.type;
      this.ppImage = animal.ppImage;
      this.realImage = animal.realImage;
      this.sound = animal.sound;
      this.button = animal.button;


      const renderDiv = document.querySelector('#render_area');
      renderDiv.innerHTML = "";

      const nameDiv = addDivToAnotherDiv(renderDiv, 'nameDiv');
      const typeDiv = addDivToAnotherDiv(renderDiv, 'typeDiv');
      const ppImageDiv = addDivToAnotherDiv(renderDiv, 'ppImageDiv');
      const realImageDiv = addDivToAnotherDiv(renderDiv, 'realImageDiv');
      const buttonDiv = addDivToAnotherDiv(renderDiv, 'buttonDiv');

      const animalName = addNameToDiv(nameDiv, 'animalName', this.name);
      const animalType = addSpeciesToDiv(typeDiv, 'animalType', this.species);
      const peppaImage = addImageToDiv(ppImageDiv, 'ppImage', __dirname + this.ppImage);
      const realImage = addImageToDiv(realImageDiv,'realImage', __dirname + this.realImage);
      const animalSound = createSoundElement(this.sound);
      const soundButton = addSoundButtonToDiv(buttonDiv, 'soundButton', animalSound, this.button);


    }.bind(this));

}

let addNameToDiv = function(div, id, name) {
  const thisName = document.createElement('h2');
  thisName.innerText = name;
  thisName.id = 'animalName';
  div.appendChild(thisName);
}

let addSpeciesToDiv = function(div, id, species) {
  const thisSpecies = document.createElement('h3');
  thisSpecies.innerText = species;
  thisSpecies.id = 'animalType';
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

let addSoundButtonToDiv = function(div, id, sound, buttonImg) {
  const button = document.createElement('input');
  button.id = id;
  button.type = 'image';
  button.src = buttonImg;
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
