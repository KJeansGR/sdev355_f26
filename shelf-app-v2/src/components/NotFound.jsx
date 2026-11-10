import { Link } from "react-router";

function NotFound() {
  return (
    <section className="page">
      <h2 className="page-title">Nothing at that address</h2>
      <p className="page-lead">
        This app has no page at that URL. It may be a typo, or a link from
        somewhere that has moved on.
      </p>
      <p className="page-lead">
        Try <Link to="/books">the shelf</Link>, or{" "}
        <Link to="/">the front page</Link>.
      </p>
    </section>
  );
}

export default NotFound;
