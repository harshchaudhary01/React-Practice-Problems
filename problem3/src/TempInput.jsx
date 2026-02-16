import React from "react";

export default function TempInput({
  celsius,
  fahrenheit,
  onCelsiusChange,
  onFahrenheitChange,
}) {
  return (
    <div>
      <h2>Temperature Converter</h2>

      <div>
        <label>Celsius: </label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => onCelsiusChange(e.target.value)}
        />
      </div>

      <div>
        <label>Fahrenheit: </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => onFahrenheitChange(e.target.value)}
        />
      </div>
    </div>
  );
}
