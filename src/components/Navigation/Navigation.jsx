import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movie</NavLink>
      </ul>
    </header>
  );
}
