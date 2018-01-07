const PapapigView = require('./views/papapigView.js');
const AjaxRequest = require('./services/ajax_request.js');

const app = function(){
  console.log("Hello world")

  const papapigButton = document.querySelector('#papapig-button');
  papapigButton.addEventListener('click', papapigRequestComplete)




}

const papapigRequestComplete = function(){
  const requestPaPaData = new AjaxRequest("http://localhost:3000/api/papapig")
  console.log("requestPaPaData", requestPaPaData.responseBody);
}

document.addEventListener('DOMContentLoaded', app);
