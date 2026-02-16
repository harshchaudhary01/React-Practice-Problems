import { useState, useEffect } from "react";

export default function useTempSync() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [lastEdited, setLastEdited] = useState(null);

  useEffect(() => {
    if (lastEdited === "celsius") {
      if (celsius === "") {
        setFahrenheit("");
      } else {
        const f = (parseFloat(celsius) * 9) / 5 + 32;
        setFahrenheit(f.toFixed(2));
      }
    }
  }, [celsius, lastEdited]);

  useEffect(() => {
    if (lastEdited === "fahrenheit") {
      if (fahrenheit === "") {
        setCelsius("");
      } else {
        const c = ((parseFloat(fahrenheit) - 32) * 5) / 9;
        setCelsius(c.toFixed(2));
      }
    }
  }, [fahrenheit, lastEdited]);

  const handleCelsiusChange = (value) => {
    setLastEdited("celsius");
    setCelsius(value);
  };

  const handleFahrenheitChange = (value) => {
    setLastEdited("fahrenheit");
    setFahrenheit(value);
  };

  return {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange,
  };
}
