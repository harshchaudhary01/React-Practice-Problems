import React from "react";
import useSearch from "./hooks/useSearch";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

const usersData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 },
  { id: 4, name: "Keyboard", price: 1000 },
  { id: 5, name: "Mouse", price: 500 },
];

function App() {
  const { query, setQuery, filteredData } = useSearch(usersData, "name");

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height:"100vh"}}>
      <div style={{ padding: "20px"  }}>
      <h2>Product Search</h2>

      <SearchBar
        query={query}
        setQuery={setQuery}
        placeholder="Search product..."
      />

      <p>
        Showing {filteredData.length} of {usersData.length} products
      </p>

      <UserList users={filteredData} />
    </div>
    </div>
  );
}

export default App;
