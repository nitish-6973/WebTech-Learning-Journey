const searchFrom = document.getElementById("search-from");
const searchInput = document.getElementById("search-Input");
const searchResults = document.getElementById("search-results");


const themToggler = document.getElementById("them-toggler");
const body = document.body;


async function searchWikipeida(query){
    const encodedQuery = encodeURIComponent(query);
    const endpoint = '';


    const response = await fetch (endpoint);


    if(!response.ok){
        throw new Error("Faild to fetch search results from wikipedia API.");

    }

    const json = await response.json();
    return json;
}
