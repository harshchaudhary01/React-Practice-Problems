import { useState, useEffect } from "react";

const MAX_LIMIT = 50;

export default function useCharacterCounter(initialValue = "") {
  const [text, setText] = useState(initialValue);
  const [remaining, setRemaining] = useState(MAX_LIMIT);

  useEffect(() => {
    setRemaining(MAX_LIMIT - text.length);
  }, [text]);

  const handleChange = (e) => {
    const value = e.target.value;

    // Prevent typing beyond 50 characters
    if (value.length <= MAX_LIMIT) {
      setText(value);
    }
  };

  return {
    text,
    remaining,
    handleChange,
    maxLimit: MAX_LIMIT,
  };
}
