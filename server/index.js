
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use extended: true for compatibility
app.use(cors());

mongoose.connect(
  "mongodb+srv://tec3saio:12345@demo123.oqavxl0.mongodb.net/?retryWrites=true&w=majority&appName=Demo123/users",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  }
);

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  mobileNumber: String,
  email: String,
});
const profileSchema = new mongoose.Schema({
  dateOfBirth: String,
  gender: String,
  maritalStatus: String,
  address1: String,
  address2: String,
  country: String,
  state: String,
  city: String,
  pincode: String,
  moreCitizenshipToggle:String,
  otherCountryToggle: String,
  peraddress1: String,
  peraddress2: String,
  percountry: String,
  perstate: String,
  percity: String,
  perpincode: String,
  passportNumber: String,
  issueDate: String,
  expiryDate: String,
  issueCountry: String,
  cityOfBirth: String,
  countryOfBirth: String,
  nationality: String,
  citizenship: String,
  moreCitizenshipDrop: String,
  otherCountryDrop: String,
  immigrationToggle: String,
  immigrationDrop: String,
  medConditionToggle: String,
  medConditionText: String,
  visaRefusalToggle: String,
  visaRefusalDrop: String,
  visaRefusalType: String,
  crimeOffToggle: String,
  crimeOffText: String,
  emgContactName: String,
  emgContactPhone: String,
  emgContactEmail: String,
  emgContactRelation: String,
});
const academicSchema = new mongoose.Schema({
  eduCountry: String,
  highLvlEducation: String,
  ugHighLvlEducation: String,
  ugInstitutionName: String,
  ugCountryOfStudy: String,
  ugStateOfStudy: String,
  ugCity: String,
  ugQualAchieved: String,
  ugBacklogs: String,
  ugGradingSytem: String,
  ugScore: String,
  ugPrimLang: String,
  ugStartDate: String,
  ugEndDate: String,
  grade12HighLvlEducation: String,
  grade12InstitutionName: String,
  grade12CountryOfStudy: String,
  grade12StateOfStudy: String,
  grade12City: String,
  grade12QualAchieved: String,
  grade12Backlogs: String,
  garde12GradingSytem: String,
  grade12Score: String,
  grade12PrimLang: String,
  grade12ugStartDate: String,
  grade12EndDate: String,
  grade10HighLvlEducation:String,
  grade10InstitutionName:String,
  grade10CountryOfStudy:String,
  grade10StateOfStudy:String,
  grade10City:String,
  grade10QualAchieved:String,
  grade10Backlogs:String,
  garde10GradingSytem:String,
  grade10Score:String,
  grade10PrimLang:String,
  grade10ugStartDate:String,
  grade10EndDate:String,
});
const workSchema = new mongoose.Schema({
  orgName:String,
  position:String,
  jobprofile:String,
  workingfrom:String,
  workingupto:String,
  modeofsalary:String,
});
const testSchema = new mongoose.Schema({
  greOverallScore:String,
  greDateOfExam:String,
  greQuantitative:String,
  greVerbal:String,
  greWriting:String,
  
  gmatOverallScore:String,
  gmatDateOfExam:String,
  gmatQuantitative:String,
  gmatVerbal:String,
  gmatWriting:String,
  gmatReasoning:String,

  toeflOverallScore:String,
  toeflDateOfExam:String,
  toeflReading:String,
  toeflListening:String,
  toeflSpeaking:String,
  toeflWriting:String,

  ieltsYetToReceiveToggle:String,
  ieltsYetToReceiveText:String,
  ieltsTrfNo:String,
  ieltsWaiverToggle:String,
  iletsWaiverText:String,
  iletsDateOfExam:String,
  iletsListening:String,
  iletsReading:String,
  iletsWriting:String,
  iletsSpeaking:String,
  iletsOverallScore:String,

  pteOverallScore:String,
  pteDateOfExam:String,
  pteReading:String,
  pteListening:String,
  pteSpeaking:String,
  pteWriting:String,

  detOverallScore:String,
  detDateOfExam:String,

  satOverallScore:String,
  satDateOfExam:String,
  satReadingWriting:String,
  satMath:String,
  satEssay:String,

  actOverallScore:String,
  actDateOfExam:String,
  actMath:String,
  actReading:String,
  actScience:String,
  actEnglish:String,
  actWriting:String,
});

const User = mongoose.model("User", userSchema);
const Profile = mongoose.model("Profile", profileSchema);
const Academic = mongoose.model("academicdata", academicSchema);
const work = mongoose.model("workData", workSchema);
const Test = mongoose.model("testData", testSchema);

app.post("/signup", async (req, res) => {
  const { firstname, lastname, mobileNumber, email } = req.body;
  try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
          res.status(400).json({ message: "Student is already registered" });
      } else {
          const newUser = new User({
            firstname: firstname,
              lastname: lastname,
              mobileNumber:mobileNumber,
              email:email
              // mobileNumber: '' // You may want to handle password hashing here
          });
          await newUser.save();
          res.status(201).json({ message: "Student has been registered" });
      }
  } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/Profile", async (req, res) => {
  // console.log(req.body)
    const { dateOfBirth,
    gender,
    maritalStatus,
    address1,
    address2,
    country,
    state,
    city,
    pincode,
    moreCitizenshipToggle,
    otherCountryToggle,
    peraddress1,
    peraddress2,
    percountry,
    perstate,
    percity,
    perpincode,
    passportNumber,
    issueDate,
    expiryDate,
    issueCountry,
    cityOfBirth,
    countryOfBirth,
    nationality,
    citizenship,
    moreCitizenshipDrop,
    otherCountryDrop,
    immigrationToggle,
    immigrationDrop,
    medConditionToggle,
    medConditionText,
    visaRefusalToggle,
    visaRefusalDrop,
    visaRefusalType,
    crimeOffToggle,
    crimeOffText,
    emgContactName,
    emgContactPhone,
    emgContactEmail,
    emgContactRelation
   } = req.body;
  try {
    console.log(address1);
      const existingUser = await Profile.findOne({ address1: address1 });
      console.log(existingUser);
      if (existingUser) {
          res.status(400).json({ message: "Student is already registered" });
      } else {
          const newStudentProfile = new Profile({
            dateOfBirth:dateOfBirth,
            gender: gender,
  maritalStatus: maritalStatus,
  address1: address1,
  address2: address2,
  country: country,
  state: state,
  city: city,
  pincode: pincode,
  moreCitizenshipToggle: moreCitizenshipToggle,
  otherCountryToggle: otherCountryToggle,
  peraddress1: peraddress1,
  peraddress2: peraddress2,
  percountry: percountry,
  perstate: perstate,
  percity: percity,
  perpincode: perpincode,
  passportNumber: passportNumber,
  issueDate: issueDate,
  expiryDate: expiryDate,
  issueCountry: issueCountry,
  cityOfBirth: cityOfBirth,
  countryOfBirth: countryOfBirth,
  nationality: nationality,
  citizenship: citizenship,
  moreCitizenshipDrop: moreCitizenshipDrop,
  otherCountryDrop: otherCountryDrop,
  immigrationToggle: immigrationToggle,
  immigrationDrop: immigrationDrop,
  medConditionToggle: medConditionToggle,
  medConditionText: medConditionText,
  visaRefusalToggle: visaRefusalToggle,
  visaRefusalDrop: visaRefusalDrop,
  visaRefusalType: visaRefusalType,
  crimeOffToggle: crimeOffToggle,
  crimeOffText: crimeOffText,
  emgContactName: emgContactName,
  emgContactPhone: emgContactPhone,
  emgContactEmail: emgContactEmail,
  emgContactRelation: emgContactRelation
          });
          await newStudentProfile.save();
          res.status(201).json({ message: "Student profile has been Saved" });
      }
  } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/academicdata", async (req, res) => {
  // console.log(req.body)
    const {
      eduCountry,
    highLvlEducation,
    ugHighLvlEducation,
    ugInstitutionName,
    ugCountryOfStudy,
    ugStateOfStudy,
    ugCity,
    ugQualAchieved,
    ugBacklogs,
    ugGradingSytem,
    ugScore,
    ugPrimLang,
    ugStartDate,
    ugEndDate,
    grade12HighLvlEducation,
    grade12InstitutionName,
    grade12CountryOfStudy,
    grade12StateOfStudy,
    grade12City,
    grade12QualAchieved,
    grade12Backlogs,
    garde12GradingSytem,
    grade12Score,
    grade12PrimLang,
    grade12ugStartDate,
    grade12EndDate,

    grade10HighLvlEducation,
    grade10InstitutionName,
    grade10CountryOfStudy,
    grade10StateOfStudy,
    grade10City,
    grade10QualAchieved,
    grade10Backlogs,
    garde10GradingSytem,
    grade10Score,
    grade10PrimLang,
    grade10ugStartDate,
    grade10EndDate
   } = req.body;
  try {
          const newAcademicProfile = new Academic({
            eduCountry:eduCountry,
  highLvlEducation:highLvlEducation,
  ugHighLvlEducation:ugHighLvlEducation,
  ugInstitutionName:ugInstitutionName,
  ugCountryOfStudy:ugCountryOfStudy,
  ugStateOfStudy:ugStateOfStudy,
  ugCity:ugCity,
  ugQualAchieved:ugQualAchieved,
  ugBacklogs:ugBacklogs,
  ugGradingSytem:ugGradingSytem,
  ugScore:ugScore,
  ugPrimLang:ugPrimLang,
  ugStartDate:ugStartDate,
  ugEndDate:ugEndDate,
  grade12HighLvlEducation:grade12HighLvlEducation,
    grade12InstitutionName:grade12InstitutionName,
    grade12CountryOfStudy:grade12CountryOfStudy,
    grade12StateOfStudy:grade12StateOfStudy,
    grade12City:grade12City,
    grade12QualAchieved:grade12QualAchieved,
    grade12Backlogs:grade12Backlogs,
    garde12GradingSytem:garde12GradingSytem,
    grade12Score:grade12Score,
    grade12PrimLang:grade12PrimLang,
    grade12ugStartDate:grade12ugStartDate,
    grade12EndDate:grade12EndDate,

    grade10HighLvlEducation:grade10HighLvlEducation,
    grade10InstitutionName:grade10InstitutionName,
    grade10CountryOfStudy:grade10CountryOfStudy,
    grade10StateOfStudy:grade10StateOfStudy,
    grade10City:grade10City,
    grade10QualAchieved:grade10QualAchieved,
    grade10Backlogs:grade10Backlogs,
    garde10GradingSytem:garde10GradingSytem,
    grade10Score:grade10Score,
    grade10PrimLang:grade10PrimLang,
    grade10ugStartDate:grade10ugStartDate,
    grade10EndDate:grade10EndDate
          });
          await newAcademicProfile.save();
          res.status(201).json({ message: "Student academic has been Saved" });
      
  } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/workData", async (req, res) => {
  // console.log(req.body)
    const { orgName,
      jobprofile,
      workingfrom,
      workingupto,
      modeofsalary } = req.body;
  try {
          const newAcademicProfile = new work({ orgName:orgName,
            jobprofile:jobprofile,
            workingfrom:workingfrom,
            workingupto:workingupto,
            modeofsalary:modeofsalary });
          await newAcademicProfile.save();
          res.status(201).json({ message: "Student work has been Saved" });
      
  } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/testData", async (req, res) => {
  // console.log(req.body)
    const { 
      greOverallScore,
      greDateOfExam,
      greQuantitative,
      greVirbal,
      greWriting,
      
      gmatOverallScore,
      gmatDateOfExam,
      gmatQuantitative,
      gmatVerbal,
      gmatWriting,
      gmatReasoning,
    
      toeflOverallScore,
      toeflDateOfExam,
      toeflReadin,
      toeflListening,
      toeflSpeaking,
      toeflWriting,
    
      ieltsYetToReceiveToggle,
      ieltsYetToreceiveText,
      ieltstrfNo,
      ieltsWaverToggle,
      iletsWaverText,
      iletsDateOfExam,
      iletsListening,
      iletsReading,
      iletsWriting,
      iletsSpeaking,
      iletsOvrScore,
    
      pteOverallScore,
      pteDateOfExam,
      pteReading,
      pteListening,
      pteSpeaking,
      pteWriting,
    
      detOverallScore,
      detDateOfExam,
    
      satOverallScore,
      satDateOfExam,
      satReadingWriting,
      satMath,
      satEssay,
    
      actOverallScore,
      actDateOfExam,
      actMath,
      actReading,
      actScience,
      actEnglish,
      actWriting} = req.body;
  try {
          const newAcademicProfile = new Test({ 
            greOverallScore:greOverallScore,
            greDateOfExam:greDateOfExam,
  greQuantitative:greQuantitative,
  greVirbal:greVirbal,
  greWriting:greWriting,
  
  gmatOverallScore:gmatOverallScore,
  gmatDateOfExam:gmatDateOfExam,
  gmatQuantitative:gmatQuantitative,
  gmatVerbal:gmatVerbal,
  gmatWriting:gmatWriting,
  gmatReasoning:gmatReasoning,

  toeflOverallScore:toeflOverallScore,
  toeflDateOfExam:toeflDateOfExam,
  toeflReadin:toeflReadin,
  toeflListening:toeflListening,
  toeflSpeaking:toeflSpeaking,
  toeflWriting:toeflWriting,

  ieltsYetToReceiveToggle:ieltsYetToReceiveToggle,
  ieltsYetToreceiveText:ieltsYetToreceiveText,
  ieltstrfNo:ieltstrfNo,
  ieltsWaverToggle:ieltsWaverToggle,
  iletsWaverText:iletsWaverText,
  iletsDateOfExam:iletsDateOfExam,
  iletsListening:iletsListening,
  iletsReading:iletsReading,
  iletsWriting:iletsWriting,
  iletsSpeaking:iletsSpeaking,
  iletsOvrScore:iletsOvrScore,

  pteOverallScore:pteOverallScore,
  pteDateOfExam:pteDateOfExam,
  pteReading:pteReading,
  pteListening:pteListening,
  pteSpeaking:pteSpeaking,
  pteWriting:pteWriting,

  detOverallScore:detOverallScore,
  detDateOfExam:detDateOfExam,

  satOverallScore:satOverallScore,
  satDateOfExam:satDateOfExam,
  satReadingWriting:satReadingWriting,
  satMath:satMath,
  satEssay:satEssay,

  actOverallScore:actOverallScore,
  actDateOfExam:actDateOfExam,
  actMath:actMath,
  actReading:actReading,
  actScience:actScience,
  actEnglish:actEnglish,
  actWriting:actWriting
           });
          await newAcademicProfile.save();
          res.status(201).json({ message: "Student Test has been Saved" });
      
  } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error" });
  }
});



// const studentProfileSchema = new mongoose.Schema({
//  dateOfBirth: String,
// gender: String,
// maritalStatus: String,
// address1: String,
// address2: String,
// country: String,
// state: String,
// city: String,
// pincode: String,
// moreCitizenshipToggle:String,
// otherCountryToggle: String,
// peraddress1: String,
// peraddress2: String,
// percountry: String,
// perstate: String,
// percity: String,
// perpincode: String,
// passportNumber: String,
// issueDate: String,
// expiryDate: String,
// issueCountry: String,
// cityOfBirth: String,
// countryOfBirth: String,
// nationality: String,
// citizenship: String,
// moreCitizenshipDrop: String,
// otherCountryDrop: String,
// immigrationToggle: String,
// immigrationDrop: String,
// medConditionToggle: String,
// medConditionText: String,
// visaRefusalToggle: String,
// visaRefusalDrop: String,
// visaRefusalType: String,
// crimeOffToggle: String,
// crimeOffText: String,
// emgContactName: String,
// emgContactPhone: String,
// emgContactEmail: String,
// emgContactRelation: String,
// eduCountry: String,
// highLvlEducation: String,
// ugHighLvlEducation: String,
// ugInstitutionName: String,
// ugCountryOfStudy: String,
// ugStateOfStudy: String,
// ugCity: String,
// ugQualAchieved: String,
// ugBacklogs: String,
// ugGradingSytem: String,
// ugScore: String,
// ugPrimLang: String,
// ugStartDate: String,
// ugEndDate: String,
// orgName:String,
// greOverallScore:String,
// });

// const StudentProfile = mongoose.model("StudentProfile", studentProfileSchema);

// app.post("/studentProfile", async (req, res) => {
//   console.log(req.body)
//     const { dateOfBirth,
//     gender,
//     maritalStatus,
//     address1,
//     address2,
//     country,
//     state,
//     city,
//     pincode,
//     moreCitizenshipToggle,
//     otherCountryToggle,
//     peraddress1,
//     peraddress2,
//     percountry,
//     perstate,
//     percity,
//     perpincode,
//     passportNumber,
//     issueDate,
//     expiryDate,
//     issueCountry,
//     cityOfBirth,
//     countryOfBirth,
//     nationality,
//     citizenship,
//     moreCitizenshipDrop,
//     otherCountryDrop,
//     immigrationToggle,
//     immigrationDrop,
//     medConditionToggle,
//     medConditionText,
//     visaRefusalToggle,
//     visaRefusalDrop,
//     visaRefusalType,
//     crimeOffToggle,
//     crimeOffText,
//     emgContactName,
//     emgContactPhone,
//     emgContactEmail,
//     emgContactRelation,
//      eduCountry,
//     highLvlEducation,
//     ugHighLvlEducation,
//     ugInstitutionName,
//     ugCountryOfStudy,
//     ugStateOfStudy,
//     ugCity,
//     ugQualAchieved,
//     ugBacklogs,
//     ugGradingSytem,
//     ugScore,
//     ugPrimLang,
//     ugStartDate,
//     ugEndDate,
//      orgName,
//     greOverallScore
//    } = req.body.profileData;
//   try {
//     console.log(address1);
//       const existingUser = await StudentProfile.findOne({ address1: address1 });
//       console.log(existingUser);
//       if (existingUser) {
//           res.status(400).json({ message: "Student is already registered" });
//       } else {
//           const newStudentProfile = new StudentProfile({
//             dateOfBirth:dateOfBirth,
//             gender: gender,
//   maritalStatus: maritalStatus,
//   address1: address1,
//   address2: address2,
//   country: country,
//   state: state,
//   city: city,
//   pincode: pincode,
//   moreCitizenshipToggle: moreCitizenshipToggle,
//   otherCountryToggle: otherCountryToggle,
//   peraddress1: peraddress1,
//   peraddress2: peraddress2,
//   percountry: percountry,
//   perstate: perstate,
//   percity: percity,
//   perpincode: perpincode,
//   passportNumber: passportNumber,
//   issueDate: issueDate,
//   expiryDate: expiryDate,
//   issueCountry: issueCountry,
//   cityOfBirth: cityOfBirth,
//   countryOfBirth: countryOfBirth,
//   nationality: nationality,
//   citizenship: citizenship,
//   moreCitizenshipDrop: moreCitizenshipDrop,
//   otherCountryDrop: otherCountryDrop,
//   immigrationToggle: immigrationToggle,
//   immigrationDrop: immigrationDrop,
//   medConditionToggle: medConditionToggle,
//   medConditionText: medConditionText,
//   visaRefusalToggle: visaRefusalToggle,
//   visaRefusalDrop: visaRefusalDrop,
//   visaRefusalType: visaRefusalType,
//   crimeOffToggle: crimeOffToggle,
//   crimeOffText: crimeOffText,
//   emgContactName: emgContactName,
//   emgContactPhone: emgContactPhone,
//   emgContactEmail: emgContactEmail,
//   emgContactRelation: emgContactRelation,
//   eduCountry:eduCountry,
//   highLvlEducation:highLvlEducation,
//   ugHighLvlEducation:ugHighLvlEducation,
//   ugInstitutionName:ugInstitutionName,
//   ugCountryOfStudy:ugCountryOfStudy,
//   ugStateOfStudy:ugStateOfStudy,
//   ugCity:ugCity,
//   ugQualAchieved:ugQualAchieved,
//   ugBacklogs:ugBacklogs,
//   ugGradingSytem:ugGradingSytem,
//   ugScore:ugScore,
//   ugPrimLang:ugPrimLang,
//   ugStartDate:ugStartDate,
//   ugEndDate:ugEndDate,
//   orgName:orgName,
//   greOverallScore:greOverallScore
//           });
//           await newStudentProfile.save();
//           res.status(201).json({ message: "Student has been Saved" });
//       }
//   } catch (error) {
//       console.error("Error during signup:", error);
//       res.status(500).json({ message: "Internal Server Error" });
//   }
// });


// const profileSchema = new mongoose.Schema({
//   email: String,
//   name: String,
//   mobile: Number,
//   Qualification : String
//   // ... (add other fields)
// });

// // Create the Profile model
// const Profile = mongoose.model("Profile", profileSchema);

// Routes
// Inside your Express app setup:



app.get('/users', async (req, res) => {
  try {
    const userData = await User.find();
    res.json(userData);
  } catch (error) {
    console.error('Error fetching :', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



app.get('/profiles', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Fetch all academic data
app.get('/academicdata', async (req, res) => {
  try {
    const academicData = await Academic.find();
    res.json(academicData);
  } catch (error) {
    console.error('Error fetching academic data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Fetch all work data
app.get('/workdata', async (req, res) => {
  try {
    const workData = await work.find();
    res.json(workData);
  } catch (error) {
    console.error('Error fetching work data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Fetch all test data
app.get('/testdata', async (req, res) => {
  try {
    const testData = await Test.find();
    res.json(testData);
  } catch (error) {
    console.error('Error fetching test data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});





const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server starting at ${PORT}`);
});