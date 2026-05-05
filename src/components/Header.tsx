import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/consultation">Consultation</Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
