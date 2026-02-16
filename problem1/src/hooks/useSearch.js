import { useState, useEffect } from "react";

const useSearch = (data, searchKey) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const results = data.filter((item) =>
      item[searchKey].toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(results);
  }, [query, data, searchKey]);

  return {
    query,
    setQuery,
    filteredData,
  };
};

export default useSearch;
