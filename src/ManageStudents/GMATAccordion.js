import React from 'react';
import './ManageStudentsPage.css'


const GMATAccordion = ({ academicData, handleToggleGmat, handleTestChange, isExpandedGmat }) => {
  return (
    <div className='accordian-info-2'>
      <div className='Accordian' onClick={handleToggleGmat} style={{ cursor: 'pointer' }}>
        <h2>GMAT</h2><h2>+</h2>
      </div>
      {isExpandedGmat && (
        <div className='Accordian-div'>
          <div className='a-sec-1'>
            <div className='a-DOB'>
              <p>Overall score<span>*</span></p>
              <input
                type="text"
                value={academicData.gmatOverallScore}
                onChange={handleTestChange}
                placeholder='Overall score' />
            </div>

            <div className='a-DOB'>
              <p>Date of Examination</p>
              <input
                type="text"
                value={academicData.gmatDateOfExam}
                onChange={handleTestChange}
                placeholder='Date of Examination' />
            </div>
          </div>
          <div className='a-sec-2'>
            <div className='g-DOB'>
              <p>Quantitative<span>*</span></p>
              <input
                type="text"
                value={academicData.gmatQuantitative}
                onChange={handleTestChange}
                placeholder='Q:' />
            </div>
            <div className='g-DOB'>
              <p>Verbal<span>*</span></p>
              <input
                type="text"
                value={academicData.gmatVerbal}
                onChange={handleTestChange}
                placeholder='V:' />
            </div>
            <div className='g-DOB'>
              <p>Analytical Writing<span>*</span></p>
              <input
                type="text"
                value={academicData.gmatWriting}
                onChange={handleTestChange}
                placeholder='AW:' />
            </div>
            <div className='g-DOB'>
              <p>Integrated Reasoning<span>*</span></p>
              <input
                type="text"
                value={academicData.gmatReasoning}
                onChange={handleTestChange}
                placeholder='RR:' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GMATAccordion;
