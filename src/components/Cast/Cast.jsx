import { Container, Heading, Section } from 'components/Home/Home.styled';
import { Loader } from 'components/Loader/Loader';
import { useFetchMovieCast } from 'hooks/useFetchMovieCast';
import { useParams } from 'react-router-dom';
import { Grid, GridItem, Title } from './Cast.styled';
import { Img } from 'components/MovieDetails/MovieDetails.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const { movieCast, error, loading } = useFetchMovieCast(movieId);

  return (
    <Section>
      <Container>
        {error && <Heading>{error}</Heading>}
        {loading && <Loader />}
        {movieCast.length > 0 && (
          <Grid>
            {movieCast.map(({ character, original_name, profile }, index) => (
              <GridItem key={index + 1}>
                <Img src={profile} alt={character} />
                <Title>{character}</Title>
                <p>{original_name}</p>
              </GridItem>
            ))}
          </Grid>
        )}
      </Container>
    </Section>
  );
};
