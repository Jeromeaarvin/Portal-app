import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
// import './Dashboard.css'
import './ManageStudentsPage.css'
import logo from '../Dashboard/HeaderImages/Logo.png'
import Headermail from '../Dashboard/HeaderImages/Header-mail.png'
import notification from '../Dashboard/HeaderImages/notification 1.png'
import headerprofile from '../Dashboard/HeaderImages/Header-profile.png'
import ManageApllicationPage from '../ManageApllication/ManageApllicationPage';
import SearchProgramPage from '../SearchProgram/SearchProgramPage';
import DashboardPage from '../Dashboard/DashboardPage';
import { useState,useEffect, useContext } from 'react';
import Switch from 'react-input-switch';
import ApplicationCountContext from '../ApplicationCountContext';
import UgAcademicSection from './UgAcademicSection';
import TwelthAcademicSection from './TwelthAcademicSection';
import TenthAcademicSection from './TenthAcademicSection';
import GMATAccordion from './GMATAccordion';
import axios from 'axios';


function ManageStudentsPage() {

  const [editMode, setEditMode] = useState(true);

  const [country, setCountry] = useState('');
  const [educationLevel, setEducationLevel] = useState('');

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
  };

  const [toggle, setToggle] = useState('yes');

  const [showPopup, setShowPopup] = useState('');

    const closePopup = () => {
        setShowPopup(false);
    };

  const [profile,setProfile]=useState(false);
  const [academicQualification,setAcademicQualification]= useState('');

  const [formData,setFormData]=useState({
    firstname:'',
    lastname:'',
    mobileNumber:'',
    email:''
})
const [errors,setErrors] = useState({})
const [profilErrors,setProfilErrors] = useState({})

const [profileData,setProfileData]=useState({
  dateOfBirth: '',
  gender: '',
  maritalStatus: '',
  address1: '',
  address2: '',
  country: '',
  state: '',
  city: '',
  moreCitizenshipToggle:'',
  otherCountryToggle:'',
  pincode: '',
  peraddress1:'',
  peraddress2:'',
  percountry:'',
  perstate:'',
  percity:'',
  perpincode:'',
  passportNumber:'',
  issueDate:'',
  expiryDate:'',
  issueCountry:'',
  cityOfBirth:'',
  countryOfBirth:'',
  nationality:'',
  citizenship:'',
  moreCitizenshipDrop:'',
  otherCountryDrop:'',
  immigrationToggle:'',
  immigrationDrop:'',
  medConditionToggle:'',
  medConditionText:'',
  visaRefusalToggle:'',
  visaRefusalDrop:'',
  visaRefusalType:'',
  crimeOffToggle:'',
  crimeOffText:'',
  emgContactName:'',
  emgContactPhone:'',
  emgContactEmail:'',
  emgContactRelation:''
})

const [academicData,setAcademicData]=useState({
  eduCountry:'',
  highLvlEducation:'',
  ugHighLvlEducation:'',
  ugInstitutionName:'',
  ugCountryOfStudy:'',
  ugStateOfStudy:'',
  ugCity:'',
  ugQualAchieved:'',
  ugBacklogs:'',
  ugGradingSytem:'',
  ugScore:'',
  ugPrimLang:'',
  ugStartDate:'',
  ugEndDate:'',
  grade12HighLvlEducation:'',
  grade12InstitutionName:'',
  grade12CountryOfStudy:'',
  grade12StateOfStudy:'',
  grade12City:'',
  grade12QualAchieved:'',
  grade12Backlogs:'',
  garde12GradingSytem:'',
  grade12Score:'',
  grade12PrimLang:'',
  grade12ugStartDate:'',
  grade12EndDate:'',
  
  grade10HighLvlEducation:'',
  grade10InstitutionName:'',
  grade10CountryOfStudy:'',
  grade10StateOfStudy:'',
  grade10City:'',
  grade10QualAchieved:'',
  grade10Backlogs:'',
  garde10GradingSytem:'',
  grade10Score:'',
  grade10PrimLang:'',
  grade10ugStartDate:'',
  grade10EndDate:''
})

const [workData,setWorkData] = useState({
  orgName:'',
  position:'',
  jobprofile:'',
  workingfrom:'',
  workingupto:'',
  modeofsalary:''
})
const handleWorkChange = (e) => {
  const {name,value} = e.target;
  setWorkData(prevState => ({
      ...prevState,
      [name]: value 
  }));
}

const [testData,setTestData] = useState({
  greOverallScore:'',
  greDateOfExam:'',
  greQuantitative:'',
  greVirbal:'',
  greWriting:'',

  gmatOverallScore:'',
  gmatDateOfExam:'',
  gmatQuantitative:'',
  gmatVerbal:'',
  gmatWriting:'',
  gmatReasoning:'',

  toeflOverallScore:'',
  toeflDateOfExam:'',
  toeflReadin:'',
  toeflListening:'',
  toeflSpeaking:'',
  toeflWriting:'',

  ieltsYetToReceiveToggle:'',
  ieltsYetToreceiveText:'',
  ieltstrfNo:'',
  ieltsWaverToggle:'',
  iletsWaverText:'',
  iletsDateOfExam:'',
  iletsListening:'',
  iletsReading:'',
  iletsWriting:'',
  iletsSpeaking:'',
  iletsOvrScore:'',

  pteOverallScore:'',
  pteDateOfExam:'',
  pteReading:'',
  pteListening:'',
  pteSpeaking:'',
  pteWriting:'',

  detOverallScore:'',
  detDateOfExam:'',

  satOverallScore:'',
  satDateOfExam:'',
  satReadingWriting:'',
  satMath:'',
  satEssay:'',

  actOverallScore:'',
  actDateOfExam:'',
  actMath:'',
  actReading:'',
  actScience:'',
  actEnglish:'',
  actWriting:''
})
const handleTestChange = (e) => {
  const {name,value} = e.target;
  setTestData(prevState => ({
      ...prevState,
      [name]: value 
  }));
}

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handlePofileChange = (e) => {
  const {name,value} = e.target;
  setProfileData(prevState => ({
      ...prevState,
      [name]: value 
  }));
}

const handleAcademicChange = (e) => {
  const {name,value} = e.target;
  setAcademicData(prevAcademicData  => ({
      ...prevAcademicData,
      [name]: value 
  }));
}


const [toggleData, setToggleData] = useState({
  moreCitizenshipToggle:false,
  immigrationToggle: false
});


const handleToggleChange = (toggleName, value) => {
  setToggleData(prevToggleData => ({
      ...prevToggleData,
      [toggleName]: value === 'yes' ? true : false
  }));
}

const handleProfileSubmit1 = async (event) => {
  event.preventDefault();
  const academicValidationErrors = {};
  
  if (!profileData.dateOfBirth.trim()) {
    academicValidationErrors.dateOfBirth = "Enter Date of Birth";
  }
  if (!profileData.gender.trim()){
    academicValidationErrors.gender= "Select Gender";
  }
  if (!profileData.maritalStatus.trim()){
    academicValidationErrors.maritalStatus= "Select maritalStatus";
  }
  if (!profileData.address1.trim()){
    academicValidationErrors.address1= "Enter address";
  }
  if (!profileData.address2.trim()){
    academicValidationErrors.address2= "Enter address";
  }
  if (!profileData.country.trim()){
    academicValidationErrors.country= "Enter country";
  }
  if (!profileData.state.trim()){
    academicValidationErrors.state= "Enter state";
  }
  if (!profileData.city.trim()){
    academicValidationErrors.city= "Enter city";
  }
  if (!profileData.pincode.trim()){
    academicValidationErrors.pincode= "Enter pincode";
  }
if (!profileData.peraddress1.trim()){
  academicValidationErrors.peraddress1= "Enter address";
}
if (!profileData.peraddress2.trim()){
  academicValidationErrors.peraddress2= "Enter address";
}
if (!profileData.percountry.trim()){
  academicValidationErrors.percountry= "Enter country";
}
if (!profileData.perstate.trim()){
  academicValidationErrors.perstate= "Enter state";
}
if (!profileData.percity.trim()){
  academicValidationErrors.percity= "Enter city";
}
if (!profileData.perpincode.trim()){
  academicValidationErrors.perpincode= "Enter pincode";
}

if (!profileData.passportNumber.trim()){
    academicValidationErrors.passportNumber= "Enter PassportNumber";
  }
  if (!profileData.issueDate.trim()){
    academicValidationErrors.issueDate= "Enter IssueDate";
  }
  if (!profileData.expiryDate.trim()){
    academicValidationErrors.expiryDate= "Enter ExpiryDate";
  }
  if (!profileData.issueCountry.trim()){
    academicValidationErrors.issueCountry= "Enter IssueCountry";
  }
  if (!profileData.cityOfBirth.trim()){
    academicValidationErrors.cityOfBirth= "Enter CityOfBirth";
  }
  if (!profileData.countryOfBirth.trim()){
    academicValidationErrors.countryOfBirth= "Enter CountryOfBirth";
  }

  if (!profileData.nationality.trim()){
    academicValidationErrors.nationality= "Enter Nationality";
  }
  if (!profileData.citizenship.trim()){
    academicValidationErrors.citizenship= "Enter citizenship";
  }
  if (!profileData.moreCitizenshipDrop.trim()){
    academicValidationErrors.countryOfBirth= "Enter";
  }
  if (!profileData.otherCountryDrop.trim()){
    academicValidationErrors.otherCountryDrop= "Enter";
  }

  if (!profileData.immigrationDrop.trim()){
    academicValidationErrors.immigrationDrop= "Enter";
  }
  if (!profileData.medConditionText.trim()){
    academicValidationErrors.medConditionText= "Enter";
  }
  if (!profileData.visaRefusalDrop.trim()){
    academicValidationErrors.visaRefusalDrop= "Enter";
  }
  if (!profileData.crimeOffText.trim()){
    academicValidationErrors.crimeOffText= "Enter";
  }

  if (!profileData.emgContactName.trim()){
    academicValidationErrors.emgContactName= "Enter";
  }
  if (!profileData.emgContactPhone.trim()){
    academicValidationErrors.emgContactPhone= "Enter";
  }
  if (!profileData.emgContactEmail.trim()){
    academicValidationErrors.emgContactEmail= "Enter";
  }
  if (!profileData.emgContactRelation.trim()){
    academicValidationErrors.emgContactRelation= "Enter";
  }
  
  setProfilErrors(academicValidationErrors);
  
  if (Object.keys(academicValidationErrors).length === 0) {
    try {
      // Assuming 'profileData' contains the data to be sent to the backend
      const response = await fetch('http://localhost:8080/profile/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to save profile data');
      }
      
     
      setProfileData({
        dateOfBirth: '',
        
      });
      
      
      handleTabClick('tab2');
    } catch (error) {
      console.error('Error saving profile data:', error);
      // Handle error, show message to user, etc.
    }
  }
};


const handleProfileSubmit2 = async (event) => {
  event.preventDefault();
  const academicValidationErrors = {};
  
  // Validate academic data
  if (!academicData.ugHighLvlEducation.trim()) {
    academicValidationErrors.ugHighLvlEducation = "Select";
  }
  if (!academicData.ugInstitutionName.trim()) {
    academicValidationErrors.ugInstitutionName = "Enter";
  }
  
  setProfilErrors(academicValidationErrors); // Assuming it's setProfileErrors(profileValidationErrors);
  
  if (Object.keys(academicValidationErrors).length === 0) {
    try {
      // Assuming 'academicData' contains the data to be sent to the backend
      const response = await fetch('http://localhost:8080/academicdata/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(academicData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to save academic data');
      }
      
      // Proceed to the next tab or step
      handleTabClick('tab3');
    } catch (error) {
      console.error('Error saving academic data:', error);
      // Handle error, show message to user, etc.
    }
  }
};


const handleProfileSubmit3 = async (event) => {
  event.preventDefault();
  try {
    // Assuming 'academicData' contains the data to be sent to the backend
    const response = await fetch('http://localhost:8080/workData/',
     {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to save work data');
    }
    
    // Proceed to the next tab or step
    handleTabClick('tab4');
  } catch (error) {
    console.error('Error saving work data:', error);
    // Handle error, show message to user, etc.
  }
};


const handleWorksave = async (event)=>{
  event.preventDefault();
  const workValidationErrors={};
  if (!workData.orgName.trim()) {
    workValidationErrors.orgName = "Enter";
  }
  setProfilErrors(workValidationErrors);
}

const handleTestSave = async (event)=>{
  event.preventDefault();
  
  const testValidationErrors={};
  if (!testData.greOverallScore.trim()){
    testValidationErrors.greOverallScore= "Enter";
  }
  setProfilErrors(testValidationErrors);
  if (Object.keys(testValidationErrors).length===0){
    try{
      const response = await fetch ('http://localhost:8080/testData/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testData)
      });
      if (!response.ok) {
        throw new Error('Failed to save test data');
      }
      const data = await response.json();
      console.log('User data saved:', data);

      // const academicResponse = await fetch ('http://localhost:8080/studentProfile/',{
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(academicData)
      // });

      // if (!academicResponse.ok) {
      //   throw new Error('Failed to save academic data');
      // }
     
      // const academicData = await academicResponse.json();
      // console.log('User data saved:', academicData);


      setTestData({
        greOverallScore:'',
        greDateOfExam:''
      })
    }catch (error) {
      console.error('Error saving test data:', error);
      // Handle error, show message to user, etc.
    }
    handleTabClick('tab2')
  }
}

// console.log('academicData:', academicData);


const handleProfileSubmit = async (event)=>{
  event.preventDefault();
  const profileValidationErrors = {};
    if (!profileData.dateOfBirth.trim()){
      profileValidationErrors.dateOfBirth= "Enter Date of Birth";
    }
    if (!profileData.gender.trim()){
      profileValidationErrors.gender= "Select Gender";
    }
    if (!profileData.maritalStatus.trim()){
      profileValidationErrors.maritalStatus= "Select MartialStatus";
    }
    if (!profileData.address1.trim()){
      profileValidationErrors.address1= "Enter Address1";
    }
    if (!profileData.address2.trim()){
      profileValidationErrors.address2= "Enter Address2";
    }
    if (!profileData.country.trim()){
      profileValidationErrors.country= "Select Country";
    }
    if (!profileData.state.trim()){
      profileValidationErrors.state= "Select State";
    }
    if (!profileData.city.trim()){
      profileValidationErrors.city= "Select City";
    }
    if (!profileData.pincode.trim()){
      profileValidationErrors.pincode= "Select Pincode";
    }
    setProfilErrors(profileValidationErrors);
    if (Object.keys(profileValidationErrors).length===0){
      try{
        const response = await fetch ('http://localhost:8080/studentProfile/',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(profileData)
        });
        if (!response.ok) {
          throw new Error('Failed to save user data');
        }
        const data = await response.json();
        console.log('User data saved:', data);

        const academicResponse = await fetch ('http://localhost:8080/studentProfile/',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(academicData)
        });

        if (!academicResponse.ok) {
          throw new Error('Failed to save academic data');
        }
       
        const academicData = await academicResponse.json();
        console.log('User data saved:', academicData);

        setProfileData({
          dateOfBirth: '',
          gender: '',
          maritalStatus: '',
          address1: '',
          address2: '',
          country: '',
          state: '',
          city: '',
          moreCitizenshipToggle:'',
          otherCountryToggle:'',
          pincode: '',
          peraddress1:'',
          peraddress2:'',
          percountry:'',
          perstate:'',
          percity:'',
          perpincode:'',
          passportNumber:'',
          issueDate:'',
          expiryDate:'',
          issueCountry:'',
          cityOfBirth:'',
          countryOfBirth:'',
          nationality:'',
          citizenship:'',
          moreCitizenshipDrop:'',
          otherCountryDrop:'',
          immigrationToggle:'',
          immigrationDrop:'',
          medConditionToggle:'',
          medConditionText:'',
          visaRefusalToggle:'',
          visaRefusalDrop:'',
          visaRefusalType:'',
          crimeOffToggle:'',
          crimeOffText:'',
          emgContactName:'',
          emgContactPhone:'',
          emgContactEmail:'',
          emgContactRelation:''
        });

        setAcademicData({
          eduCountry:'',
          highLvlEducation:'',
          ugHighLvlEducation:'',
          ugInstitutionName:'',
          ugCountryOfStudy:'',
          ugStateOfStudy:'',
          ugCity:'',
          ugQualAchieved:'',
          ugBacklogs:'',
          ugGradingSytem:'',
          ugScore:'',
          ugPrimLang:'',
          ugStartDate:'',
          ugEndDate:''
        })
      }catch (error) {
        console.error('Error saving user data:', error);
        // Handle error, show message to user, etc.
      }
      handleTabClick('tab2')
    }
};


const [showDetails, setShowDetails] = useState(false);

const handleSubmit = async (event) => {
  event.preventDefault();
  const validationErrors = {};
  if (!formData.firstname.trim()) {
    validationErrors.firstname = "First name required";
  }
  if (!formData.lastname.trim()) {
    validationErrors.lastname = "Last name required";
  }
  if (!formData.mobileNumber.trim()) {
    validationErrors.mobileNumber = "Mobile number required";
  } else if (formData.mobileNumber.length !== 10) {
    validationErrors.mobileNumber = "Enter valid Mobile number";
  }
  if (!formData.email.trim()) {
    validationErrors.email = "Enter Email ID";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    validationErrors.email = "Enter valid Email ID";
  }
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
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
      
      // Fetch user data after successful signup
      const userDataResponse = await fetch('http://localhost:8080/users');
      if (!userDataResponse.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await userDataResponse.json();
      const newUser = userData.find(user => user.email === formData.email);
      setFormData(newUser);
      console.log(newUser);

      // Reset the form after successful submission
      // setFormData({
      //   firstname: '',
      //   lastname: '',
      //   mobileNumber: '',
      //   email: ''
      // });
      // setProfile(true);
      setHeaderTogg('profileTab')
      setShowPopup(false);
      setShowDetails(true); 
      setSection(false);
    } catch (error) {
      console.error('Error saving user data:', error);
      // Handle error, show message to user, etc.
    }
  }
};

const fetchLastEnteredData = async () => {
  try {
    const response = await fetch('http://localhost:8080/users');
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData = await response.json();
    const lastUserData = userData[userData.length - 1]; // Get the last user data
    setFormData(lastUserData); // Update form data with the last entered data
  } catch (error) {
    console.error('Error fetching last entered data:', error);
    // Handle error, show message to user, etc.
  }
};



// const fetchAllData = async () => {
//   try {
//     const profilesPromise = await  fetch('http://localhost:8080/profiles');
//     const academicDataPromise = await fetch('http://localhost:8080/academicdata');
//     const workDataPromise = await  fetch('http://localhost:8080/workdata');
//     const testDataPromise = await  fetch('http://localhost:8080/testdata');

//     // Wait for all promises to resolve
//     const [profilesResponse, academicDataResponse, workDataResponse, testDataResponse] = await Promise.all([
//       profilesPromise,
//       academicDataPromise,
//       workDataPromise,
//       testDataPromise
//     ]);

//     // Check if all responses are ok
//     if (
//       !profilesResponse.ok ||
//       !academicDataResponse.ok ||
//       !workDataResponse.ok ||
//       !testDataResponse.ok
//     ) {
//       throw new Error('Failed to fetch data');
//     }

//     // Parse responses
//     const profiles = await profilesResponse.json();
//     const academicData = await academicDataResponse.json();
//     const workData = await workDataResponse.json();
//     const testData = await testDataResponse.json();


//     // Here you can filter out and display only the data for the last entered entry
//     // For example, if you have a timestamp or an ID field indicating when the data was entered, you can filter based on that

//     const lastEnteredProfile = profiles[profiles.length - 1];
//     const lastEnteredAcademicData = academicData[academicData.length - 1];
//     const lastEnteredWorkData = workData[workData.length - 1];
//     const lastEnteredTestData = testData[testData.length - 1];

//     // console.log('Last entered profile:', lastEnteredProfile);
//     // console.log('Last entered academic data:', lastEnteredAcademicData);
//     // console.log('Last entered work data:', lastEnteredWorkData);
//     // console.log('Last entered test data:', lastEnteredTestData);

//     // Display the last entered data to the user
//     // You can update your UI with this data
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     // Handle error, show message to user, etc.
//   }
// };


// fetchAllData();





// const handleSubmit = async (event)=>{
//     event.preventDefault()
//     const validationErrors = {}
//         if(!formData.firstname.trim()){
//             validationErrors.firstname = "First name required"
//         }
//         if(!formData.lastname.trim()){
//             validationErrors.lastname = "Last name required"
//         }
//         if(!formData.mobileNumber.trim()){
//             validationErrors.mobileNumber = "Moile number required"
//         }else if(formData.mobileNumber.length !== 10){
//             validationErrors.mobileNumber = "Enter valid Mobile number"
//         }
//         if(!formData.email.trim()){
//             validationErrors.email = "Enter Email ID"
//         }else if(!/\S+@\S+\.\S+/.test(formData.email)){
//             validationErrors.email = "Enter valid Email ID"
//         }
//         setErrors(validationErrors);
//         if(Object.keys(validationErrors).length === 0){
//             try {
//                 const response = await fetch('http://localhost:8080/signup/', {
//                   method: 'POST',
//                   headers: {
//                     'Content-Type': 'application/json'
//                   },
//                   body: JSON.stringify(formData)
//                 });
//                 if (!response.ok) {
//                   throw new Error('Failed to save user data');
//                 }
               
//                 const data = await response.json();
//                 console.log('User data saved:', data);

//                 setFormData({
//                   firstname: '',
//                   lastname: '',
//                   mobileNumber: '',
//                   email: ''
//                 });
//                 setProfile(true);
//                 setShowPopup(false);
//               } catch (error) {
//                 console.error('Error saving user data:', error);
               
//               }
//         }    
//         setShowDetails(true);  
// }








// useEffect(() => {
//   // Fetch user data after signup
//   axios.get('http://localhost:8080/signup/') // Change this endpoint to the one that fetches user data
//     .then(response => {
//       setFormData(response.data); // Update formData state with received data
//     })
//     .catch(error => {
//       console.error('Error fetching user data:', error);
//     });
// }, []);

// const [selectedCountryCode, setSelectedCountryCode] = useState('+91'); // Default to +91

// const countryCodes = [
//     { code: '+91', label: '+91' },
//     { code: '+1', label: '+1' },
//     // Add more country codes as needed
// ];

// const handleChangeCountryCode = (event) => {
//     setSelectedCountryCode(event.target.value);
// };
  
const [activeTab, setActiveTab] = useState('tab1'); // State to track active tab

const handleTabClick = (tab) => {
  setActiveTab(tab);
};

const [isExpanded, setIsExpanded] = useState(false);
const[isExpandedGmat,setisExpandedGmat]=useState(false);
const[isExpandedToefl,setisExpandedToefl]=useState(false);
const[isExpandedIelts,setisExpandedIelts]=useState(false);
const[isExpandedPte,setisExpandedPte]=useState(false);
const[isExpandedDet,setisExpandedDet]=useState(false);
const[isExpandedSat,setisExpandedSat]=useState(false);
const[isExpandedAct,setisExpandedAct]=useState(false);



  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const handleToggleGmat = () => {
    setisExpandedGmat(!isExpandedGmat);
  };
  const handleToggleToefl = () => {
    setisExpandedToefl(!isExpandedToefl);
  };
  const handleToggleIelts = () => {
    setisExpandedIelts(!isExpandedIelts);
  };
  const handleTogglePte = () => {
    setisExpandedPte(!isExpandedPte);
  };
  const handleToggleDet = () => {
    setisExpandedDet(!isExpandedDet);
  };
  const handleToggleSat = () => {
    setisExpandedSat(!isExpandedSat);
  };
  const handleToggleAct = () => {
    setisExpandedAct(!isExpandedAct);
  };

const [workExperience,setWorkExperience]= useState(false);

const handleworkExperience =()=>{
  setWorkExperience(!workExperience);
}

const [section,setSection]=useState(true);

const [headerTogg,setHeaderTogg]=useState(false);

    const headerClick = (headTab)=>{
        setHeaderTogg(headTab);
        if (headTab === 'ApplicationTab') {
            setActiveTab('tab5'); 
        }
        if (headTab === 'profileTab') {
            setActiveTab('tab1'); 
        }
    }

return (
    <div>
       <div className="Main-Header">
      <img className="Saio-logo" src={logo} alt="1"/>
     
      <nav className='Header-Navbar'>
        <ul className='Navbar-list'>
          <li> <Link to="/" className='Dasboard-d'>Dashboard</Link></li> 
           <li><Link to="/ManageApllicationPage" className='Manage-Application'>Manage Application</Link></li> 
           <li> <Link to="/ManageStudentsPage" className='Manage-Students-mp'>Manage Students</Link></li> 
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

    {section &&(
    <section className='Section--1'>
        <div className='Section--1-1'>
            <h2 className='Dashboard-text'>Manage Students</h2>
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
      className='Register-student-green-btn'>REGISTER STUDENT</button>

      
      </form>
    </div>
    <div>
    </div>
    </div>
        )}
    </section>)}

    {headerTogg === 'profileTab' && 
    <>
     <div className='Enitre-profile'>
     <div className='prof-header'>
  <p className='c-prof-text' onClick={()=>headerClick('profileTab')}>Profile</p>
  <p className='prof-text' onClick={()=>headerClick('ApplicationTab')}>Application</p>
  <p className='prof-text' onClick={()=>headerClick('DocumentsTab')}>Document</p>
  </div>
  < hr className='div-line'/>
  < hr className='pr-blu-div-line'/>
  <section className='p-sec-2'>
              <div className='sec-2-first'>
                <p>Welcome to the Application of<span> {formData.firstname} {formData.lastname}</span></p>
              </div>
              <div className='sec-2-second'>
                <div className='stu-details'>
                  <h5>Name</h5>
                  <p>{formData.firstname} {formData.lastname}</p>
                </div>
                <div className='stu-details'>
                  <h5>Email</h5>
                  <p>{formData.email}</p>
                </div>
                <div className='stu-details'>
                  <h5>phone</h5>
                  <p>{formData.mobileNumber}</p>
                </div>
                {/* <div className='stu-details'>
                  <h4>Student Url Link</h4>
                  <p>https://app.course..</p>
                </div> */}
                 {/* <button onClick={fetchLastEnteredData}>Fetch Data</button> */}
              </div>
             
            </section>
            <div className="tab-content">
        {activeTab === 'tab1' && <div>
        <form onSubmit={handleProfileSubmit1}>
        <section className='p-sec-3'>
              <div className='info-category-1' onClick={() => handleTabClick('tab1')}>
                <p>Personal Information</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category' onClick={() => handleTabClick('tab2')}>
                <p>Academic Qualification</p>
                <p className='Incomplete'>Incomplete</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab3')}>
                <p>Work Experience</p>
                <p className='Incomplete'>Incomplete</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab4')}>
                <p>Tests</p>
                <p className='Incomplete'>Incomplete</p>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Personal Information</h3>
              <div className='per-div'>
              <div className='personal-info'>
                <div className='per-DOB'>
                  <p>Date of Birth<span>*</span></p>
                  <input
                  type='date'
                  name='dateOfBirth'
                  value={profileData.dateOfBirth}
                  onChange={handlePofileChange}
                  placeholder='Select Date'
                  ></input>
                  <div>
                  {profilErrors.dateOfBirth && <span className='errors'>{profilErrors.dateOfBirth}</span>}
               </div>
                </div>
                <div className='per-DOB'>
                  <p>Gender<span>*</span></p>
                 <select
                   name='gender'
                   value={profileData.gender}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                 </select>
                 <div>
                 {profilErrors.gender && <span className='errors'>{profilErrors.gender}</span>}
                 </div>
                </div>
                <div className='per-DOB'>
                  <p>Martial Status<span>*</span></p>
                  <select  name='maritalStatus'
                    value={profileData.maritalStatus}
                    onChange={handlePofileChange}
                    className='Gender-dropdown'
                    >
                 <option value=''>Select</option>
                    <option value='Married'>Married</option>
                    <option value='Un-married'>Un-married</option>
                 </select>
                 <div>
                 {profilErrors.maritalStatus && <span className='errors'>{profilErrors.maritalStatus}</span>}
                 </div>
                </div>
              </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Mailing Address</h3>
              <div className='per-div'>
              <div className='personal-info'>
                <div className='Ma-DOB'>
                  <p>Address1<span>*</span></p>
                  <input
                  type='text'
                  name='address1'
                  value={profileData.address1}
                  onChange={handlePofileChange}
                  placeholder='Enter Address'
                  ></input>
                 {profilErrors.address1 && <span className='errors'>{profilErrors.address1}</span>}
                </div>
                <div className='Ma-DOB'>
                  <p>Address2<span>*</span></p>
                  <input
                  type='text'
                  name='address2'
                  value={profileData.address2}
                  onChange={handlePofileChange}
                  placeholder='Enter Address'
                  ></input>
                  {profilErrors.address2 && <span className='errors'>{profilErrors.address2}</span>}
                </div>
              </div>
              
              <div className='personal-info'>
                <div className='Ma-DOB'>
                  <p>Country<span>*</span></p>
                  <input
                   name='country'
                   value={profileData.country}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter Country'
                 >
                 
                 </input>
                 {profilErrors.country && <span className='errors'>{profilErrors.country}</span>}
                </div>
                <div className='Ma-DOB'>
                  <p>State<span>*</span></p>
                  <input 
                   name='state'
                   value={profileData.state}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter State'
                 >
                 
                 </input>
                 {profilErrors.state && <span className='errors'>{profilErrors.state}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='Ma-DOB'>
                  <p>City<span>*</span></p>
                  <input
                  type='text'
                  name='city'
                  value={profileData.city}
                  onChange={handlePofileChange}
                  placeholder='Enter City'
                  ></input>
                  {profilErrors.city && <span className='errors'>{profilErrors.city}</span>}
                </div>
                <div className='Ma-DOB'>
                  <p>Pincode<span>*</span></p>
                  <input
                  type='text'
                  name='pincode'
                  value={profileData.pincode}
                  onChange={handlePofileChange}
                  placeholder='Enter Pincode'
                  ></input>
                  {profilErrors.pincode && <span className='errors'>{profilErrors.pincode}</span>}
                </div>
              </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Permanent Address</h3>
              <div className='per-div'>
              <div className='personal-info'>
                <div className='Ma-DOB'>
                  <p>Address1<span>*</span></p>
                  <input
                  type='text'
                  name='peraddress1'
                  value={profileData.peraddress1}
                  onChange={handlePofileChange}
                  placeholder='Enter Address'
                  ></input>
                 {profilErrors.address1 && <span className='errors'>{profilErrors.peraddress1}</span>}
                </div>
                <div className='Ma-DOB'>
                  <p>Address2<span>*</span></p>
                  <input
                  type='text'
                  name='peraddress2'
                  value={profileData.peraddress2}
                  onChange={handlePofileChange}
                  placeholder='Enter Address'
                  ></input>
                  {profilErrors.peraddress2 && <span className='errors'>{profilErrors.peraddress2}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='Ma-DOB'>
                  <p>Country<span>*</span></p>
                  <input
                   name='percountry'
                   value={profileData.percountry}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter Country'
                 >
                 
                 </input>
                 {profilErrors.percountry && <span className='errors'>{profilErrors.percountry}</span>}
                </div>
                <div className='Ma-DOB'>
                  <p>State<span>*</span></p>
                  <input
                   name='perstate'
                   value={profileData.perstate}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter State'
                 >
                  
                 </input>
                 {profilErrors.perstate && <span className='errors'>{profilErrors.perstate}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='Ma-DOB'>
                  <p>City<span>*</span></p>
                  <input
                  type='text'
                  name='percity'
                  value={profileData.percity}
                  onChange={handlePofileChange}
                  placeholder='Enter City'
                  ></input>
                  {profilErrors.percity && <span className='errors'>{profilErrors.percity}</span>}
                </div>
                <div className='Ma-DOB'>
                  <p>Pincode<span>*</span></p>
                  <input
                  type='text'
                  name='perpincode'
                  value={profileData.perpincode}
                  onChange={handlePofileChange}
                  placeholder='Enter Pincode'
                  ></input>
                  {profilErrors.perpincode && <span className='errors'>{profilErrors.perpincode}</span>}
                </div>
              </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Passport Information</h3>
              <div className='per-div'>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Passport Number<span>*</span></p>
                  <input
                  type='text'
                  name='passportNumber'
                  value={profileData.passportNumber}
                  onChange={handlePofileChange}
                  placeholder='Enter Number'
                  ></input>
                 {profilErrors.passportNumber && <span className='errors'>{profilErrors.passportNumber}</span>}
                </div>
                <div className='DOB'>
                  <p>Issue Date<span>*</span></p>
                  <input
                  type='date'
                  name='issueDate'
                  value={profileData.issueDate}
                  onChange={handlePofileChange}
                  placeholder='Select Date'
                  ></input>
                  {profilErrors.issueDate && <span className='errors'>{profilErrors.issueDate}</span>}
                </div>
                <div className='DOB'>
                  <p>Expiry Date<span>*</span></p>
                  <input
                  type='date'
                  name='expiryDate'
                  value={profileData.expiryDate}
                  onChange={handlePofileChange}
                  placeholder='Select Date'
                  ></input>
                  {profilErrors.expiryDate && <span className='errors'>{profilErrors.expiryDate}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Issue Country<span>*</span></p>
                  <input
                   name='issueCountry'
                   value={profileData.issueCountry}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter Country'
                 >
                 
                 </input>
                 {profilErrors.issueCountry && <span className='errors'>{profilErrors.issueCountry}</span>}
                </div>
                <div className='DOB'>
                  <p>City of Birth<span>*</span></p>
                  <input
                  type='text'
                  name='cityOfBirth'
                  value={profileData.cityOfBirth}
                  onChange={handlePofileChange}
                  placeholder='Enter City'
                  ></input>
                  {profilErrors.cityOfBirth && <span className='errors'>{profilErrors.cityOfBirth}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Birth<span>*</span></p>
                  <input
                   name='countryOfBirth'
                   value={profileData.countryOfBirth}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter Country'
                 >
                 
                 </input>
                 {profilErrors.countryOfBirth && <span className='errors'>{profilErrors.countryOfBirth}</span>}
                </div>
              </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Nationality</h3>
              <div className='per-div'>
              <div className='personal-info'>
              <div className='Ma-DOB'>
                  <p>Nationality<span>*</span></p>
                  <input
                   name='nationality'
                   value={profileData.nationality}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter Nationality'
                 >
                  
                 </input>
                 {profilErrors.nationality && <span className='errors'>{profilErrors.nationality}</span>}
                </div>
                <div className='Ma-DOB'>
                  <p>Citizenship<span>*</span></p>
                  <input
                   name='citizenship'
                   value={profileData.citizenship}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter Citizenship'
                 >
                 
                 </input>
                 {profilErrors.citizenship && <span className='errors'>{profilErrors.citizenship}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='t-DOB'>
                  <p>Is a applicant a citizen of more than one country?<span>*</span></p>
                  <div className='togg-div'>
                  <Switch
                   on="yes"
                   off="no" 
                  name='moreCitizenshipToggle' 
                  value={toggleData.moreCitizenshipToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('moreCitizenshipToggle', value)} />
                 
                  <input
                   name='moreCitizenshipDrop'
                   value={profileData.moreCitizenshipDrop}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter Country'
                 >
                  
                 </input>
                 </div>
                 {profilErrors.moreCitizenshipDrop && <span className='errors'>{profilErrors.moreCitizenshipDrop}</span>}
                </div>
                <div className='t-DOB'>
                  <p>Is a applicant living and studying in any other country?<span>*</span></p>
                  <div className='togg-div'>
                  <Switch
                   on="yes"
                   off="no" 
                  name='otherCountryToggle' 
                  value={toggleData.otherCountryToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('otherCountryToggle', value)} />
                  <input
                   name='otherCountryDrop'
                   value={profileData.otherCountryDrop}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter Country'
                 >
                 
                 </input>
                 </div>
                 {profilErrors.otherCountryDrop && <span className='errors'>{profilErrors.otherCountryDrop}</span>}
                </div>
              </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Background Info</h3>
              <div className='per-div'>
              <div className='personal-info'>
                <div className='t-DOB'>
                  <p>Has applicant applied for any type of immigration into any country?<span>*</span></p>
                  <div className='togg-div'>
                  <Switch 
                  on="yes" 
                  off="no" 
                  name='immigrationToggle' 
                  value={toggleData.immigrationToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('immigrationToggle', value)} />
                
                  <input
                   name='immigrationDrop'
                   value={profileData.immigrationDrop}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter Country'
                 >
                 
                 </input>
                 </div>
                 {profilErrors.immigrationDrop && <span className='errors'>{profilErrors.immigrationDrop}</span>}
                </div>
                <div className='t-DOB'>
                  <p>Does applicant suffer from a serious medical condition?</p>
                  <div className='togg-div'>
                  <Switch
                   on="yes"
                   off="no" 
                  name='medConditionToggle' 
                  value={toggleData.medConditionToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('medConditionToggle', value)} />
                  <input
                  type='text'
                  name='medConditionText'
                  value={profileData.medConditionText}
                  onChange={handlePofileChange}
                  placeholder='Enter Condition'
                  ></input>
                  </div>
                 {profilErrors.medConditionText && <span className='errors'>{profilErrors.medConditionText}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='t-DOB'>
                  <p>Has applicant Visa refusal for any country?<span>*</span></p>
                  <div className='togg-div-2'>
                  <Switch
                   on="yes"
                   className='switch'
                   off="no" 
                  name='visaRefusalToggle' 
                  value={toggleData.visaRefusalToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('visaRefusalToggle', value)} />
                   <div className='2-inputs'>
                  <input
                   name='visaRefusalDrop'
                   value={profileData.visaRefusalDrop}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                   placeholder='Enter Country'
                 >
                 
                 </input>
                 {profilErrors.visaRefusalDrop && <span className='errors'>{profilErrors.visaRefusalDrop}</span>}
                 <input
                  type='text'
                  name='visaRefusalType'
                  value={profileData.visaRefusalType}
                  onChange={handlePofileChange}
                  placeholder='Type of Visa'
                  ></input>
                  </div>
                  </div>
                 {profilErrors.visaRefusalType && <span className='errors'>{profilErrors.visaRefusalType}</span>}
                </div>
                <div className='t-DOB'>
                  <p>Has applicant ever been convicted of a criminal offence?<span>*</span></p>
                  <div className='togg-div'>
                   <Switch
                   on="yes"
                   off="no" 
                  name='crimeOffToggle' 
                  value={toggleData.crimeOffToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('crimeOffToggle', value)} />
                  <input
                  type='text'
                  name='crimeOffText'
                  value={profileData.crimeOffText}
                  onChange={handlePofileChange}
                  placeholder='Enter offence'
                  ></input>
                  </div>
                 {profilErrors.crimeOffText && <span className='errors'>{profilErrors.crimeOffText}</span>}
                </div>
              </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Important Contacts</h3>
              <div className='per-div'>
              <div className='personal-info'>
                <div className='Ma-DOB'>
                  <p>Name<span>*</span></p>
                  <input
                  type='text'
                  name='emgContactName'
                  value={profileData.emgContactName}
                  onChange={handlePofileChange}
                  placeholder='Enter Name'
                  ></input>
                 {profilErrors.emgContactName && <span className='errors'>{profilErrors.emgContactName}</span>}
                </div>
                <div className='Ma-DOB'>
                  <p>Phone<span>*</span></p>
                  <input
                  type='text'
                  name='emgContactPhone'
                  value={profileData.emgContactPhone}
                  onChange={handlePofileChange}
                  placeholder='Enter Mobile Number'
                  ></input>
                 {profilErrors.emgContactPhone && <span className='errors'>{profilErrors.emgContactPhone}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='Ma-DOB'>
                  <p>Email<span>*</span></p>
                  <input
                  type='text'
                  name='emgContactEmail'
                  value={profileData.emgContactEmail}
                  onChange={handlePofileChange}
                  placeholder='Enter Email'
                  ></input>
                 {profilErrors.emgContactEmail && <span className='errors'>{profilErrors.emgContactEmail}</span>}
                </div>
                <div className='Ma-DOB'>
                  <p>Relation with Applicant<span>*</span></p>
                  <input
                  type='text'
                  name='emgContactRelation'
                  value={profileData.emgContactRelation}
                  onChange={handlePofileChange}
                  placeholder='Enter Relation'
                  ></input>
                 {profilErrors.emgContactRelation && <span className='errors'>{profilErrors.emgContactRelation}</span>}
                </div>
              </div>
              </div>
            </section>
            <button  type="submit"
             className='prof-sub-btn'
             onSubmit={handleProfileSubmit1}>Submit</button></form>
          </div>}
        {activeTab === 'tab2' && 
        <div>
          <section className='p-sec-3'>
              <div className='info-category' onClick={() => handleTabClick('tab1')}>
                <p>Personal Information</p>
                <p className='completed'>Completed</p>
              </div>
              <div className='info-category-2' onClick={() => handleTabClick('tab2')}>
                <p>Academic Qualification</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab3')}>
                <p>Work Experience</p>
                <p className='Incomplete'>Optional</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab4')}>
                <p>Tests</p>
                <p className='Incomplete'>Incomplete</p>
              </div>
            </section>
            <form onSubmit={handleProfileSubmit2}>
            <section className='p-sec-4'>          
              <div className='aca-per-div'>
                <div className='DOB'>
                  <h4>Country of education</h4>
                  <input
                   name='country'
                   value={country}
                   onChange={handleCountryChange}
                   className='Gender-dropdown'
                   placeholder='Enter Country of Education'
                 >
                  
                 </input>
                 {/* {profilErrors.eduCountry && <span className='errors'>{profilErrors.eduCountry}</span>} */}
                </div>
                <div className='DOB'>
                  <h4>Highest level of education<span>*</span></h4>
                  <select
                   name='educationLevel'
                   value={educationLevel}
                   onChange={handleEducationLevelChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='Undergraduate'>Undergraduate</option>
                    <option value='12th'>12th</option>
                    <option value='10th'>10th</option>
                 </select>
                 {profilErrors.highLvlEducation1 && <span className='errors'>{profilErrors.highLvlEducation1}</span>}
                </div>
              </div>
            </section>
            { educationLevel === 'Undergraduate' && (
              <>
            {/* <section className='p-sec-4'>
              <h3>Undergraduate</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Highest level of education*</p>         
                  <select
                   name='ugHighLvlEducation'
                   value={academicData.ugHighLvlEducation}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.ugHighLvlEducation && <span className='errors'>{profilErrors.ugHighLvlEducation}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name of the Institution*</p>
                 <input
                  type='text'
                  name='ugInstitutionName'
                  value={academicData.ugInstitutionName}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugInstitutionName && <span className='errors'>{profilErrors.ugInstitutionName}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Study*</p>
                  <select
                   name='ugCountryOfStudy'
                   value={academicData.ugCountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.ugCountryOfStudy && <span className='errors'>{profilErrors.ugCountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <select
                   name='ugStateOfStudy'
                   value={academicData.ugStateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.ugStateOfStudy && <span className='errors'>{profilErrors.ugStateOfStudy}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                 <input
                  type='text'
                  name='ugCity'
                  value={academicData.ugCity}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugCity && <span className='errors'>{profilErrors.ugCity}</span>}
                </div>
                <div className='DOB'>
                  <p>Qualification Achieved*</p>
                 <input
                  type='text'
                  name='ugQualAchieved'
                  value={academicData.ugQualAchieved}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugQualAchieved && <span className='errors'>{profilErrors.ugQualAchieved}</span>}
                </div>
                <div className='DOB'>
                  <p>Backlogs</p>
                 <input
                  type='text'
                  name='ugBacklogs'
                  value={academicData.ugBacklogs}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugBacklogs && <span className='errors'>{profilErrors.ugBacklogs}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Grading System*</p>
                  <select
                   name='ugGradingSytem'
                   value={academicData.ugGradingSytem}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>Grade</option>
                    <option value='UK'>Rank</option>
                 </select>
                 {profilErrors.ugGradingSytem && <span className='errors'>{profilErrors.ugGradingSytem}</span>}
                </div>
                <div className='DOB'>
                  <p>Score</p>
                 <input
                  type='text'
                  name='ugScore'
                  value={academicData.ugScore}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugScore && <span className='errors'>{profilErrors.ugScore}</span>}
                </div>
                 <div className='DOB'>
                  <p>Primary Language Of Instruction*</p>
                 <input
                  type='text'
                  name='ugPrimLang'
                  value={academicData.ugPrimLang}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugPrimLang && <span className='errors'>{profilErrors.ugPrimLang}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Start Date</p>
                 <input
                  type='date'
                  name='ugStartDate'
                  value={academicData.ugStartDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugStartDate && <span className='errors'>{profilErrors.ugStartDate}</span>}
                </div>
                 <div className='DOB'>
                  <p>End Date</p>
                 <input
                  type='date'
                  name='ugEndDate'
                  value={academicData.ugEndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugEndDate && <span className='errors'>{profilErrors.ugEndDate}</span>}
                </div>
                
              </div>
              <>
              <button >Save</button>
               </>
            </section> */}
             <UgAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
          />
            <TwelthAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
            
          />
            <TenthAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
            />
            {/* <section className='p-sec-4'>
              <h3>Grade 12th or equivalent</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Highest level of education*</p>         
                  <select
                   name='grade12HighLvlEducation'
                   value={academicData.grade12HighLvlEducation}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12HighLvlEducation && <span className='errors'>{profilErrors.grade12HighLvlEducation}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name of the Institution*</p>
                 <input
                  type='text'
                  name='grade12InstitutionName'
                  value={academicData.grade12InstitutionName}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12InstitutionName && <span className='errors'>{profilErrors.grade12InstitutionName}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Study*</p>
                  <select
                   name='grade12CountryOfStudy'
                   value={academicData.grade12CountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12CountryOfStudy && <span className='errors'>{profilErrors.grade12CountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <select
                   name='grade12StateOfStudy'
                   value={academicData.grade12StateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12StateOfStudy && <span className='errors'>{profilErrors.grade12StateOfStudy}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                 <input
                  type='text'
                  name='grade12City'
                  value={academicData.grade12City}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12City && <span className='errors'>{profilErrors.grade12City}</span>}
                </div>
                <div className='DOB'>
                  <p>Qualification Achieved*</p>
                 <input
                  type='text'
                  name='grade12QualAchieved'
                  value={academicData.grade12QualAchieved}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12QualAchieved && <span className='errors'>{profilErrors.grade12QualAchieved}</span>}
                </div>
                <div className='DOB'>
                  <p>Backlogs</p>
                 <input
                  type='text'
                  name='grade12Backlogs'
                  value={academicData.grade12Backlogs}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12Backlogs && <span className='errors'>{profilErrors.grade12Backlogs}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Grading System*</p>
                  <select
                   name='garde12GradingSytem'
                   value={academicData.garde12GradingSytem}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>Grade</option>
                    <option value='UK'>Rank</option>
                 </select>
                 {profilErrors.garde12GradingSytem && <span className='errors'>{profilErrors.garde12GradingSytem}</span>}
                </div>
                <div className='DOB'>
                  <p>Score</p>
                 <input
                  type='text'
                  name='grade12Score'
                  value={academicData.grade12Score}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12Score && <span className='errors'>{profilErrors.grade12Score}</span>}
                </div>
                 <div className='DOB'>
                  <p>Primary Language Of Instruction*</p>
                 <input
                  type='text'
                  name='grade12PrimLang'
                  value={academicData.grade12PrimLang}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12PrimLang && <span className='errors'>{profilErrors.grade12PrimLang}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Start Date</p>
                 <input
                  type='text'
                  name='grade12ugStartDate'
                  value={academicData.grade12ugStartDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12ugStartDate && <span className='errors'>{profilErrors.grade12ugStartDate}</span>}
                </div>
                 <div className='DOB'>
                  <p>End Date</p>
                 <input
                  type='text'
                  name='grade12EndDate'
                  value={academicData.grade12EndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12EndDate && <span className='errors'>{profilErrors.grade12EndDate}</span>}
                </div>
              </div>
            </section> */}

            {/* <section className='p-sec-4'>
              <h3>Grade 10th or equivalent</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Highest level of education*</p>         
                  <select
                   name='grade10HighLvlEducation'
                   value={academicData.grade10HighLvlEducation}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10HighLvlEducation && <span className='errors'>{profilErrors.grade10HighLvlEducationx}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name of the Institution*</p>
                 <input
                  type='text'
                  name='grade10InstitutionName'
                  value={academicData.grade10InstitutionName}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10InstitutionName && <span className='errors'>{profilErrors.grade10InstitutionName}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Study*</p>
                  <select
                   name='grade10CountryOfStudy'
                   value={academicData.grade10CountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10CountryOfStudy && <span className='errors'>{profilErrors.grade10CountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <select
                   name='grade10StateOfStudy'
                   value={academicData.grade10StateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10StateOfStudy && <span className='errors'>{profilErrors.grade10StateOfStudy}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                 <input
                  type='text'
                  name='grade10City'
                  value={academicData.grade10City}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10City && <span className='errors'>{profilErrors.grade10City}</span>}
                </div>
                <div className='DOB'>
                  <p>Qualification Achieved*</p>
                 <input
                  type='text'
                  name='grade10QualAchieved'
                  value={academicData.grade10QualAchieved}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10QualAchieved && <span className='errors'>{profilErrors.grade10QualAchieved}</span>}
                </div>
                <div className='DOB'>
                  <p>Backlogs</p>
                 <input
                  type='text'
                  name='grade10Backlogs'
                  value={academicData.grade10Backlogs}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10Backlogs && <span className='errors'>{profilErrors.grade10Backlogs}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Grading System*</p>
                  <select
                   name='grade10GradingSytem'
                   value={academicData.grade10GradingSytem}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>Grade</option>
                    <option value='UK'>Rank</option>
                 </select>
                 {profilErrors.grade10GradingSytem && <span className='errors'>{profilErrors.grade10GradingSytem}</span>}
                </div>
                <div className='DOB'>
                  <p>Score</p>
                 <input
                  type='text'
                  name='grade10Score'
                  value={academicData.grade10Score}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10Score && <span className='errors'>{profilErrors.grade10Score}</span>}
                </div>
                 <div className='DOB'>
                  <p>Primary Language Of Instruction*</p>
                 <input
                  type='text'
                  name='grade10PrimLang'
                  value={academicData.grade10PrimLang}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10PrimLang && <span className='errors'>{profilErrors.grade10PrimLang}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Start Date</p>
                 <input
                  type='text'
                  name='grade10StartDate'
                  value={academicData.grade10StartDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10StartDate && <span className='errors'>{profilErrors.grade10StartDate}</span>}
                </div>
                 <div className='DOB'>
                  <p>End Date</p>
                 <input
                  type='text'
                  name='grade10EndDate'
                  value={academicData.grade10EndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10EndDate && <span className='errors'>{profilErrors.grade10EndDate}</span>}
                </div>
              </div>
            </section> */}
            </>
            )}

          { educationLevel === '12th' && (
              <>
            {/* <section className='p-sec-4'>
              <h3>Grade 12th or equivalent</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Highest level of education*</p>         
                  <select
                   name='grade12HighLvlEducation'
                   value={academicData.grade12HighLvlEducation}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12HighLvlEducation && <span className='errors'>{profilErrors.grade12HighLvlEducation}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name of the Institution*</p>
                 <input
                  type='text'
                  name='grade12InstitutionName'
                  value={academicData.grade12InstitutionName}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12InstitutionName && <span className='errors'>{profilErrors.grade12InstitutionName}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Study*</p>
                  <select
                   name='grade12CountryOfStudy'
                   value={academicData.grade12CountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12CountryOfStudy && <span className='errors'>{profilErrors.grade12CountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <select
                   name='grade12StateOfStudy'
                   value={academicData.grade12StateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12StateOfStudy && <span className='errors'>{profilErrors.grade12StateOfStudy}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                 <input
                  type='text'
                  name='grade12City'
                  value={academicData.grade12City}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12City && <span className='errors'>{profilErrors.grade12City}</span>}
                </div>
                <div className='DOB'>
                  <p>Qualification Achieved*</p>
                 <input
                  type='text'
                  name='grade12QualAchieved'
                  value={academicData.grade12QualAchieved}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12QualAchieved && <span className='errors'>{profilErrors.grade12QualAchieved}</span>}
                </div>
                <div className='DOB'>
                  <p>Backlogs</p>
                 <input
                  type='text'
                  name='grade12Backlogs'
                  value={academicData.grade12Backlogs}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12Backlogs && <span className='errors'>{profilErrors.grade12Backlogs}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Grading System*</p>
                  <select
                   name='garde12GradingSytem'
                   value={academicData.garde12GradingSytem}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>Grade</option>
                    <option value='UK'>Rank</option>
                 </select>
                 {profilErrors.garde12GradingSytem && <span className='errors'>{profilErrors.garde12GradingSytem}</span>}
                </div>
                <div className='DOB'>
                  <p>Score</p>
                 <input
                  type='text'
                  name='grade12Score'
                  value={academicData.grade12Score}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12Score && <span className='errors'>{profilErrors.grade12Score}</span>}
                </div>
                 <div className='DOB'>
                  <p>Primary Language Of Instruction*</p>
                 <input
                  type='text'
                  name='grade12PrimLang'
                  value={academicData.grade12PrimLang}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12PrimLang && <span className='errors'>{profilErrors.grade12PrimLang}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Start Date</p>
                 <input
                  type='text'
                  name='grade12ugStartDate'
                  value={academicData.grade12ugStartDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12ugStartDate && <span className='errors'>{profilErrors.grade12ugStartDate}</span>}
                </div>
                 <div className='DOB'>
                  <p>End Date</p>
                 <input
                  type='text'
                  name='grade12EndDate'
                  value={academicData.grade12EndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12EndDate && <span className='errors'>{profilErrors.grade12EndDate}</span>}
                </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Grade 10th or equivalent</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Highest level of education*</p>         
                  <select
                   name='grade10HighLvlEducation'
                   value={academicData.grade10HighLvlEducation}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10HighLvlEducation && <span className='errors'>{profilErrors.grade10HighLvlEducationx}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name of the Institution*</p>
                 <input
                  type='text'
                  name='grade10InstitutionName'
                  value={academicData.grade10InstitutionName}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10InstitutionName && <span className='errors'>{profilErrors.grade10InstitutionName}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Study*</p>
                  <select
                   name='grade10CountryOfStudy'
                   value={academicData.grade10CountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10CountryOfStudy && <span className='errors'>{profilErrors.grade10CountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <select
                   name='grade10StateOfStudy'
                   value={academicData.grade10StateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10StateOfStudy && <span className='errors'>{profilErrors.grade10StateOfStudy}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                 <input
                  type='text'
                  name='grade10City'
                  value={academicData.grade10City}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10City && <span className='errors'>{profilErrors.grade10City}</span>}
                </div>
                <div className='DOB'>
                  <p>Qualification Achieved*</p>
                 <input
                  type='text'
                  name='grade10QualAchieved'
                  value={academicData.grade10QualAchieved}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10QualAchieved && <span className='errors'>{profilErrors.grade10QualAchieved}</span>}
                </div>
                <div className='DOB'>
                  <p>Backlogs</p>
                 <input
                  type='text'
                  name='grade10Backlogs'
                  value={academicData.grade10Backlogs}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10Backlogs && <span className='errors'>{profilErrors.grade10Backlogs}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Grading System*</p>
                  <select
                   name='grade10GradingSytem'
                   value={academicData.grade10GradingSytem}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>Grade</option>
                    <option value='UK'>Rank</option>
                 </select>
                 {profilErrors.grade10GradingSytem && <span className='errors'>{profilErrors.grade10GradingSytem}</span>}
                </div>
                <div className='DOB'>
                  <p>Score</p>
                 <input
                  type='text'
                  name='grade10Score'
                  value={academicData.grade10Score}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10Score && <span className='errors'>{profilErrors.grade10Score}</span>}
                </div>
                 <div className='DOB'>
                  <p>Primary Language Of Instruction*</p>
                 <input
                  type='text'
                  name='grade10PrimLang'
                  value={academicData.grade10PrimLang}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10PrimLang && <span className='errors'>{profilErrors.grade10PrimLang}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Start Date</p>
                 <input
                  type='text'
                  name='grade10StartDate'
                  value={academicData.grade10StartDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10StartDate && <span className='errors'>{profilErrors.grade10StartDate}</span>}
                </div>
                 <div className='DOB'>
                  <p>End Date</p>
                 <input
                  type='text'
                  name='grade10EndDate'
                  value={academicData.grade10EndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10EndDate && <span className='errors'>{profilErrors.grade10EndDate}</span>}
                </div>
              </div>
            </section> */}
             <TwelthAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
          />
            <TenthAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
            />
            </>
            )}

            { educationLevel  === '10th' && (
              <>
               {/* <section className='p-sec-4'>
               <h3>Grade 10th or equivalent</h3>
               <div className='personal-info'>
                 <div className='DOB'>
                   <p>Highest level of education*</p>         
                   <select
                    name='grade10HighLvlEducation'
                    value={academicData.grade10HighLvlEducation}
                    onChange={handleAcademicChange}
                    className='Gender-dropdown'
                  >
                   <option value=''>Select</option>
                     <option value='US'>US</option>
                     <option value='UK'>UK</option>
                  </select>
                  {profilErrors.grade10HighLvlEducation && <span className='errors'>{profilErrors.grade10HighLvlEducationx}</span>}
                 </div>
               </div>
               <div className='personal-info'>
                 <div className='DOB'>
                   <p>Name of the Institution*</p>
                  <input
                   type='text'
                   name='grade10InstitutionName'
                   value={academicData.grade10InstitutionName}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10InstitutionName && <span className='errors'>{profilErrors.grade10InstitutionName}</span>}
                 </div>
                 <div className='DOB'>
                   <p>Country of Study*</p>
                   <select
                    name='grade10CountryOfStudy'
                    value={academicData.grade10CountryOfStudy}
                    onChange={handleAcademicChange}
                    className='Gender-dropdown'
                  >
                   <option value=''>Select</option>
                     <option value='US'>US</option>
                     <option value='UK'>UK</option>
                  </select>
                  {profilErrors.grade10CountryOfStudy && <span className='errors'>{profilErrors.grade10CountryOfStudy}</span>}
                 </div>
                 <div className='DOB'>
                   <p>State of Study*</p>
                   <select
                    name='grade10StateOfStudy'
                    value={academicData.grade10StateOfStudy}
                    onChange={handleAcademicChange}
                    className='Gender-dropdown'
                  >
                   <option value=''>Select</option>
                     <option value='US'>US</option>
                     <option value='UK'>UK</option>
                  </select>
                  {profilErrors.grade10StateOfStudy && <span className='errors'>{profilErrors.grade10StateOfStudy}</span>}
                 </div>
               </div>
               <div className='personal-info'>
                 <div className='DOB'>
                   <p>City*</p>
                  <input
                   type='text'
                   name='grade10City'
                   value={academicData.grade10City}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10City && <span className='errors'>{profilErrors.grade10City}</span>}
                 </div>
                 <div className='DOB'>
                   <p>Qualification Achieved*</p>
                  <input
                   type='text'
                   name='grade10QualAchieved'
                   value={academicData.grade10QualAchieved}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10QualAchieved && <span className='errors'>{profilErrors.grade10QualAchieved}</span>}
                 </div>
                 <div className='DOB'>
                   <p>Backlogs</p>
                  <input
                   type='text'
                   name='grade10Backlogs'
                   value={academicData.grade10Backlogs}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10Backlogs && <span className='errors'>{profilErrors.grade10Backlogs}</span>}
                 </div>
               </div>
               <div className='personal-info'>
                 <div className='DOB'>
                   <p>Grading System*</p>
                   <select
                    name='grade10GradingSytem'
                    value={academicData.grade10GradingSytem}
                    onChange={handleAcademicChange}
                    className='Gender-dropdown'
                  >
                   <option value=''>Select</option>
                     <option value='US'>Grade</option>
                     <option value='UK'>Rank</option>
                  </select>
                  {profilErrors.grade10GradingSytem && <span className='errors'>{profilErrors.grade10GradingSytem}</span>}
                 </div>
                 <div className='DOB'>
                   <p>Score</p>
                  <input
                   type='text'
                   name='grade10Score'
                   value={academicData.grade10Score}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10Score && <span className='errors'>{profilErrors.grade10Score}</span>}
                 </div>
                  <div className='DOB'>
                   <p>Primary Language Of Instruction*</p>
                  <input
                   type='text'
                   name='grade10PrimLang'
                   value={academicData.grade10PrimLang}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10PrimLang && <span className='errors'>{profilErrors.grade10PrimLang}</span>}
                 </div>
               </div>
               <div className='personal-info'>
                 <div className='DOB'>
                   <p>Start Date</p>
                  <input
                   type='text'
                   name='grade10StartDate'
                   value={academicData.grade10StartDate}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10StartDate && <span className='errors'>{profilErrors.grade10StartDate}</span>}
                 </div>
                  <div className='DOB'>
                   <p>End Date</p>
                  <input
                   type='text'
                   name='grade10EndDate'
                   value={academicData.grade10EndDate}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10EndDate && <span className='errors'>{profilErrors.grade10EndDate}</span>}
                 </div>
               </div>
             </section> */}
              <TenthAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
            />
             </>
             )} 
           
            <button  type="submit" 
            className='prof-sub-btn'
            onSubmit={handleProfileSubmit2}>Countinue</button>
            </form>
          </div>}
        {activeTab === 'tab3' && 
        <div>
          <section className='p-sec-3'>
              <div className='info-category' onClick={() => handleTabClick('tab1')}>
                <p>Personal Information</p>
                <p className='completed'>Completed</p>
              </div>
              <div className='info-category' onClick={() => handleTabClick('tab2')}>
                <p>Academic Qualification</p>
                <p className='completed'>Completed</p>
              </div>
              <div className='info-category-2'onClick={() => handleTabClick('tab3')}>
                <p>Work Experience</p>
                <p>Optional</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab4')}>
                <p>Tests</p>
                <p className='Incomplete'>Incomplete</p>
              </div>
            </section>  
            <section className='p-sec-4'>
             <h3>Work Experience</h3>
             {workExperience &&(
              <div className='wrk-exp-form'>
                <form onSubmit={handleWorksave}>
                  <div className='wrk-sec-1'>
                    <div className='Ma-DOB'>
                    <p>Name of the organiztaion & Address<span>*</span></p>
                    <input
                    type='text'
                    placeholder='Name of the organiztaion & Address'
                    value={workData.orgName} 
                    onChange={handleWorkChange}
                    name="orgName"
           >
           </input>
           {profilErrors.orgName && <span className='errors'>{profilErrors.orgName}</span>}

                    </div>
                    <div className='Ma-DOB'>
                    <p>Position<span>*</span></p>
                    <input
                    type='text'
                    placeholder='Enter Position'></input>
                    </div>
                  </div>
                  <div className='wrk-sec-2'>
                    <div className='Ma-DOB'>
                    <p>Job Profile<span>*</span></p>
                    <input
                    type='text'
                    placeholder='Enter Job Profile'></input>
                    </div>
                    <div className='Ma-DOB'>
                    <p>Working From<span>*</span></p>
                    <input
                    type='date'></input>
                    </div>
                  </div>
                  <div className='wrk-sec-2'>
                    <div className='Ma-DOB'>
                    <p>Working Upto<span>*</span></p>
                    <input
                    type='date'></input>
                    </div>
                    <div className='Ma-DOB'>
                    <p>Mode of Salary<span>*</span></p>
                    <input
                    type='text'></input>
                    </div>
                  </div>
                  <button type='submit' className='work-save' onSubmit={handleWorksave}>save</button>
                </form>
              </div>
             )}
             <div className='add-work-exp'>
              <h4 onClick={handleworkExperience}>+  ADD WORK EXPERIENCE</h4>
             </div> 
             <button className='work-skip' onClick={handleProfileSubmit3}>SKIP</button>
            
            </section>
            {/* <button >all data</button> */}
          </div>}
          {activeTab === 'tab4' && 
        <div>
          <section className='p-sec-3'>
              <div className='info-category' onClick={() => handleTabClick('tab1')}>
                <p>Personal Information</p>
                <p className='completed'>Completed</p>
              </div>
              <div className='info-category' onClick={() => handleTabClick('tab2')}>
                <p>Academic Qualification</p>
                <p className='completed'>Completed</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab3')}>
                <p>Work Experience</p>
                <p className='Incomplete'>Optional</p>
              </div>
              <div className='info-category-3'onClick={() => handleTabClick('tab4')}>
                <p>Tests</p>
                <p>Incomplete</p>
              </div>
            </section>
            <section className='p-sec-4'>
              <form type='submit' onSubmit={handleTestSave}>
              <h3>Tests</h3>
              <div className='accordian-info'>
                  <div 
                  className='Accordian'
                  onClick={handleToggle} 
                  style={{ cursor: 'pointer' }}>
        <h2>GRE</h2><h2>+</h2>
      </div>
      {isExpanded && (
        <div className='Accordian-div'>
          <div className='a-sec-1'>
        </div>
        <div className='a-sec-1'>
          <div className='a-DOB'>
          <p>Overall score<span>*</span></p>
          <input
          type="text" 
          value={testData.greOverallScore} 
          onChange={handleTestChange}
          placeholder='Overall score'
          name="greOverallScore" />
           {profilErrors.greOverallScore && <span className='errors'>{profilErrors.greOverallScore}</span>}
          </div>

          <div className='a-DOB'>
           <p>Date of Examination</p>
          <input
          type="text" 
          value={academicData.greDateOfExam} 
          onChange={handleTestChange}
          placeholder='Date of Examination'
          name="greDateOfExam"  />
        </div>
        </div>
        <div className='a-sec-1'>
          <div className='per-DOB'>
           <p>Quantitative<span>*</span></p>
          <input
          type="text" 
          value={academicData.greQuantitative} 
          onChange={handleTestChange}
          placeholder='Q:' />
          </div>
          <div className='per-DOB'>
           <p>Virbal<span>*</span></p>
          <input
          type="text" 
          value={academicData.greVirbal} 
          onChange={handleTestChange}
          placeholder='V:' />
        </div>
        <div className='per-DOB'>
           <p>Analytical Writing<span>*</span></p>
          <input
          type="text" 
          value={academicData.greWriting} 
          onChange={handleTestChange}
          placeholder='AW:' />
          </div>
        </div>
        </div>
        
      )}
      </div>
      {/* <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleGmat} 
                  style={{ cursor: 'pointer' }}>
        <h2>GMAT</h2><h2>+</h2>
      </div>
      {isExpanded && (
        <div className='Accordian-div'>
      <div className='a-sec-1'>
        <div className='DOB'>
        <p>Overall score*</p>
        <input
        type="text" 
        value={academicData.gmatOverallScore} 
        onChange={handleTestChange}
        placeholder='Overall score' /></div>

        <div className='DOB'>
         <p>Date of Examination</p>
        <input
        type="text" 
        value={academicData.gmatDateOfExam} 
        onChange={handleTestChange}
        placeholder='Date of Examination' />
      </div>
      </div>
      <div className='a-sec-1'>
        <div className='DOB'>
         <p>Quantitative*</p>
        <input
        type="text" 
        value={academicData.gmatQuantitative} 
        onChange={handleTestChange}
        placeholder='Q:' />
        </div>
        <div className='DOB'>
         <p>Virbal*</p>
        <input
        type="text" 
        value={academicData.gmatVirbal} 
        onChange={handleTestChange}
        placeholder='V:' />
      </div>
      <div className='DOB'>
         <p>Analytical Writing*</p>
        <input
        type="text" 
        value={academicData.gmatWriting} 
        onChange={handleTestChange}
        placeholder='AW:' />
        </div>
        <div className='DOB'>
         <p>Integrated Reasoning*</p>
        <input
        type="text" 
        value={academicData.gmatReasoning} 
        onChange={handleTestChange}
        placeholder='RR:' />
        </div>
      </div>
      </div>
        
      )}
      </div> */}
      <GMATAccordion
        academicData={academicData}
        handleToggleGmat={handleToggleGmat}
        handleTestChange={handleTestChange}
        isExpandedGmat={isExpandedGmat}
      />
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleToefl} 
                  style={{ cursor: 'pointer' }}>
        <h2>TOEFL</h2><h2>+</h2>
      </div>
      {isExpandedToefl && (
       <div className='Accordian-div'>
       <div className='a-sec-1'>
         <div className='a-DOB'>
         <p>Overall score<span>*</span></p>
         <input
         type="text" 
         value={academicData.toeflOverallScore} 
         onChange={handleTestChange}
         placeholder='Overall score' /></div>
 
         <div className='a-DOB'>
          <p>Date of Examination</p>
         <input
         type="text" 
         value={academicData.toeflDateOfExam} 
         onChange={handleTestChange}
         placeholder='Date of Examination' />
       </div>
       </div>
       <div className='a-sec-1'>
         <div className='g-DOB'>
          <p>Reading<span>*</span></p>
         <input
         type="text" 
         value={academicData.toeflReadin} 
         onChange={handleTestChange}
         placeholder='R:' />
         </div>
         <div className='g-DOB'>
          <p>Listening<span>*</span></p>
         <input
         type="text" 
         value={academicData.toeflListening} 
         onChange={handleTestChange}
         placeholder='L:' />
       </div>
       <div className='g-DOB'>
          <p>Speaking<span>*</span></p>
         <input
         type="text" 
         value={academicData.toeflSpeaking} 
         onChange={handleTestChange}
         placeholder='S:' />
         </div>
         <div className='g-DOB'>
          <p>Writing<span>*</span></p>
         <input
         type="text" 
         value={academicData.toeflWriting} 
         onChange={handleTestChange}
         placeholder='W:' />
         </div>
       </div>
       </div>
        
      )}
      </div>
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleIelts} 
                  style={{ cursor: 'pointer' }}>
        <h2>IELTS</h2><h2>+</h2>
      </div>
      {isExpandedIelts && (
        <div className='Accordian-div'>
          <div className='a-sec-1'>
          <div className='il-DOB'>
           <p>Yet to Receive?</p>
           <div className='s-div'>
           <Switch
                   on="yes"
                   off="no" 
                  name='yetToReceiveToggle' 
                  value={toggleData.ieltsYetToReceiveToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('yetToReceiveToggle', value)} />
          <input
          type="text" 
          value={academicData.ieltsYetToreceiveText} 
          onChange={handleTestChange}
          placeholder='Enter the Result date' />
          </div>
          </div>

          <div className='a-DOB'>
           <p>TRF No.</p>
          <input
          type="text" 
          value={academicData.ieltstrfNo} 
          onChange={handleTestChange}
          placeholder='T: TRF No' />
        </div>
        </div>
        <div className='a-sec-1'>
          <div className='il-DOB'>
           <p>IELTS Wavier</p>
           <div className='s-div'>
           <Switch
                   on="yes"
                   off="no" 
                  name='ieltsWaverToggle' 
                  value={toggleData.ieltsWaverToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('ieltsWaverToggle', value)} />
          <input
          type="text" 
          value={academicData.iletsWaverText} 
          onChange={handleTestChange}
          placeholder='Enter English 12 Marks'/>
          </div>
          </div>

          <div className='a-DOB'>
           <p>Date of Examination</p>
          <input
          type="text" 
          value={academicData.iletsDateOfExam} 
          onChange={handleTestChange}
          placeholder='Date of Examination' />
        </div>
        </div>
        <div className='a-sec-1'>
          <div className='g-DOB'>
           <p>Listening<span>*</span></p>
          <input
          type="text" 
          value={academicData.iletsListening} 
          onChange={handleTestChange}
          placeholder='L:' />
          </div>
          <div className='g-DOB'>
           <p>Reading<span>*</span></p>
          <input
          type="text" 
          value={academicData.iletsReading} 
          onChange={handleTestChange}
          placeholder='R:' />
        </div>
        <div className='g-DOB'>
           <p>Writing<span>*</span></p>
          <input
          type="text" 
          value={academicData.iletsWriting} 
          onChange={handleTestChange}
          placeholder='W:' />
          </div>
          <div className='g-DOB'>
           <p>Speaking<span>*</span></p>
          <input
          type="text" 
          value={academicData.iletsSpeaking} 
          onChange={handleTestChange}
          placeholder='S:' />
        </div>
        </div>
        <div className='a-sec-1'>
          <div className='a-DOB'>
           <p>Overall Score<span>*</span></p>
          <input
          type="text" 
          value={academicData.iletsOvrScore} 
          onChange={handleTestChange}
          placeholder='Overall Score' />
          </div>
        </div>
        </div>
        
      )}
      </div>
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleTogglePte} 
                  style={{ cursor: 'pointer' }}>
        <h2>PTE</h2><h2>+</h2>
      </div>
      {isExpandedPte && (
       <div className='Accordian-div'>
       <div className='a-sec-1'>
         <div className='a-DOB'>
         <p>Overall score<span>*</span></p>
         <input
         type="text" 
         value={academicData.pteOverallScore} 
         onChange={handleTestChange}
         placeholder='Overall score' /></div>
 
         <div className='a-DOB'>
          <p>Date of Examination</p>
         <input
         type="text" 
         value={academicData.pteDateOfExam} 
         onChange={handleTestChange}
         placeholder='Date of Examination' />
       </div>
       </div>
       <div className='a-sec-1'>
         <div className='g-DOB'>
          <p>Reading<span>*</span></p>
         <input
         type="text" 
         value={academicData.pteReading} 
         onChange={handleTestChange}
         placeholder='R:' />
         </div>
         <div className='g-DOB'>
          <p>Listening<span>*</span></p>
         <input
         type="text" 
         value={academicData.pteListening} 
         onChange={handleTestChange}
         placeholder='L:' />
       </div>
       <div className='g-DOB'>
          <p>Speaking<span>*</span></p>
         <input
         type="text" 
         value={academicData.pteSpeaking} 
         onChange={handleTestChange}
         placeholder='S:' />
         </div>
         <div className='g-DOB'>
          <p>Writing<span>*</span></p>
         <input
         type="text" 
         value={academicData.pteWriting} 
         onChange={handleTestChange}
         placeholder='W:' />
         </div>
       </div>
       </div>
        
      )}
      </div>
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleDet} 
                  style={{ cursor: 'pointer' }}>
        <h2>DET</h2><h2>+</h2>
      </div>
      {isExpandedDet && (
         <div className='Accordian-div'>
         <div className='a-sec-1'>
           <div className='a-DOB'>
           <p>Overall score<span>*</span></p>
           <input
           type="text" 
           value={academicData.detOverallScore} 
           onChange={handleTestChange}
           placeholder='Overall score' /></div>
   
           <div className='a-DOB'>
            <p>Date of Examination</p>
           <input
           type="text" 
           value={academicData.detDateOfExam} 
           onChange={handleTestChange}
           placeholder='Date of Examination' />
         </div>
         </div>
         </div>
        
      )}
      </div>
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleSat} 
                  style={{ cursor: 'pointer' }}>
        <h2>SAT</h2><h2>+</h2>
      </div>
      {isExpandedSat && (
        <div className='Accordian-div'>
        <div className='a-sec-1'>
          <div className='a-DOB'>
          <p>Overall score<span>*</span></p>
          <input
          type="text" 
          value={academicData.satOverallScore} 
          onChange={handleTestChange}
          placeholder='Overall score' /></div>
  
          <div className='a-DOB'>
           <p>Date of Examination</p>
          <input
          type="text" 
          value={academicData.satDateOfExam} 
          onChange={handleTestChange}
          placeholder='Date of Examination' />
        </div>
        </div>
        <div className='a-sec-1'>
          <div className='s-DOB'>
           <p>Reading and Writing<span>*</span></p>
          <input
          type="text" 
          value={academicData.satReadingWriting} 
          onChange={handleTestChange}
          placeholder='RW:' />
          </div>
          <div className='s-DOB'>
           <p>Math<span>*</span></p>
          <input
          type="text" 
          value={academicData.satMath} 
          onChange={handleTestChange}
          placeholder='M:' />
        </div>
        <div className='s-DOB'>
           <p>Essay<span>*</span></p>
          <input
          type="text" 
          value={academicData.satEssay} 
          onChange={handleTestChange}
          placeholder='E:' />
          </div>
        </div>
        </div>
        
      )}
      </div>
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleAct} 
                  style={{ cursor: 'pointer' }}>
        <h2>ACT</h2><h2>+</h2>
      </div>
      {isExpandedAct && (
       <div className='Accordian-div'>
       <div className='a-sec-1'>
         <div className='a-DOB'>
         <p>Overall score<span>*</span></p>
         <input
         type="text" 
         value={academicData.actOverallScore} 
         onChange={handleTestChange}
         placeholder='Overall score' /></div>
 
         <div className='a-DOB'>
          <p>Date of Examination</p>
         <input
         type="text" 
         value={academicData.actDateOfExam} 
         onChange={handleTestChange}
         placeholder='Date of Examination' />
       </div>
       </div>
       <div className='a-sec-1'>
         <div className='ac-DOB'>
          <p>Math<span>*</span></p>
         <input
         type="text" 
         value={academicData.actMath} 
         onChange={handleTestChange}
         placeholder='M:' />
         </div>
         <div className='ac-DOB'>
          <p>Reading<span>*</span></p>
         <input
         type="text" 
         value={academicData.actReading} 
         onChange={handleTestChange}
         placeholder='R:' />
       </div>
       <div className='ac-DOB'>
          <p>Science<span>*</span></p>
         <input
         type="text" 
         value={academicData.actScience} 
         onChange={handleTestChange}
         placeholder='S:' />
         </div>
         <div className='ac-DOB'>
          <p>English<span>*</span></p>
         <input
         type="text" 
         value={academicData.actEnglish} 
         onChange={handleTestChange}
         placeholder='E:' />
         </div>
         <div className='ac-DOB'>
          <p>Writing<span>*</span></p>
         <input
         type="text" 
         value={academicData.actWriting} 
         onChange={handleTestChange}
         placeholder='W:' />
         </div>
       </div>
       </div>
        
      )}
      </div>
      <div className='save-sticky'>
        <div className='sticky-text'>
        <button className='save-btn' onSubmit={handleTestSave}>SAVE AND COUNTINUE</button>
        </div>
      </div>
      </form>
      </section>
          </div>}
      </div>
      </div>
    </>
    }

{headerTogg === 'ApplicationTab' && 
    <>
     <div className='Enitre-profile'>
     <div className='prof-header'>
  <p className='prof-text' onClick={()=>headerClick('profileTab')}>Profile</p>
  <p className='c-prof-text' onClick={()=>headerClick('ApplicationTab')}>Application</p>
  <p className='prof-text' onClick={()=>headerClick('DocumentsTab')}>Document</p>
  </div>
  < hr className='div-line'/>
  < hr className='ap-blu-div-line'/>
     </div>
    </>
    }

{headerTogg === 'DocumentsTab' && 
    <>
     <div className='Enitre-profile'>
    <div className='prof-header'>
  <p className='prof-text' onClick={()=>headerClick('profileTab')}>Profile</p>
  <p className='prof-text' onClick={()=>headerClick('ApplicationTab')}>Application</p>
  <p className='c-prof-text' onClick={()=>headerClick('DocumentsTab')}>Document</p>
  </div>
  < hr className='div-line'/>
  < hr className='dc-blu-div-line'/>
  </div>
    </>
    }




    {profile && 
          <div className='Enitre-profile'>
            <section className='p-sec-1'>
              <div>
                <p>Profile</p>
                <hr/>
              </div>
            </section>
            
            <section className='p-sec-2'>
              <div className='sec-2-first'>
                <p>Welcome to the Application of {formData.firstname} {formData.lastname}</p>
              </div>
              <div className='sec-2-second'>
                <div className='stu-details'>
                  <h4>Name</h4>
                  <p>{formData.firstname} {formData.lastname}</p>
                </div>
                <div className='stu-details'>
                  <h4>Email</h4>
                  <p>{formData.email}</p>
                </div>
                <div className='stu-details'>
                  <h4>phone</h4>
                  <p>{formData.mobileNumber}</p>
                </div>
                <div className='stu-details'>
                  <h4>Student Url Link</h4>
                  <p>https://app.course..</p>
                </div>
                <button onClick={fetchLastEnteredData}>Fetch Data</button>
              </div>
            </section>
           
            <div className="tab-buttons">
      </div>
            {/* <section className='p-sec-3'>
              <div className='info-category' onClick={() => handleTabClick('tab1')}>
                <p>Personal Information</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category' onClick={() => handleTabClick('tab2')}>
                <p>Academic Qualification</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab3')}>
                <p>Work Experience</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'>
                <p>Tests</p>
                <p>Incomplete</p>
              </div>
            </section> */}
            <div className="tab-content">
        {activeTab === 'tab1' && <div>
        <form onSubmit={handleProfileSubmit1}>
        <section className='p-sec-3'>
              <div className='info-category' onClick={() => handleTabClick('tab1')}>
                <p>Personal Information</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category' onClick={() => handleTabClick('tab2')}>
                <p>Academic Qualification</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab3')}>
                <p>Work Experience</p>
                <p>Optional</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab4')}>
                <p>Tests</p>
                <p>Incomplete</p>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Personal Information</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Date of Birth*</p>
                  <input
                  type='date'
                  name='dateOfBirth'
                  value={profileData.dateOfBirth}
                  onChange={handlePofileChange}
                  placeholder='Select Date'
                  ></input>
                  {profilErrors.dateOfBirth && <span className='errors'>{profilErrors.dateOfBirth}</span>}
                </div>
                <div className='DOB'>
                  <p>Gender*</p>
                 <select
                   name='gender'
                   value={profileData.gender}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                 </select>
                 {profilErrors.gender && <span className='errors'>{profilErrors.gender}</span>}

                </div>
                <div className='DOB'>
                  <p>Martial Status*</p>
                  <select  name='maritalStatus'
                    value={profileData.maritalStatus}
                    onChange={handlePofileChange}
                    className='Gender-dropdown'
                    >
                 <option value=''>Select</option>
                    <option value='Married'>Married</option>
                    <option value='Un-married'>Un-married</option>
                 </select>
                 {profilErrors.maritalStatus && <span className='errors'>{profilErrors.maritalStatus}</span>}
                </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Mailing Address</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Address1*</p>
                  <input
                  type='text'
                  name='address1'
                  value={profileData.address1}
                  onChange={handlePofileChange}
                  placeholder='Enter Address'
                  ></input>
                 {profilErrors.address1 && <span className='errors'>{profilErrors.address1}</span>}
                </div>
                <div className='DOB'>
                  <p>Address2*</p>
                  <input
                  type='text'
                  name='address2'
                  value={profileData.address2}
                  onChange={handlePofileChange}
                  placeholder='Select Date'
                  ></input>
                  {profilErrors.address2 && <span className='errors'>{profilErrors.address2}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Country*</p>
                  <select
                   name='country'
                   value={profileData.country}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.country && <span className='errors'>{profilErrors.country}</span>}
                </div>
                <div className='DOB'>
                  <p>State*</p>
                  <select
                   name='state'
                   value={profileData.state}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='TamilNadu'>TamilNadu</option>
                    <option value='kerla'>kerla</option>
                 </select>
                 {profilErrors.state && <span className='errors'>{profilErrors.state}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                  <input
                  type='text'
                  name='city'
                  value={profileData.city}
                  onChange={handlePofileChange}
                  placeholder='Select City'
                  ></input>
                  {profilErrors.city && <span className='errors'>{profilErrors.city}</span>}
                </div>
                <div className='DOB'>
                  <p>Pincode*</p>
                  <input
                  type='text'
                  name='pincode'
                  value={profileData.pincode}
                  onChange={handlePofileChange}
                  placeholder='Enter Pincode'
                  ></input>
                  {profilErrors.pincode && <span className='errors'>{profilErrors.pincode}</span>}
                </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Permanent Address</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Address1*</p>
                  <input
                  type='text'
                  name='peraddress1'
                  value={profileData.peraddress1}
                  onChange={handlePofileChange}
                  placeholder='Enter Address'
                  ></input>
                 {profilErrors.address1 && <span className='errors'>{profilErrors.peraddress1}</span>}
                </div>
                <div className='DOB'>
                  <p>Address2*</p>
                  <input
                  type='text'
                  name='peraddress2'
                  value={profileData.peraddress2}
                  onChange={handlePofileChange}
                  placeholder='Select Date'
                  ></input>
                  {profilErrors.peraddress2 && <span className='errors'>{profilErrors.peraddress2}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Country*</p>
                  <select
                   name='percountry'
                   value={profileData.percountry}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                    <option value='Canada'>Canada</option>
                 </select>
                 {profilErrors.percountry && <span className='errors'>{profilErrors.percountry}</span>}
                </div>
                <div className='DOB'>
                  <p>State*</p>
                  <select
                   name='perstate'
                   value={profileData.perstate}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='TamilNadu'>TamilNadu</option>
                    <option value='kerla'>kerla</option>
                 </select>
                 {profilErrors.perstate && <span className='errors'>{profilErrors.perstate}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                  <input
                  type='text'
                  name='percity'
                  value={profileData.percity}
                  onChange={handlePofileChange}
                  placeholder='Select City'
                  ></input>
                  {profilErrors.percity && <span className='errors'>{profilErrors.percity}</span>}
                </div>
                <div className='DOB'>
                  <p>Pincode*</p>
                  <input
                  type='text'
                  name='perpincode'
                  value={profileData.perpincode}
                  onChange={handlePofileChange}
                  placeholder='Enter Pincode'
                  ></input>
                  {profilErrors.perpincode && <span className='errors'>{profilErrors.perpincode}</span>}
                </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Passport Information</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Passport Number*</p>
                  <input
                  type='text'
                  name='passportNumber'
                  value={profileData.passportNumber}
                  onChange={handlePofileChange}
                  placeholder='Enter Address'
                  ></input>
                 {profilErrors.passportNumber && <span className='errors'>{profilErrors.passportNumber}</span>}
                </div>
                <div className='DOB'>
                  <p>Issue Date*</p>
                  <input
                  type='text'
                  name='issueDate'
                  value={profileData.issueDate}
                  onChange={handlePofileChange}
                  placeholder='Select Date'
                  ></input>
                  {profilErrors.issueDate && <span className='errors'>{profilErrors.issueDate}</span>}
                </div>
                <div className='DOB'>
                  <p>Expiry Date*</p>
                  <input
                  type='text'
                  name='expiryDate'
                  value={profileData.expiryDate}
                  onChange={handlePofileChange}
                  placeholder='Select Date'
                  ></input>
                  {profilErrors.expiryDate && <span className='errors'>{profilErrors.expiryDate}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Issue Country*</p>
                  <select
                   name='issueCountry'
                   value={profileData.issueCountry}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.issueCountry && <span className='errors'>{profilErrors.issueCountry}</span>}
                </div>
                <div className='DOB'>
                  <p>City of Birth*</p>
                  <input
                  type='text'
                  name='cityOfBirth'
                  value={profileData.cityOfBirth}
                  onChange={handlePofileChange}
                  placeholder='Select Date'
                  ></input>
                  {profilErrors.cityOfBirth && <span className='errors'>{profilErrors.cityOfBirth}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Birth*</p>
                  <select
                   name='countryOfBirth'
                   value={profileData.countryOfBirth}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='TamilNadu'>TamilNadu</option>
                    <option value='kerla'>kerla</option>
                 </select>
                 {profilErrors.countryOfBirth && <span className='errors'>{profilErrors.countryOfBirth}</span>}
                </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Nationality</h3>
              <div className='personal-info'>
              <div className='DOB'>
                  <p>Nationality*</p>
                  <select
                   name='nationality'
                   value={profileData.nationality}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.nationality && <span className='errors'>{profilErrors.nationality}</span>}
                </div>
                <div className='DOB'>
                  <p>Citizenship*</p>
                  <select
                   name='citizenship'
                   value={profileData.citizenship}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.citizenship && <span className='errors'>{profilErrors.citizenship}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Is a applicant a citizen of more than one country?*</p>
                 
                  <Switch
                   on="yes"
                   off="no" 
                  name='moreCitizenshipToggle' 
                  value={toggleData.moreCitizenshipToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('moreCitizenshipToggle', value)} />
                 
                  <select
                   name='moreCitizenshipDrop'
                   value={profileData.moreCitizenshipDrop}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.moreCitizenshipDrop && <span className='errors'>{profilErrors.moreCitizenshipDrop}</span>}
                </div>
                <div className='DOB'>
                  <p>Is a applicant living and studying in any other country?*</p>
                  <Switch
                   on="yes"
                   off="no" 
                  name='otherCountryToggle' 
                  value={toggleData.otherCountryToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('otherCountryToggle', value)} />
                  <select
                   name='otherCountryDrop'
                   value={profileData.otherCountryDrop}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='TamilNadu'>UK</option>
                    <option value='kerla'>US</option>
                 </select>
                 {profilErrors.otherCountryDrop && <span className='errors'>{profilErrors.otherCountryDrop}</span>}
                </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Background Info</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Has applicant applied for any type of immigration into any country?*</p>
                 
                  <Switch 
                  on="yes" 
                  off="no" 
                  name='immigrationToggle' 
                  value={toggleData.immigrationToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('immigrationToggle', value)} />
                
                  <select
                   name='immigrationDrop'
                   value={profileData.immigrationDrop}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.immigrationDrop && <span className='errors'>{profilErrors.immigrationDrop}</span>}
                </div>
                <div className='DOB'>
                  <p>Does applicant suffer from a serious medical condition?</p>
                  <Switch
                   on="yes"
                   off="no" 
                  name='medConditionToggle' 
                  value={toggleData.medConditionToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('medConditionToggle', value)} />
                  <input
                  type='text'
                  name='medConditionText'
                  value={profileData.medConditionText}
                  onChange={handlePofileChange}
                  placeholder='Enter Address'
                  ></input>
                 {profilErrors.medConditionText && <span className='errors'>{profilErrors.medConditionText}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Has applicant Visa refusal for any country?*</p>
                  <Switch
                   on="yes"
                   off="no" 
                  name='visaRefusalToggle' 
                  value={toggleData.visaRefusalToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('visaRefusalToggle', value)} />
                  <select
                   name='visaRefusalDrop'
                   value={profileData.visaRefusalDrop}
                   onChange={handlePofileChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.visaRefusalDrop && <span className='errors'>{profilErrors.visaRefusalDrop}</span>}
                 <input
                  type='text'
                  name='visaRefusalType'
                  value={profileData.visaRefusalType}
                  onChange={handlePofileChange}
                  placeholder='Type of Visa'
                  ></input>
                 {profilErrors.visaRefusalType && <span className='errors'>{profilErrors.visaRefusalType}</span>}
                </div>
                <div className='DOB'>
                  <p>Has applicant ever been convicted of a criminal offence?*</p>
                   <Switch
                   on="yes"
                   off="no" 
                  name='crimeOffToggle' 
                  value={toggleData.crimeOffToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('crimeOffToggle', value)} />
                  <input
                  type='text'
                  name='crimeOffText'
                  value={profileData.crimeOffText}
                  onChange={handlePofileChange}
                  placeholder='Enter Address'
                  ></input>
                 {profilErrors.crimeOffText && <span className='errors'>{profilErrors.crimeOffText}</span>}
                </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Important Contacts</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name*</p>
                  <input
                  type='text'
                  name='emgContactName'
                  value={profileData.emgContactName}
                  onChange={handlePofileChange}
                  placeholder='Enter Name'
                  ></input>
                 {profilErrors.emgContactName && <span className='errors'>{profilErrors.emgContactName}</span>}
                </div>
                <div className='DOB'>
                  <p>Phone*</p>
                  <input
                  type='text'
                  name='emgContactPhone'
                  value={profileData.emgContactPhone}
                  onChange={handlePofileChange}
                  placeholder='Enter Mobile Number'
                  ></input>
                 {profilErrors.emgContactPhone && <span className='errors'>{profilErrors.emgContactPhone}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Email*</p>
                  <input
                  type='text'
                  name='emgContactEmail'
                  value={profileData.emgContactEmail}
                  onChange={handlePofileChange}
                  placeholder='Enter Email'
                  ></input>
                 {profilErrors.emgContactEmail && <span className='errors'>{profilErrors.emgContactEmail}</span>}
                </div>
                <div className='DOB'>
                  <p>Relation with Applicant*</p>
                  <input
                  type='text'
                  name='emgContactRelation'
                  value={profileData.emgContactRelation}
                  onChange={handlePofileChange}
                  placeholder='Enter Relation'
                  ></input>
                 {profilErrors.emgContactRelation && <span className='errors'>{profilErrors.emgContactRelation}</span>}
                </div>
              </div>
            </section>
            <button  type="submit" onSubmit={handleProfileSubmit1}>Submit</button></form>
          </div>}
        {activeTab === 'tab2' && 
        <div>
          <section className='p-sec-3'>
              <div className='info-category' onClick={() => handleTabClick('tab1')}>
                <p>Personal Information</p>
                <p>Completed</p>
              </div>
              <div className='info-category' onClick={() => handleTabClick('tab2')}>
                <p>Academic Qualification</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab3')}>
                <p>Work Experience</p>
                <p>Optional</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab4')}>
                <p>Tests</p>
                <p>Incomplete</p>
              </div>
            </section>
            <form onSubmit={handleProfileSubmit2}>
            <section className='p-sec-4'>          
              <div className='personal-info'>
                <div className='DOB'>
                  <h4>Country of education</h4>
                  <select
                   name='country'
                   value={country}
                   onChange={handleCountryChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {/* {profilErrors.eduCountry && <span className='errors'>{profilErrors.eduCountry}</span>} */}
                </div>
                <div className='DOB'>
                  <h4>Highest level of education*</h4>
                  <select
                   name='educationLevel'
                   value={educationLevel}
                   onChange={handleEducationLevelChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='Undergraduate'>Undergraduate</option>
                    <option value='12th'>12th</option>
                    <option value='10th'>10th</option>
                 </select>
                 {/* {profilErrors.highLvlEducation1 && <span className='errors'>{profilErrors.highLvlEducation1}</span>} */}
                </div>
              </div>
            </section>
            { educationLevel === 'Undergraduate' && (
              <>
            {/* <section className='p-sec-4'>
              <h3>Undergraduate</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Highest level of education*</p>         
                  <select
                   name='ugHighLvlEducation'
                   value={academicData.ugHighLvlEducation}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.ugHighLvlEducation && <span className='errors'>{profilErrors.ugHighLvlEducation}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name of the Institution*</p>
                 <input
                  type='text'
                  name='ugInstitutionName'
                  value={academicData.ugInstitutionName}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugInstitutionName && <span className='errors'>{profilErrors.ugInstitutionName}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Study*</p>
                  <select
                   name='ugCountryOfStudy'
                   value={academicData.ugCountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.ugCountryOfStudy && <span className='errors'>{profilErrors.ugCountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <select
                   name='ugStateOfStudy'
                   value={academicData.ugStateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.ugStateOfStudy && <span className='errors'>{profilErrors.ugStateOfStudy}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                 <input
                  type='text'
                  name='ugCity'
                  value={academicData.ugCity}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugCity && <span className='errors'>{profilErrors.ugCity}</span>}
                </div>
                <div className='DOB'>
                  <p>Qualification Achieved*</p>
                 <input
                  type='text'
                  name='ugQualAchieved'
                  value={academicData.ugQualAchieved}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugQualAchieved && <span className='errors'>{profilErrors.ugQualAchieved}</span>}
                </div>
                <div className='DOB'>
                  <p>Backlogs</p>
                 <input
                  type='text'
                  name='ugBacklogs'
                  value={academicData.ugBacklogs}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugBacklogs && <span className='errors'>{profilErrors.ugBacklogs}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Grading System*</p>
                  <select
                   name='ugGradingSytem'
                   value={academicData.ugGradingSytem}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>Grade</option>
                    <option value='UK'>Rank</option>
                 </select>
                 {profilErrors.ugGradingSytem && <span className='errors'>{profilErrors.ugGradingSytem}</span>}
                </div>
                <div className='DOB'>
                  <p>Score</p>
                 <input
                  type='text'
                  name='ugScore'
                  value={academicData.ugScore}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugScore && <span className='errors'>{profilErrors.ugScore}</span>}
                </div>
                 <div className='DOB'>
                  <p>Primary Language Of Instruction*</p>
                 <input
                  type='text'
                  name='ugPrimLang'
                  value={academicData.ugPrimLang}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugPrimLang && <span className='errors'>{profilErrors.ugPrimLang}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Start Date</p>
                 <input
                  type='date'
                  name='ugStartDate'
                  value={academicData.ugStartDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugStartDate && <span className='errors'>{profilErrors.ugStartDate}</span>}
                </div>
                 <div className='DOB'>
                  <p>End Date</p>
                 <input
                  type='date'
                  name='ugEndDate'
                  value={academicData.ugEndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.ugEndDate && <span className='errors'>{profilErrors.ugEndDate}</span>}
                </div>
                
              </div>
              <>
              <button >Save</button>
               </>
            </section> */}
             <UgAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
          />
            <TwelthAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
            
          />
            <TenthAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
            />
            {/* <section className='p-sec-4'>
              <h3>Grade 12th or equivalent</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Highest level of education*</p>         
                  <select
                   name='grade12HighLvlEducation'
                   value={academicData.grade12HighLvlEducation}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12HighLvlEducation && <span className='errors'>{profilErrors.grade12HighLvlEducation}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name of the Institution*</p>
                 <input
                  type='text'
                  name='grade12InstitutionName'
                  value={academicData.grade12InstitutionName}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12InstitutionName && <span className='errors'>{profilErrors.grade12InstitutionName}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Study*</p>
                  <select
                   name='grade12CountryOfStudy'
                   value={academicData.grade12CountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12CountryOfStudy && <span className='errors'>{profilErrors.grade12CountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <select
                   name='grade12StateOfStudy'
                   value={academicData.grade12StateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12StateOfStudy && <span className='errors'>{profilErrors.grade12StateOfStudy}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                 <input
                  type='text'
                  name='grade12City'
                  value={academicData.grade12City}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12City && <span className='errors'>{profilErrors.grade12City}</span>}
                </div>
                <div className='DOB'>
                  <p>Qualification Achieved*</p>
                 <input
                  type='text'
                  name='grade12QualAchieved'
                  value={academicData.grade12QualAchieved}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12QualAchieved && <span className='errors'>{profilErrors.grade12QualAchieved}</span>}
                </div>
                <div className='DOB'>
                  <p>Backlogs</p>
                 <input
                  type='text'
                  name='grade12Backlogs'
                  value={academicData.grade12Backlogs}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12Backlogs && <span className='errors'>{profilErrors.grade12Backlogs}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Grading System*</p>
                  <select
                   name='garde12GradingSytem'
                   value={academicData.garde12GradingSytem}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>Grade</option>
                    <option value='UK'>Rank</option>
                 </select>
                 {profilErrors.garde12GradingSytem && <span className='errors'>{profilErrors.garde12GradingSytem}</span>}
                </div>
                <div className='DOB'>
                  <p>Score</p>
                 <input
                  type='text'
                  name='grade12Score'
                  value={academicData.grade12Score}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12Score && <span className='errors'>{profilErrors.grade12Score}</span>}
                </div>
                 <div className='DOB'>
                  <p>Primary Language Of Instruction*</p>
                 <input
                  type='text'
                  name='grade12PrimLang'
                  value={academicData.grade12PrimLang}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12PrimLang && <span className='errors'>{profilErrors.grade12PrimLang}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Start Date</p>
                 <input
                  type='text'
                  name='grade12ugStartDate'
                  value={academicData.grade12ugStartDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12ugStartDate && <span className='errors'>{profilErrors.grade12ugStartDate}</span>}
                </div>
                 <div className='DOB'>
                  <p>End Date</p>
                 <input
                  type='text'
                  name='grade12EndDate'
                  value={academicData.grade12EndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12EndDate && <span className='errors'>{profilErrors.grade12EndDate}</span>}
                </div>
              </div>
            </section> */}

            {/* <section className='p-sec-4'>
              <h3>Grade 10th or equivalent</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Highest level of education*</p>         
                  <select
                   name='grade10HighLvlEducation'
                   value={academicData.grade10HighLvlEducation}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10HighLvlEducation && <span className='errors'>{profilErrors.grade10HighLvlEducationx}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name of the Institution*</p>
                 <input
                  type='text'
                  name='grade10InstitutionName'
                  value={academicData.grade10InstitutionName}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10InstitutionName && <span className='errors'>{profilErrors.grade10InstitutionName}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Study*</p>
                  <select
                   name='grade10CountryOfStudy'
                   value={academicData.grade10CountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10CountryOfStudy && <span className='errors'>{profilErrors.grade10CountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <select
                   name='grade10StateOfStudy'
                   value={academicData.grade10StateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10StateOfStudy && <span className='errors'>{profilErrors.grade10StateOfStudy}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                 <input
                  type='text'
                  name='grade10City'
                  value={academicData.grade10City}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10City && <span className='errors'>{profilErrors.grade10City}</span>}
                </div>
                <div className='DOB'>
                  <p>Qualification Achieved*</p>
                 <input
                  type='text'
                  name='grade10QualAchieved'
                  value={academicData.grade10QualAchieved}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10QualAchieved && <span className='errors'>{profilErrors.grade10QualAchieved}</span>}
                </div>
                <div className='DOB'>
                  <p>Backlogs</p>
                 <input
                  type='text'
                  name='grade10Backlogs'
                  value={academicData.grade10Backlogs}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10Backlogs && <span className='errors'>{profilErrors.grade10Backlogs}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Grading System*</p>
                  <select
                   name='grade10GradingSytem'
                   value={academicData.grade10GradingSytem}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>Grade</option>
                    <option value='UK'>Rank</option>
                 </select>
                 {profilErrors.grade10GradingSytem && <span className='errors'>{profilErrors.grade10GradingSytem}</span>}
                </div>
                <div className='DOB'>
                  <p>Score</p>
                 <input
                  type='text'
                  name='grade10Score'
                  value={academicData.grade10Score}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10Score && <span className='errors'>{profilErrors.grade10Score}</span>}
                </div>
                 <div className='DOB'>
                  <p>Primary Language Of Instruction*</p>
                 <input
                  type='text'
                  name='grade10PrimLang'
                  value={academicData.grade10PrimLang}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10PrimLang && <span className='errors'>{profilErrors.grade10PrimLang}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Start Date</p>
                 <input
                  type='text'
                  name='grade10StartDate'
                  value={academicData.grade10StartDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10StartDate && <span className='errors'>{profilErrors.grade10StartDate}</span>}
                </div>
                 <div className='DOB'>
                  <p>End Date</p>
                 <input
                  type='text'
                  name='grade10EndDate'
                  value={academicData.grade10EndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10EndDate && <span className='errors'>{profilErrors.grade10EndDate}</span>}
                </div>
              </div>
            </section> */}
            </>
            )}

          { educationLevel === '12th' && (
              <>
            {/* <section className='p-sec-4'>
              <h3>Grade 12th or equivalent</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Highest level of education*</p>         
                  <select
                   name='grade12HighLvlEducation'
                   value={academicData.grade12HighLvlEducation}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12HighLvlEducation && <span className='errors'>{profilErrors.grade12HighLvlEducation}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name of the Institution*</p>
                 <input
                  type='text'
                  name='grade12InstitutionName'
                  value={academicData.grade12InstitutionName}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12InstitutionName && <span className='errors'>{profilErrors.grade12InstitutionName}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Study*</p>
                  <select
                   name='grade12CountryOfStudy'
                   value={academicData.grade12CountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12CountryOfStudy && <span className='errors'>{profilErrors.grade12CountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <select
                   name='grade12StateOfStudy'
                   value={academicData.grade12StateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade12StateOfStudy && <span className='errors'>{profilErrors.grade12StateOfStudy}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                 <input
                  type='text'
                  name='grade12City'
                  value={academicData.grade12City}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12City && <span className='errors'>{profilErrors.grade12City}</span>}
                </div>
                <div className='DOB'>
                  <p>Qualification Achieved*</p>
                 <input
                  type='text'
                  name='grade12QualAchieved'
                  value={academicData.grade12QualAchieved}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12QualAchieved && <span className='errors'>{profilErrors.grade12QualAchieved}</span>}
                </div>
                <div className='DOB'>
                  <p>Backlogs</p>
                 <input
                  type='text'
                  name='grade12Backlogs'
                  value={academicData.grade12Backlogs}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12Backlogs && <span className='errors'>{profilErrors.grade12Backlogs}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Grading System*</p>
                  <select
                   name='garde12GradingSytem'
                   value={academicData.garde12GradingSytem}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>Grade</option>
                    <option value='UK'>Rank</option>
                 </select>
                 {profilErrors.garde12GradingSytem && <span className='errors'>{profilErrors.garde12GradingSytem}</span>}
                </div>
                <div className='DOB'>
                  <p>Score</p>
                 <input
                  type='text'
                  name='grade12Score'
                  value={academicData.grade12Score}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12Score && <span className='errors'>{profilErrors.grade12Score}</span>}
                </div>
                 <div className='DOB'>
                  <p>Primary Language Of Instruction*</p>
                 <input
                  type='text'
                  name='grade12PrimLang'
                  value={academicData.grade12PrimLang}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12PrimLang && <span className='errors'>{profilErrors.grade12PrimLang}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Start Date</p>
                 <input
                  type='text'
                  name='grade12ugStartDate'
                  value={academicData.grade12ugStartDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12ugStartDate && <span className='errors'>{profilErrors.grade12ugStartDate}</span>}
                </div>
                 <div className='DOB'>
                  <p>End Date</p>
                 <input
                  type='text'
                  name='grade12EndDate'
                  value={academicData.grade12EndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12EndDate && <span className='errors'>{profilErrors.grade12EndDate}</span>}
                </div>
              </div>
            </section>
            <section className='p-sec-4'>
              <h3>Grade 10th or equivalent</h3>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Highest level of education*</p>         
                  <select
                   name='grade10HighLvlEducation'
                   value={academicData.grade10HighLvlEducation}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10HighLvlEducation && <span className='errors'>{profilErrors.grade10HighLvlEducationx}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Name of the Institution*</p>
                 <input
                  type='text'
                  name='grade10InstitutionName'
                  value={academicData.grade10InstitutionName}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10InstitutionName && <span className='errors'>{profilErrors.grade10InstitutionName}</span>}
                </div>
                <div className='DOB'>
                  <p>Country of Study*</p>
                  <select
                   name='grade10CountryOfStudy'
                   value={academicData.grade10CountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10CountryOfStudy && <span className='errors'>{profilErrors.grade10CountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <select
                   name='grade10StateOfStudy'
                   value={academicData.grade10StateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>US</option>
                    <option value='UK'>UK</option>
                 </select>
                 {profilErrors.grade10StateOfStudy && <span className='errors'>{profilErrors.grade10StateOfStudy}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>City*</p>
                 <input
                  type='text'
                  name='grade10City'
                  value={academicData.grade10City}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10City && <span className='errors'>{profilErrors.grade10City}</span>}
                </div>
                <div className='DOB'>
                  <p>Qualification Achieved*</p>
                 <input
                  type='text'
                  name='grade10QualAchieved'
                  value={academicData.grade10QualAchieved}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10QualAchieved && <span className='errors'>{profilErrors.grade10QualAchieved}</span>}
                </div>
                <div className='DOB'>
                  <p>Backlogs</p>
                 <input
                  type='text'
                  name='grade10Backlogs'
                  value={academicData.grade10Backlogs}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10Backlogs && <span className='errors'>{profilErrors.grade10Backlogs}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Grading System*</p>
                  <select
                   name='grade10GradingSytem'
                   value={academicData.grade10GradingSytem}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  <option value=''>Select</option>
                    <option value='US'>Grade</option>
                    <option value='UK'>Rank</option>
                 </select>
                 {profilErrors.grade10GradingSytem && <span className='errors'>{profilErrors.grade10GradingSytem}</span>}
                </div>
                <div className='DOB'>
                  <p>Score</p>
                 <input
                  type='text'
                  name='grade10Score'
                  value={academicData.grade10Score}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10Score && <span className='errors'>{profilErrors.grade10Score}</span>}
                </div>
                 <div className='DOB'>
                  <p>Primary Language Of Instruction*</p>
                 <input
                  type='text'
                  name='grade10PrimLang'
                  value={academicData.grade10PrimLang}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10PrimLang && <span className='errors'>{profilErrors.grade10PrimLang}</span>}
                </div>
              </div>
              <div className='personal-info'>
                <div className='DOB'>
                  <p>Start Date</p>
                 <input
                  type='text'
                  name='grade10StartDate'
                  value={academicData.grade10StartDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10StartDate && <span className='errors'>{profilErrors.grade10StartDate}</span>}
                </div>
                 <div className='DOB'>
                  <p>End Date</p>
                 <input
                  type='text'
                  name='grade10EndDate'
                  value={academicData.grade10EndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10EndDate && <span className='errors'>{profilErrors.grade10EndDate}</span>}
                </div>
              </div>
            </section> */}
             <TwelthAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
          />
            <TenthAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
            />
            </>
            )}

            { educationLevel  === '10th' && (
              <>
               {/* <section className='p-sec-4'>
               <h3>Grade 10th or equivalent</h3>
               <div className='personal-info'>
                 <div className='DOB'>
                   <p>Highest level of education*</p>         
                   <select
                    name='grade10HighLvlEducation'
                    value={academicData.grade10HighLvlEducation}
                    onChange={handleAcademicChange}
                    className='Gender-dropdown'
                  >
                   <option value=''>Select</option>
                     <option value='US'>US</option>
                     <option value='UK'>UK</option>
                  </select>
                  {profilErrors.grade10HighLvlEducation && <span className='errors'>{profilErrors.grade10HighLvlEducationx}</span>}
                 </div>
               </div>
               <div className='personal-info'>
                 <div className='DOB'>
                   <p>Name of the Institution*</p>
                  <input
                   type='text'
                   name='grade10InstitutionName'
                   value={academicData.grade10InstitutionName}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10InstitutionName && <span className='errors'>{profilErrors.grade10InstitutionName}</span>}
                 </div>
                 <div className='DOB'>
                   <p>Country of Study*</p>
                   <select
                    name='grade10CountryOfStudy'
                    value={academicData.grade10CountryOfStudy}
                    onChange={handleAcademicChange}
                    className='Gender-dropdown'
                  >
                   <option value=''>Select</option>
                     <option value='US'>US</option>
                     <option value='UK'>UK</option>
                  </select>
                  {profilErrors.grade10CountryOfStudy && <span className='errors'>{profilErrors.grade10CountryOfStudy}</span>}
                 </div>
                 <div className='DOB'>
                   <p>State of Study*</p>
                   <select
                    name='grade10StateOfStudy'
                    value={academicData.grade10StateOfStudy}
                    onChange={handleAcademicChange}
                    className='Gender-dropdown'
                  >
                   <option value=''>Select</option>
                     <option value='US'>US</option>
                     <option value='UK'>UK</option>
                  </select>
                  {profilErrors.grade10StateOfStudy && <span className='errors'>{profilErrors.grade10StateOfStudy}</span>}
                 </div>
               </div>
               <div className='personal-info'>
                 <div className='DOB'>
                   <p>City*</p>
                  <input
                   type='text'
                   name='grade10City'
                   value={academicData.grade10City}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10City && <span className='errors'>{profilErrors.grade10City}</span>}
                 </div>
                 <div className='DOB'>
                   <p>Qualification Achieved*</p>
                  <input
                   type='text'
                   name='grade10QualAchieved'
                   value={academicData.grade10QualAchieved}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10QualAchieved && <span className='errors'>{profilErrors.grade10QualAchieved}</span>}
                 </div>
                 <div className='DOB'>
                   <p>Backlogs</p>
                  <input
                   type='text'
                   name='grade10Backlogs'
                   value={academicData.grade10Backlogs}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10Backlogs && <span className='errors'>{profilErrors.grade10Backlogs}</span>}
                 </div>
               </div>
               <div className='personal-info'>
                 <div className='DOB'>
                   <p>Grading System*</p>
                   <select
                    name='grade10GradingSytem'
                    value={academicData.grade10GradingSytem}
                    onChange={handleAcademicChange}
                    className='Gender-dropdown'
                  >
                   <option value=''>Select</option>
                     <option value='US'>Grade</option>
                     <option value='UK'>Rank</option>
                  </select>
                  {profilErrors.grade10GradingSytem && <span className='errors'>{profilErrors.grade10GradingSytem}</span>}
                 </div>
                 <div className='DOB'>
                   <p>Score</p>
                  <input
                   type='text'
                   name='grade10Score'
                   value={academicData.grade10Score}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10Score && <span className='errors'>{profilErrors.grade10Score}</span>}
                 </div>
                  <div className='DOB'>
                   <p>Primary Language Of Instruction*</p>
                  <input
                   type='text'
                   name='grade10PrimLang'
                   value={academicData.grade10PrimLang}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10PrimLang && <span className='errors'>{profilErrors.grade10PrimLang}</span>}
                 </div>
               </div>
               <div className='personal-info'>
                 <div className='DOB'>
                   <p>Start Date</p>
                  <input
                   type='text'
                   name='grade10StartDate'
                   value={academicData.grade10StartDate}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10StartDate && <span className='errors'>{profilErrors.grade10StartDate}</span>}
                 </div>
                  <div className='DOB'>
                   <p>End Date</p>
                  <input
                   type='text'
                   name='grade10EndDate'
                   value={academicData.grade10EndDate}
                   onChange={handleAcademicChange}
                   placeholder=''
                   ></input>
                  {profilErrors.grade10EndDate && <span className='errors'>{profilErrors.grade10EndDate}</span>}
                 </div>
               </div>
             </section> */}
              <TenthAcademicSection
            sectionTitle={""}
            academicData={academicData}
            handleAcademicChange={handleAcademicChange}
            profilErrors={profilErrors}
            />
             </>
             )} 
           
            <button  type="submit" onSubmit={handleProfileSubmit2}>Countinue</button>
            </form>
          </div>}
        {activeTab === 'tab3' && 
        <div>
          <section className='p-sec-3'>
              <div className='info-category' onClick={() => handleTabClick('tab1')}>
                <p>Personal Information</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category' onClick={() => handleTabClick('tab2')}>
                <p>Academic Qualification</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab3')}>
                <p>Work Experience</p>
                <p>Optional</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab4')}>
                <p>Tests</p>
                <p>Incomplete</p>
              </div>
            </section>  
            <section className='p-sec-4'>
             <h3>Work Experience</h3>
             {workExperience &&(
              <div className='wrk-exp-form'>
                <form onSubmit={handleWorksave}>
                  <div className='wrk-sec-1'>
                    <div className='address'>
                    <p>Name of the organiztaion & Address*</p>
                    <input
                    type='text'
                    placeholder='Name of the organiztaion & Address'
                    value={workData.orgName} 
                    onChange={handleWorkChange}
                    name="orgName"
           >
           </input>
           {profilErrors.orgName && <span className='errors'>{profilErrors.orgName}</span>}

                    </div>
                    <div className='address'>
                    <p>Position*</p>
                    <input
                    type='text'
                    placeholder='Enter Position'></input>
                    </div>
                  </div>
                  <div className='wrk-sec-1'>
                    <div className='address'>
                    <p>Job Profile*</p>
                    <input
                    type='text'
                    placeholder='Enter Job Profile'></input>
                    </div>
                    <div className='address'>
                    <p>Working From*</p>
                    <input
                    type='date'></input>
                    </div>
                  </div>
                  <div className='wrk-sec-1'>
                    <div className='address'>
                    <p>Working Upto*</p>
                    <input
                    type='date'></input>
                    </div>
                    <div className='address'>
                    <p>Mode of Salary*</p>
                    <input
                    type='text'></input>
                    </div>
                  </div>
                  <button type='submit' onSubmit={handleWorksave}>save</button>
                </form>
              </div>
             )}
             <div className='add-work-exp'>
              <h4 onClick={handleworkExperience}>+  ADD WORK EXPERIENCE</h4>
             </div> 
             <button onClick={handleProfileSubmit3}>SKIP</button>
            
            </section>
            <button >all data</button>
          </div>}
          {activeTab === 'tab4' && 
        <div>
          <section className='p-sec-3'>
              <div className='info-category' onClick={() => handleTabClick('tab1')}>
                <p>Personal Information</p>
                <p>Completed</p>
              </div>
              <div className='info-category' onClick={() => handleTabClick('tab2')}>
                <p>Academic Qualification</p>
                <p>Completed</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab3')}>
                <p>Work Experience</p>
                <p>Optional</p>
              </div>
              <div className='info-category'onClick={() => handleTabClick('tab4')}>
                <p>Tests</p>
                <p>Incomplete</p>
              </div>
            </section>
            <section className='p-sec-4'>
              <form type='submit' onSubmit={handleTestSave}>
              <h3>Tests</h3>
              <div className='accordian-info'>
                  <div 
                  className='Accordian'
                  onClick={handleToggle} 
                  style={{ cursor: 'pointer' }}>
        <h2>GRE</h2><h2>+</h2>
      </div>
      {isExpanded && (
        <div className='Accordian-div'>
          <div className='a-sec-1'>
        </div>
        <div className='a-sec-1'>
          <div className='DOB'>
          <p>Overall score*</p>
          <input
          type="text" 
          value={testData.greOverallScore} 
          onChange={handleTestChange}
          placeholder='Overall score'
          name="greOverallScore" />
           {profilErrors.greOverallScore && <span className='errors'>{profilErrors.greOverallScore}</span>}
          </div>

          <div className='DOB'>
           <p>Date of Examination</p>
          <input
          type="text" 
          value={academicData.greDateOfExam} 
          name="greDateOfExam"
          onChange={handleTestChange}
          placeholder='Date of Examination' />
        </div>
        </div>
        <div className='a-sec-1'>
          <div className='DOB'>
           <p>Quantitative*</p>
          <input
          type="text" 
          value={academicData.greQuantitative} 
          name="greQuantitative"
          onChange={handleTestChange}
          placeholder='Q:' />
          </div>
          <div className='DOB'>
           <p>Virbal*</p>
          <input
          type="text" 
          value={academicData.greVirbal} 
          name="greVirbal"
          onChange={handleTestChange}
          placeholder='V:' />
        </div>
        <div className='DOB'>
           <p>Analytical Writing*</p>
          <input
          type="text" 
          value={academicData.greWriting} 
          name="greWriting"
          onChange={handleTestChange}
          placeholder='AW:' />
          </div>
        </div>
        </div>
        
      )}
      </div>
      {/* <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleGmat} 
                  style={{ cursor: 'pointer' }}>
        <h2>GMAT</h2><h2>+</h2>
      </div>
      {isExpanded && (
        <div className='Accordian-div'>
      <div className='a-sec-1'>
        <div className='DOB'>
        <p>Overall score*</p>
        <input
        type="text" 
        value={academicData.gmatOverallScore} 
        onChange={handleTestChange}
        placeholder='Overall score' /></div>

        <div className='DOB'>
         <p>Date of Examination</p>
        <input
        type="text" 
        value={academicData.gmatDateOfExam} 
        onChange={handleTestChange}
        placeholder='Date of Examination' />
      </div>
      </div>
      <div className='a-sec-1'>
        <div className='DOB'>
         <p>Quantitative*</p>
        <input
        type="text" 
        value={academicData.gmatQuantitative} 
        onChange={handleTestChange}
        placeholder='Q:' />
        </div>
        <div className='DOB'>
         <p>Virbal*</p>
        <input
        type="text" 
        value={academicData.gmatVirbal} 
        onChange={handleTestChange}
        placeholder='V:' />
      </div>
      <div className='DOB'>
         <p>Analytical Writing*</p>
        <input
        type="text" 
        value={academicData.gmatWriting} 
        onChange={handleTestChange}
        placeholder='AW:' />
        </div>
        <div className='DOB'>
         <p>Integrated Reasoning*</p>
        <input
        type="text" 
        value={academicData.gmatReasoning} 
        onChange={handleTestChange}
        placeholder='RR:' />
        </div>
      </div>
      </div>
        
      )}
      </div> */}
      <GMATAccordion
        academicData={academicData}
        handleToggleGmat={handleToggleGmat}
        handleTestChange={handleTestChange}
        isExpandedGmat={isExpandedGmat}
      />
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleToefl} 
                  style={{ cursor: 'pointer' }}>
        <h2>TOEFL</h2><h2>+</h2>
      </div>
      {isExpandedToefl && (
       <div className='Accordian-div'>
       <div className='a-sec-1'>
         <div className='DOB'>
         <p>Overall score*</p>
         <input
         type="text" 
         value={academicData.toeflOverallScore} 
         onChange={handleTestChange}
         placeholder='Overall score' /></div>
 
         <div className='DOB'>
          <p>Date of Examination</p>
         <input
         type="text" 
         value={academicData.toeflDateOfExam} 
         onChange={handleTestChange}
         placeholder='Date of Examination' />
       </div>
       </div>
       <div className='a-sec-1'>
         <div className='DOB'>
          <p>Reading*</p>
         <input
         type="text" 
         value={academicData.toeflReadin} 
         onChange={handleTestChange}
         placeholder='R:' />
         </div>
         <div className='DOB'>
          <p>Listening*</p>
         <input
         type="text" 
         value={academicData.toeflListening} 
         onChange={handleTestChange}
         placeholder='L:' />
       </div>
       <div className='DOB'>
          <p>Speaking*</p>
         <input
         type="text" 
         value={academicData.toeflSpeaking} 
         onChange={handleTestChange}
         placeholder='S:' />
         </div>
         <div className='DOB'>
          <p>Writing*</p>
         <input
         type="text" 
         value={academicData.toeflWriting} 
         onChange={handleTestChange}
         placeholder='W:' />
         </div>
       </div>
       </div>
        
      )}
      </div>
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleIelts} 
                  style={{ cursor: 'pointer' }}>
        <h2>IELTS</h2><h2>+</h2>
      </div>
      {isExpandedIelts && (
        <div className='Accordian-div'>
          <div className='a-sec-1'>
          <div className='DOB'>
           <p>Yet to Receive?</p>
           <Switch
                   on="yes"
                   off="no" 
                  name='yetToReceiveToggle' 
                  value={toggleData.ieltsYetToReceiveToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('yetToReceiveToggle', value)} />
          <input
          type="text" 
          value={academicData.ieltsYetToreceiveText} 
          onChange={handleTestChange}
          placeholder='Enter the Result date' />
          </div>

          <div className='DOB'>
           <p>TRF No.</p>
          <input
          type="text" 
          value={academicData.ieltstrfNo} 
          onChange={handleTestChange}
          placeholder='T: TRF No' />
        </div>
        </div>
        <div className='a-sec-1'>
          <div className='DOB'>
           <p>IELTS Wavier</p>
           <Switch
                   on="yes"
                   off="no" 
                  name='ieltsWaverToggle' 
                  value={toggleData.ieltsWaverToggle ? 'yes' : 'no'}
                  onChange={(value) => handleToggleChange('ieltsWaverToggle', value)} />
          <input
          type="text" 
          value={academicData.iletsWaverText} 
          onChange={handleTestChange}
          placeholder='Enter English 12 Marks'/></div>

          <div className='DOB'>
           <p>Date of Examination</p>
          <input
          type="text" 
          value={academicData.iletsDateOfExam} 
          onChange={handleTestChange}
          placeholder='Date of Examination' />
        </div>
        </div>
        <div className='a-sec-1'>
          <div className='DOB'>
           <p>Listening*</p>
          <input
          type="text" 
          value={academicData.iletsListening} 
          onChange={handleTestChange}
          placeholder='L:' />
          </div>
          <div className='DOB'>
           <p>Reading*</p>
          <input
          type="text" 
          value={academicData.iletsReading} 
          onChange={handleTestChange}
          placeholder='R:' />
        </div>
        <div className='DOB'>
           <p>Writing*</p>
          <input
          type="text" 
          value={academicData.iletsWriting} 
          onChange={handleTestChange}
          placeholder='W:' />
          </div>
          <div className='DOB'>
           <p>Speaking*</p>
          <input
          type="text" 
          value={academicData.iletsSpeaking} 
          onChange={handleTestChange}
          placeholder='S:' />
        </div>
        </div>
        <div className='a-sec-1'>
          <div className='DOB'>
           <p>Overall Score*</p>
          <input
          type="text" 
          value={academicData.iletsOvrScore} 
          onChange={handleTestChange}
          placeholder='Overall Score' />
          </div>
        </div>
        </div>
        
      )}
      </div>
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleTogglePte} 
                  style={{ cursor: 'pointer' }}>
        <h2>PTE</h2><h2>+</h2>
      </div>
      {isExpandedPte && (
       <div className='Accordian-div'>
       <div className='a-sec-1'>
         <div className='DOB'>
         <p>Overall score*</p>
         <input
         type="text" 
         value={academicData.pteOverallScore} 
         onChange={handleTestChange}
         placeholder='Overall score' /></div>
 
         <div className='DOB'>
          <p>Date of Examination</p>
         <input
         type="text" 
         value={academicData.pteDateOfExam} 
         onChange={handleTestChange}
         placeholder='Date of Examination' />
       </div>
       </div>
       <div className='a-sec-1'>
         <div className='DOB'>
          <p>Reading*</p>
         <input
         type="text" 
         value={academicData.pteReading} 
         onChange={handleTestChange}
         placeholder='R:' />
         </div>
         <div className='DOB'>
          <p>Listening*</p>
         <input
         type="text" 
         value={academicData.pteListening} 
         onChange={handleTestChange}
         placeholder='L:' />
       </div>
       <div className='DOB'>
          <p>Speaking*</p>
         <input
         type="text" 
         value={academicData.pteSpeaking} 
         onChange={handleTestChange}
         placeholder='S:' />
         </div>
         <div className='DOB'>
          <p>Writing*</p>
         <input
         type="text" 
         value={academicData.pteWriting} 
         onChange={handleTestChange}
         placeholder='W:' />
         </div>
       </div>
       </div>
        
      )}
      </div>
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleDet} 
                  style={{ cursor: 'pointer' }}>
        <h2>DET</h2><h2>+</h2>
      </div>
      {isExpandedDet && (
         <div className='Accordian-div'>
         <div className='a-sec-1'>
           <div className='DOB'>
           <p>Overall score*</p>
           <input
           type="text" 
           value={academicData.detOverallScore} 
           onChange={handleTestChange}
           placeholder='Overall score' /></div>
   
           <div className='DOB'>
            <p>Date of Examination</p>
           <input
           type="text" 
           value={academicData.detDateOfExam} 
           onChange={handleTestChange}
           placeholder='Date of Examination' />
         </div>
         </div>
         </div>
        
      )}
      </div>
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleSat} 
                  style={{ cursor: 'pointer' }}>
        <h2>SAT</h2><h2>+</h2>
      </div>
      {isExpandedSat && (
        <div className='Accordian-div'>
        <div className='a-sec-1'>
          <div className='DOB'>
          <p>Overall score*</p>
          <input
          type="text" 
          value={academicData.satOverallScore} 
          onChange={handleTestChange}
          placeholder='Overall score' /></div>
  
          <div className='DOB'>
           <p>Date of Examination</p>
          <input
          type="text" 
          value={academicData.satDateOfExam} 
          onChange={handleTestChange}
          placeholder='Date of Examination' />
        </div>
        </div>
        <div className='a-sec-1'>
          <div className='DOB'>
           <p>Reading and Writing*</p>
          <input
          type="text" 
          value={academicData.satReadingWriting} 
          onChange={handleTestChange}
          placeholder='RW:' />
          </div>
          <div className='DOB'>
           <p>Math*</p>
          <input
          type="text" 
          value={academicData.satMath} 
          onChange={handleTestChange}
          placeholder='M:' />
        </div>
        <div className='DOB'>
           <p>Essay*</p>
          <input
          type="text" 
          value={academicData.satEssay} 
          onChange={handleTestChange}
          placeholder='E:' />
          </div>
        </div>
        </div>
        
      )}
      </div>
      <div className='accordian-info-2'>
                  <div 
                  className='Accordian'
                  onClick={handleToggleAct} 
                  style={{ cursor: 'pointer' }}>
        <h2>ACT</h2><h2>+</h2>
      </div>
      {isExpandedAct && (
       <div className='Accordian-div'>
       <div className='a-sec-1'>
         <div className='DOB'>
         <p>Overall score*</p>
         <input
         type="text" 
         value={academicData.actOverallScore} 
         onChange={handleTestChange}
         placeholder='Overall score' /></div>
 
         <div className='DOB'>
          <p>Date of Examination</p>
         <input
         type="text" 
         value={academicData.actDateOfExam} 
         onChange={handleTestChange}
         placeholder='Date of Examination' />
       </div>
       </div>
       <div className='a-sec-1'>
         <div className='DOB'>
          <p>Math*</p>
         <input
         type="text" 
         value={academicData.actMath} 
         onChange={handleTestChange}
         placeholder='M:' />
         </div>
         <div className='DOB'>
          <p>Reading*</p>
         <input
         type="text" 
         value={academicData.actReading} 
         onChange={handleTestChange}
         placeholder='R:' />
       </div>
       <div className='DOB'>
          <p>Science*</p>
         <input
         type="text" 
         value={academicData.actScience} 
         onChange={handleTestChange}
         placeholder='S:' />
         </div>
         <div className='DOB'>
          <p>English*</p>
         <input
         type="text" 
         value={academicData.actEnglish} 
         onChange={handleTestChange}
         placeholder='E:' />
         </div>
         <div className='DOB'>
          <p>Writing*</p>
         <input
         type="text" 
         value={academicData.actWriting} 
         onChange={handleTestChange}
         placeholder='W:' />
         </div>
       </div>
       </div>
        
      )}
      </div>
      <div className='save-sticky'>
        <div className='sticky-text'>
        <button className='save-btn' onSubmit={handleTestSave}>SAVE AND COUNTINUE</button>
        </div>
      </div>
      </form>
      </section>
          </div>}
      </div>
          </div>
         
        }
        
    </div>
    
  )
}

export default ManageStudentsPage