import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
// import './Dashboard.css'
import './SearchProgramPage.css'
import logo from '../Dashboard/HeaderImages/Logo.png'
import Headermail from '../Dashboard/HeaderImages/Header-mail.png'
import notification from '../Dashboard/HeaderImages/notification 1.png'
import headerprofile from '../Dashboard/HeaderImages/Header-profile.png'
import ManageApllicationPage from '../ManageApllication/ManageApllicationPage';
import ManageStudentsPage from '../ManageStudents/ManageStudentsPage';
import DashboardPage from '../Dashboard/DashboardPage';
import SPSearch from '../SearchProgram/SPSearch.png'
import Greysearch from '../SearchProgram/Greysearch.png'
import Advanceplus from '../SearchProgram/Advanceplus.png'
import FilterSearchSystem from './FilterSearchSystem';
import AdvanceFilters from './AdvanceFilters';

function SearchProgramPage() {

  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const handleAdvanceSearchClick = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  const filters = {
    checkboxFilters: [
      { category: 'Program level',options: ['High School (11th - 12th)',
       "UG Diploma/Certificate/AssociateDegree",
       'PG Diploma/Certificate',
       'PG',
        'UG+PG (Accelerated)Degree',
      'PhD',
    'Foundation',
  'Short Term Programs',
'Pathway Programs',
'Twinning Programmes (UG)'] },
      // { category: 'Category 2', options: ['Option A', 'Option B', 'Option C'] }
    ],
    dropdownFilters: [
      { category: 'Country', options: ['Canada', 'UK', 'US'] },
      { category: 'Study Area', options: ['Option A', 'Option B', 'Option C'] },
      { category: 'Discipline Area', options: ['Option A', 'Option B', 'Option C'] },
      { category: 'Duration', options: ['Option A', 'Option B', 'Option C'] },
      { category: 'ESL/ELP Available', options: ['Option A', 'Option B', 'Option C'] }
    ],
    checkboxFiltersThirdColumn: [
      { category: 'Requirements', options: ['PTE', 'TOEFL IBT', 'IELTS','DET','SAT',
      'ACT',
      'GRE',
      'GMAT',
      'Without English Proficiency',
      'Without GRE'] }
    ]
  };
  
  function handleFilterChange() {
    // Implement filter change logic here
  }
  
  function handleClearAll() {
    // Implement clear all logic here
  }
  

  return (
    <div>
       <div className="Main-Header">
      <img className="Saio-logo" src={logo} alt="1"/>
     
      <nav className='Header-Navbar'>
        <ul className='Navbar-list'>
          <li> <Link to="/" className='Dashboard-sp'>Dashboard</Link></li> 
           <li><Link to="/ManageApllicationPage" className='Manage-Application'>Manage Application</Link></li> 
           <li> <Link to="/ManageStudentsPage" className='Manage-Students'>Manage Students</Link></li> 
          <li>  <Link to="/SearchProgramPage" className='Search-Program-sp'>Search Program</Link></li> 
        </ul>
      </nav>
      <Routes>
      <Route path="/" exact component={DashboardPage} />
      <Route path="/ManageApllicationPage" component={ManageApllicationPage} />
        <Route path="/ManageStudentsPage" component={ManageStudentsPage} />
        <Route path="/SearchProgramPage" component={SearchProgramPage} />
        </Routes>
       
     <div className='Email-Update'>
     <img className="Header-mail" src={Headermail} alt="1"/>
        <p className='Email-Update-text'>Email Update</p>
     </div>
     <div className='Last-div'>
     <img className="Header-Notification" src={notification} alt="1"/>
     <img className="Header-Profile" src={headerprofile} alt="1"/>
     </div>
    </div>
    <section className='section---1'>
      <div className='First-div'>
        <h1>Explore Over 80,000+ courses</h1>
        <p>Use our course Finder to search</p>
      </div>
    </section>
    <section className='section--2'>
      <div className='Search-div'>
      
          <div className='First-input'>
          <p>Search Courses</p>
          <div className='Greysearch'>
            <img src={Greysearch}></img>
            <input type='text' className='First_Spinput' placeholder='Search Courses | University'>
            </input>
          </div>
          </div>
          <div className='First-input'>
          <p>Intake</p>
          <input type='text'className='Spinput' placeholder='All,January'></input>
          </div>
          <div className='First-input'>
          <p>Year</p>
          <select className='year-select'>
            <option selected className='selected'>Year</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
          </div>
          <div className='First-input'>
          <p>Search States</p>
          <input type='text'className='Spinput' placeholder='Province|State'></input>
          </div>  
          <Link  className='Sp' to='/SearchCoursepage'>
          <div className='Sp_Search'>
          <img src={SPSearch}></img>
          <p>Search</p>
          </div></Link>
       
      </div>
    </section>
    <section className='SP_Section-3'>
    <div className='Advance_Search' onClick={handleAdvanceSearchClick}>
          <img src={Advanceplus}></img>
          <p className='Adance_text'>Advance Search</p>
        </div>
    </section>
    {showAdvancedSearch && (
        <section className='Advanced-Search-Section'>
          {/* Render your advanced search filters here */}
          {/* <FilterSearchSystem
    filters={filters}
    handleFilterChange={handleFilterChange}
    handleClearAll={handleClearAll}
  /> */}
  <AdvanceFilters></AdvanceFilters>
        </section>
      )}
    </div>
  )
}

export default SearchProgramPage