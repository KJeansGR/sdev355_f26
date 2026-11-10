import { useEffect, useState } from "react";

export function useDebouncedValue(value, ms) {
  const [settled, setSettled] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setSettled(value), ms);

    return () => clearTimeout(id);
  }, [value, ms]);

  return settled;
}
