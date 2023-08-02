import { useEffect, useState } from 'react';
import { getInfoMovieByID } from 'service/movies-service';

export const useFetchMovieInfo = id => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieInfo = async () => {
      setLoading(true);
      try {
        const result = await getInfoMovieByID(id);
        setMovieInfo(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(() => false);
      }
    };

    getMovieInfo();
  }, [id]);

  return { movieInfo, error, loading };
};
