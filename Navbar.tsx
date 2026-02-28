
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/Home">Home</Link> |{" "}
      <Link to="/Services">Services</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;



