import { useEffect, useRef } from "react";

function SearchBox({ value, onChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleClear() {
    onChange("");
    inputRef.current.focus();
  }

  return (
    <div className="search">
      <input
        ref={inputRef}
        className="search-input"
        type="search"
        value={value}
        placeholder="Search by title"
        onChange={(e) => onChange(e.target.value)}
      />
      {value !== "" && (
        <button className="search-clear" onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBox;
