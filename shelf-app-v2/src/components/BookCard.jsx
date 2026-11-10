import { useState } from "react";
import { Link } from "react-router";

import StatusTag, { STATUSES, LABELS } from "./StatusTag.jsx";

function BookCard({
  id,
  title,
  author,
  status,
  rating = 0,
  tags = [],
  notes,
  onStatusChange,
}) {
  const [notesShown, setNotesShown] = useState(false);

  function handleToggleNotes() {
    setNotesShown(!notesShown);
  }

  const cardClass = status === "finished" ? "card card-finished" : "card";

  const ratingLine = rating > 0 && (
    <p className="card-rating">
      <span className="card-stars">{"★".repeat(rating)}</span>
      <span className="card-stars card-stars-empty">
        {"☆".repeat(5 - rating)}
      </span>
    </p>
  );

  const tagList = tags.length > 0 && (
    <ul className="card-tags">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );

  const actions = (
    <div className="card-actions">
      {STATUSES.map((next) => (
        <button
          key={next}
          className={next === status ? "chip chip-on" : "chip"}
          onClick={() => onStatusChange(next)}
        >
          {LABELS[next]}
        </button>
      ))}
    </div>
  );

  return (
    <article className={cardClass}>
      <div className="card-top">
        <Link className="card-open" to={`/books/${id}`}>
          <h3 className="card-title">{title}</h3>
        </Link>
        <StatusTag status={status} />
      </div>

      <p className="card-author">{author}</p>

      {ratingLine}
      {tagList}
      {actions}

      {notes && (
        <button className="card-notes-toggle" onClick={handleToggleNotes}>
          {notesShown ? "Hide notes" : "Show notes"}
        </button>
      )}
      {notesShown && <p className="card-notes">{notes}</p>}
    </article>
  );
}

export default BookCard;
