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
  
    // Problem 2: Get all countries with a population of less than 2 lakhs using Filter function
    const lowPopulationCountries = countriesData.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', lowPopulationCountries);
  
    // Problem 3: Print name, capital, and flag using forEach function
    console.log('Details of countries:');
    countriesData.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
    });
  
    // Problem 4: Print the total population of countries using reduce function
    const totalPopulation = countriesData.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of countries:', totalPopulation);
  
    // Problem 5: Print the country that uses US dollars as currency
    const usDollarCountry = countriesData.find(country => {
      return country.currencies && country.currencies.USD;
    });
    console.log('Country that uses US dollars:', usDollarCountry);
  })();
  