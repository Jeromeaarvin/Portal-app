import React, { useState } from 'react';
import './ManageStudentsPage.css'

const TwelthAcademicSection = ({ sectionTitle, academicData, handleAcademicChange, profilErrors }) => {
  const [twelthEditMode, setTwelthEditMode] = useState(true); // Initially in edit mode

  const twelthHandleSave = () => {
    // Save functionality here (e.g., send data to server)
    setTwelthEditMode(false); // Switch to display mode after saving
  };

  const twelthHandleEdit = () => {
    setTwelthEditMode(true); // Switch back to edit mode
  };

  return (
    <section className='p-sec-4'>
      {twelthEditMode ? ( // Edit mode
        // <div className='personal-info'>
        //   <div className='DOB'>
        //     <p>Name of the Institution*</p>
        //     <input
        //       type='text'
        //       name='ugInstitutionName'
        //       value={academicData.ugInstitutionName}
        //       onChange={handleAcademicChange}
        //       placeholder=''
        //     />
        //     {profilErrors.ugInstitutionName && <span className='errors'>{profilErrors.ugInstitutionName}</span>}
        //   </div>
        //   {/* Other input fields... */}
        //   <button onClick={handleSave}>Save</button>
        // </div>
        <>
        <h3>Grade 12th or equivalent</h3>
        <div className='per-div'>
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
                  <input
                   name='grade12CountryOfStudy'
                   value={academicData.grade12CountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                 </input>
                 {profilErrors.grade12CountryOfStudy && <span className='errors'>{profilErrors.grade12CountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <input
                   name='grade12StateOfStudy'
                   value={academicData.grade12StateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                  
                 </input>
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
                  type='date'
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
                  type='date'
                  name='grade12EndDate'
                  value={academicData.grade12EndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade12EndDate && <span className='errors'>{profilErrors.grade12EndDate}</span>}
                </div>
              </div>
              <button className='academic-save' onClick={twelthHandleSave}>SAVE</button>
              </div>
      </>
      ) : ( 
        <div className='academic-personal-info'>
            <div className='name-location'>
          <h4>{academicData.grade12InstitutionName}</h4>
          <p>{academicData.grade12City},{academicData.grade12StateOfStudy},{academicData.grade12CountryOfStudy}</p>
          </div>
          <div  className='dates-div'>
          <div className='start-end-date'>Attended from <h5>{academicData.grade12ugStartDate}</h5> to <h5>{academicData.grade12EndDate}</h5></div>
          </div>
          <div className='button-container'>
          <button className='btn-cont-edit' onClick={twelthHandleEdit}>EDIT</button><br></br>
            <button className='btn-cont-remove'>REMOVE</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TwelthAcademicSection;
