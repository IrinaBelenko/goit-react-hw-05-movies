import axios from 'axios';
import { transformMovieInfo } from 'helpers/transformMovieInfo';
import { transformMoviesCast } from 'helpers/transformMoviesCast';
import { transformMoviesData } from 'helpers/transformMoviesData';
import { transformMoviesReviews } from 'helpers/transformMoviesReviews';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '73710af18e1d8c1fe38f9da2acd57c64';
const URL_FOR_IMG = 'https://image.tmdb.org/t/p/w500';

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

  const res = transformMovieInfo(data, URL_FOR_IMG);
  return res;
};

export const getCastByID = async movieID => {
  const { data } = await axios.get(`movie/${movieID}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  const res = transformMoviesCast(data.cast, URL_FOR_IMG);
  return res;
};

export const getReviewsByID = async movieID => {
  const { data } = await axios.get(`movie/${movieID}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  const res = transformMoviesReviews(data.results);
  return res;
};
