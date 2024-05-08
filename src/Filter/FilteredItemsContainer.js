import React, { useState } from "react";
import DropdownFilterButton from "./DropdownFilterButton";
import FilteredItemsList from "./FilteredItemsList"; // Assume you have a component for displaying filtered items

function FilteredItemsContainer() {
  const [filteredItems, setFilteredItems] = useState([]);
  
  const allItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  
  const handleFilter = (selectedOptions) => {
    console.log("Received selected options:", selectedOptions);
    const filtered = allItems.filter(item => {
      // Check if each item contains all selected options
      return selectedOptions.every(option => item.includes(option));
    });
    setFilteredItems(filtered);
  };

  const dropdownOptions = [
    { label: "Option 1", values: ["Value 1", "Value 2", "Value 3"] },
    { label: "Option 2", values: ["Value A", "Value B", "Value C"] },
    // Add more dropdown options as needed
  ];

  return (
    <div>
      <DropdownFilterButton options={dropdownOptions} onFilter={handleFilter} />
      <FilteredItemsList items={filteredItems} />
    </div>
  );
}

export default FilteredItemsContainer;
