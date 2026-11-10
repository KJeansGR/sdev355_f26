import StatusPanel from "./StatusPanel.jsx";

function ShelfBody({ loading, error, books, onRetry, children }) {
  if (loading) {
    return <StatusPanel status="wait">Fetching your books…</StatusPanel>;
  }
  if (error) {
    return (
      <StatusPanel status="failed" onRetry={onRetry}>
        We could not reach your shelf. {error}
      </StatusPanel>
    );
  }
  if (books.length === 0) {
    return (
      <StatusPanel status="empty">
        Nothing on the shelf yet. Add a book by title above to start it off.
      </StatusPanel>
    );
  }
  return children;
}

export default ShelfBody;
