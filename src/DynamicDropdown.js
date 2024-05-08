import React, { useState, useEffect } from "react";
import "./Dynamicdropdown.css";

function DynamicDropdown() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedUniversities, setSelectedUniversities] = useState([]);

  
  const countryUniversities = {
    India: [
      "Indian Institutes of Technology (IITs)",
      "Indian Institutes of Management (IIMs)",
      "University of Delhi",
      "Jawaharlal Nehru University",
      "University of Hyderabad",
      "Jamia Millia Islamia",
      "Aligarh Muslim University",
    ],
    US: [
      "Harvard University",
      "Stanford University",
      // Add more universities here
    ],
    UK: [
      "University of Oxford",
      "University of Cambridge",
      // Add more universities here
    ],
    Canada: [
      "University of Toronto",
      "University of British Columbia (UBC)",
      // Add more universities here
    ],
  };

  useEffect(() => {
    setSelectedUniversities([]);
  }, [selectedCountry]);

  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const university = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedUniversities([...selectedUniversities, university]);
    } else {
      setSelectedUniversities(selectedUniversities.filter((u) => u !== university));
    }
  };

  return (
    <div className="Checkboxes">
      Select Country<br />
      <select
        className="Dropdown-select"
        value={selectedCountry}
        onChange={handleSelectChange}
      >
        <option value="India">India</option>
        <option value="US">US</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>
      <h3>Universities in {selectedCountry}</h3>
      <div className="Universites">
        <ul className="Checkbox-options">
          {countryUniversities[selectedCountry].map((university, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={university}
                name={university}
                value={university}
                checked={selectedUniversities.includes(university)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={university}>{university}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DynamicDropdown;
