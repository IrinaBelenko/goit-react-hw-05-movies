import axios from 'axios';
import { transformMoviesData } from 'helpers/transformMoviesData';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '73710af18e1d8c1fe38f9da2acd57c64';

export const getTrendingMovie = async (page = 1) => {
  const { data } = await axios.get(`trending/movie/day`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      include_adult: false,
      include_video: false,
      page,
    },
  });

  const res = transformMoviesData(data.results);
  return res;
};

export const getInfoMovieByID = async movieID => {
  const { data } = await axios.get(`movie/${movieID}`, {
    params: {
      api_key: API_KEY,
    },
  });
  const res = transformMoviesData(data);
  return res;
};
