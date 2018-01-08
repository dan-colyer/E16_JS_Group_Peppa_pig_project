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
    },
    {
      "name":"Danny Dog",
      "type":"Dog",
      "ppImage":"../client/build/images/Danny_Dog.jpg",
      "realImage":"../client/build/images/real_dog.jpg",
      "sound":"../client/build/sounds/dog_woof.wav"
    },
    {
      "name":"3",
      "type":"",
      "ppImage":"",
      "realImage":"",
      "sound":""
    },
    {
      "name":"4",
      "type":"",
      "ppImage":"",
      "realImage":"",
      "sound":""
    },
    {
      "name":"5",
      "type":"",
      "ppImage":"",
      "realImage":"",
      "sound":""
    },
    {
      "name":"6",
      "type":"",
      "ppImage":"",
      "realImage":"",
      "sound":""
    },
  ]
)
