import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        className="border p-2 w-full"
      />
    </div>
  );
};

export default Search;
