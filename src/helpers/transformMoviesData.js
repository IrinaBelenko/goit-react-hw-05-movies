export const transformMoviesData = data => {
  return data.map(({ id, title }) => ({
    id,
    title,
  }));
};
