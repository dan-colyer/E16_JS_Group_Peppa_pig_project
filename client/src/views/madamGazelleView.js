const AjaxRequest = require('../services/ajax_request.js');
const requestGazelleAPI = new AjaxRequest("http://localhost:3000/api/madamgazelle");

const MadamGazelleView = function() {

}

MadamGazelleView.prototype.render = function(video) {

    requestGazelleAPI.get(function(allVideos) {
      console.log(allVideos);

      var randomVideo = allVideos[Math.floor(Math.random()*allVideos.length)];

      const renderArea = document.querySelector('#render_area');
      renderArea.innerHTML = randomVideo.embedURL;

      renderArea.className = "video"
    });

}

module.exports = MadamGazelleView;
