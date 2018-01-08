use peppa_pigs;

db.videos.remove({});

db.videos.insert(
  [
    {
      "name":"The campsite",
      "url": "https://www.youtube.com/watch?v=Sfwd9Z0srtU"
    },
    {
      "name":"The egg hunt",
      "url": "https://www.youtube.com/watch?v=DysgBIOiIwE"
    },
    {
      "name":"Sun, sea, and snow",
      "url": "https://www.youtube.com/watch?v=HUSThHZ2cZ4"
    }
  ]
)
