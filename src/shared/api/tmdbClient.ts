import axios from 'axios';

import { env } from './env';

export const tmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
  },
});

tmdbClient.interceptors.request.use(config => {
  if (!env.tmdbApiToken) {
    throw new Error('TMDB_API_TOKEN is not configured');
  }

  config.headers.Authorization = `Bearer ${env.tmdbApiToken}`;

  return config;
});
