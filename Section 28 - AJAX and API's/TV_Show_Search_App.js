//This function makes the API data request for whatever search we input and also clears the images when a new search is performed
const form = document.querySelector('#searchForm');
const displayArea = document.getElementById('requestImages');
form.addEventListener('submit', async function(event){
    event.preventDefault();
    displayArea.innerHTML = '';
    const searchTerm =  form.elements.query.value;
    const config = {params:{q:searchTerm}}
    const response = await axios.get('https://api.tvmaze.com/search/shows', config);
    makeImages(response.data);
    form.elements.query.value = '';
})

//This function filters out just the medium image URLs and appends them to the page (and only if a medium image is availale) and clears the search box after submission
const makeImages = function(shows){
    for(let result of shows){
        if(result.show.image){
            const tvShowImage = document.createElement('IMG');
            tvShowImage.src = result.show.image.medium;
            displayArea.append(tvShowImage);
        }
    }
}