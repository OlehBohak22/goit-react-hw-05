import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <p>Page is not found</p>
      <Link to="/">Home</Link>
    </>
  );
}
