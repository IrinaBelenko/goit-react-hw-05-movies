export const transformMovieInfo = (
  { id, title, genres, poster_path, overview, vote_average },
  URL_FOR_IMG
) => {
  return {
    id,
    title,
    genres: genres
      .slice(0, 3)
      .map(({ name }) => name)
      .join(' '),
    poster: `${URL_FOR_IMG}${poster_path}`,
    overview,
    score: Math.round((vote_average / 10) * 100),
  };
};
