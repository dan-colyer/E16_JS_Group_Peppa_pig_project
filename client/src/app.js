const PapapigView = require('./views/papapigView.js');
const MadamGazelleView = require('./views/madamGazelleView.js');
const MamapigView = require('./views/mamaPigView.js');
const AboutView = require('./views/aboutView.js');
const CanvasView = require('./views/canvasView.js')

const app = function(){
  console.log("Hello world");


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
  const canvasView = new CanvasView();
  peppapigButton.addEventListener('click', canvasView.render);

  const aboutButton = document.querySelector('#logopig');
  const aboutView = new AboutView();
  aboutButton.addEventListener('click', aboutView.render);
}



document.addEventListener('DOMContentLoaded', app);
