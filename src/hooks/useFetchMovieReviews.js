import { useEffect, useState } from 'react';
import { getReviewsByID } from 'service/movies-service';

export const useFetchMovieReviews = id => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieReviews = async () => {
      setLoading(true);
      try {
        const result = await getReviewsByID(id);
        setMovieReviews(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(() => false);
      }
    };

    getMovieReviews();
  }, [id]);

  return { movieReviews, error, loading };
};
