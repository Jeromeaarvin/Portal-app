import React from "react";

function FilteredItemsList({ items }) {
  return (
    <div>
      <h2>Filtered Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredItemsList;
