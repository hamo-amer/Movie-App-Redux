import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function ListMovies() {
  const movies = useSelector(state => state.movieReducer.movies);
  const searchRate = useSelector(state => state.movieReducer.searchRate);
  const searchTitle = useSelector(state => state.movieReducer.searchTitle);
  return (
    <div
      style={{
        paddingTop: "100px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "90%",
        margin: "auto",
      }}
    >
      {movies
        .filter(
          movie =>
            movie.rate >= searchRate &&
            movie.title.toLowerCase().includes(searchTitle.toLowerCase().trim())
        )
        .map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

export default ListMovies;
