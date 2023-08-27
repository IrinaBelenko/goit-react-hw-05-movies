export const transformMoviesReviews = data => {
  return data.map(({ author, content }) => ({
    author,
    content,
  }));
};
