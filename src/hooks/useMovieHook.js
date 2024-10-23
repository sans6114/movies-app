import { useState } from 'react';

import { getMovies } from '../services/getMovies';

export const useMovieHook = ({query}) => {
  const [responseMovies, setResponseMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getNewMovies = async() => {
    try {
      setLoading(true)
      const newMovies = await getMovies(query)
      setResponseMovies(newMovies || [])
    } catch (e) {
      console.log('error in searching', e)
      setResponseMovies([])
    } finally{
      setLoading(false)
    }
  }

  // //servicio
  // useEffect(() => {
  //   getNewMovies()

  // }, [query])
  
  // the return of my hook
  return {
    movies: responseMovies,
    getNewMovies,
    loading
  }
}
