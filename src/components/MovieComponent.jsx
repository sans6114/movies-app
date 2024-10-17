import PropTypes from 'prop-types';

//component to watch the results
const MovieComponent = ({ movies }) => {
    return (
        <ul className='grid grid-cols-1 md:grid-cols-4 grid-rows-1 gap-6 mx-5 md:mx-0'>
            {
                movies.map(movie => (
                    <li className='py-2 shadow-2xl rounded-xl' key={movie.id}>
                        <img className='rounded-t-lg w-full h-auto md:h-3/4' src={movie.img} alt={`poster of movie: ${movie.title}`} />
                        <div className='px-4'>
                        <h3 className='text-3xl font-bold'>{movie.title}</h3>
                        <p className='text-gray-500'>{movie.year}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
//component for case of error
const NoMoviesComponent = () => {
    return (
        <p>Ups! no films with that title.</p>
    )
}
export const Movies = ({ movies }) => {
    const hasMovies = movies.length > 0
    return (
        <>
            {
                hasMovies ? (
                    <MovieComponent movies={movies} />
                ) : (
                    <NoMoviesComponent/>
                )
            }
        </>
    )
}
// mis proptypes
Movies.propTypes = {
    movies: PropTypes.array.isRequired
};
MovieComponent.propTypes = {
    movies: PropTypes.array.isRequired
};