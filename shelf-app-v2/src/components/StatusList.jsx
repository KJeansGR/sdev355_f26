import { API } from "../api.js";
import { useFetch } from "../hooks/useFetch.js";
import Panel from "./Panel.jsx";
import BookCard from "./BookCard.jsx";
import ShelfBody from "./ShelfBody.jsx";
import { useContext } from "react";
import { BookContext } from "../context/BookProvider.jsx";

function StatusList({ status, title, }) {

  function changeStatus(id, next) {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, status: next } : book))
    );
  }

  const shown = books.filter((book) => book.status === status);

  return (
    <ShelfBody loading={loading} error={error} books={books} onRetry={retry}>
      <Panel title={title}>
        {shown.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            status={book.status}
            rating={book.rating}
            tags={book.tags}
            notes={book.notes}
            onStatusChange={(next) => changeStatus(book.id, next)}
          />
        ))}
      </Panel>
    </ShelfBody>
  );
}

export default StatusList;
