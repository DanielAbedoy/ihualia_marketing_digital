class Variables_Globales{

  categorias_evento() {
    return [
      {
        name: "Actividades escolares",
        sub_cat: ["Cuidado despues del colegio","Almuerzo","Recaudación de fondos","Estacionamiento","Ordenador público","Rifa","Otro"]
      },
      {
        name: "Aficiones e intereses especiales",
        sub_cat: ["Adultos","Anime/Comics","Bricolage","Dibujo y pintura","Fotografia","Juegos","Libros","Tejido","Otro"]
      },
      {
        name: "Artes escénicas y visuales",
        sub_cat: ["Artes literarias","Baile","Ballet","Bellas artes","Comedia","Diseño","Joyeria","Manualidades","Musical","Orquesta","Pintura","Escultura","Teatro","Otro"]
      },
      {
        name: "Ciencia y tenconolía",
        sub_cat: ["Alta tecnología","Biotecnología","Ciencia","Medicina","Movil","Redes sociales","Robótica","Otro"]
      },
      {
        name: "Cine, medios de comunicación y entretenimiento",
        sub_cat: ["Adultos","Anime","Cinema","Comedia","Cómics","Juegos","TV","Otro"]
      },
      {
        name: "Coches, Barcos y Avivones",
        sub_cat: ["Aire","Auto","Bote","Motocicleta/Todoterreno","Otro"]
      },
      {
        name: "Comunidad y cultura",
        sub_cat: ["Ciudad","Condado","Estado","Historic","Idioma","LGBT","Medieval","Nacionalidad","Patrimonio","Renacimiento","Otro"]
      },
      {
        name: "Deportes y salud",
        sub_cat: ["Andando","Baloncesto","Bésibol","Camps","Cheer","Ciclismo","Ciclismo de montaña","Correr","Deportes de motor","Deportes de nieve","Ejercicio","Futbol","Futbol americano","Golf","Hockey","Lacrosse","Lucha y artes marciales","Natación y deportes acuáticos","Obtáculos","Rugby","Softball","Tenis","Tack & Field","Voleibol","Weightlifting","Wrestling","Yoga","Otro"]
      },
      {
        name: "Dias de fiesta",
        sub_cat: ["Dia de la independencia","Dia de muertos","Navidad","Noche de año nuevo","Semana Santa","Otro"]
      },
      {
        name: "Familia y educación",
        sub_cat: ["Antuguos alumnos","Asociación de padres","Bebe","Educación","Niños y jóvenes","Padres y Madres","Reunion","Otro"]
      },
      {
        name: "Gastronomia",
        sub_cat: ["Alimentacion","Bebidad espirituosas","Cerbeza","Vino","Otro"]
      },
      {
        name: "Gobierno y politica",
        sub_cat: ["Gobierno de estado","Gobierno federal","Gobierno municipal","Militar","Seguridad nacional","No partidista","Otros partidos","Partidos de izquierda","Partidos de derecha","Otro"]
      },
      {
        name: "Hogar y estilo de vida",
        sub_cat: ["Casa y jardín","Citas","Mascotas y animales","Otro"]
      },
      {
        name: "Moda y belleza",
        sub_cat: ["Accesorios","Belleza","Moda","Nupcial","Otro"]
      },
      {
        name: "Música",
        sub_cat: ["40 principales","Acustica","Americana","Bluegrass","Blues","Blues y jazz","Clásica","Cultural","DJ/Dance","EDM","EDM/Electrónica","Electronic","Experimental","Folk","Heavy metal","Hip Hop / Rap","Jazz","Latina","Música alternativa","Música independiente","Pop","Psychedelic","Punk Hardcore","R&B","Reggae","Religiosa/Espiritual","Rock","Singer","Ópera","Otro"]
      },
      {
        name: "Negocios y servicios profecionales",
        sub_cat: ["Bienes raíces", "Diseño", "Educación", "Empleo", "Finanzas", "Medio ambiente y sontenibilidad", "Medios", "Nuevas empresas y pequeños negocios", "Organización sin fines de lucro y no gubernamentales", "Ventas y marketing", "Otro"]
      },
      {
        name: "Organización y causas benéficas",
        sub_cat: ["Alivio de desastres","Ayuda internacional","Bienestar animal","Cuidado de la salud","Derechos humanos","Educacíon","Medio ambiente","Pobreza","Otro"]
      },
      {
        name: "Religión y espiritualidad",
        sub_cat: ["Agnostico","Ateísmo","Budismo","Cristianismo","Folk religion","Hinduismo","Islamico","Judaismo","Misticismo y ocultismo","Mormonismo","Nueva era","Religión oriental","Sijismo","Otro"]
      },
      {
        name: "Salud y bienestar",
        sub_cat: ["Médico","Salud mental","Saliud personal","Spa","Yoga","Otro"]
      },
      {
        name: "Viajes y actividades al aire libre",
        sub_cat: ["Alpinismo","Canotaje","Excursionismo","Kayak","Rafting","Viejes","Otro"]
      },
      {
        name: "Otro",
        sub_cat: []
      }
      

    ];
  }  


  zonas_horarias = () => {
    return [
        'Europe/Andorra',
        'Asia/Dubai',
        'Asia/Kabul',
        'Europe/Tirane',
        'Asia/Yerevan',
        'Antarctica/Casey',
        'Antarctica/Davis',
        'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
        'Antarctica/Mawson',
        'Antarctica/Palmer',
        'Antarctica/Rothera',
        'Antarctica/Syowa',
        'Antarctica/Troll',
        'Antarctica/Vostok',
        'America/Argentina/Buenos_Aires',
        'America/Argentina/Cordoba',
        'America/Argentina/Salta',
        'America/Argentina/Jujuy',
        'America/Argentina/Tucuman',
        'America/Argentina/Catamarca',
        'America/Argentina/La_Rioja',
        'America/Argentina/San_Juan',
        'America/Argentina/Mendoza',
        'America/Argentina/San_Luis',
        'America/Argentina/Rio_Gallegos',
        'America/Argentina/Ushuaia',
        'Pacific/Pago_Pago',
        'Europe/Vienna',
        'Australia/Lord_Howe',
        'Antarctica/Macquarie',
        'Australia/Hobart',
        'Australia/Currie',
        'Australia/Melbourne',
        'Australia/Sydney',
        'Australia/Broken_Hill',
        'Australia/Brisbane',
        'Australia/Lindeman',
        'Australia/Adelaide',
        'Australia/Darwin',
        'Australia/Perth',
        'Australia/Eucla',
        'Asia/Baku',
        'America/Barbados',
        'Asia/Dhaka',
        'Europe/Brussels',
        'Europe/Sofia',
        'Atlantic/Bermuda',
        'Asia/Brunei',
        'America/La_Paz',
        'America/Noronha',
        'America/Belem',
        'America/Fortaleza',
        'America/Recife',
        'America/Araguaina',
        'America/Maceio',
        'America/Bahia',
        'America/Sao_Paulo',
        'America/Campo_Grande',
        'America/Cuiaba',
        'America/Santarem',
        'America/Porto_Velho',
        'America/Boa_Vista',
        'America/Manaus',
        'America/Eirunepe',
        'America/Rio_Branco',
        'America/Nassau',
        'Asia/Thimphu',
        'Europe/Minsk',
        'America/Belize',
        'America/St_Johns',
        'America/Halifax',
        'America/Glace_Bay',
        'America/Moncton',
        'America/Goose_Bay',
        'America/Blanc-Sablon',
        'America/Toronto',
        'America/Nipigon',
        'America/Thunder_Bay',
        'America/Iqaluit',
        'America/Pangnirtung',
        'America/Atikokan',
        'America/Winnipeg',
        'America/Rainy_River',
        'America/Resolute',
        'America/Rankin_Inlet',
        'America/Regina',
        'America/Swift_Current',
        'America/Edmonton',
        'America/Cambridge_Bay',
        'America/Yellowknife',
        'America/Inuvik',
        'America/Creston',
        'America/Dawson_Creek',
        'America/Fort_Nelson',
        'America/Vancouver',
        'America/Whitehorse',
        'America/Dawson',
        'Indian/Cocos',
        'Europe/Zurich',
        'Africa/Abidjan',
        'Pacific/Rarotonga',
        'America/Santiago',
        'America/Punta_Arenas',
        'Pacific/Easter',
        'Asia/Shanghai',
        'Asia/Urumqi',
        'America/Bogota',
        'America/Costa_Rica',
        'America/Havana',
        'Atlantic/Cape_Verde',
        'America/Curacao',
        'Indian/Christmas',
        'Asia/Nicosia',
        'Asia/Famagusta',
        'Europe/Prague',
        'Europe/Berlin',
        'Europe/Copenhagen',
        'America/Santo_Domingo',
        'Africa/Algiers',
        'America/Guayaquil',
        'Pacific/Galapagos',
        'Europe/Tallinn',
        'Africa/Cairo',
        'Africa/El_Aaiun',
        'Europe/Madrid',
        'Africa/Ceuta',
        'Atlantic/Canary',
        'Europe/Helsinki',
        'Pacific/Fiji',
        'Atlantic/Stanley',
        'Pacific/Chuuk',
        'Pacific/Pohnpei',
        'Pacific/Kosrae',
        'Atlantic/Faroe',
        'Europe/Paris',
        'Europe/London',
        'Asia/Tbilisi',
        'America/Cayenne',
        'Africa/Accra',
        'Europe/Gibraltar',
        'America/Godthab',
        'America/Danmarkshavn',
        'America/Scoresbysund',
        'America/Thule',
        'Europe/Athens',
        'Atlantic/South_Georgia',
        'America/Guatemala',
        'Pacific/Guam',
        'Africa/Bissau',
        'America/Guyana',
        'Asia/Hong_Kong',
        'America/Tegucigalpa',
        'America/Port-au-Prince',
        'Europe/Budapest',
        'Asia/Jakarta',
        'Asia/Pontianak',
        'Asia/Makassar',
        'Asia/Jayapura',
        'Europe/Dublin',
        'Asia/Jerusalem',
        'Asia/Kolkata',
        'Indian/Chagos',
        'Asia/Baghdad',
        'Asia/Tehran',
        'Atlantic/Reykjavik',
        'Europe/Rome',
        'America/Jamaica',
        'Asia/Amman',
        'Asia/Tokyo',
        'Africa/Nairobi',
        'Asia/Bishkek',
        'Pacific/Tarawa',
        'Pacific/Enderbury',
        'Pacific/Kiritimati',
        'Asia/Pyongyang',
        'Asia/Seoul',
        'Asia/Almaty',
        'Asia/Qyzylorda',
        'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
        'Asia/Aqtobe',
        'Asia/Aqtau',
        'Asia/Atyrau',
        'Asia/Oral',
        'Asia/Beirut',
        'Asia/Colombo',
        'Africa/Monrovia',
        'Europe/Vilnius',
        'Europe/Luxembourg',
        'Europe/Riga',
        'Africa/Tripoli',
        'Africa/Casablanca',
        'Europe/Monaco',
        'Europe/Chisinau',
        'Pacific/Majuro',
        'Pacific/Kwajalein',
        'Asia/Yangon',
        'Asia/Ulaanbaatar',
        'Asia/Hovd',
        'Asia/Choibalsan',
        'Asia/Macau',
        'America/Martinique',
        'Europe/Malta',
        'Indian/Mauritius',
        'Indian/Maldives',
        'America/Mexico_City',
        'America/Cancun',
        'America/Merida',
        'America/Monterrey',
        'America/Matamoros',
        'America/Mazatlan',
        'America/Chihuahua',
        'America/Ojinaga',
        'America/Hermosillo',
        'America/Tijuana',
        'America/Bahia_Banderas',
        'Asia/Kuala_Lumpur',
        'Asia/Kuching',
        'Africa/Maputo',
        'Africa/Windhoek',
        'Pacific/Noumea',
        'Pacific/Norfolk',
        'Africa/Lagos',
        'America/Managua',
        'Europe/Amsterdam',
        'Europe/Oslo',
        'Asia/Kathmandu',
        'Pacific/Nauru',
        'Pacific/Niue',
        'Pacific/Auckland',
        'Pacific/Chatham',
        'America/Panama',
        'America/Lima',
        'Pacific/Tahiti',
        'Pacific/Marquesas',
        'Pacific/Gambier',
        'Pacific/Port_Moresby',
        'Pacific/Bougainville',
        'Asia/Manila',
        'Asia/Karachi',
        'Europe/Warsaw',
        'America/Miquelon',
        'Pacific/Pitcairn',
        'America/Puerto_Rico',
        'Asia/Gaza',
        'Asia/Hebron',
        'Europe/Lisbon',
        'Atlantic/Madeira',
        'Atlantic/Azores',
        'Pacific/Palau',
        'America/Asuncion',
        'Asia/Qatar',
        'Indian/Reunion',
        'Europe/Bucharest',
        'Europe/Belgrade',
        'Europe/Kaliningrad',
        'Europe/Moscow',
        'Europe/Simferopol',
        'Europe/Kirov',
        'Europe/Astrakhan',
        'Europe/Volgograd',
        'Europe/Saratov',
        'Europe/Ulyanovsk',
        'Europe/Samara',
        'Asia/Yekaterinburg',
        'Asia/Omsk',
        'Asia/Novosibirsk',
        'Asia/Barnaul',
        'Asia/Tomsk',
        'Asia/Novokuznetsk',
        'Asia/Krasnoyarsk',
        'Asia/Irkutsk',
        'Asia/Chita',
        'Asia/Yakutsk',
        'Asia/Khandyga',
        'Asia/Vladivostok',
        'Asia/Ust-Nera',
        'Asia/Magadan',
        'Asia/Sakhalin',
        'Asia/Srednekolymsk',
        'Asia/Kamchatka',
        'Asia/Anadyr',
        'Asia/Riyadh',
        'Pacific/Guadalcanal',
        'Indian/Mahe',
        'Africa/Khartoum',
        'Europe/Stockholm',
        'Asia/Singapore',
        'America/Paramaribo',
        'Africa/Juba',
        'Africa/Sao_Tome',
        'America/El_Salvador',
        'Asia/Damascus',
        'America/Grand_Turk',
        'Africa/Ndjamena',
        'Indian/Kerguelen',
        'Asia/Bangkok',
        'Asia/Dushanbe',
        'Pacific/Fakaofo',
        'Asia/Dili',
        'Asia/Ashgabat',
        'Africa/Tunis',
        'Pacific/Tongatapu',
        'Europe/Istanbul',
        'America/Port_of_Spain',
        'Pacific/Funafuti',
        'Asia/Taipei',
        'Europe/Kiev',
        'Europe/Uzhgorod',
        'Europe/Zaporozhye',
        'Pacific/Wake',
        'America/New_York',
        'America/Detroit',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Indiana/Indianapolis',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Vevay',
        'America/Chicago',
        'America/Indiana/Tell_City',
        'America/Indiana/Knox',
        'America/Menominee',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/North_Dakota/Beulah',
        'America/Denver',
        'America/Boise',
        'America/Phoenix',
        'America/Los_Angeles',
        'America/Anchorage',
        'America/Juneau',
        'America/Sitka',
        'America/Metlakatla',
        'America/Yakutat',
        'America/Nome',
        'America/Adak',
        'Pacific/Honolulu',
        'America/Montevideo',
        'Asia/Samarkand',
        'Asia/Tashkent',
        'America/Caracas',
        'Asia/Ho_Chi_Minh',
        'Pacific/Efate',
        'Pacific/Wallis',
        'Pacific/Apia',
        'Africa/Johannesburg'
    ];
  }

  tipos_evento = () => {
    return [
      "Tipo", "Acampada,viaje o retiro", "Atracción", "Carrera o eveto de resistencia", "Cena o gala", "Clase, curso o taller", "Competencia o firma", "Concierto o actiación",
      "Conferencia", "Convención", "Encuentro o evento de red", "Feria comercia, feria de consumo o exposición",
      "Festival o feria", "Fiesta o reunion social", "Juego o competición", "Proyecció", "Really", "Seminario o charla", "Torneo", "Otro"
    ]
  }


}

export default Variables_Globales;