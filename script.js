// Function to fetch data from the API
async function fetchData() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Solve the problems
  (async () => {
    const countriesData = await fetchData();
  
    // Problem 1: Get all countries from Asia continent/region using Filter function
    const asiaCountries = countriesData.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', asiaCountries);

    //output
    // Countries in Asia: (50) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  
    // Problem 2: Get all countries with a population of less than 2 lakhs using Filter function
    const lowPopulationCountries = countriesData.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', lowPopulationCountries);

    //output
    //Countries with population less than 2 lakhs: (62) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  
    // Problem 3: Print name, capital, and flag using forEach function
    console.log('Details of countries:');
    countriesData.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
    });

    //output
// Details of countries:
// script.js:27 Name: Christmas Island, Capital: Flying Fish Cove, Flag: undefined
// script.js:27 Name: Eritrea, Capital: Asmara, Flag: undefined
// script.js:27 Name: Samoa, Capital: Apia, Flag: undefined
// script.js:27 Name: North Macedonia, Capital: Skopje, Flag: undefined
// script.js:27 Name: Djibouti, Capital: Djibouti, Flag: undefined
// script.js:27 Name: Jordan, Capital: Amman, Flag: undefined
// script.js:27 Name: Pakistan, Capital: Islamabad, Flag: undefined
// script.js:27 Name: French Polynesia, Capital: Papeetē, Flag: undefined
// script.js:27 Name: Ireland, Capital: Dublin, Flag: undefined
// script.js:27 Name: Mauritania, Capital: Nouakchott, Flag: undefined
// script.js:27 Name: Denmark, Capital: Copenhagen, Flag: undefined
// script.js:27 Name: Namibia, Capital: Windhoek, Flag: undefined
// script.js:27 Name: Ghana, Capital: Accra, Flag: undefined
// script.js:27 Name: South Sudan, Capital: Juba, Flag: undefined
// script.js:27 Name: Slovakia, Capital: Bratislava, Flag: undefined
// script.js:27 Name: American Samoa, Capital: Pago Pago, Flag: undefined
// script.js:27 Name: Moldova, Capital: Chișinău, Flag: undefined
// script.js:27 Name: North Korea, Capital: Pyongyang, Flag: undefined
// script.js:27 Name: Macau, Capital: undefined, Flag: undefined
// script.js:27 Name: Turks and Caicos Islands, Capital: Cockburn Town, Flag: undefined
// script.js:27 Name: Seychelles, Capital: Victoria, Flag: undefined
// script.js:27 Name: Armenia, Capital: Yerevan, Flag: undefined
// script.js:27 Name: Curaçao, Capital: Willemstad, Flag: undefined
// script.js:27 Name: Guadeloupe, Capital: Basse-Terre, Flag: undefined
// script.js:27 Name: British Indian Ocean Territory, Capital: Diego Garcia, Flag: undefined
// script.js:27 Name: Equatorial Guinea, Capital: Malabo, Flag: undefined
// script.js:27 Name: Syria, Capital: Damascus, Flag: undefined
// script.js:27 Name: Angola, Capital: Luanda, Flag: undefined
// script.js:27 Name: Tajikistan, Capital: Dushanbe, Flag: undefined
// script.js:27 Name: Venezuela, Capital: Caracas, Flag: undefined
// script.js:27 Name: United States Minor Outlying Islands, Capital: Washington DC, Flag: undefined
// script.js:27 Name: Åland Islands, Capital: Mariehamn, Flag: undefined
// script.js:27 Name: Poland, Capital: Warsaw, Flag: undefined
// script.js:27 Name: Saudi Arabia, Capital: Riyadh, Flag: undefined
// script.js:27 Name: Republic of the Congo, Capital: Brazzaville, Flag: undefined
// script.js:27 Name: Bosnia and Herzegovina, Capital: Sarajevo, Flag: undefined
// script.js:27 Name: United States Virgin Islands, Capital: Charlotte Amalie, Flag: undefined
// script.js:27 Name: New Caledonia, Capital: Nouméa, Flag: undefined
// script.js:27 Name: San Marino, Capital: City of San Marino, Flag: undefined
// script.js:27 Name: Czechia, Capital: Prague, Flag: undefined
// script.js:27 Name: Guatemala, Capital: Guatemala City, Flag: undefined
// script.js:27 Name: South Korea, Capital: Seoul, Flag: undefined
// script.js:27 Name: Estonia, Capital: Tallinn, Flag: undefined
// script.js:27 Name: Nepal, Capital: Kathmandu, Flag: undefined
// script.js:27 Name: Kosovo, Capital: Pristina, Flag: undefined
// script.js:27 Name: Botswana, Capital: Gaborone, Flag: undefined
// script.js:27 Name: Philippines, Capital: Manila, Flag: undefined
// script.js:27 Name: Saint Pierre and Miquelon, Capital: Saint-Pierre, Flag: undefined
// script.js:27 Name: Iraq, Capital: Baghdad, Flag: undefined
// script.js:27 Name: Lebanon, Capital: Beirut, Flag: undefined
// script.js:27 Name: Burundi, Capital: Gitega, Flag: undefined
// script.js:27 Name: Mongolia, Capital: Ulan Bator, Flag: undefined
// script.js:27 Name: Faroe Islands, Capital: Tórshavn, Flag: undefined
// script.js:27 Name: Paraguay, Capital: Asunción, Flag: undefined
// script.js:27 Name: Svalbard and Jan Mayen, Capital: Longyearbyen, Flag: undefined
// script.js:27 Name: Tokelau, Capital: Fakaofo, Flag: undefined
// script.js:27 Name: Guernsey, Capital: St. Peter Port, Flag: undefined
// script.js:27 Name: Caribbean Netherlands, Capital: Kralendijk, Flag: undefined
// script.js:27 Name: Algeria, Capital: Algiers, Flag: undefined
// script.js:27 Name: France, Capital: Paris, Flag: undefined
// script.js:27 Name: Netherlands, Capital: Amsterdam, Flag: undefined
// script.js:27 Name: Greenland, Capital: Nuuk, Flag: undefined
// script.js:27 Name: Sint Maarten, Capital: Philipsburg, Flag: undefined
// script.js:27 Name: Chad, Capital: N'Djamena, Flag: undefined
// script.js:27 Name: Finland, Capital: Helsinki, Flag: undefined
// script.js:27 Name: Panama, Capital: Panama City, Flag: undefined
// script.js:27 Name: Palestine, Capital: Ramallah,Jerusalem, Flag: undefined
// script.js:27 Name: Yemen, Capital: Sana'a, Flag: undefined
// script.js:27 Name: Brazil, Capital: Brasília, Flag: undefined
// script.js:27 Name: Nigeria, Capital: Abuja, Flag: undefined
// script.js:27 Name: Palau, Capital: Ngerulmud, Flag: undefined
// script.js:27 Name: Japan, Capital: Tokyo, Flag: undefined
// script.js:27 Name: Tanzania, Capital: Dodoma, Flag: undefined
// script.js:27 Name: Kazakhstan, Capital: Nur-Sultan, Flag: undefined
// script.js:27 Name: Portugal, Capital: Lisbon, Flag: undefined
// script.js:27 Name: South Georgia, Capital: King Edward Point, Flag: undefined
// script.js:27 Name: Sri Lanka, Capital: Sri Jayawardenepura Kotte, Flag: undefined
// script.js:27 Name: Germany, Capital: Berlin, Flag: undefined
// script.js:27 Name: Western Sahara, Capital: El Aaiún, Flag: undefined
// script.js:27 Name: Myanmar, Capital: Naypyidaw, Flag: undefined
// script.js:27 Name: Colombia, Capital: Bogotá, Flag: undefined
// script.js:27 Name: Peru, Capital: Lima, Flag: undefined
// script.js:27 Name: Senegal, Capital: Dakar, Flag: undefined
// script.js:27 Name: Kyrgyzstan, Capital: Bishkek, Flag: undefined
// script.js:27 Name: China, Capital: Beijing, Flag: undefined
// script.js:27 Name: Afghanistan, Capital: Kabul, Flag: undefined
// script.js:27 Name: Turkey, Capital: Ankara, Flag: undefined
// script.js:27 Name: Liberia, Capital: Monrovia, Flag: undefined
// script.js:27 Name: South Africa, Capital: Pretoria,Bloemfontein,Cape Town, Flag: undefined
// script.js:27 Name: Chile, Capital: Santiago, Flag: undefined
// script.js:27 Name: Malta, Capital: Valletta, Flag: undefined
// script.js:27 Name: Kiribati, Capital: South Tarawa, Flag: undefined
// script.js:27 Name: Cape Verde, Capital: Praia, Flag: undefined
// script.js:27 Name: Jersey, Capital: Saint Helier, Flag: undefined
// script.js:27 Name: Iceland, Capital: Reykjavik, Flag: undefined
// script.js:27 Name: Gambia, Capital: Banjul, Flag: undefined
// script.js:27 Name: Vanuatu, Capital: Port Vila, Flag: undefined
// script.js:27 Name: Uruguay, Capital: Montevideo, Flag: undefined
// script.js:27 Name: Oman, Capital: Muscat, Flag: undefined
// script.js:27 Name: Sudan, Capital: Khartoum, Flag: undefined
// script.js:27 Name: India, Capital: New Delhi, Flag: undefined
// script.js:27 Name: Laos, Capital: Vientiane, Flag: undefined
// script.js:27 Name: Aruba, Capital: Oranjestad, Flag: undefined
// script.js:27 Name: Martinique, Capital: Fort-de-France, Flag: undefined
// script.js:27 Name: Comoros, Capital: Moroni, Flag: undefined
// script.js:27 Name: Spain, Capital: Madrid, Flag: undefined
// script.js:27 Name: Antigua and Barbuda, Capital: Saint John's, Flag: undefined
// script.js:27 Name: Uzbekistan, Capital: Tashkent, Flag: undefined
// script.js:27 Name: Maldives, Capital: Malé, Flag: undefined
// script.js:27 Name: Gibraltar, Capital: Gibraltar, Flag: undefined
// script.js:27 Name: Indonesia, Capital: Jakarta, Flag: undefined
// script.js:27 Name: Pitcairn Islands, Capital: Adamstown, Flag: undefined
// script.js:27 Name: Vietnam, Capital: Hanoi, Flag: undefined
// script.js:27 Name: Malaysia, Capital: Kuala Lumpur, Flag: undefined
// script.js:27 Name: Cook Islands, Capital: Avarua, Flag: undefined
// script.js:27 Name: Eswatini, Capital: Mbabane, Flag: undefined
// script.js:27 Name: Uganda, Capital: Kampala, Flag: undefined
// script.js:27 Name: Madagascar, Capital: Antananarivo, Flag: undefined
// script.js:27 Name: Fiji, Capital: Suva, Flag: undefined
// script.js:27 Name: Norway, Capital: Oslo, Flag: undefined
// script.js:27 Name: Antarctica, Capital: undefined, Flag: undefined
// script.js:27 Name: Bouvet Island, Capital: undefined, Flag: undefined
// script.js:27 Name: Cyprus, Capital: Nicosia, Flag: undefined
// script.js:27 Name: Taiwan, Capital: Taipei, Flag: undefined
// script.js:27 Name: Papua New Guinea, Capital: Port Moresby, Flag: undefined
// script.js:27 Name: Rwanda, Capital: Kigali, Flag: undefined
// script.js:27 Name: DR Congo, Capital: Kinshasa, Flag: undefined
// script.js:27 Name: Cameroon, Capital: Yaoundé, Flag: undefined
// script.js:27 Name: Serbia, Capital: Belgrade, Flag: undefined
// script.js:27 Name: Lithuania, Capital: Vilnius, Flag: undefined
// script.js:27 Name: French Southern and Antarctic Lands, Capital: Port-aux-Français, Flag: undefined
// script.js:27 Name: Cambodia, Capital: Phnom Penh, Flag: undefined
// script.js:27 Name: Saint Helena, Ascension and Tristan da Cunha, Capital: Jamestown, Flag: undefined
// script.js:27 Name: United Arab Emirates, Capital: Abu Dhabi, Flag: undefined
// script.js:27 Name: Bermuda, Capital: Hamilton, Flag: undefined
// script.js:27 Name: Monaco, Capital: Monaco, Flag: undefined
// script.js:27 Name: Cuba, Capital: Havana, Flag: undefined
// script.js:27 Name: Hong Kong, Capital: City of Victoria, Flag: undefined
// script.js:27 Name: Northern Mariana Islands, Capital: Saipan, Flag: undefined
// script.js:27 Name: Togo, Capital: Lomé, Flag: undefined
// script.js:27 Name: Luxembourg, Capital: Luxembourg, Flag: undefined
// script.js:27 Name: Mauritius, Capital: Port Louis, Flag: undefined
// script.js:27 Name: Argentina, Capital: Buenos Aires, Flag: undefined
// script.js:27 Name: Grenada, Capital: St. George's, Flag: undefined
// script.js:27 Name: Nicaragua, Capital: Managua, Flag: undefined
// script.js:27 Name: Niue, Capital: Alofi, Flag: undefined
// script.js:27 Name: Ukraine, Capital: Kyiv, Flag: undefined
// script.js:27 Name: Guyana, Capital: Georgetown, Flag: undefined
// script.js:27 Name: Niger, Capital: Niamey, Flag: undefined
// script.js:27 Name: Benin, Capital: Porto-Novo, Flag: undefined
// script.js:27 Name: Saint Lucia, Capital: Castries, Flag: undefined
// script.js:27 Name: Tuvalu, Capital: Funafuti, Flag: undefined
// script.js:27 Name: Norfolk Island, Capital: Kingston, Flag: undefined
// script.js:27 Name: Egypt, Capital: Cairo, Flag: undefined
// script.js:27 Name: Saint Kitts and Nevis, Capital: Basseterre, Flag: undefined
// script.js:27 Name: Lesotho, Capital: Maseru, Flag: undefined
// script.js:27 Name: Tonga, Capital: Nuku'alofa, Flag: undefined
// script.js:27 Name: Georgia, Capital: Tbilisi, Flag: undefined
// script.js:27 Name: Ethiopia, Capital: Addis Ababa, Flag: undefined
// script.js:27 Name: Dominican Republic, Capital: Santo Domingo, Flag: undefined
// script.js:27 Name: Saint Vincent and the Grenadines, Capital: Kingstown, Flag: undefined
// script.js:27 Name: Belize, Capital: Belmopan, Flag: undefined
// script.js:27 Name: Isle of Man, Capital: Douglas, Flag: undefined
// script.js:27 Name: Morocco, Capital: Rabat, Flag: undefined
// script.js:27 Name: Haiti, Capital: Port-au-Prince, Flag: undefined
// script.js:27 Name: Mayotte, Capital: Mamoudzou, Flag: undefined
// script.js:27 Name: Burkina Faso, Capital: Ouagadougou, Flag: undefined
// script.js:27 Name: Bangladesh, Capital: Dhaka, Flag: undefined
// script.js:27 Name: Kuwait, Capital: Kuwait City, Flag: undefined
// script.js:27 Name: Réunion, Capital: Saint-Denis, Flag: undefined
// script.js:27 Name: Jamaica, Capital: Kingston, Flag: undefined
// script.js:27 Name: Romania, Capital: Bucharest, Flag: undefined
// script.js:27 Name: São Tomé and Príncipe, Capital: São Tomé, Flag: undefined
// script.js:27 Name: Bahamas, Capital: Nassau, Flag: undefined
// script.js:27 Name: Mexico, Capital: Mexico City, Flag: undefined
// script.js:27 Name: Saint Martin, Capital: Marigot, Flag: undefined
// script.js:27 Name: El Salvador, Capital: San Salvador, Flag: undefined
// script.js:27 Name: Saint Barthélemy, Capital: Gustavia, Flag: undefined
// script.js:27 Name: Micronesia, Capital: Palikir, Flag: undefined
// script.js:27 Name: Turkmenistan, Capital: Ashgabat, Flag: undefined
// script.js:27 Name: Anguilla, Capital: The Valley, Flag: undefined
// script.js:27 Name: Central African Republic, Capital: Bangui, Flag: undefined
// script.js:27 Name: Suriname, Capital: Paramaribo, Flag: undefined
// script.js:27 Name: Belgium, Capital: Brussels, Flag: undefined
// script.js:27 Name: Sweden, Capital: Stockholm, Flag: undefined
// script.js:27 Name: Bolivia, Capital: Sucre, Flag: undefined
// script.js:27 Name: Montenegro, Capital: Podgorica, Flag: undefined
// script.js:27 Name: Mozambique, Capital: Maputo, Flag: undefined
// script.js:27 Name: Latvia, Capital: Riga, Flag: undefined
// script.js:27 Name: Malawi, Capital: Lilongwe, Flag: undefined
// script.js:27 Name: Mali, Capital: Bamako, Flag: undefined
// script.js:27 Name: Vatican City, Capital: Vatican City, Flag: undefined
// script.js:27 Name: Montserrat, Capital: Plymouth, Flag: undefined
// script.js:27 Name: Austria, Capital: Vienna, Flag: undefined
// script.js:27 Name: Albania, Capital: Tirana, Flag: undefined
// script.js:27 Name: British Virgin Islands, Capital: Road Town, Flag: undefined
// script.js:27 Name: Zambia, Capital: Lusaka, Flag: undefined
// script.js:27 Name: French Guiana, Capital: Cayenne, Flag: undefined
// script.js:27 Name: Liechtenstein, Capital: Vaduz, Flag: undefined
// script.js:27 Name: Qatar, Capital: Doha, Flag: undefined
// script.js:27 Name: Solomon Islands, Capital: Honiara, Flag: undefined
// script.js:27 Name: Nauru, Capital: Yaren, Flag: undefined
// script.js:27 Name: Greece, Capital: Athens, Flag: undefined
// script.js:27 Name: Libya, Capital: Tripoli, Flag: undefined
// script.js:27 Name: Guinea-Bissau, Capital: Bissau, Flag: undefined
// script.js:27 Name: Barbados, Capital: Bridgetown, Flag: undefined
// script.js:27 Name: Honduras, Capital: Tegucigalpa, Flag: undefined
// script.js:27 Name: Somalia, Capital: Mogadishu, Flag: undefined
// script.js:27 Name: Cayman Islands, Capital: George Town, Flag: undefined
// script.js:27 Name: Italy, Capital: Rome, Flag: undefined
// script.js:27 Name: Wallis and Futuna, Capital: Mata-Utu, Flag: undefined
// script.js:27 Name: Andorra, Capital: Andorra la Vella, Flag: undefined
// script.js:27 Name: Ecuador, Capital: Quito, Flag: undefined
// script.js:27 Name: Kenya, Capital: Nairobi, Flag: undefined
// script.js:27 Name: Bahrain, Capital: Manama, Flag: undefined
// script.js:27 Name: United Kingdom, Capital: London, Flag: undefined
// script.js:27 Name: Guinea, Capital: Conakry, Flag: undefined
// script.js:27 Name: Heard Island and McDonald Islands, Capital: undefined, Flag: undefined
// script.js:27 Name: Russia, Capital: Moscow, Flag: undefined
// script.js:27 Name: Brunei, Capital: Bandar Seri Begawan, Flag: undefined
// script.js:27 Name: Zimbabwe, Capital: Harare, Flag: undefined
// script.js:27 Name: Guam, Capital: Hagåtña, Flag: undefined
// script.js:27 Name: Australia, Capital: Canberra, Flag: undefined
// script.js:27 Name: Slovenia, Capital: Ljubljana, Flag: undefined
// script.js:27 Name: Belarus, Capital: Minsk, Flag: undefined
// script.js:27 Name: Thailand, Capital: Bangkok, Flag: undefined
// script.js:27 Name: New Zealand, Capital: Wellington, Flag: undefined
// script.js:27 Name: Tunisia, Capital: Tunis, Flag: undefined
// script.js:27 Name: Marshall Islands, Capital: Majuro, Flag: undefined
// script.js:27 Name: Sierra Leone, Capital: Freetown, Flag: undefined
// script.js:27 Name: Bhutan, Capital: Thimphu, Flag: undefined
// script.js:27 Name: United States, Capital: Washington, D.C., Flag: undefined
// script.js:27 Name: Switzerland, Capital: Bern, Flag: undefined
// script.js:27 Name: Falkland Islands, Capital: Stanley, Flag: undefined
// script.js:27 Name: Cocos (Keeling) Islands, Capital: West Island, Flag: undefined
// script.js:27 Name: Gabon, Capital: Libreville, Flag: undefined
// script.js:27 Name: Dominica, Capital: Roseau, Flag: undefined
// script.js:27 Name: Canada, Capital: Ottawa, Flag: undefined
// script.js:27 Name: Trinidad and Tobago, Capital: Port of Spain, Flag: undefined
// script.js:27 Name: Puerto Rico, Capital: San Juan, Flag: undefined
// script.js:27 Name: Singapore, Capital: Singapore, Flag: undefined
// script.js:27 Name: Hungary, Capital: Budapest, Flag: undefined
// script.js:27 Name: Costa Rica, Capital: San José, Flag: undefined
// script.js:27 Name: Israel, Capital: Jerusalem, Flag: undefined
// script.js:27 Name: Bulgaria, Capital: Sofia, Flag: undefined
// script.js:27 Name: Azerbaijan, Capital: Baku, Flag: undefined
// script.js:27 Name: Timor-Leste, Capital: Dili, Flag: undefined
// script.js:27 Name: Iran, Capital: Tehran, Flag: undefined
// script.js:27 Name: Croatia, Capital: Zagreb, Flag: undefined
// script.js:27 Name: Ivory Coast, Capital: Yamoussoukro, Flag: undefined
  
    // Problem 4: Print the total population of countries using reduce function
    const totalPopulation = countriesData.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of countries:', totalPopulation);
    
    //output
    //Total population of countries: 7777721563
  
    // Problem 5: Print the country that uses US dollars as currency
    const usDollarCountry = countriesData.find(country => {
      return country.currencies && country.currencies.USD;
    });
    console.log('Country that uses US dollars:', usDollarCountry);

    //output
    //Country that uses US dollars: {name: {…}, tld: Array(1), cca2: 'AS', ccn3: '016', cca3: 'ASM', …}
  })();
  