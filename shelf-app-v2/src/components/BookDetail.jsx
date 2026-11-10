import { useParams } from "react-router";

import { API } from "../api.js";
import { useFetch } from "../hooks/useFetch.js";
import StatusTag from "./StatusTag.jsx";

function BookDetail() {
  const { id } = useParams();
  const { data: book, loading, error } = useFetch(
    `${API}/${id}`,
    null
  );

  if (loading) {
    return <p className="detail detail-wait">Opening that book…</p>;
  }

  if (error) {
    return <p className="detail detail-failed">Could not open it: {error}.</p>;
  }

  return (
    <section className="detail">
      <div className="detail-top">
        <h2 className="detail-title">{book.title}</h2>
        <StatusTag status={book.status} />
      </div>
      <p className="detail-author">{book.author}</p>
      {book.notes && <p className="detail-notes">{book.notes}</p>}
    </section>
  );
}

export default BookDetail;
