import { useEffect, useState } from "react";
import { fetchReviewsById } from "../../api";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const [reviews, setReviews] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      const data = await fetchReviewsById(id);
      setReviews(data);
    };

    fetchCredits();
  }, [id]);

  if (!reviews) {
    return <p>dfhbf</p>;
  }

  return (
    <>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
