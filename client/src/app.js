const PapapigView = require('./views/papapigView.js');
const MadamGazelleView = require('./views/madamGazelleView.js')
const MamapigView = require('./views/mamaPigView.js')

const app = function(){
  console.log("Hello world")


  const papapigImage = document.querySelector('#papapig');
  const papapigView = new PapapigView();
  papapigImage.addEventListener('click', papapigView.render);

  const madamGazelleImage = document.querySelector('#madamGazelle');
  const madamGazelleView = new MadamGazelleView();
  madamGazelleImage.addEventListener('click', madamGazelleView.render);


  const mamapigButton = document.querySelector('#mamapig-button');
  const mamapigView = new MamapigView();
  mamapigButton.addEventListener('click', mamapigView.render);
}



document.addEventListener('DOMContentLoaded', app);
