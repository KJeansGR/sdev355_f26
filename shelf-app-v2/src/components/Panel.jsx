function Panel({ title, children }) {
  const isEmpty = !children || children.length === 0;

  if (isEmpty) {
    return (
      <section className="panel">
        <h2 className="panel-title">{title}</h2>
        <p className="panel-none">Nothing here yet.</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <h2 className="panel-title">{title}</h2>
      <div className="panel-body">{children}</div>
    </section>
  );
}

export default Panel;
