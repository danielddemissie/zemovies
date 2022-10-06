export const nodeEnv = process.env.NODE_ENV;

export const imdbUrl = process.env.REACT_APP_IMDB_URL;

export const backendUrl =
  nodeEnv === 'development'
    ? process.env.REACT_APP_BACKEND_DEV
    : process.env.REACT_APP_BACKEND_PROD;

export const tmdbUrl = process.env.REACT_APP_TMDB_URL;
export const tmdbApiKey = process.env.REACT_APP_API_KEY;
export const tmdbApiToken = process.env.REACT_APP_API_TOKEN;
