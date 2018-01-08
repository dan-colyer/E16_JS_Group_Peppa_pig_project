use peppa_pigs;

db.cities.remove({});

db.cities.insert(
  [
    {
      "name":"London",
      "country": "UK",
      "region":"Europe",
      "latlng": {
        lat: 54,
        lng: -2
      },
      "official languages":[
        "English"
      ],
      "flag": "https://restcountries.eu/data/gbr.svg",
      "place of interest": "Buckingham Palace",
      "img": "images/papapig/London_Buckingham_Palace.jpg",
      "video": "https://www.youtube.com/watch?v=X8zLJlU_-60"
    },
    {
      "name":"Paris",
      "country": "France",
      "region":"Europe",
      "latlng": {
        lat: 46,
        lng: 2
      },
      "official languages":[
        "French"
      ],
      "flag": "https://restcountries.eu/data/fra.svg",
      "place of interest": "The Louvre",
      "img": "images/papapig/Paris_The_Louvre.jpg",
      "video": "https://www.youtube.com/watch?v=UfEiKK-iX70"
    },
    {
      "name":"Beijing",
      "country": "China",
      "region":"Asia",
      "latlng": {
        lat: 35,
        lng: 105
      },
      "official languages":[
        "Chinese"
      ],
      "flag": "https://restcountries.eu/data/chn.svg",
      "place of interest": "The Great Wall of China",
      "img": "images/papapig/Beijing_The_Great_Wall.jpg",
      "video": ""
    },
    {
      "name":"Canberra",
      "country": "Australia",
      "region":"Oceania",
      "latlng": {
        lat: -27,
        lng: 133
      },
      "official languages":[
        "English"
      ],
      "flag": "https://restcountries.eu/data/aus.svg",
      "place of interest": "Parliament House",
      "img": "images/papapig/Canberra_Parliament_House.jpg"
    },
    {
      "name":"Washington, D.C.",
      "country": "US",
      "region":"Americas",
      "latlng": {
        lat: 38,
        lng: -97
      },
      "official languages":[
        "English"
      ],
      "flag": "https://restcountries.eu/data/usa.svg",
      "place of interest": "WashingtonDC_Smithsonian Institution",
      "img": "images/papapig/WashingtonDC_Smithsonian_Institution.jpg"
    },
    {
      "name":"Brasília",
      "country": "Brazil",
      "region":"Americas",
      "latlng": {
        lat: -10,
        lng: -55
      },
      "official languages":[
        "Portuguese"
      ],
      "flag": "https://restcountries.eu/data/bra.svg",
      "place of interest": "Itamaraty Palace",
      "img": "images/papapig/Brasilia_Itamaraty_Palace.jpg"
    },
    {
      "name":"Pretoria",
      "country": "South Africa",
      "region":"Africa",
      "latlng": {
        lat: -29,
        lng: 24
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
      "img": "images/papapig/Pretoria_Union_Buildings.jpg"
    },
    {
      "name":"Ottawa",
      "country": "Canada",
      "region":"Americas",
      "latlng": {
        lat: 60,
        lng: -95
      },
      "official languages":[
        "English",
        "French"
      ],
      "flag": "https://restcountries.eu/data/can.svg",
      "place of interest": "Canadian Museum of History",
      "img": "images/papapig/Canadian_Museum_of_History.jpg"
    },
    {
      "name":"Moscow",
      "country": "Russia",
      "region":"Europe",
      "latlng": {
        lat: 60,
        lng: 100
      },
      "official languages":[
        "Russian"
      ],
      "flag": "https://restcountries.eu/data/rus.svg",
      "place of interest": "Red Square",
      "img": "images/papapig/Moscow_Red_Square.jpg"
    },
    {
      "name":"Dublin",
      "country": "Ireland",
      "region":"Europe",
      "latlng": {
        lat: 53,
        lng: -8
      },
      "official languages":[
        "English",
        "Irish"
      ],
      "flag": "https://restcountries.eu/data/irl.svg",
      "place of interest": "Guinness Storehouse",
      "img": "images/papapig/Dublin_Guinness_Storehouse.jpg"
    }

  ]
)
