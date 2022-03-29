import { ADD_MOVIE, SEARCH_RATE, SEARCH_TITLE } from "../types/movieTypes";

export const addMovie = newMovie => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};
export const getRate = rate => {
  return {
    type: SEARCH_RATE,
    payload: rate,
  };
};
export const getTitle = title => {
  return {
    type: SEARCH_TITLE,
    payload: title,
  };
};
