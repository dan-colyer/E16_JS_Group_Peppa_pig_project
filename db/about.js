use peppa_pigs;

db.larders.remove({});

db.larders.insert(
  [
    {
      "name":"Yan Ren",
      "image":"images/mummyPigRight.png",
      "profile":"Yan rules!"
    },
    {
      "name":"Laurence Woodward",
      "image":"images/daddyPigRight.png",
      "profile":"Laurence sucks!"
    },
    {
      "name":"Aline Mokfa",
      "image":"images/peppa.png",
      "profile":"Aline's better!"
    },
    {
      "name":"Dan Coyler",
      "image":"images/georgeRight.png",
      "profile":"Dan's adequate"
    }
  ]
)
