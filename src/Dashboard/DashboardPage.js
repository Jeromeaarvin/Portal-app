import React from 'react'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import './Dashboard.css'
import logo from '../Dashboard/HeaderImages/Logo.png'
import Headermail from '../Dashboard/HeaderImages/Header-mail.png'
import notification from '../Dashboard/HeaderImages/notification 1.png'
import headerprofile from '../Dashboard/HeaderImages/Header-profile.png'
import ManageApllicationPage from '../ManageApllication/ManageApllicationPage';
import ManageStudentsPage from '../ManageStudents/ManageStudentsPage';
import SearchProgramPage from '../SearchProgram/SearchProgramPage';
import recycleicon from '../Dashboard/HeaderImages/recycle 1.png'
import searchprogram1 from '../Dashboard/HeaderImages/searchprogram1.png'
import CardArrow from '../Dashboard/HeaderImages/CardArrow.png'
import { useState,useContext } from 'react';
import NotificationPage from '../Notifications/NotificationPage';
import Mywalletpage from '../Walletpage/Mywalletpage';
import Students from '../Dashboard/HeaderImages/Students.png' 
import Wallet from '../Dashboard/HeaderImages/Wallet.png' 
import Quicklinks from '../Dashboard/HeaderImages/Quicklinks.png' 
import Loans from '../Dashboard/HeaderImages/Loans.png' 
import Lresource from '../Dashboard/HeaderImages/Lresource.png' 
import Shousing from '../Dashboard/HeaderImages/Shousing.png' 
import Testprep from '../Dashboard/HeaderImages/Testprep.png' 
import Contact from '../Dashboard/HeaderImages/Contact.png' 
import Updates from '../Dashboard/HeaderImages/Updates.png'
import ApplicationCountContext from '../ApplicationCountContext';

function DashboardPage() {

    const { applicationCount } = useContext(ApplicationCountContext);

    const [showPopup, setShowPopup] = useState('');

    const closePopup = () => {
        setShowPopup(false);
    };

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedIntake, setSelectedIntake] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [cardNumbers, setCardNumbers] = useState({
        allApplications: 8,
        offers: 2,
        payments: 6,
        visaReceived: 8,
        visasRejected: 8,
        nonEnrolments: 4,
        deferrals: 8,
        commissionReceived: 5
    });

    const getFilteredApplicationsCount = (selectedValue) => {
        // Logic to calculate the count based on the selected filter
        // This is just an example, replace it with your actual logic
        if (selectedValue === 'Last Month') {
          return 10; // Return count for last month
        } else if (selectedValue === 'Last Quarter') {
          return 20; // Return count for last quarter
        } else {
          return 0; // Return default count
        }
      };

      const getFilteredOffersCount = (selectedValue) => {
        // Logic to calculate the count based on the selected filter
        // This is just an example, replace it with your actual logic
        if (selectedValue === 'Last Month') {
          return 10; // Return count for last month
        } else if (selectedValue === 'Last Quarter') {
          return 20; // Return count for last quarter
        } else {
          return 0; // Return default count
        }
      };

      //One click of  button
      const [clickedFilters, setClickedFilters] = useState({}); // State to track apply button clicks for each dropdown

      const handleApplyFilter = (filterName) => {
        console.log(filterName);
        setClickedFilters((prevClickedFilters) => ({
          ...prevClickedFilters,
          [filterName]: true, // Mark the filter as clicked
        }));
        // Perform filtering logic here based on the selected filter
        // Update cardNumbers state accordingly
      };

    const handleDateChange = (event) => {
        const selectedValue = event.target.value; // Get the selected value
        const filteredCount = getFilteredApplicationsCount(selectedValue); // Calculate filtered count
        // Update cardNumbers state based on the filtered count
        setCardNumbers((prevCardNumbers) => ({
          ...prevCardNumbers,
          allApplications: filteredCount, // Update the allApplications count based on the filtered count
        }));
    };

    const handleCountryChange = (event) => {
        const selectedValue = event.target.value; // Get the selected value
        const filteredCount = getFilteredOffersCount(selectedValue); // Calculate filtered count
        // Update cardNumbers state based on the filtered count
        setCardNumbers((prevCardNumbers) => ({
          ...prevCardNumbers,
          allApplications: filteredCount, // Update the allApplications count based on the filtered count
        }));
    };

    const handleIntakeChange = (event) => {
        setSelectedIntake(event.target.value);
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const applyFilter = () => {
        // Logic to update card numbers based on selected filters
        // Example logic, you can modify according to your requirements
        const updatedCardNumbers = { ...cardNumbers };
        updatedCardNumbers.allApplications = getFilteredApplicationsCount(selectedDate); // Example random number
        updatedCardNumbers.offers = getFilteredOffersCount(selectedCountry);
        updatedCardNumbers.payments = Math.floor(Math.random() * 10); // Example random number
        updatedCardNumbers.visaReceived = Math.floor(Math.random() * 10); // Example random number
        updatedCardNumbers.visasRejected = Math.floor(Math.random() * 10); // Example random number
        updatedCardNumbers.nonEnrolments = Math.floor(Math.random() * 5); // Example random number
        updatedCardNumbers.deferrals = Math.floor(Math.random() * 10); // Example random number
        updatedCardNumbers.commissionReceived = Math.floor(Math.random() * 5); // Example random number
        setCardNumbers(updatedCardNumbers);
    };

    // const [name,setName]=useState("");
    // const [lastname,setLastName]=useState("");
    // const [mobile,setMobile]=useState("");
    // const [email,setEmail]=useState("");
   
    // console.log(`First name:${name}`,
    // `Last name:${lastname}`,
    // `Mobile no:${mobile}`,
    // `Email:${email}`,);

    const [regSuccess,setRegSuccess]=useState(false);
    

    const [formData,setFormData]=useState({
        firstname:'',
        lastname:'',
        mobileNumber:'',
        email:''
    })

    const [errors,setErrors] = useState({})

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        const validationErrors = {}
            if(!formData.firstname.trim()){
                validationErrors.firstname = "First name required"
            }
            if(!formData.lastname.trim()){
                validationErrors.lastname = "Last name required"
            }
            if(!formData.mobileNumber.trim()){
                validationErrors.mobileNumber = "Moile number required"
            }else if(formData.mobileNumber.length !== 10){
                validationErrors.mobileNumber = "Enter valid Mobile number"
            }
            if(!formData.email.trim()){
                validationErrors.email = "Enter Email ID"
            }else if(!/\S+@\S+\.\S+/.test(formData.email)){
                validationErrors.email = "Enter valid Email ID"
            }
            setErrors(validationErrors);
            if(Object.keys(validationErrors).length === 0){
                try {
                    const response = await fetch('http://localhost:8080/signup/', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(formData)
                    });
                    if (!response.ok) {
                      throw new Error('Failed to save user data');
                    }
                    // Optionally, you can handle the response here
                    const data = await response.json();
                    console.log('User data saved:', data);
                    // Reset the form after successful submission
                    setFormData({
                      firstname: '',
                      lastname: '',
                      mobileNumber: '',
                      email: ''
                    });
                    setRegSuccess(true);
                    setShowPopup(false);
                  } catch (error) {
                    console.error('Error saving user data:', error);
                    // Handle error, show message to user, etc.
                  }
            }      
    }
    // const [selectedCountryCode, setSelectedCountryCode] = useState('+91'); // Default to +91

    // const countryCodes = [
    //     { code: '+91', label: '+91' },
    //     { code: '+1', label: '+1' },
    //     // Add more country codes as needed
    // ];

    // const handleChangeCountryCode = (event) => {
    //     setSelectedCountryCode(event.target.value);
    // };

  return (
    <div className="Entire-page">
    <div className="Main-Header">
      <img className="Saio-logo" src={logo} alt="1"/>
     
      <nav className='Header-Navbar'>
        <ul className='Navbar-list'>
          <li> <Link to="/" className='Dashboard'>Dashboard</Link></li> 
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
        <Route path="/Mywalletpage" component={Mywalletpage} />
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
    <section className='Section--1'>
        <div className='Section--1-1'>
            <h2 className='Dashboard-text'>Dashboard</h2>
            <p className='Welcome-text'>Welcome to the Student Advice Portal</p>
        </div>
        <div className='Reg-btn-div'>
            <button className='Reg-button' onClick={()=>setShowPopup(true)}>
                + Register A New Student</button>
        </div>
        {showPopup &&(
             <div className="overlay" onClick={closePopup}>
    <div className="popup" onClick={(e) => e.stopPropagation()}>
      <div className='Popup-Header'>
        <h4 className='Popup-Header-text'>Register New Student</h4>
        <button className='x-btn' onClick={closePopup}>X</button>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
      <div className='Register-student-form'>
        <div className='form-first-name'>
            <h5>First Name<span>*</span></h5>
            <input 
            className='Firstname-input' 
            type='firstname'
            name='firstname'
            onChange={handleChange} 
            placeholder='First Name'
            autoComplete='off'
            value={formData.firstname}>
            </input>
            {errors.firstname && <span className='errors'>{errors.firstname}</span>}
        </div>
        <div className='form-first-name'>
            <h5>Last Name<span>*</span></h5>
            <input 
            className='Firstname-input'
            type='lastname'
            name='lastname'
            onChange={handleChange}
             placeholder='Last Name'
             value={formData.lastname}> 
             </input>
             {errors.lastname && <span className='errors'>{errors.lastname}</span>}
        </div>
        <div className='form-first-name'>
            <h5>Mobile Number<span>*</span></h5>
            <div className='countrycode'>
                {/* Country code dropdown
            <select value={selectedCountryCode} onChange={handleChangeCountryCode}>
                {countryCodes.map(country => (
                    <option key={country.code} value={country.code}>{country.label}</option>
                ))}
            </select> */}
            <input
             type='text' 
             name='mobileNumber'
             onChange={handleChange}
            className='Firstname-input' placeholder='Mobile Number'
            value={formData.mobileNumber}>
            </input>
            </div>
            {errors.mobileNumber && <span className='errors'>{errors.mobileNumber}</span>}
        </div>
        <div className='form-first-name'>
            <h5>Email Address<span>*</span></h5>
            <input className='Firstname-input'
             type='email' 
             name='email'
             onChange={handleChange}
             placeholder='Email Address'
             value={formData.email}>
             </input>
             {errors.email && <span className='errors'>{errors.email}</span>}
        </div>
      </div>
      <button 
      onSubmit={handleSubmit}
      className='Register-student-green-btn'>REGISTER STUDENT</button></form>
    </div>
    <div>
    </div>
    </div>
        )}
        {regSuccess && (
                <div className="overlay">
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        {/* <div className='Popup-Header'>
                            <h4 className='Popup-Header-text'>Registration Successful</h4>
                            <button className='x-btn' onClick={() => setRegSuccess(false)}>X</button>
                        </div>
                        <hr /> */}
                        <div className="success-message">
                            <p className='S-msg-content'>Student was successfully registered!</p>
                            <Link to='./ManageStudentsPage'><button className='Done' onClick={() => setRegSuccess(false)}>Apply Course</button></Link>
                        </div>
                    </div>
                </div>
            )}
    </section>
    <section className='Section--2'>
        <div className='Dropdown-menu'>
            <div className='Dropdown-1'>
                {/* <select className='Date-dropdown' value={selectedDate} onChange={handleDateChange}>
                <option selected className='Date-dropdown-text' >Select Date</option>
                <option className='Date-dropdown-text'>01/04/2023 - 18/01/2024 </option>
                <option className='Date-dropdown-text'>07/03/2023 - 15/03/2024</option>
                <option className='Date-dropdown-text'>01/03/2023 - 14/11/2024</option>
                <option className='Date-dropdown-text'>05/06/2003 - 18/01/2024</option>
                <option className='Date-dropdown-text'>05/06/2003 - 18/01/2024</option> 
                </select> */}
                <input type='date'className='Date-dropdown' value={selectedDate} onChange={handleDateChange}>
                </input>
            </div>
            <div className='Dropdown-1'>
                <select className='Date-dropdown' value={selectedCountry} onChange={handleCountryChange}>
                <option selected className='Date-dropdown-text' >Select Country</option>
                <option className='Date-dropdown-text'>United States</option>
                <option className='Date-dropdown-text'>Canada</option>
                <option className='Date-dropdown-text'>United Kingdom</option>
                <option className='Date-dropdown-text'>Ireland</option>
                <option className='Date-dropdown-text'>Australia</option>
                <option className='Date-dropdown-text'>New Zealand</option>
                <option className='Date-dropdown-text'>Germany</option>
                <option className='Date-dropdown-text'>Netherland</option>
                <option className='Date-dropdown-text'>France</option>
                <option className='Date-dropdown-text'>Spain</option>
                <option className='Date-dropdown-text'>Italy</option>
                <option className='Date-dropdown-text'>Poland</option>
                <option className='Date-dropdown-text'>Dubai</option>
                <option className='Date-dropdown-text'>Singapore</option>
                </select>
            </div>
            <div className='Dropdown-1'>
                <select className='Date-dropdown' value={selectedIntake} onChange={handleIntakeChange}>
                <option selected className='Date-dropdown-text' >Select Intake</option>
                <option className='Date-dropdown-text'>January</option>
                <option className='Date-dropdown-text'>February</option>
                <option className='Date-dropdown-text'>March</option>
                <option className='Date-dropdown-text'>April</option>
                <option className='Date-dropdown-text'>May</option>
                <option className='Date-dropdown-text'>June</option>
                <option className='Date-dropdown-text'>July</option>
                <option className='Date-dropdown-text'>Augest</option>
                <option className='Date-dropdown-text'>September</option>
                <option className='Date-dropdown-text'>October</option>
                <option className='Date-dropdown-text'>November</option>
                <option className='Date-dropdown-text'>December</option>
                <option className='Date-dropdown-text'>Fall</option>
                <option className='Date-dropdown-text'>Winter</option>
                <option className='Date-dropdown-text'>Spring</option>
                <option className='Date-dropdown-text'>Summer</option>
                </select>
            </div>
            <div className='Dropdown-1'>
                <select className='Date-dropdown' value={selectedYear} onChange={handleYearChange}>
                <option selected className='Date-dropdown-text' >Select Year</option>
                <option className='Date-dropdown-text'>2021</option>
                <option className='Date-dropdown-text'>2022</option>
                <option className='Date-dropdown-text'>2023</option>
                <option className='Date-dropdown-text'>2024</option>
                <option className='Date-dropdown-text'>2025</option>
                </select>
            </div>
            <div >
             <button className='Apply-filter-btn'onClick={() => handleApplyFilter('date')} 
             disabled={clickedFilters['date']}> 
             <img className='recycle' src={recycleicon} alt='1'/>
             <p className='Apply'>Apply Filter</p>
             </button>
            </div>
        </div>
    </section>
    <section className='Section--3'>
        <div className='Fisrt-row-cards'>
            <div className='card-1'>
                <p className='card-text'>All Applications</p>
                <p className='card-number'>{applicationCount}</p>
            </div>
            <div className='card-1'>
                <p className='card-text-2'>Offers</p>
                <p className='card-number'>2</p>
            </div>
            <div className='card-1'>
                <p className='card-text-3'>Payments</p>
                <p className='card-number'>6</p>
            </div>
            <div className='card-1'>
                <p className='card-text-4'>Visa Received</p>
                <p className='card-number'>8</p>
            </div>
        </div>
        <div className='Second-row-cards'>
            <div className='card-1'>
                <p className='card-text-5'>Visas Rejected</p>
                <p className='card-number'>8</p>
            </div>
            <div className='card-1'>
                <p className='card-text-6'>Non-Enrolments </p>
                <p className='card-number'>4</p>
            </div>
            <div className='card-1'>
                <p className='card-text-7'>Deferrals</p>
                <p className='card-number'>8</p>
            </div>
            <div className='card-1'>
                <p className='card-text-8'>Commission Received</p>
                <p className='card-number'>5</p>
            </div>
        </div>
    </section>
    <section className='Section--4'>
    <div className='row-1'>
        <div className='Dynamic-card-1'> <Link className='Card-link' to="/SearchProgramPage">
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={searchprogram1}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>Search programs</h2>
                <p className='card-row-sub-text'>Explore 80,000+ program options 
                using Course Finder. Filter, shortlist, compare universities, courses, 
                scholarships & apply to multiple institutions with a single application.</p>
            </div>
            </Link>
        </div>
        <div className='Dynamic-card-1'> <Link className='Card-link' to = './Studentspage'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Students}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>Students</h2>
                <p className='card-row-sub-text-links'><Link className='Card-link-2' to="/ManageStudentsPage">
                   Manage Students </Link></p>
                <p className='card-row-sub-text-links'><Link className='Card-link-2' to="/ManageApllicationPage">
                    Manage Applications</Link></p>
            </div>
            </Link>
        </div>
        <div className='Dynamic-card-1'><Link className='Card-link' to='/Mywalletpage'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Wallet}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>My Wallet</h2>
                <p className='card-row-sub-text'>Add money to your wallet for instant
                 Application Fee payments</p>
            </div>
            </Link>
        </div>
        <div className='Dynamic-card-1'><Link className='Card-link' to='/Quicklinkspage'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Quicklinks}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>Quick Links</h2>
                <div className='Quick-links'> 
                <div className='Quick-links-1'>
                <p className='card-row-sub-text-links'><Link to='/Webinars'></Link>Webinars by SAIO</p>
                <p className='card-row-sub-text-links'><Link to='/Contact-List'></Link>Contact List</p>
                <p className='card-row-sub-text-links'><Link to='/Coursefinder'></Link>Course Finder Tutorial</p>
                <p className='card-row-sub-text-links'><Link to='/Profilepage'></Link>Profile</p>
                </div>
                <div className='Quick-links-2'>
                <p className='card-row-sub-text-links'><Link to='/Webinars'></Link>Webinars by Institutes</p>
                <p className='card-row-sub-text-links'><Link to='/Contact-List'></Link>Commission Structure</p>
                <p className='card-row-sub-text-links'><Link to='/Coursefinder'></Link>Manage Counselors</p>
                <p className='card-row-sub-text-links'><Link to='/Profilepage'></Link>Promotional Schemes</p>
                </div>
                </div>
            </div>
            </Link>
        </div>
    </div>
     <div className='row-2'>
        <div className='Dynamic-card-1'><Link className='Card-link' to='/Loanpage'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Loans}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>  
                <h2 className='card-row-text'>Loans</h2>
                <p className='card-row-sub-text'>Provide end to end Overseas Education Loan
                 assistance to your students. Exclusive Partner's Dashboard to submit students 
                 cases and receive Real Time Updates on Loan Status</p>
            </div>
            </Link>
        </div>
        <div className='Dynamic-card-1'><Link className='Card-link' to='/Learning-resources-page'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Lresource}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>Learning Resources</h2>
                <p className='card-row-sub-text'>Complete Library of Product Knowledge- Country 
                Guides, Presentation Decks, Outreach Materials</p>
            </div>
            </Link>
        </div>
        <div className='Dynamic-card-1'><Link className='Card-link' to='/Student-Housing-page'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Shousing}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>Student Housing</h2>
                <p className='card-row-sub-text'>Provide your students with better 
                experience by enabling them to find an accommodation. Choose from a 
                list of properties</p>
            </div>
            </Link>
        </div>
        <div className='Dynamic-card-1'><Link className='Card-link' to='/Test-prep-page'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Testprep}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>Labeled Test prep Solutions</h2>
                <p className='card-row-sub-text'>Provide your students with a white-labelled 
                test prep. solution. Choose from flexible batch timings tailored by our experts 
                for your success</p>
            </div>
            </Link>
        </div>
    </div>



    <div className='row-3'>
        <div className='Dynamic-card-1'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Contact}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>Contact your head sales</h2>
                <p className='card-row-sub-text'>Abhijit Naik</p>
                <p className='card-row-sub-text'>anak.business@gmail.com</p>
                <p className='card-row-sub-text'>+91 7768937523</p>
            </div>
        </div>
        <div className='Dynamic-card-1'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Contact}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>Contact Regional Manager</h2>
                <p className='card-row-sub-text'>Prem Kumar K</p>
                <p className='card-row-sub-text'>pkumar.business@gmail.com</p>
                <p className='card-row-sub-text'>+91-91759-76752</p>
            </div>
        </div>
        <div className='Dynamic-card-1'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Contact}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>Contact Associate</h2>
                <p className='card-row-sub-text'>Roshan Abhichandani</p>
                <p className='card-row-sub-text'>rabhichand.business@gmail.com</p>
                <p className='card-row-sub-text'>+91 9175903774</p>
            </div>
        </div>
        <div className='Dynamic-card-1'><Link className='Card-link' to='/Updates-page'>
            <div className='card-row-1'>
                <div className='search-icon-div'>
                <img className='search-icon' src={Updates}></img>
                </div>
                <div className='CardArrow-div'>
                <img className='CardArrow' src={CardArrow}></img>
                </div>
            </div>
            <div className='card-row-2'>
                <h2 className='card-row-text'>Updates</h2>
                <p className='card-row-sub-text'>Update is to ensure that it continues
                 to effectively serve its intended purpose by providing users with timely, 
                 accurate, and actionable information.</p>
            </div>
            </Link>
        </div>
    </div>
    </section>
    </div>
  )
}

export default DashboardPage