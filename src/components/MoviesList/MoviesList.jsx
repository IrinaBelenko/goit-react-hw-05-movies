import { Link, useLocation } from 'react-router-dom';
import { GridItem, Grid } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Grid>
      {movies.map(({ id, title }) => (
        <GridItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
