import React from 'react'
import './AdvanceFilters.css'

function AdvanceFilters() {
  return (
    <div className='Advanced-Search-Sectio-1'>
        <div className='Advance-search'>
            <div className='First-check-box'>
                <p>Program Level</p>
                <div className='checkboxes'>
             <label><input type='checkbox' name='checkbox1'></input>High School (11th - 12th)</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>UG Diploma/Certificate/AssociateDegree</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>PG Diploma/Certificate</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>PG</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>UG+PG (Accelerated)Degree</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>PhD</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>Foundation</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>Short Term Programs</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>Pathway Programs</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>Twinning Programmes (UG)</label>
             </div>
            </div>
            <div className='Second-dropdowns'>
                <div className='First-colmn'>
                <div className='sp-1-1-dropdown'>
                    <p>Country</p>
                <select className='drop-downbox'>
                    <option>Select</option>
                <option  >United States</option>
                <option  >Canada</option>
                <option  >United Kingdom</option>
                <option  >Ireland</option>
                <option  >Australia</option>
                <option  >New Zealand</option>
                <option  >Germany</option>
                <option  >Netherland</option>
                <option  >France</option>
                <option  >Spain</option>
                <option  >Italy</option>
                <option  >Poland</option>
                <option  >Dubai</option>
                <option  >Singapore</option>
                </select>
                </div>
                <div className='sp-1-dropdown'>
                    <p>Study area</p>
                <select className='drop-downbox'>
                    <option>Select</option>
                    <option>Agriculture, Forestry and Fishery</option>
                    <option>Architecture and Building</option>
                    <option>Arts</option>
                    <option>Commerce, Business and Administration</option>
                    <option>Computer Science and Information Technology</option>
                    <option>Education</option>
                    <option>Engineering and Engineering Trades</option>
                    <option>Environmental Science/Protection</option>
                    <option>Health</option>
                    <option>Humanities</option>
                    <option>Journalism and Information</option>
                    <option>Law</option>
                    <option>Life Sciences</option>
                    <option>Manufacturing and Processing</option>
                    <option>Mathematics and Statistics</option>
                    <option>Personal Services</option>
                    <option>Physical Sciences, Sciences</option>
                    <option>Security Services</option>
                    <option>Social and Behavioural Science</option>
                    <option>Social Services</option>
                    <option>Transport Services</option>
                    <option>Veterinary</option>
                </select>
                </div>
                <div className='sp-1-dropdown'>
                    <p>Discipline area</p>
                <select className='drop-downbox'>
                    <option>Select</option>
                    <option>Selekry</option>
                    <option>Selekry</option>
                    <option>Selekry</option>
                    <option>Selekry</option>
                </select>
                </div>
                </div>
                <div className='Second-colmn'>
                <div className='sp-1-1-dropdown'>
                    <p>Duration</p>
                <select className='drop-downbox'>
                    <option>Select</option>
                    <option>0-1 Years</option>
                    <option>1-2 Years</option>
                    <option>2-3 Years</option>
                    <option>3-4 Years</option>
                    <option>4 and above Years</option>
                </select>
                </div>
                <div className='sp-1-dropdown'>
                    <p>ESL/ESP Available</p>
                <select className='drop-downbox'>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                </div>
                </div>
            </div>
            <div className='Third-check-box'>
                <p>Requirements</p>
                <div className='checkboxes'>
             <label><input type='checkbox' name='checkbox1'></input>PTE</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>TOEFL IBT</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>IELTS</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>DET</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>SAT</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>ACT</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>GRE</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>GMAT</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>Without English Proficiency</label><br/>
             <label><input type='checkbox' name='checkbox1'></input>Without GRE</label>
             </div>
            </div>
        </div>
    </div>
  )
}

export default AdvanceFilters