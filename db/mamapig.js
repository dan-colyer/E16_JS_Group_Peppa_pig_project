use peppa_pigs;

db.animals.remove({});

db.animals.insert(
  [
    {
      "name":"Candy Cat",
      "type":"Cat",
      "ppImage":"../client/build/images/Candy_Cat.png",
      "realImage":"../client/build/images/real_cat.jpg",
      "sound":"../client/build/sounds/cat_meow.wav"
    }
  ]
)
