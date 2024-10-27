import {
  useCallback,
  useState,
} from 'react';

import debounce from 'just-debounce-it';

import { Movies } from './components/MovieComponent';
import { useMovieHook } from './hooks/useMovieHook';
import { useSearchHook } from './hooks/useSearchHook';

export const MoviesApp = () => {
  const { query, error, updateQuery } = useSearchHook()
  const [sort, setSort] = useState(false)
  const { movies, getNewMovies, loading } = useMovieHook({ query, sort })


  const debounceGetMovies = useCallback( debounce(query => {
    getNewMovies(query)
  },400),[getNewMovies])

  const handleSort = () => {
    setSort(!sort)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    getNewMovies(query)
  }

  const handleChange = (e) => {
    updateQuery(e.target.value)
    debounceGetMovies(query)
  }

  return (
    <>
      <header className='p-4 my-4'>
        <h1 className='font-bold text-4xl text-center'>Films App</h1>
        <form onSubmit={handleSubmit} className="flex p-5 w-full flex-col md:flex-row gap-y-5 md:gap-0 md:w-2/4 mx-auto rounded-3xl my-4 border shadow-2xl">
          <input name='query' onChange={handleChange} value={query} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type='text' placeholder='Avengers, Star wars, Megamente...' />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm mx-1" type="submit">Search</button>
          <div className='flex items-center md:w-1/4 ml-2'>
            <input className='w-4 h-4' type="checkbox" onChange={handleSort} checked={sort} />
            <label className='ms-2 font-semibold'>sort movies?</label>
          </div>
        </form>
        {/* span para mostrar mis errores  */}
        {error && (
          <div className="w-2/4 mx-auto p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Danger alert!</span> {error}.
          </div>
        )}
      </header>
      <main className="flex flex-col items-center max-w-7xl mx-auto">
        {
          loading ?
            <p>Searching...</p>
            : <Movies movies={movies} />
        }
      </main>
    </>
  )
}


