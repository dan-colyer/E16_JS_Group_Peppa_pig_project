const AjaxRequest = require('../services/ajax_request.js');
const requestGazelleAPI = new AjaxRequest("http://localhost:3000/api/madamgazelle");

const MadamGazelleView = function() {

}

MadamGazelleView.prototype.render = function(video) {

    requestGazelleAPI.get(function(allVideos) {

      // console.log(allVideos);

      var randomVideo = allVideos[Math.floor(Math.random()*allVideos.length)];
      console.log(randomVideo.embedID);

      const renderArea = document.querySelector('#render_area');
      renderArea.innerHTML = randomVideo.embedURL;
<<<<<<< HEAD
=======

>>>>>>> bc3937ea7754625eee4d3e651045b5b65fac2eda

      // const ul = document.querySelector('#quotes');
      //   const li = document.createElement('li');
      //   const text = document.createElement('p');
      //   text.innerText = `${quote.name}: "${quote.quote}"`;
      //   li.appendChild(text);
      //   ul.appendChild(li);
    });

}

module.exports = MadamGazelleView;
