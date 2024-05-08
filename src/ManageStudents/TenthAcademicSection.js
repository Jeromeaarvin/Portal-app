import React, { useState } from 'react';
import './ManageStudentsPage.css'

const TenthAcademicSection = ({ sectionTitle, academicData, handleAcademicChange, profilErrors }) => {
  const [editMode, setEditMode] = useState(true); // Initially in edit mode

  const handleSave = () => {
    // Save functionality here (e.g., send data to server)
    setEditMode(false); // Switch to display mode after saving
  };

  const handleEdit = () => {
    setEditMode(true); // Switch back to edit mode
  };

  return (
    <section className='p-sec-4'>
      {editMode ? ( // Edit mode
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
       <h3>Grade 10th or equivalent</h3>
       <div className='per-div'>
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
                  <input
                   name='grade10CountryOfStudy'
                   value={academicData.grade10CountryOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                 
                 </input>
                 {profilErrors.grade10CountryOfStudy && <span className='errors'>{profilErrors.grade10CountryOfStudy}</span>}
                </div>
                <div className='DOB'>
                  <p>State of Study*</p>
                  <input
                   name='grade10StateOfStudy'
                   value={academicData.grade10StateOfStudy}
                   onChange={handleAcademicChange}
                   className='Gender-dropdown'
                 >
                 
                 </input>
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
                  type='date'
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
                  type='date'
                  name='grade10EndDate'
                  value={academicData.grade10EndDate}
                  onChange={handleAcademicChange}
                  placeholder=''
                  ></input>
                 {profilErrors.grade10EndDate && <span className='errors'>{profilErrors.grade10EndDate}</span>}
                </div>
              </div>
              <button className='academic-save' onClick={handleSave}>SAVE</button>
              </div>
      </>
      ) : ( 
        <div className='academic-personal-info'>
            <div className='name-location'>
          <h4>{academicData.grade10InstitutionName}</h4>
          <p>{academicData.grade10City},{academicData.grade10StateOfStudy},{academicData.grade10CountryOfStudy}</p>
          </div>
          <div  className='dates-div' >
          <div className='start-end-date'>Attended from <h5>{academicData.grade10StartDate}</h5> to <h5>{academicData.grade10EndDate}</h5></div>
          </div>
          <div className='button-container'>
          <button className='btn-cont-edit' onClick={handleEdit}>EDIT</button><br></br>
            <button className='btn-cont-remove'>REMOVE</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TenthAcademicSection;
