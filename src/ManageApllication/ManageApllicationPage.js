import React from 'react'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import './ManageApplication.css'
import logo from '../ManageApllication/Logo.png'
import Headermail from '../ManageApllication/Header-mail.png'
import notification from '../ManageApllication/notification 1.png'
import headerprofile from '../ManageApllication/Header-profile.png'
import DashboardPage from '../Dashboard/DashboardPage';
import ManageStudentsPage from '../ManageStudents/ManageStudentsPage';
import SearchProgramPage from '../SearchProgram/SearchProgramPage';
import { useState } from 'react';

function ManageApllicationPage() {

  const [showOuterDivision, setShowOuterDivision] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const rowsPerPage = 6; // Number of rows to display per page

  const handleSearchButtonClick = () => {
    setShowOuterDivision(!showOuterDivision);
  };

  const handlePageChange = (page) => {
    // Prevent page number from going below 1
    if (page < 1) {
      return;
    }
    setCurrentPage(page);
  };

  // Assuming applicationData is your data source
  const applicationData = [
    // Your array of data objects
  ];

  // Calculate the starting index of the rows to display based on the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  // Calculate the ending index of the rows to display
  const endIndex = startIndex + rowsPerPage;

  return (
    <div className='Enite-page-2'>
       <div className="Main-Header">
      <img className="Saio-logo" src={logo} alt="1"/>

      <nav className='Header-Navbar'>
        <ul className='Navbar-list'>
          <li> <Link to="/" className='Dashboard-2'>Dashboard</Link></li>
           <li><Link to="/ManageApllicationPage" className='Manage-Application-2'>Manage Application</Link></li> 
           <li> <Link to="/ManageStudentsPage" className='Manage-Students'>Manage Students</Link></li> 
          <li>  <Link to="/SearchProgramPage" className='Search-Program'>Search Program</Link></li> 
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
    < section className='Section---1'>
      <h2 className='ManageAppllication-text'>Manage Application</h2>
      <button className='Export-btn'>Export Application Data</button>
    </section>
    <section className='Section---2'>
      <div className='First-row-inputs'>
        <div className='Date-input'>
          <input type='text' className='Date-created-input' placeholder='Date created'></input>
        </div>
        <div className='Country-Dropdown-1'>
                <select className='Country-dropdown'>
                <option selected className='Country-dropdown-text' >Select Country</option>
                <option className='Country-dropdown-text'>India</option>
                <option className='Country-dropdown-text'>US</option>
                <option className='Country-dropdown-text'>UK</option>
                <option className='Country-dropdown-text'>Canada</option>
                <option className='Country-dropdown-text'>Australia</option>
                </select>
            </div>
            <div className='University-Dropdown-1'>
                <select className='Country-dropdown'>
                <option selected className='Country-dropdown-text' >University</option>
                <option className='Country-dropdown-text'>India</option>
                <option className='Country-dropdown-text'>US</option>
                <option className='Country-dropdown-text'>UK</option>
                <option className='Country-dropdown-text'>Canada</option>
                <option className='Country-dropdown-text'>Australia</option>
                </select>
            </div>
            <div className='Intake-Dropdown-1'>
                <select className='Country-dropdown'>
                <option selected className='Country-dropdown-text' >Intake</option>
                <option className='Country-dropdown-text'>India</option>
                <option className='Country-dropdown-text'>US</option>
                <option className='Country-dropdown-text'>UK</option>
                <option className='Country-dropdown-text'>Canada</option>
                <option className='Country-dropdown-text'>Australia</option>
                </select>
            </div>
            <div className='Year-Dropdown-1'>
                <select className='Country-dropdown'>
                <option selected className='Country-dropdown-text' >Year</option>
                <option className='Country-dropdown-text'>India</option>
                <option className='Country-dropdown-text'>US</option>
                <option className='Country-dropdown-text'>UK</option>
                <option className='Country-dropdown-text'>Canada</option>
                <option className='Country-dropdown-text'>Australia</option>
                </select>
            </div>
            <div className='SelectIntake-Dropdown-1'>
                <select className='Country-dropdown'>
                <option selected className='Country-dropdown-text' >Select Intake</option>
                <option className='Country-dropdown-text'>India</option>
                <option className='Country-dropdown-text'>US</option>
                <option className='Country-dropdown-text'>UK</option>
                <option className='Country-dropdown-text'>Canada</option>
                <option className='Country-dropdown-text'>Australia</option>
                </select>
            </div>
      </div>
      <div className='Second-row-inputs'>
        <div className='Acknowledgement-No'>
          <input className='Acknowledgement-No-input' type='text' placeholder='Acknowledgement No.'></input>
        </div>
        <div className='Program-Created'>
          <input className='Program-Created-input' type='text' placeholder='Program Created'></input>
        </div>
        <div className='Student-Name'>
          <input className='Student-Name-input' type='text' placeholder='Student Name'></input>
        </div>
        <button className='Search-btn' onClick={handleSearchButtonClick}>SEARCH</button>
      </div>
    </section>
    {showOuterDivision && (
    <section className='Section---3'>
      <div className='Outer-division'>
        <div className='Inner-division'>
          <div className='Table-Header'>
            <h2 className='Table-Ack-no'>ACK.No.</h2>
            <h2 className='Table-Date-Created'>Date Created</h2>
            <h2 className='Table-Student-name'>Student Name</h2>
            <h2 className='Table-University-name'>University Name</h2>
            <h2 className='Table-Program-name'>Program Name</h2>
            <h2 className='Table-Intake'>Intake</h2>
            <h2 className='Table-Created-by'>Created By</h2>
            <h2 className='Table-Application-status'>Application status </h2>
            <h2 className='Table-Case-Assignee'>Case Assignee</h2>
          </div>

          <div  className='Table-row-1'>
            <p className='row-1-Ack-no'>181235<br></br>/23-24</p>
            <p className='row-1-Date-Created'>15/09/2023 01:20 pm</p>
            <p className='row-1-Name'>Sowmiya Rangasamy</p>
            <p className='row-1-University'>Teesside University</p>
            <p className='row-1-Program'>MSc Bioprocessing and Biotherapeutics</p>
            <p className='row-1-Date'>Jan-2024</p>
            <p className='row-1-created'>Mr. Matthew Thomas</p>
            <p className='row-1-Application-created'>Application in process</p>
            <div className='Name-Number'>
            <p className='row-1-Case-assign-1'>Tejashvee Walke </p>
            <p className='row-1-Case-assign-2'>8743996803</p>
            </div>
          </div>
          <div className='Table-row-1'>
            <p className='row-1-Ack-no'>181235<br></br>/23-24</p>
            <p className='row-1-Date-Created'>15/09/2023 01:20 pm</p>
            <p className='row-1-Name'>Sowmiya Rangasamy</p>
            <p className='row-1-University'>Teesside University</p>
            <p className='row-1-Program'>MSc Bioprocessing and Biotherapeutics</p>
            <p className='row-1-Date'>Jan-2024</p>
            <p className='row-1-created'>Mr. Matthew Thomas</p>
            <p className='row-1-Application-created'>Application in process</p>
            <div className='Name-Number'>
            <p className='row-1-Case-assign-1'>Tejashvee Walke </p>
            <p className='row-1-Case-assign-2'>8743996803</p>
            </div>
          </div>
          <div className='Table-row-1'>
            <p className='row-1-Ack-no'>181235<br></br>/23-24</p>
            <p className='row-1-Date-Created'>15/09/2023 01:20 pm</p>
            <p className='row-1-Name'>Sowmiya Rangasamy</p>
            <p className='row-1-University'>Teesside University</p>
            <p className='row-1-Program'>MSc Bioprocessing and Biotherapeutics</p>
            <p className='row-1-Date'>Jan-2024</p>
            <p className='row-1-created'>Mr. Matthew Thomas</p>
            <p className='row-1-Application-created'>Application in process</p>
            <div className='Name-Number'>
            <p className='row-1-Case-assign-1'>Tejashvee Walke </p>
            <p className='row-1-Case-assign-2'>8743996803</p>
            </div>
          </div>
          {applicationData.slice(startIndex, endIndex).map((row, index) => ( 
          <div key={index}  className='Table-row-1'>
            <p className='row-1-Ack-no'>181235<br></br>/23-24</p>
            <p className='row-1-Date-Created'>15/09/2023 01:20 pm</p>
            <p className='row-1-Name'>Sowmiya Rangasamy</p>
            <p className='row-1-University'>Teesside University</p>
            <p className='row-1-Program'>MSc Bioprocessing and Biotherapeutics</p>
            <p className='row-1-Date'>Jan-2024</p>
            <p className='row-1-created'>Mr. Matthew Thomas</p>
            <p className='row-1-Application-created'>Application in process</p>
            <div className='Name-Number'>
            <p className='row-1-Case-assign-1'>Tejashvee Walke </p>
            <p className='row-1-Case-assign-2'>8743996803</p>
            </div>
          </div>
          ))}
          <div className='Table-row-1'>
            <p className='row-1-Ack-no'>181235<br></br>/23-24</p>
            <p className='row-1-Date-Created'>15/09/2023 01:20 pm</p>
            <p className='row-1-Name'>Sowmiya Rangasamy</p>
            <p className='row-1-University'>Teesside University</p>
            <p className='row-1-Program'>MSc Bioprocessing and Biotherapeutics</p>
            <p className='row-1-Date'>Jan-2024</p>
            <p className='row-1-created'>Mr. Matthew Thomas</p>
            <p className='row-1-Application-created'>Application in process</p>
            <div className='Name-Number'>
            <p className='row-1-Case-assign-1'>Tejashvee Walke </p>
            <p className='row-1-Case-assign-2'>8743996803</p>
            </div>
          </div>
          <div className='Table-row-1'>
            <p className='row-1-Ack-no'>181235<br></br>/23-24</p>
            <p className='row-1-Date-Created'>15/09/2023 01:20 pm</p>
            <p className='row-1-Name'>Sowmiya Rangasamy</p>
            <p className='row-1-University'>Teesside University</p>
            <p className='row-1-Program'>MSc Bioprocessing and Biotherapeutics</p>
            <p className='row-1-Date'>Jan-2024</p>
            <p className='row-1-created'>Mr. Matthew Thomas</p>
            <p className='row-1-Application-created'>Application in process</p>
            <div className='Name-Number'>
            <p className='row-1-Case-assign-1'>Tejashvee Walke </p>
            <p className='row-1-Case-assign-2'>8743996803</p>
            </div>
          </div>
          <div className='Table-row-1'>
            <p className='row-1-Ack-no'>181235<br></br>/23-24</p>
            <p className='row-1-Date-Created'>15/09/2023 01:20 pm</p>
            <p className='row-1-Name'>Sowmiya Rangasamy</p>
            <p className='row-1-University'>Teesside University</p>
            <p className='row-1-Program'>MSc Bioprocessing and Biotherapeutics</p>
            <p className='row-1-Date'>Jan-2024</p>
            <p className='row-1-created'>Mr. Matthew Thomas</p>
            <p className='row-1-Application-created'>Application in process</p>
            <div className='Name-Number'>
            <p className='row-1-Case-assign-1'>Tejashvee Walke </p>
            <p className='row-1-Case-assign-2'>8743996803</p>
            </div>
            
          </div>
         
        </div>
        <div className='page-count'>
          <button className='Before-btn'  onClick={() => handlePageChange(currentPage - 1)}>
            &lt;</button>
          <p className='page-text-1'>{currentPage}</p>
          <p>pages of</p>
          <p className='page-text-2'>{Math.ceil(applicationData.length / rowsPerPage)}</p>
          <button className='After-btn' onClick={() => handlePageChange(currentPage + 1)}>
            &gt;</button>
        </div>
      </div>
    </section>
    )}
    </div>
  )
}

export default ManageApllicationPage