use peppa_pigs;

db.animals.remove({});

db.animals.insert(
  [
    {
      "name":"Candy Cat",
      "type":"Cat",
      "ppImage":"images/mamapig/ppImages/Candy_Cat.png",
      "realImage":"images/mamapig/realImages/cat.jpg",
      "sound":"sounds/cat.wav",
      "button":"images/mamapig/buttons/cat.jpg"
    },
    {
      "name":"Danny Dog",
      "type":"Dog",
      "ppImage":"images/mamapig/ppImages/Danny_Dog.jpg",
      "realImage":"images/mamapig/realImages/dog.jpg",
      "sound":"sounds/dog.wav"
    },
    {
      "name":"Dr Brown Bear",
      "type":"Brown Bear",
      "ppImage":"images/mamapig/ppImages/dr_brown_bear.jpg",
      "realImage":"images/mamapig/realImages/brown_bear.jpg",
      "sound":"sounds/bear.wav"
    },
    {
      "name":"Emily Elephant",
      "type":"Elephant",
      "ppImage":"images/mamapig/ppImages/Emily_elephant.jpg",
      "realImage":"images/mamapig/realImages/elephant.png",
      "sound":"sounds/elephant.wav"
    },
    {
      "name":"Mr Bull",
      "type":"Bull",
      "ppImage":"images/mamapig/ppImages/mr_bull.jpg",
      "realImage":"images/mamapig/realImages/bull.jpg",
      "sound":"sounds/cow.wav"
    },
    {
      "name":"Mummy Pig",
      "type":"Pig",
      "ppImage":"images/mamapig/ppImages/mummy_pig.png",
      "realImage":"images/mamapig/realImages/pig.png",
      "sound":"sounds/pig.wav"
    },
    {
      "name":"Suzy Sheep",
      "type":"Sheep",
      "ppImage":"images/mamapig/ppImages/suzy_sheep.png",
      "realImage":"images/mamapig/realImages/sheep.jpg",
      "sound":"sounds/sheep.wav"
    }
  ]
)
