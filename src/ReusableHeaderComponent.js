import React from 'react'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

import logo from '../ManageApllication/Logo.png'
import Headermail from '../ManageApllication/Header-mail.png'
import notification from '../ManageApllication/notification 1.png'
import headerprofile from '../ManageApllication/Header-profile.png'
import DashboardPage from '../Dashboard/DashboardPage';
import ManageStudentsPage from './ManageStudents/ManageStudentsPage';
import SearchProgramPage from './SearchProgram/SearchProgramPage';
import ManageApllicationPage from './ManageApllication/ManageApllicationPage';



function ReusableHeaderComponent() {
  return (
    <div>
         <div className="Main-Header">
    <img className="Saio-logo" src={logo} alt="1"/>
    <Router>
    <nav className='Header-Navbar'>
      <ul className='Navbar-list'>
        <li> <Link to="Dashboard" className='Dashboard-2'>Dashboard</Link></li>
         <li><Link to="ManageApllicationPage" className='Manage-Application-2'>Manage Application</Link></li> 
         <li> <Link to="ManageStudentsPage" className='Manage-Students'>Manage Students</Link></li> 
        <li>  <Link to="SearchProgramPage" className='Search-Program'>Search Program</Link></li> 
        <Link to="/SearchProgramPage">click</Link>
      </ul>
    </nav>
    <Routes>
    <Route path="/" exact component={DashboardPage} />
    <Route path="/ManageApllicationPage" component={ManageApllicationPage} />
      <Route path="/ManageStudentsPage" component={ManageStudentsPage} />
      <Route path="/SearchProgramPage" component={SearchProgramPage} />
      </Routes>
      </Router>
   <div className='Email-Update'>
   <img className="Header-mail" src={Headermail} alt="1"/>
      <p className='Email-Update-text'>Email Update</p>
   </div>
   <img className="Header-Notification" src={notification} alt="1"/>
   <img className="Header-Profile" src={headerprofile} alt="1"/>
  </div></div>
  )
}

export default ReusableHeaderComponent