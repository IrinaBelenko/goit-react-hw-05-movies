import { useEffect, useState } from 'react';
import { getMovieByQuery } from 'service/movies-service';

export const useFetchMoviesQuery = query => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const result = await getMovieByQuery(query);

        setMovies(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(() => false);
      }
    };

    getMovies();
  }, [query]);

  return { movies, error, loading };
};
