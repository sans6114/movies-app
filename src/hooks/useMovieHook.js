import {
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import { getMovies } from '../services/getMovies';

export const useMovieHook = ({query, sort}) => {
  const [responseMovies, setResponseMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousQuery = useRef(query)

  const getNewMovies = useCallback(async (query) => {
    if(query === previousQuery.current) return
    try {
      setLoading(true)
      previousQuery.current = query
      const newMovies = await getMovies(query)
      setResponseMovies(newMovies || [])
    } catch (e) {
      console.log('error in searching', e)
      setResponseMovies([])
    } finally{
      setLoading(false)
    }
  }, [])
  


  const sortedMovies = useMemo(() => {
    return sort 
    ? [...responseMovies].sort((a,b) => a.title.localeCompare(b.title))
    : responseMovies
  }, [sort, responseMovies])
  // the return of my hook
  return {
    movies: sortedMovies,
    getNewMovies,
    loading
  }
}
