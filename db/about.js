use peppa_pigs;

db.larders.remove({});

db.larders.insert(
  [
    {
      "name":"Yan Ren",
      "image":"images/madameGazelle.png",
      "profile":"Yan rules!"
    },
    {
      "name":"Laurence Woodward",
      "image":"images/daddyPig.png",
      "profile":"Laurence sucks!"
    },
    {
      "name":"Aline Mokfa",
      "image":"images/mummyPig.png",
      "profile":"Aline's better!"
    },
    {
      "name":"Dan Coyler",
      "image":"images/george.png",
      "profile":"Dan's adequate",
    }
  ]
)
