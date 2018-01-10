const AjaxRequest = require('../services/ajax_request.js');
const requestAbout = new AjaxRequest("http://localhost:3000/about");

const aboutView = function() {
  this.name;
  this.image;
  this.profile;
  }


aboutView.prototype.render = function() {

    requestAbout.get(function(larder) {
      this.name = larder.name;
      this.image = larder.image;
      this.profile = larder.profile;

      const renderDiv = document.querySelector('#render_area');
      renderDiv.innerHTML = "";

      const larderNameDiv = addDivToAnotherDiv(renderDiv, 'larderNameDiv');
      const larderImageDiv = addDivToAnotherDiv(renderDiv, 'larderImageDiv');
      const larderProfileDiv = addDivToAnotherDiv(renderDiv, 'larderProfileDiv');


      const larderName = addNameToDiv(larderNameDiv, 'larderName', this.name);
      const larderImage = addImageToDiv(larderImageDiv, 'larderImage', this.image);
      const larderProfile = addProfileToDiv(larderProfileDiv, 'larderProfile', this.profile);
    }.bind(this));

}

let addDivToAnotherDiv = function(anotherDiv, id) {
  const div = document.createElement('div');
  div.id = id;
  anotherDiv.appendChild(div);
  return div;
};


let addNameToDiv = function(div, id, name) {
  const thisName = document.createElement('h1');
  thisName.innerText = name;
  thisName.id = id;
  div.appendChild(thisName);
}


let addImageToDiv = function(div, id, src) {
  const img = document.createElement('img');
  img.id = id;
  img.src = src;
  div.appendChild(img);
  return img;
}

let addProfileToDiv = function(div, id, profile) {
  const thisProfile = document.createElement('p');
  thisProfile.id = id;
  thisProfile.innerText = profile;
  div.appendChild(thisProfile);
  return thisProfile;
}





module.exports = aboutView;
