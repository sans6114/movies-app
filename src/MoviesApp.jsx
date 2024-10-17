import { Movies } from './components/MovieComponent';
import { useMovieHook } from './hooks/useMovieHook';
import { useSearchHook } from './hooks/useSearchHook';

export const MoviesApp = () => {
  const { movies } = useMovieHook()
  const { query, error, updateQuery } = useSearchHook()
 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(query)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    updateQuery(e.target.value)
  }

  return (
    <>
      <header>
        <form onSubmit={handleSubmit} className="flex flex-col p-5 w-96 mx-auto rounded-3xl my-4 border shadow-2xl">
          <input name='query' onChange={handleChange} value={query} className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type='text' placeholder='Avengers, Star wars, Megamente...' />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/4 mx-auto mt-5" type="submit">Search</button>
        </form>
        {error && (
          <div className="w-2/4 mx-auto p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Danger alert!</span> {error}.
          </div>
        )}
      </header>
      <main className="flex flex-col items-center max-w-7xl mx-auto">
        {/* the logic for movies is in that component */}
        <Movies movies={movies} />
      </main>
    </>
  )
}


