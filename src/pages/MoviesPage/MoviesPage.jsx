import { Field, Formik, Form } from "formik";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useState, useEffect } from "react";
import { fetchMoviesByTopic } from "../../api";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchMovies = async (topic) => {
    try {
      const fetchedMovies = await fetchMoviesByTopic(topic);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    const topic = searchParams.get("topic");
    if (topic) {
      fetchMovies(topic);
    }
  }, [searchParams]);

  const handleSearch = (values) => {
    const { topic } = values;
    if (topic) {
      setSearchParams({ topic });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <Formik
        initialValues={{ topic: searchParams.get("topic") || "" }}
        onSubmit={handleSearch}
      >
        <Form>
          <Field type="text" name="topic" placeholder="Enter topic" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <MoviesList movies={movies} />
    </>
  );
}
