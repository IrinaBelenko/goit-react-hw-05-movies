import { Container, Heading, Section } from 'components/Home/Home.styled';
import { Loader } from 'components/Loader/Loader';
import { Grid, GridItem } from 'components/MoviesList/MoviesList.styled';
import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';

import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const { movieReviews, error, loading } = useFetchMovieReviews(movieId);

  return (
    <Section>
      <Container>
        {error && <Heading>{error}</Heading>}
        {loading && <Loader />}
        {movieReviews.length > 0 && (
          <Grid>
            {movieReviews.map(({ author, content }, index) => (
              <GridItem key={index + 1}>
                <h2>{author}</h2>
                <p>{content}</p>
              </GridItem>
            ))}
          </Grid>
        )}
      </Container>
    </Section>
  );
};
