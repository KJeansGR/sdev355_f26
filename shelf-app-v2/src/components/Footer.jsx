import { Link } from "react-router";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-line">
        Shelf · SDEV 355 · <Link to="/about">what this is</Link>
      </p>
    </footer>
  );
}

export default Footer;
