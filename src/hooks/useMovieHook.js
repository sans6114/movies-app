import withResults from '../mockup/with-results.json';

export const useMovieHook = () => {
  const movies = withResults.Search
  //mapper my dates
  const moviesMapped = movies?.map(movie => ({
    id: movie.imdbID,
    img: movie.Poster,
    title: movie.Title,
    year: movie.Year
  }))
  // the return of my hook
  return {
    movies: moviesMapped
  }
}
