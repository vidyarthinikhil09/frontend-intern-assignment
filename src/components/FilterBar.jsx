import React from 'react';

const FilterBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
}) => {
  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

  // Use new colors for inputs
  const inputBaseStyles = "w-full p-3 bg-[#0f0e17] text-[#a7a9be] border border-[#a7a9be]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8906]";

  return (
    <div className="mb-8 p-4 bg-[#1a1a2e] rounded-lg shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={inputBaseStyles}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className={inputBaseStyles}
      >
        <option value="all">Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className={inputBaseStyles}
      >
        <option value="">sort by: Featured</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterBar;