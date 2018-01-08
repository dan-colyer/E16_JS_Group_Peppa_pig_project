const PapapigView = require('./views/papapigView.js');
const MadamGazelleView = require('./views/madamGazelleView.js')
const MamapigView = require('./views/mamaPigView.js')

const app = function(){
  console.log("Hello world")

  const papapigButton = document.querySelector('#papapig-button');
  const papapigView = new PapapigView();
  papapigButton.addEventListener('click', papapigView.render);

  const madamGazelleButton = document.querySelector('#madamGazelle-button');
  const madamGazelleView = new MadamGazelleView();
  madamGazelleButton.addEventListener('click', madamGazelleView.render);

  const mamapigButton = document.querySelector('#mamapig-button');
  const mamapigView = new MamapigView();
  mamapigButton.addEventListener('click', mamapigView.render);
}



document.addEventListener('DOMContentLoaded', app);
