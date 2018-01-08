use peppa_pigs;

db.cities.remove({});

db.cities.insert(
  [
    {
      "name":"London",
      "country": "UK",
      "region":"Europe",
      "latlng":[
          54,
          -2
      ],
      "official languages":[
        "English"
      ],
      "flag": "https://restcountries.eu/data/gbr.svg",
      "place of interest": "Buckingham Palace",
      "img": "Buckingham Palace",
      "video": "https://www.youtube.com/watch?v=X8zLJlU_-60"
    },
    {
      "name":"Paris",
      "country": "France",
      "region":"Europe",
      "latlng":[
          46,
          2
      ],
      "official languages":[
        "French"
      ],
      "flag": "https://restcountries.eu/data/fra.svg",
      "place of interest": "The Louvre",
      "img": "The Louvre",
      "video": "https://www.youtube.com/watch?v=UfEiKK-iX70"
    },
    {
      "name":"Beijing",
      "country": "China",
      "region":"Asia",
      "latlng":[
          35,
          105
      ],
      "official languages":[
        "Chinese"
      ],
      "flag": "https://restcountries.eu/data/chn.svg",
      "place of interest": "The Great Wall of China",
      "img": "The Great Wall of China",
      "video": ""
    },
    {
      "name":"Canberra",
      "country": "Australia",
      "region":"Oceania",
      "latlng":[
          -27,
          133
      ],
      "official languages":[
        "English"
      ],
      "flag": "https://restcountries.eu/data/aus.svg",
      "place of interest": "Parliament House",
      "img": "Parliament House"
    },
    {
      "name":"Washington, D.C.",
      "country": "US",
      "region":"Americas",
      "latlng":[
          38,
          -97
      ],
      "official languages":[
        "English"
      ],
      "flag": "https://restcountries.eu/data/usa.svg",
      "place of interest": "Smithsonian Institution",
      "img": "Smithsonian Institution"
    },
    {
      "name":"Brasília",
      "country": "Brazil",
      "region":"Americas",
      "latlng":[
          -10,
          -55
      ],
      "official languages":[
        "Portuguese"
      ],
      "flag": "https://restcountries.eu/data/bra.svg",
      "place of interest": "Itamaraty Palace",
      "img": "Itamaraty Palace"
    },
    {
      "name":"Pretoria",
      "country": "South Africa",
      "region":"Africa",
      "latlng":[
          -29,
          24
      ],
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
      "img": "Union Buildings"
    },
    {
      "name":"Ottawa",
      "country": "Canada",
      "region":"Americas",
      "latlng":[
          60,
          -95
      ],
      "official languages":[
        "English",
        "French"
      ],
      "flag": "https://restcountries.eu/data/can.svg",
      "place of interest": "Canadian Museum of History",
      "img": "Canadian Museum of History"
    },
    {
      "name":"Moscow",
      "country": "Russia",
      "region":"Europe",
      "latlng":[
          60,
          100
      ],
      "official languages":[
        "Russian"
      ],
      "flag": "https://restcountries.eu/data/rus.svg",
      "place of interest": "Red Square",
      "img": "Red Square"
    },
    {
      "name":"Dublin",
      "country": "Ireland",
      "region":"Europe",
      "latlng":[
          53,
          -8
      ],
      "official languages":[
        "English",
        "Irish"
      ],
      "flag": "https://restcountries.eu/data/irl.svg",
      "place of interest": "Guinness Storehouse",
      "img": "Guinness Storehouse"
    }

  ]
)
