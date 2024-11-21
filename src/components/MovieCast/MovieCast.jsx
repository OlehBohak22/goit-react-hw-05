import { useEffect, useState } from "react";
import { fetchMovieCreditsById } from "../../api";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const [credits, setCredit] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      const data = await fetchMovieCreditsById(id);
      setCredit(data);
    };

    fetchCredits();
  }, [id]);

  if (!credits) {
    return <p>dfhbf</p>;
  }

  return (
    <>
      <ul>
        {credits.map((credit) => (
          <li key={credit.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
              alt={credit.name}
            />
            <p>{credit.name}</p>

            <p>Character {credit.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
