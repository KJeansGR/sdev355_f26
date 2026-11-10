import ReadingTimer from "./ReadingTimer.jsx";

function NowReading({ book }) {
  if (!book) {
    return (
      <p className="now now-empty">
        Pick a book and hit <strong>Reading</strong> to start one.
      </p>
    );
  }

  return (
    <p className="now">
      Now reading: <strong>{book.title}</strong>
      <span className="now-author"> · {book.author}</span>
      <ReadingTimer bookId={book.id} />
    </p>
  );
}

export default NowReading;
