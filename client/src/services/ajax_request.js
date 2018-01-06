const AjaxRequest = function(url) {
  this.url = url;
  this.responseBody = [];
}

AjaxRequest.prototype.get = function(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.send();

  request.addEventListener('load', function(){
    if (this.status !== 200) {
      return;
    };
    this.responseBody = JSON.parse(this.responseText);
    console.log("responseBody", this.responseBody)
    callback(this.responseBody);
  });
}

AjaxRequest.prototype.post = function(callback, body) {
  const request = new XMLHttpRequest();
  request.open("POST", this.url);
  request.send(JSON.stringify(body));
  request.addEventListener('load', function(){
    if ( request.status !==201) {
      return;
    };
    const jsonString = request.responseText;
    const responseBody = JSON.parse(jsonString);
    console.log("responseBody", this.responseBody);
    callback(responseBody);
  });
}

AjaxRequest.prototype.delete = function(callback) {
  const request = new XMLHttpRequest();
  request.open('DELETE', this.url);
  request.send();
  request.addEventListener('load', function(){
    if(this.status!==204){
      return;
    };
    callback();
  })

}

module.exports = AjaxRequest;
