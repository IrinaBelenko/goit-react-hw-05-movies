import { useFetchMovieCast } from 'hooks/useFetchMovieCast';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const { movieCast, error, loading } = useFetchMovieCast(movieId);
  console.log(movieCast, error, loading);
  return <p>Cast</p>;
};
