import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzY1MTVjYzE4MDk3YWQ0YzU5ZWQ3NGFjMjY1OWE3ZiIsIm5iZiI6MTczMjAxMTM5My43NzU3MDg3LCJzdWIiOiI2NzNjNjQzMzBkMGQ4ZGM4MjdlOTc2ZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mwTaHEXyo0bHYiicZ0xN2zBo_d63SWywJeDZPD9nCo4",
  },
};

export const fetchMovies = async () => {
  const response = await axios.get(
    "/3/trending/movie/week?language=en-US",
    options
  );

  return response.data.results;
};

export const fetchMovieById = async (id) => {
  const response = await axios.get(`/3/movie/${id}?language=en-US`, options);

  return response.data;
};

export const fetchMovieCreditsById = async (id) => {
  const response = await axios.get(
    `/3/movie/${id}/credits?language=en-US`,
    options
  );

  return response.data.cast;
};

export const fetchReviewsById = async (id) => {
  const response = await axios.get(
    `/3/movie/${id}/reviews?language=en-US`,
    options
  );

  return response.data.results;
};

export const fetchMoviesByTopic = async (topic) => {
  const response = await axios.get(
    `/3/search/movie?query=${topic}&include_adult=false&language=en-US&page=1`,
    options
  );

  return response.data.results;
};
