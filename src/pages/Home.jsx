import { Heading, Section } from 'components/Home/Home.styled';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { useFetchMovies } from 'hooks/useFetchMovies';

const Home = () => {
  const { movies, error, loading } = useFetchMovies(1);

  return (
    <Section>
      <Container>
        {error && <Heading>{error}</Heading>}
        {movies.length > 0 && <MoviesList movies={movies} />}
        {loading && <Loader />}
      </Container>
    </Section>
  );
};

export default Home;
