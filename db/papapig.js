use peppa_pigs;

db.cities.remove({});

db.cities.insert(
  [
    {
      "name":"London",
      "country": "UK",
      "region":"Europe",
      "latlng": {
        lat: 51.507222,
        lng: -0.1275
      },
      "official languages":[
        "English"
      ],
      "flag": "https://restcountries.eu/data/gbr.svg",
      "place of interest": "Buckingham Palace",
      "img": "images/papapig/London_Buckingham_Palace.jpg",
      "embedURL": "<iframe width='640' height='360' src='https://www.youtube.com/embed/X8zLJlU_-60' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>"
    },
    {
      "name":"Paris",
      "country": "France",
      "region":"Europe",
      "latlng": {
        lat: 48.8567,
        lng: 2.3508
      },
      "official languages":[
        "French"
      ],
      "flag": "https://restcountries.eu/data/fra.svg",
      "place of interest": "The Louvre",
      "img": "images/papapig/Paris_The_Louvre.jpg",
      "embedURL": "<iframe width='640' height='360' src='https://www.youtube.com/embed/UfEiKK-iX70' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>"
    },
    {
      "name":"Beijing",
      "country": "China",
      "region":"Asia",
      "latlng": {
        lat: 39.916667,
        lng: 116.383333
      },
      "official languages":[
        "Chinese"
      ],
      "flag": "https://restcountries.eu/data/chn.svg",
      "place of interest": "The Great Wall of China",
      "img": "images/papapig/Beijing_The_Great_Wall.jpg",
      "embedURL":"<iframe width='640' height='360' src='https://www.youtube.com/embed/-UuJxmU6OCQ' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>"
    },
    {
      "name":"Canberra",
      "country": "Australia",
      "region":"Oceania",
      "latlng": {
        lat: -35.3075,
        lng: 149.124417
      },
      "official languages":[
        "English"
      ],
      "flag": "https://restcountries.eu/data/aus.svg",
      "place of interest": "Parliament House",
      "img": "images/papapig/Canberra_Parliament_House.jpg",
      "embedURL":""
    },
    {
      "name":"Washington, D.C.",
      "country": "US",
      "region":"Americas",
      "latlng": {
        lat: 38.904722,
        lng: -77.016389
      },
      "official languages":[
        "English"
      ],
      "flag": "https://restcountries.eu/data/usa.svg",
      "place of interest": "WashingtonDC_Smithsonian Institution",
      "img": "images/papapig/WashingtonDC_Smithsonian_Institution.jpg",
      "embedURL":""
    },
    {
      "name":"Brasília",
      "country": "Brazil",
      "region":"Americas",
      "latlng": {
        lat: -15.793889,
        lng: -47.882778
      },
      "official languages":[
        "Portuguese"
      ],
      "flag": "https://restcountries.eu/data/bra.svg",
      "place of interest": "Itamaraty Palace",
      "img": "images/papapig/Brasilia_Itamaraty_Palace.jpg",
      "embedURL":""
    },
    {
      "name":"Pretoria",
      "country": "South Africa",
      "region":"Africa",
      "latlng": {
        lat: -25.746111,
        lng: 28.188056
      },
      "official languages":[
        "Afrikaans",
        "English",
        "Southern Ndebele",
        "Southern Sotho",
        "Swati",
        "Tswana",
        "Venda",
        "Xhosa",
        "Zulu"
      ],
      "flag": "https://restcountries.eu/data/zaf.svg",
      "place of interest": "Union Buildings",
      "img": "images/papapig/Pretoria_Union_Buildings.jpg",
      "embedURL":""
    },
    {
      "name":"Ottawa",
      "country": "Canada",
      "region":"Americas",
      "latlng": {
        lat: 45.416667,
        lng: -75.683333
      },
      "official languages":[
        "English",
        "French"
      ],
      "flag": "https://restcountries.eu/data/can.svg",
      "place of interest": "Canadian Museum of History",
      "img": "images/papapig/Canadian_Museum_of_History.jpg",
      "embedURL":""
    },
    {
      "name":"Moscow",
      "country": "Russia",
      "region":"Europe",
      "latlng": {
        lat: 55.75,
        lng: 37.616667
      },
      "official languages":[
        "Russian"
      ],
      "flag": "https://restcountries.eu/data/rus.svg",
      "place of interest": "Red Square",
      "img": "images/papapig/Moscow_Red_Square.jpg",
      "embedURL":""
    },
    {
      "name":"Dublin",
      "country": "Ireland",
      "region":"Europe",
      "latlng": {
        lat: 53.349722,
        lng: -6.260278
      },
      "official languages":[
        "English",
        "Irish"
      ],
      "flag": "https://restcountries.eu/data/irl.svg",
      "place of interest": "Guinness Storehouse",
      "img": "images/papapig/Dublin_Guinness_Storehouse.jpg",
      "embedURL":""
    }

  ]
)
