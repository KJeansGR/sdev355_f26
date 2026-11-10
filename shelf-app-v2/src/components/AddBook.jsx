import { useState } from "react";

function AddBook({ onAdd }) {
  const [draft, setDraft] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (draft.trim() === "") return;
    onAdd(draft.trim());
    setDraft("");
  }

  return (
    <form className="add" onSubmit={handleSubmit}>
      <input
        className="add-input"
        value={draft}
        placeholder="Add a book by title"
        onChange={(e) => setDraft(e.target.value)}
      />
      <button className="add-button">Add</button>
    </form>
  );
}

export default AddBook;
