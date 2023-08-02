export const transformMovieInfo = data => {
  return data.map(
    ({ id, title, genres, poster_path, overview, popularity }) => ({
      id,
      title,
      genres,
      poster_path,
      overview,
      popularity,
    })
  );
};
