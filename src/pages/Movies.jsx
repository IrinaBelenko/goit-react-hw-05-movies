import { Container, Heading, Section } from 'components/Home/Home.styled';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useFetchMoviesQuery } from 'hooks/useFetchMoviesQuery';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [query] = useSearchParams();
  const { movies, error, loading } = useFetchMoviesQuery(
    query.get('query') ?? ''
  );

  return (
    <Section>
      <Container>
        <SearchForm />
        {error && <Heading>{error}</Heading>}
        {loading && <Loader />}
        {movies.length > 0 && <MoviesList movies={movies} />}
      </Container>
    </Section>
  );
};

export default Movies;
