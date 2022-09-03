let input = document.querySelector('input')
let div = document.querySelector('div')
let countries = [];
fetch('countries.json')
.then((response) => response.json())
.then((el) =>
   countries = el
).catch((error) => console.error(error))
   input.addEventListener('keydown', (e) => {
    let userInput = e.target.value.toLowerCase();
    let filteredCountries =
    countries.filter((item) => {
             return item.name.toLowerCase().includes(userInput)
             || item.iso3.toLowerCase().includes(userInput)
        })
      display(filteredCountries);
  })
function display(countries) {
    const htmlString = countries
    .map((country) => {
      return `<p>${country.name} ${country.flag}</p>`
    }).join('')
    div.innerHTML = htmlString;
}
  //
