function Header({
  owner,
  bookCount,
  finishedCount,
  hideFinished,
  onHideFinishedChange,
}) {
  return (
    <header className="header">
      <div>
        <h1 className="header-title">Shelf</h1>
        <p className="header-meta">
          {owner} · {finishedCount} of {bookCount} finished
        </p>
      </div>

      <label className="header-toggle">
        <input
          type="checkbox"
          checked={hideFinished}
          onChange={(e) => onHideFinishedChange(e.target.checked)}
        />
        Hide finished
      </label>
    </header>
  );
}

export default Header;
