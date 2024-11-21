import MoviesList from "../../components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../api";

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
      <MoviesList movies={movies} />
    </>
  );
}
