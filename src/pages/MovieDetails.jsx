import { Container, Heading, Section } from 'components/Home/Home.styled';
import { Loader } from 'components/Loader/Loader';
import {
  Card,
  CardBody,
  RowG,
  ColMd4,
  ColMd8,
  Img,
} from 'components/MovieDetails/MovieDetails.styled';
import { useFetchMovieInfo } from 'hooks/useFetchMovieInfo';
import { Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const {
    movieInfo: { id, title, genres, poster, overview, score },
    error,
    loading,
  } = useFetchMovieInfo(movieId);

  return (
    <Section>
      <Container>
        {error && <Heading>{error}</Heading>}
        {loading && <Loader />}
        {id && (
          <>
            <Card>
              <RowG>
                <ColMd4>
                  <Img
                    src={poster}
                    className="img-fluid rounded-start"
                    alt={title}
                  />
                </ColMd4>
                <ColMd8>
                  <CardBody>
                    <h2>{title}</h2>
                    <p>User score: {score}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres}</p>
                  </CardBody>
                </ColMd8>
              </RowG>
            </Card>
            <ul>
              <li>
                <Link to="Cast">Cast</Link>
              </li>
              <li>
                <Link to="Reviews">Reviews</Link>
              </li>
            </ul>
            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </>
        )}
      </Container>
    </Section>
  );
};

export default MovieDetails;
