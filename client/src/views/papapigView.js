const AjaxRequest = require('../services/ajax_request.js');
const requestPaPaAPI = new AjaxRequest("http://localhost:3000/api/papapig");
const MapWrapper = require('../modules/googlemap.js');

const PapapigView = function() {

}

PapapigView.prototype.render = function() {

    requestPaPaAPI.get(function(city) {

      console.log(city);

      const mainRenderDiv = document.querySelector('#render_area');
      mainRenderDiv.innerHTML = "";

      const divCombineMapAndImg = document.createElement('div');
      divCombineMapAndImg.id = 'mapAndImg';
      const divCityName = document.createElement('button');
      divCityName.innerText = city.name;
      mainRenderDiv.appendChild(divCityName);
      mainRenderDiv.appendChild(divCombineMapAndImg);

      divCityName.addEventListener('click', function(){
        divCombineMapAndImg.innerHTML = "";
        divCombineMapAndImg.innerHTML = city.embedURL;
      });

      const divMap = document.createElement('div');
      divMap.id = "divMap";
      divCombineMapAndImg.appendChild(divMap);
      console.log(city.latlng);
      const mapWrapper = new MapWrapper(divMap, city.latlng, 1);
      mapWrapper.addMarker(city.latlng);

      const divCityImg = document.createElement('img');
      divCityImg.id = "divCityImg";
      divCombineMapAndImg.appendChild(divCityImg);
      divCityImg.src = __dirname + city.img;
    });

}

module.exports = PapapigView;


      // const ul = document.querySelector('#quotes');
      //   const li = document.createElement('li');
      //   const text = document.createElement('p');
      //   text.innerText = `${quote.name}: "${quote.quote}"`;
      //   li.appendChild(text);
      //   ul.appendChild(li);
