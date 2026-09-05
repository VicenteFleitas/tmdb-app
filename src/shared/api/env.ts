import Config from 'react-native-config';

export const env = {
  tmdbApiToken: Config.TMDB_API_TOKEN ?? '',
};
