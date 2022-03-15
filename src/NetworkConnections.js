export const API_KEY = '22812a0967bbe11831dee7e67fa34314'

export const fetchMoviesFromDatabase = (route,query='') => {
    if(query.length !== 0)
        query = '&query=' + query + '&page=1'
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${API_KEY}${query}`) 
    .then(res => res.json())
    
}