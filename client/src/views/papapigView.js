const AjaxRequest = require('../services/ajax_request.js');
const requestPaPaAPI = new AjaxRequest("http://localhost:3000/api/papapig");
const MapWrapper = require('../modules/googlemap.js');

const PapapigView = function() {

}

PapapigView.prototype.render = function() {

    requestPaPaAPI.get(function(city) {
      console.log(city);

      const mainRenderDiv = document.getElementById('#render_area');
      const divCityName = document.createElement('h3')
      const divMap = document.createElement('div');
      const divCityVideo = document.createElement('div');

      mainRenderDiv.appendChild(divCityName);
      mainRenderDiv.appendChild(divMap);
      mainRenderDiv.appendChild(divCityVideo);

      // const ul = document.querySelector('#quotes');
      //   const li = document.createElement('li');
      //   const text = document.createElement('p');
      //   text.innerText = `${quote.name}: "${quote.quote}"`;
      //   li.appendChild(text);
      //   ul.appendChild(li);
    });

}

module.exports = PapapigView;
