import React from "react";

function CharacterCounter({ text, remaining, maxLimit, onChange }) {
  return (
    <div>
      <h2>Live Character Counter</h2>

      <textarea
        value={text}
        onChange={onChange}
        rows="4"
        cols="50"
      />

      <p>Characters: {text.length}</p>
      <p>Remaining: {remaining}</p>

      {remaining <= 10 && remaining > 0 && (
        <p style={{ color: "red" }}>
          ⚠ Only {remaining} characters left!
        </p>
      )}
    </div>
  );
}

export default CharacterCounter;
