const AjaxRequest = require('../services/ajax_request.js');
const requestPaPaAPI = new AjaxRequest("http://localhost:3000/api/papapig");

const PapapigView = function() {

}

PapapigView.prototype.render = function(city) {
  
    requestPaPaAPI.get(function(allCities) {
      console.log(allCities);
      // const ul = document.querySelector('#quotes');
      //   const li = document.createElement('li');
      //   const text = document.createElement('p');
      //   text.innerText = `${quote.name}: "${quote.quote}"`;
      //   li.appendChild(text);
      //   ul.appendChild(li);
    });

}

module.exports = PapapigView;
