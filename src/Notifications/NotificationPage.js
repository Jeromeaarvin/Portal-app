import React, { useState } from 'react'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import logo from '../Dashboard/HeaderImages/Logo.png'
import Headermail from '../Dashboard/HeaderImages/Header-mail.png'
import headerprofile from '../Dashboard/HeaderImages/Header-profile.png'
import ManageApllicationPage from '../ManageApllication/ManageApllicationPage';
import ManageStudentsPage from '../ManageStudents/ManageStudentsPage';
import SearchProgramPage from '../SearchProgram/SearchProgramPage';
import DashboardPage from '../Dashboard/DashboardPage';
import './NotificationPage.css'
import colornotification from '../Notifications/Colornotification.png'
import chaticon from '../Notifications/chaticon.png'


function NotificationPage() {

    const [detailedPopup,setDetailedpopup] = useState('')
    const closePopup=()=>{
        setDetailedpopup(false);
    };

    const [currentPage, setCurrentPage] = useState(1);

    const handleBeforeClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleAfterClick = () => {
        // Assuming there are a total of 10 pages
        if (currentPage < 10) {
            setCurrentPage(currentPage + 1);
        }
    };


  return (
    <div>
         <div className="Main-Header">
      <img className="Saio-logo" src={logo} alt="1"/>
     
      <nav className='Header-Navbar'>
        <ul className='Navbar-list'>
          <li> <Link to="/" className='Dashboard-NP'>Dashboard</Link></li> 
           <li><Link to="/ManageApllicationPage" className='Manage-Application'>Manage Application</Link></li> 
           <li> <Link to="/ManageStudentsPage" className='Manage-Students'>Manage Students</Link></li> 
          <li>  <Link to="/SearchProgramPage" className='Search-Program'>Search Program</Link></li> 
        </ul>
      </nav>
      <Routes>
      <Route path="/" exact component={DashboardPage} />
      <Route path="/ManageApllicationPage" component={ManageApllicationPage} />
        <Route path="/ManageStudentsPage" component={ManageStudentsPage} />
        <Route path="/SearchProgramPage" component={SearchProgramPage} />
        <Route path="/Notification-page" component={NotificationPage} />
        </Routes>
       
     <div className='Email-Update'>
     <img className="Header-mail" src={Headermail} alt="1"/>
        <p className='Email-Update-text'>Email Update</p>
     </div>
     <div className='Last-div'>
     <Link to='/Notification-page'>
        <img className="Header-Notification" src={colornotification} alt="1"/></Link>
     <img className="Header-Profile" src={headerprofile} alt="1"/>
     </div>
    </div>
    <section className='Notification-page-sec-1'>
        <div className='no-div'>
            <h3 className='Notifications-text'>Notifications</h3>
        </div>
    </section>
    <section className='Notification-page-sec-2'>
        <div className='outer-division'>
        <div className='division-header'>
            <p className='division-header-text-1'>DATE</p>
            <p className='division-header-text-2'>MESSAGE</p>
            <p className='division-header-text-3'>ACTIONS</p>
        </div>
        {detailedPopup && (
            <div className='overlay' onClick={closePopup}>
                <div className='popup'>
                <div className='Popup-Header'>
        <h4 className='Popup-Header-text'>9 January 2024</h4>
        <button onClick={closePopup}>X</button>
      </div>
      <hr />
      <p><span className='Name-1'>Anjali Shankar</span>
                    added a comment for 
                   <span className='Name-1'>Shahik Sharuk Babu</span><br/>
                    (National College of Ireland)</p>
                </div>
            </div>
        )}
        <div className='Notification-1st-row'>
            <p>09 Jan 2024</p>
            <div className='Message-div'>
                <img src={chaticon}></img>
                <p><span className='Name-1'>Anjali Shankar</span>
                    added a comment for 
                   <span className='Name-1'>Shahik Sharuk Babu</span>
                    (National College of Ireland)</p>
            </div>
            <p className='View-text' onClick={()=>setDetailedpopup(true)}>VIEW</p>
        </div>
        <div className='Notification-1st-row'>
            <p>09 Jan 2024</p>
            <div className='Message-div'>
                <img src={chaticon}></img>
                <p><span className='Name-1'>Anjali Shankar</span>
                    added a comment for 
                   <span className='Name-1'>Shahik Sharuk Babu</span>
                    (National College of Ireland)</p>
            </div>
            <p className='View-text' onClick={()=>setDetailedpopup(true)}>VIEW</p>
        </div>
        <div className='Notification-1st-row'>
            <p>09 Jan 2024</p>
            <div className='Message-div'>
                <img src={chaticon}></img>
                <p><span className='Name-1'>Anjali Shankar</span>
                    added a comment for 
                   <span className='Name-1'>Shahik Sharuk Babu</span>
                    (National College of Ireland)</p>
            </div>
            <p className='View-text' onClick={()=>setDetailedpopup(true)}>VIEW</p>
        </div>
        <div className='Notification-1st-row'>
            <p>09 Jan 2024</p>
            <div className='Message-div'>
                <img src={chaticon}></img>
                <p><span className='Name-1'>Anjali Shankar</span>
                    added a comment for 
                   <span className='Name-1'>Shahik Sharuk Babu</span>
                    (National College of Ireland)</p>
            </div>
            <p className='View-text' onClick={()=>setDetailedpopup(true)}>VIEW</p>
        </div>
        <div className='Notification-1st-row'>
            <p>09 Jan 2024</p>
            <div className='Message-div'>
                <img src={chaticon}></img>
                <p><span className='Name-1'>Anjali Shankar</span>
                    added a comment for 
                   <span className='Name-1'>Shahik Sharuk Babu</span>
                    (National College of Ireland)</p>
            </div>
            <p className='View-text' onClick={()=>setDetailedpopup(true)}>VIEW</p>
        </div>
        <div className='Notification-1st-row'>
            <p>09 Jan 2024</p>
            <div className='Message-div'>
                <img src={chaticon}></img>
                <p><span className='Name-1'>Anjali Shankar</span>
                    added a comment for 
                   <span className='Name-1'>Shahik Sharuk Babu</span>
                    (National College of Ireland)</p>
            </div>
            <p className='View-text' onClick={()=>setDetailedpopup(true)}>VIEW</p>
        </div>
        <div className='page-count'>
          <button className='Before-btn' onClick={handleBeforeClick} >
            &lt;</button>
          <p className='page-text-1'>{currentPage}</p>
          <p>pages of</p>
          <p className='page-text-2'>10</p>
          <button className='After-btn' onClick={handleAfterClick}>
            &gt;</button>
        </div>

        </div>
    </section>
    </div>
  )
}

export default NotificationPage