import React, { useState } from 'react';
import './FilterSearchSystem.css'

function FilterSearchSystem({ filters, handleFilterChange, handleClearAll }) {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleCheckboxChange = (filterCategory, filterValue) => {
    setSelectedFilters(prevState => ({
      ...prevState,
      [filterCategory]: {
        ...(prevState[filterCategory] || {}),
        [filterValue]: !prevState[filterCategory]?.[filterValue]
      }
    }));
  };

  const handleDropdownChange = (filterCategory, filterValue) => {
    setSelectedFilters(prevState => ({
      ...prevState,
      [filterCategory]: filterValue
    }));
  };

  const renderCheckboxFilters = (filterCategory, options) => {
    return (
      <div className='pro_div'>
        <p className='program_level'>{filterCategory}</p>
        {options.map(option => (
            <div className='program_lvl_div'>
          <label key={option}>
            <input
                className='program_input'
              type="checkbox"
              checked={selectedFilters[filterCategory]?.[option] || false}
              onChange={() => handleCheckboxChange(filterCategory, option)}
            />
            {option} 
          </label>
          </div>
        ))}
      </div>
    );
  };

  const renderDropdownFilters = (filterCategory, options) => {
    return (
      <div className='sp-dropdowns'>
        <p className='program_dropdown'>{filterCategory}</p>
        <select
          value={selectedFilters[filterCategory] || ''}
          onChange={e => handleDropdownChange(filterCategory, e.target.value)}
        >
          <option value="">Select {filterCategory}</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      
    );
  };

  const renderClearAllButton = () => {
    return (
      <button className='clr-all' onClick={handleClearAll}>Clear All</button>
    );
  };

  return (
    <div className="filter-search-system">
      <div className="column_1">
        {filters.checkboxFilters.map(({ category, options }) => (
          renderCheckboxFilters(category, options)
        ))}
      </div>
      <div className="column_2">
        {filters.dropdownFilters.map(({ category, options }) => (
          renderDropdownFilters(category, options)
        ))}
      </div>
      <div className="column_3">
        {filters.checkboxFiltersThirdColumn.map(({ category, options }) => (
          renderCheckboxFilters(category, options)
        ))}
        {renderClearAllButton()}
      </div>
    </div>
  );
  
}

export default FilterSearchSystem;