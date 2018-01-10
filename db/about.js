use peppa_pigs;

db.larders.remove({});

db.larders.insert(
  [
    {
      "name":"Yan Ren",
      "image":"images/mummyPigRight.png",
      "profile":"Sent to the UK by the Chinese government to infiltrate the highest levels of the tech sector, Yan has developed a love for CodeClan's 16 week intensive programming course, which she has now completed eight times. Her hobbies include destroying any and all mere mortal table-tennis wannabes and completing CodeClan's 16 week intensive programming course."
    },
    {
      "name":"Laurence Woodward",
      "image":"images/daddyPigRight.png",
      "profile":"Born Kal-El on the alien planet Krypton, Laurence's parents, Jor-El and Lara, realising the impending destruction facing their homeland, constructed a space-ship and sent Laurence hurtling through time and space, eventually reaching Earth where he was taken in by his adoptive parents, Jonathan and Martha Kent, in Smallville, Kansas, where he commutes from to this day."
    },
    {
      "name":"Aline Mokfa",
      "image":"images/peppa.png",
      "profile":"Raised by wolves in the Amazon rainforest, Aline eventually outgrew the lycanthrope myopia of her pack and struck out on her own to  Europe in search of civilisation. Having reached the seat of the Northern Enlightenment in Edinburgh, Aline has quickly settled in to the Scottish way of life, and now enjoys coldness, deep-fried food and emotional repression."
    },
    {
      "name":"Dan Colyer",
      "image":"images/georgeRight.png",
      "profile":"Having recently appeared for the thirteenth year running in the top half of HEAT magazine's 100 hottest men alive, Dan has decided that there's potentially more to life than effortlessly forcing all who look upon him to quiver and crumble with barely concealed sexual yearning. His hobbies include looking in mirrors, making clothes look good, and automotive ice-dancing."
    }
  ]
)
