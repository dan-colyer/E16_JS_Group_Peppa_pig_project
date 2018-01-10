use peppa_pigs;

db.videos.remove({});

db.videos.insert(
  [
    {
      "name":"The campsite",
      "embedURL": "<iframe width='560' height='315' src='https://www.youtube.com/embed/Sfwd9Z0srtU' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>"
    },
    {
      "name":"The egg hunt",
      "embedURL": "<iframe width='560' height='315' src='https://www.youtube.com/embed/DysgBIOiIwE' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>"
    },
    {
      "name":"Sun, sea, and snow",
      "embedURL": "<iframe width='560' height='315' src='https://www.youtube.com/embed/HUSThHZ2cZ4' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>"
    },
    {
      "name":"Rescuing Mrs. Fish",
      "embedURL": "<iframe width='560' height='315' src='https://www.youtube.com/embed/zYW0Jc1rK1c' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>"
    }
  ]
)
