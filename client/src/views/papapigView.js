const AjaxRequest = require('../services/ajax_request.js');
const requestPaPaAPI = new AjaxRequest("http://localhost:3000/api/papapig");
const MapWrapper = require('../modules/googlemap.js');

const PapapigView = function() {
    this.mapCoords = [];
}

PapapigView.prototype.render = function() {

    requestPaPaAPI.get(function(city) {
      console.log(city);

      const mainRenderDiv = document.querySelector('#render_area');

      const divCityName = document.createElement('h3');
      mainRenderDiv.appendChild(divCityName);
      divCityName.innerText = city.name;

      const divMap = document.createElement('div');
      divMap.id = "divMap";
      const mapWrapper = new MapWrapper(divMap, city.latLng, 3);
      mapWrapper.addMarker(city.latLng);
      mainRenderDiv.appendChild(divMap);

      const divCityImg = document.createElement('img');
      divCityImg.id = "divCityImg";
      mainRenderDiv.appendChild(divCityImg);
      divCityImg.src = __dirname + city.img;

      // const ul = document.querySelector('#quotes');
      //   const li = document.createElement('li');
      //   const text = document.createElement('p');
      //   text.innerText = `${quote.name}: "${quote.quote}"`;
      //   li.appendChild(text);
      //   ul.appendChild(li);
    });

}

module.exports = PapapigView;
