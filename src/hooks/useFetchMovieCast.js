import { useEffect, useState } from 'react';
import { getCastByID } from 'service/movies-service';

export const useFetchMovieCast = id => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieCast = async () => {
      setLoading(true);
      try {
        const result = await getCastByID(id);
        setMovieCast(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(() => false);
      }
    };

    getMovieCast();
  }, [id]);

  return { movieCast, error, loading };
};
