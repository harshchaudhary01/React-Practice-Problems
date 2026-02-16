import React from "react";
import CharacterCounter from "./CharacterCounter";
import useCharacterCounter from "./useCharacterCounter";

function App() {
  const { text, remaining, handleChange, maxLimit } =
    useCharacterCounter("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", display: "flex", alignItems: "center", justifyContent: "center", height: "90vh" }}>
      <CharacterCounter
        text={text}
        remaining={remaining}
        maxLimit={maxLimit}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
