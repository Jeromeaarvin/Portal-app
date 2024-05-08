import React, { useState } from "react";

function DropdownFilterButton({ options, onFilter }) {
  const [selectedOptions, setSelectedOptions] = useState(Array(options.length).fill(""));

  const handleOptionChange = (index, e) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = e.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleFilterClick = () => {
    console.log("Selected options:", selectedOptions);
    onFilter(selectedOptions);
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <select value={selectedOptions[index]} onChange={(e) => handleOptionChange(index, e)}>
            <option value="">Select...</option>
            {option.values.map((value, valueIndex) => (
              <option key={valueIndex} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
}

export default DropdownFilterButton;
