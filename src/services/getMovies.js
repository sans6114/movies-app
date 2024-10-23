export const getMovies = async (query) => {
    if(query === '') return null
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=27b36195&s=${query}`)
        const data = await res.json()
        // if(data.response === 'false'){
        //     throw new Error('No films with that search')
        // }
        const movies = data.Search
        return movies?.map(movie => ({
            id: movie.imdbID,
            img: movie.Poster,
            title: movie.Title,
            year: movie.Year
        }))
    } catch (error) {
        console.log('error searching the movie', error)
    }
}