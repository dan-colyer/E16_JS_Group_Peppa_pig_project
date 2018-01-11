use peppa_pigs;

db.videos.remove({});

db.videos.insert(
  [
    {
      "name":"The campsite",
      "embedURL": "<iframe width='665' height='374' src='https://www.youtube.com/embed/Sfwd9Z0srtU?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
    },
    {
      "name":"The egg hunt",
      "embedURL": "<iframe width='665' height='374' src='https://www.youtube.com/embed/DysgBIOiIwE?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
    },
    {
      "name":"Sun, sea, and snow",
      "embedURL": "<iframe width='665' height='374' src='https://www.youtube.com/embed/HUSThHZ2cZ4?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
    }
  ]
)
