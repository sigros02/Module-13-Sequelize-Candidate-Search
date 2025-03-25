import { Link, useLocation } from "react-router-dom";

// TODO: Add necessary code to display the navigation bar and link between the pages
const Nav = () => {
  const currentPage = useLocation().pathname;

  console.log("current page:", currentPage);

  return (
    <nav>
      <Link className=" nav-item nav-link" to="/">
        Home
      </Link>
      <Link className=" nav-item nav-link" to="/SavedCandidates">
        Potential Candidates
      </Link>
    </nav>
  );
};

export default Nav;
