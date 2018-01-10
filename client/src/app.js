const PapapigView = require('./views/papapigView.js');
const MadamGazelleView = require('./views/madamGazelleView.js')
const MamapigView = require('./views/mamaPigView.js')
const PeppapigView = require('./views/canvasView.js')

const app = function(){
  console.log("Hello world")


  const papapigImage = document.querySelector('#papapig');
  const papapigView = new PapapigView();
  papapigImage.addEventListener('click', papapigView.render);

  const madamGazelleImage = document.querySelector('#madamGazelle');
  const madamGazelleView = new MadamGazelleView();
  madamGazelleImage.addEventListener('click', madamGazelleView.render);

  const mamapigButton = document.querySelector('#mamapig');
  const mamapigView = new MamapigView();
  mamapigButton.addEventListener('click', mamapigView.render);

  const peppapigButton = document.querySelector('#peppapig');
  const peppapigView = new CanvasView();
  peppapigButton.addEventListener('click', peppapigView.render);
  
}



document.addEventListener('DOMContentLoaded', app);
