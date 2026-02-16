import React, { useState, useRef, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const focusCountRef = useRef(0);
  const historyRef = useRef([]);
  const [focusCount, setFocusCount] = useState(0);

  const handleFocus = () => {
    focusCountRef.current += 1;
    setFocusCount(focusCountRef.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) return;
    setMessages((prev) => [...prev, value]);
    historyRef.current.push(value);
    inputRef.current.value = "";
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]); 
  return ( 
    <div style={{display:"flex", alignItems:"center", justifyContent: "center", height: "100vh"}}>
      <div style={{ padding: "20px"}}>
      <h2>Focus Tracker & Message History</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type message..."
          ref={inputRef}
          onFocus={handleFocus}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={focusInput}>
          Focus Input
        </button>
      </form>

      <p>Focus count: {focusCount}</p>

      <div>
        <strong>Messages:</strong>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>- {msg}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>History in Ref (no re-render):</strong>{" "}
        {historyRef.current.join(", ")}
      </div>
    </div>
    </div>
  );
}

export default App;