import { useEffect, useState } from "react";

function ReadingTimer({ bookId }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setSeconds(0);

    const id = setInterval(() => setSeconds((s) => s + 1), 1000);

    return () => clearInterval(id);
  }, [bookId]);

  return <span className="now-timer">Reading for {seconds}s</span>;
}

export default ReadingTimer;
