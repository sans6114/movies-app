import {
  useEffect,
  useRef,
  useState,
} from 'react';

export const useSearchHook = () => {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
      if(isFirstInput.current){
            isFirstInput.current = query === ''
            return
        }
      if (query === '') {
        setError('You can\'t search empty films');
        return;
      }
      if (query.length < 3) {
        setError('You can\'t search films with less than 3 characters');
        return;
      }
      if (!isNaN(query)) {
        setError('Not numbers, search with permitted characters');
        return;
      }
      setError(null)
    }, [query])
  
    return {
      query,
      error,
      updateQuery: setQuery
    }
  }