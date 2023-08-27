export const transformMoviesCast = (data, URL_FOR_IMG) => {
  return data.map(({ character, original_name, profile_path }) => ({
    character,
    original_name,
    profile: `${URL_FOR_IMG}${profile_path}`,
  }));
};
