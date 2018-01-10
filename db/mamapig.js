use peppa_pigs;

db.animals.remove({});

db.animals.insert(
  [
    {
      "name":"Candy Cat",
      "type":"Cat",
      "ppImage":"images/mamapig/ppImages/Candy_Cat.png",
      "realImage":"images/mamapig/realImages/cat.png",
      "sound":"sounds/cat.wav",
      "button":"images/mamapig/buttons/cat.jpg"
    },
    {
      "name":"Danny Dog",
      "type":"Dog",
      "ppImage":"images/mamapig/ppImages/Danny_Dog.png",
      "realImage":"images/mamapig/realImages/dog.png",
      "sound":"sounds/dog.wav",
      "button":"images/mamapig/buttons/dog.png"
    },
    {
      "name":"Dr Brown Bear",
      "type":"Bear",
      "ppImage":"images/mamapig/ppImages/Dr_Brown_Bear.png",
      "realImage":"images/mamapig/realImages/brown_bear.jpg",
      "sound":"sounds/bear.wav",
      "button":"images/mamapig/buttons/bear.png"
    },
    {
      "name":"Emily Elephant",
      "type":"Elephant",
      "ppImage":"images/mamapig/ppImages/Emily_elephant.png",
      "realImage":"images/mamapig/realImages/elephant.png",
      "sound":"sounds/elephant.wav",
      "button":"images/mamapig/buttons/elephant.png"
    },
    {
      "name":"Mr Bull",
      "type":"Bull",
      "ppImage":"images/mamapig/ppImages/mr_bull.png",
      "realImage":"images/mamapig/realImages/bull.png",
      "sound":"sounds/cow.wav",
      "button":"images/mamapig/buttons/cow.png"
    },
    {
      "name":"Mummy Pig",
      "type":"Pig",
      "ppImage":"images/mamapig/ppImages/mummy_pig.png",
      "realImage":"images/mamapig/realImages/pig.jpg",
      "sound":"sounds/pig.wav",
      "button":"images/mamapig/buttons/pig.jpeg"
    },
    {
      "name":"Suzy Sheep",
      "type":"Sheep",
      "ppImage":"images/mamapig/ppImages/suzy_sheep.png",
      "realImage":"images/mamapig/realImages/sheep.jpg",
      "sound":"sounds/sheep.wav",
      "button":"images/mamapig/buttons/sheep.png"
    }
  ]
)
