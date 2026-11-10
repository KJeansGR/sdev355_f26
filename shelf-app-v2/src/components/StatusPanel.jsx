function StatusPanel({ status, onRetry, children }) {
  return (
    <section className="panel">
      <h2 className="panel-title">Your shelf</h2>
      <p className={`state state-${status}`}>{children}</p>
      {onRetry && (
        <button className="state-retry" onClick={onRetry}>
          Try again
        </button>
      )}
    </section>
  );
}

export default StatusPanel;
