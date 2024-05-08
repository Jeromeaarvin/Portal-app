import React from 'react'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
// import './Dashboard.css'
import './Mywalletpage.css'
import logo from '../Dashboard/HeaderImages/Logo.png'
import Headermail from '../Dashboard/HeaderImages/Header-mail.png'
import notification from '../Dashboard/HeaderImages/notification 1.png'
import headerprofile from '../Dashboard/HeaderImages/Header-profile.png'
import ManageApllicationPage from '../ManageApllication/ManageApllicationPage';
import ManageStudentsPage from '../ManageStudents/ManageStudentsPage';
import SearchProgramPage from '../SearchProgram/SearchProgramPage';
import NotificationPage from '../Notifications/NotificationPage';
import DashboardPage from '../Dashboard/DashboardPage';
import { useState } from 'react';

function Mywalletpage() {

    const [showPopup, setShowPopup] = useState('');

    const closePopup = () => {
        setShowPopup(false);
    };
    const [showSettlePopup, setShow] = useState('');

    const closeSettlePopup = () => {
        setShow(false);
    };

  return (
    <div>
         <div className="Main-Header">
      <img className="Saio-logo" src={logo} alt="1"/>
     
      <nav className='Header-Navbar'>
        <ul className='Navbar-list'>
          <li> <Link to="/" className='Dashboard-sp'>Dashboard</Link></li> 
           <li><Link to="/ManageApllicationPage-Mw" className='Manage-Application'>Manage Application</Link></li> 
           <li> <Link to="/ManageStudentsPage-Mw" className='Manage-Students'>Manage Students</Link></li> 
          <li>  <Link to="/SearchProgramPag-Mw" className='Search-Program'>Search Program</Link></li> 
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
        <img className="Header-Notification" src={notification} alt="1"/></Link>
     <img className="Header-Profile" src={headerprofile} alt="1"/>
     </div>
    </div>
    <section className='section--1'>
        <div className='top_wallet'>
            <p className='top_wallet_text'>Wallet</p>
        </div>
    </section>
    <section className='section--2-MW'>
        <div>
        <div className='My_wallet'>
            <p>My Wallet</p>
        </div>
        </div>
        <div className='Sub_div_2'>
        <div className='Balance_indicator'>
            <p className='Balance_indicator_text'>Balance:</p>
            <p className='Balance_indicator_count'>₹ 5,782.65</p>
        </div>
        <button className='Add_money_btn' onClick={()=>setShowPopup(true)}>ADD MONEY</button>
        {showPopup && (
            <div className='add' onClick={closePopup}>
               <div className="popup_add_money">
      <div className='Popup-Header'>
        <h4 className='Popup-Header-text'>Register New Student</h4>
        <button onClick={closePopup}>X</button>
      </div>
      <hr />
      <div className='Enter_amt_div'>
        <h3>Enter Amount to Add*</h3>
        <input
         type='number'>
         
        </input>
      </div>
      </div>
            </div>
        )}
        <button className='Settle_wallet_btn'onClick={()=>setShow(true)}>
            SETTLE WALLET BALANCE</button>
            {showSettlePopup && (
            <div className='add' onClick={closeSettlePopup}>
               <div className="popup_add_money">
      <div className='Popup-Header'>
        <h4 className='Popup-Header-text'>Register New Student</h4>
        <button onClick={closeSettlePopup}>X</button>
      </div>
      <hr />
      <div className='Enter_amt_div'>
        <h3>Enter Amount to Add*</h3>
        <input
         type='number'>
         
        </input>
      </div>
      </div>
            </div>
        )}
        </div>
    </section>
    <section className='section--3-MW'>
                <div className='Drop-down-MW'>
                    <div className='R1-Mw'>
                    <div className='Dropdown-1-MW'>
                <select className='Date-dropdown' >
                <option selected className='Date-dropdown-text' >149335</option>
                <option className='Date-dropdown-text'>01/04/2023 - 18/01/2024 </option>
                <option className='Date-dropdown-text'>07/03/2023 - 15/03/2024</option>
                <option className='Date-dropdown-text'>01/03/2023 - 14/11/2024</option>
                <option className='Date-dropdown-text'>05/06/2003 - 18/01/2024</option>
                <option className='Date-dropdown-text'>05/06/2003 - 18/01/2024</option>
                </select>
            </div>
            <div className='Dropdown-1-MW'>
                <select className='Date-dropdown' >
                <option selected className='Date-dropdown-text' >Select Date</option>
                <option className='Date-dropdown-text'>01/04/2023 - 18/01/2024 </option>
                <option className='Date-dropdown-text'>07/03/2023 - 15/03/2024</option>
                <option className='Date-dropdown-text'>01/03/2023 - 14/11/2024</option>
                <option className='Date-dropdown-text'>05/06/2003 - 18/01/2024</option>
                <option className='Date-dropdown-text'>05/06/2003 - 18/01/2024</option>
                </select>
            </div>
            <div className='Dropdown-1-MW'>
                <input className='MW-input' placeholder='Ack.No'></input>
            </div>
                    </div>
                    <div className='R2-Mw'>
                    <div className='Dropdown-1-MW'>
                    <input className='MW-input' placeholder='Roshan Jawahar'></input>
            </div>
            <div className='Dropdown-1-MW'>
                <select className='Date-dropdown' >
                <option selected className='Date-dropdown-text' >₹ 23147.00</option>
                <option className='Date-dropdown-text'>01/04/2023 - 18/01/2024 </option>
                <option className='Date-dropdown-text'>07/03/2023 - 15/03/2024</option>
                <option className='Date-dropdown-text'>01/03/2023 - 14/11/2024</option>
                <option className='Date-dropdown-text'>05/06/2003 - 18/01/2024</option>
                <option className='Date-dropdown-text'>05/06/2003 - 18/01/2024</option>
                </select>
            </div>
            <div className='Dropdown-1-MW'>
            <input className='MW-input' placeholder=' Flywire Commission'></input>
            </div>
            <button className='MW-clear'>CLEAR</button>
            <button className='MW-Search'>SEARCH</button>
                    </div>
                </div>
    </section>
    <section className='section--4-MW'>
        <div className='MW-table'>
            <div className='MW-table-header'>
                <div className='header-1'>
                    <p>Trans.ID</p>
                    <div className='MW-buttons'>
                    <button className='Up-btn'>&lt;</button><br></br>
                    <button className='Down-btn'>&gt;</button>
                    </div>
                </div>
                <div className='header-1'>
                    <p>Date & Time</p>
                    <div className='MW-buttons'>
                    <button className='Up-btn'>&lt;</button><br></br>
                    <button className='Down-btn'>&gt;</button>
                    </div>
                </div>
                <div className='header-1'>
                    <p>Student Name</p>
                    <div className='MW-buttons'>
                    <button className='Up-btn'>&lt;</button><br></br>
                    <button className='Down-btn'>&gt;</button>
                    </div>
                </div>
                <div className='header-1'>
                    <p>Applications</p>
                    <div className='MW-buttons'>
                    <button className='Up-btn'>&lt;</button><br></br>
                    <button className='Down-btn'>&gt;</button>
                    </div>
                </div>
                <div className='header-1'>
                    <p>Trans. Amt(INR)</p>
                    <div className='MW-buttons'>
                    <button className='Up-btn'>&lt;</button><br></br>
                    <button className='Down-btn'>&gt;</button>
                    </div>
                </div>
                <div className='header-1'>
                    <p>Balance</p>
                    <div className='MW-buttons'>
                    <button className='Up-btn'>&lt;</button><br></br>
                    <button className='Down-btn'>&gt;</button>
                    </div>
                </div>
                <div className='header-1'>
                    <p>Trans.Type</p>
                    <div className='MW-buttons'>
                    <button className='Up-btn'>&lt;</button><br></br>
                    <button className='Down-btn'>&gt;</button>
                    </div>
                </div>
                <div className='header-1'>
                    <p>Trans. Status</p>
                    <div className='MW-buttons'>
                    <button className='Up-btn'>&lt;</button><br></br>
                    <button className='Down-btn'>&gt;</button>
                    </div>
                </div>
            </div>
            <div className='MW-info-row'>
                <p>149335</p>
                <p>10-08-2023 12:53 pm</p>
                <p>Roshan Jawahar</p>
                <p>NA</p>
                <p>₹ 23147.00</p>
                <p>₹ 5782.40</p>
                <p>Flywire Commission</p>
                <p>Credited</p>
            </div>
            <div className='MW-info-row'>
                <p>149335</p>
                <p>10-08-2023 12:53 pm</p>
                <p>Roshan Jawahar</p>
                <p>NA</p>
                <p>₹ 23147.00</p>
                <p>₹ 5782.40</p>
                <p>Flywire Commission</p>
                <p>Credited</p>
            </div>
            <div className='MW-info-row'>
                <p>149335</p>
                <p>10-08-2023 12:53 pm</p>
                <p>Roshan Jawahar</p>
                <p>NA</p>
                <p>₹ 23147.00</p>
                <p>₹ 5782.40</p>
                <p>Flywire Commission</p>
                <p>Credited</p>
            </div>
            <div className='MW-info-row'>
                <p>149335</p>
                <p>10-08-2023 12:53 pm</p>
                <p>Roshan Jawahar</p>
                <p>NA</p>
                <p>₹ 23147.00</p>
                <p>₹ 5782.40</p>
                <p>Flywire Commission</p>
                <p>Credited</p>
            </div>
            <div className='MW-info-row'>
                <p>149335</p>
                <p>10-08-2023 12:53 pm</p>
                <p>Roshan Jawahar</p>
                <p>NA</p>
                <p>₹ 23147.00</p>
                <p>₹ 5782.40</p>
                <p>Flywire Commission</p>
                <p>Credited</p>
            </div>
            <div className='MW-info-row'>
                <p>149335</p>
                <p>10-08-2023 12:53 pm</p>
                <p>Roshan Jawahar</p>
                <p>NA</p>
                <p>₹ 23147.00</p>
                <p>₹ 5782.40</p>
                <p>Flywire Commission</p>
                <p>Credited</p>
            </div>
            <div className='MW-info-row'>
                <p>149335</p>
                <p>10-08-2023 12:53 pm</p>
                <p>Roshan Jawahar</p>
                <p>NA</p>
                <p>₹ 23147.00</p>
                <p>₹ 5782.40</p>
                <p>Flywire Commission</p>
                <p>Credited</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Mywalletpage