const AjaxRequest = require('../services/ajax_request.js');
const requestMadamGazelleAPI = new AjaxRequest("http://localhost:3000/api/madamGazelle");

const MadamGazelleView = function() {

}

MadamGazelleView.prototype.render = function(music) {

    requestMadamGazelleAPI.get(function(allMusic) {
      console.log(allMusic);
      // const ul = document.querySelector('#quotes');
      //   const li = document.createElement('li');
      //   const text = document.createElement('p');
      //   text.innerText = `${quote.name}: "${quote.quote}"`;
      //   li.appendChild(text);
      //   ul.appendChild(li);
    });

}

module.exports = MadamGazelleView;
