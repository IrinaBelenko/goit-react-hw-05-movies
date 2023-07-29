import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'service/movies-service';

export const useFetchMovies = page => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const result = await getTrendingMovie(page);

        setMovies(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(() => false);
      }
    };

    getMovies();
  }, [page]);

  return { movies, error, loading };
};
