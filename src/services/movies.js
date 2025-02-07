import axios from 'axios';
import { API_PATH } from './api';

const ACCESS_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzMzOTEzYTJkZTIyOGFiMjA3ZDdmOTk4Mzk1MWVjOSIsIm5iZiI6MTczODYwOTUyMi4wMzYsInN1YiI6IjY3YTExMzcxNmI5ZjY2NmE5OTAyZThlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Nr1DhMg3LfLZbeS4x0Qrd7woQliC2_uHtJqYMyoiK8';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
  Authorization: `Bearer ${ACCESS_KEY}`,
  accept: 'application/json',
};

export const getMovieTrend = async () => {
  const response = await axios.get(API_PATH.trend, {});
  return response.data;
};

export const getMovieSearch = async (query, page = 1) => {
  const response = await axios.get(API_PATH.search, {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export const getMovieById = async id => {
  const response = await axios.get(API_PATH.movie + id + '?');
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(API_PATH.movie + id + '/reviews?');
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(API_PATH.movie + id + '/credits?');
  return response.data;
};
