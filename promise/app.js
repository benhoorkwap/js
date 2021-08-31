
window.addEventListener('load', () => {


    // Start Fetching Countries
    const displayItems = async () => {
        const countries = await fetchAllCountries();
        
        // Create Elements
        createElements(countries) 
    }

    displayItems()

})



const format = (searchTerm) => {
    // Pattern matches a non-boundary position between characters of 3 digits not
    // from the end.
    const pattern = /\B(?=(\d{3})+(?!\d))/g;

    // Replace matching pattern with a comma separator.
    return searchTerm.replace(pattern, ',')
}



const createElements = (items) => {

    // Retrieve the element with id=grid-container.
    const root = document.getElementById("grid-container");

    // Create elements when items are available
    if(items.length > 0) {
        
        // Create element and append to DOM for each available item.
        items.forEach(item => {

            const {flag, name, capital, population} = { flag: item.flag,   
                                                        name: item.name, 
                                                        capital: item.capital, 
                                                        population: item.population
                                                        }
            
            // This represents the wrapper element
            const wrapperElement = document.createElement('div')

            // Add CSS Style Token to elemnts
            wrapperElement.classList.add('grid-item')

            // Create Child elements
            const imageElement = new Image();
            const nameElement = document.createElement('span')
            const capitalElement = document.createElement('span');
            const popElement = document.createElement('span');

            // Assign values to all elements
            imageElement.src = flag;
            imageElement.alt = 'Country image'
            nameElement.innerText = name;
            capitalElement.innerText = capital;
            popElement.innerText = format(population.toLocaleString())

            // Add some CSS Styles Token to elements
            nameElement.classList.add('country-name')
            capitalElement.classList.add('country-capital')
            popElement.classList.add('country-pop')
            


            // Append each element to wrapper element
            wrapperElement.appendChild(imageElement)
            wrapperElement.appendChild(nameElement)
            wrapperElement.appendChild(capitalElement)
            wrapperElement.appendChild(popElement)
            
            

            // Append child to DOM
            root.appendChild(wrapperElement)
        })
    }
}
 
const fetchAllCountries = async () => {
   const response =  await fetch('https://restcountries.eu/rest/v2/all')
    const res = await response.json()
    const items = res.slice(0, 10)
    return items;

}
