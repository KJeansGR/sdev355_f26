import { useContext, useState } from "react";
import { useNavigate } from "react-router";

import { API } from "../api.js";
import { useFetch } from "../hooks/useFetch.js";
import { BookContext } from "../context/BookProvider.jsx";

function JumpToBook() {
  const{data: books} = useContext(BookContext);
  const [q, setQ] = useState("");
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();
  //const { data: books } = useFetch(API, []);

  function handleSubmit(event) {
    event.preventDefault();
    const needle = q.trim().toLowerCase();
    if (needle === "") return;

    const hit = books.find((book) =>
      book.title.toLowerCase().includes(needle)
    );

    if (!hit) {
      setNotFound(true);
      return;
    }

    setQ("");
    navigate(`/books/${hit.id}`);
  }

  return (
    <form className="jump" onSubmit={handleSubmit}>
      <input
        className="jump-input"
        value={q}
        placeholder="Jump to a book…"
        onChange={(e) => {
          setQ(e.target.value);
          setNotFound(false);
        }}
      />
      <button className="jump-go">Go</button>
      {notFound && (
        <p className="jump-missed">No book here matches "{q}".</p>
      )}
    </form>
  );
}

export default JumpToBook;
