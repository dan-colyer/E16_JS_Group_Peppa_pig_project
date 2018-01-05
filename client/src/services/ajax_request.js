const AjaxRequest = function(url) {
  this.url = url;
  this.data = [];
}

AjaxRequest.prototype.get = function(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.addEventListener('load', function(){
    if (request.status !== 200) return;
    const jsonString = request.responseText;
    this.data = JSON.parse(jsonString);
    callback(this.data);
  }.bind(this));
  request.send();
}

AjaxRequest.prototype.post = function(callback, body) {
  const request = new XMLHttpRequest();
  request.open("POST", this.url);
  request.addEventListener('load', function(){
    if ( request.status !==200) return;
    const jsonString = request.responseText;
  })
}

AjaxRequest.prototype.delete = function(callback) {

}

module.exports = AjaxRequest;
