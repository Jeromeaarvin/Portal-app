import React, { useState } from 'react';
import './ManageStudentsPage.css'

const UgAcademicSection = ({ sectionTitle, academicData, handleAcademicChange, profilErrors }) => {
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
        <h3>Undergraduate</h3>
        <div className='per-div'>
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
            <option value='UG'>UG</option>
            <option value='12th'>12th</option>
         </select>
         {profilErrors.ugHighLvlEducation && <span className='errors'>{profilErrors.ugHighLvlEducation}</span>}
        </div>
      </div>
      <div className='personal-info'>
        <div className='DOB'>
          <p>Name of the Institution<span>*</span></p>
         <input
          type='text'
          name='ugInstitutionName'
          value={academicData.ugInstitutionName}
          onChange={handleAcademicChange}
          placeholder='Enter Name'
          ></input>
         {profilErrors.ugInstitutionName && <span className='errors'>{profilErrors.ugInstitutionName}</span>}
        </div>
        <div className='DOB'>
          <p>Country of Study<span>*</span></p>
          <input
           name='ugCountryOfStudy'
           value={academicData.ugCountryOfStudy}
           onChange={handleAcademicChange}
           className='Gender-dropdown'
           placeholder='Enter Country'
         >
         
         </input>
         {profilErrors.ugCountryOfStudy && <span className='errors'>{profilErrors.ugCountryOfStudy}</span>}
        </div>
        <div className='DOB'>
          <p>State of Study<span>*</span></p>
          <input
           name='ugStateOfStudy'
           value={academicData.ugStateOfStudy}
           onChange={handleAcademicChange}
           className='Gender-dropdown'
           placeholder='Enter State'
         >
         
         </input>
         {profilErrors.ugStateOfStudy && <span className='errors'>{profilErrors.ugStateOfStudy}</span>}
        </div>
      </div>
      <div className='personal-info'>
        <div className='DOB'>
          <p>City<span>*</span></p>
         <input
          type='text'
          name='ugCity'
          value={academicData.ugCity}
          onChange={handleAcademicChange}
          placeholder='Enter City'
          ></input>
         {profilErrors.ugCity && <span className='errors'>{profilErrors.ugCity}</span>}
        </div>
        <div className='DOB'>
          <p>Qualification Achieved<span>*</span></p>
         <input
          type='text'
          name='ugQualAchieved'
          value={academicData.ugQualAchieved}
          onChange={handleAcademicChange}
          placeholder='Enter Qualification'
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
          placeholder='Enter Backlogs'
          ></input>
         {profilErrors.ugBacklogs && <span className='errors'>{profilErrors.ugBacklogs}</span>}
        </div>
      </div>
      <div className='personal-info'>
        <div className='DOB'>
          <p>Grading System<span>*</span></p>
          <input
           name='ugGradingSytem'
           value={academicData.ugGradingSytem}
           onChange={handleAcademicChange}
           className='Gender-dropdown'
           placeholder='Enter System'
         >
          
         </input>
         {profilErrors.ugGradingSytem && <span className='errors'>{profilErrors.ugGradingSytem}</span>}
        </div>
        <div className='DOB'>
          <p>Score</p>
         <input
          type='text'
          name='ugScore'
          value={academicData.ugScore}
          onChange={handleAcademicChange}
          placeholder='Enter Score'
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
          placeholder='Enter Instruction'
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
      <button className='academic-save' onClick={handleSave}>SAVE</button>
      </div>
      </>
      ) : ( 
        <div className='academic-personal-info'>
            <div className='name-location'>
          <h4>{academicData.ugInstitutionName}</h4>
          <p>{academicData.ugCity},{academicData.ugStateOfStudy},{academicData.ugCountryOfStudy}</p>
          </div>
          <div className='dates-div'>
          <div className='start-end-date'>Attended from <h5>{academicData.ugStartDate}</h5> to <h5>{academicData.ugEndDate}</h5></div>
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

export default UgAcademicSection;
