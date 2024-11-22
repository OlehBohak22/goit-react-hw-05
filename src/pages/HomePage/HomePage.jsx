import { useEffect, useState } from "react";
import { fetchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const data = await fetchMovies();
      setMovies(data);
    }

    fetchArticles();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}
