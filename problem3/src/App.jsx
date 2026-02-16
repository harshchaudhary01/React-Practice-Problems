import React from "react";
import useTemperatureSync from "./useTempSync.js";
import TemperatureInput from "./TempInput.jsx";

function App() {
  const {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange,
  } = useTemperatureSync();

  return (
    <div style={{ padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", height:"80vh"}}>
      <TemperatureInput
        celsius={celsius}
        fahrenheit={fahrenheit}
        onCelsiusChange={handleCelsiusChange}
        onFahrenheitChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default App;
