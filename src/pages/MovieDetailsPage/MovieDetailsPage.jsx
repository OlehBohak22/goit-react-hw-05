import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../api";
import BackLink from "../../components/BackLink/BackLink";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function fetchArticle() {
      try {
        const article = await fetchMovieById(id);
        setMovie(article);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      }
    }

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (!movie) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <BackLink to={backLinkHref.current}>Back</BackLink>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />

        <div>
          <h1>
            {movie.original_title} <span>{`(${movie.release_date})`}</span>{" "}
          </h1>

          <p> User score {Math.round((movie.vote_average / 10) * 100)}%</p>

          <div>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
          </div>

          <div>
            <h4>Overview</h4>
            <ul>{movie.genres.map((genre) => genre.name)}</ul>
          </div>
        </div>
      </div>

      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>

      <Outlet />
    </>
  );
}
