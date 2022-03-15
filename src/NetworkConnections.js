export const API_KEY = '22812a0967bbe11831dee7e67fa34314'

export const fetchMoviesFromDatabase =(route, params='') => {
   console.log(params)
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${API_KEY}${params}`)
    .then(res => res.json())
    
}