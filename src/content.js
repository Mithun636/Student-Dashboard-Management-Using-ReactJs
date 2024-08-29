import React, { useState } from 'react';
import './content.css';

function Content() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);

  return (
    <>
    <div className='all'>
    <h1>Student Management</h1>
      <div className="cards-container">
        <div className="start-box red" onClick={() => setOne(one + 1)}>
          <i className="fa-solid fa-user-graduate icon1"></i> 
          <div className="start-number">{one}</div>
          <div className="start-title">Regular Students</div>
        </div>
        <div className="start-box purple" onClick={() => setTwo(two + 1)}>
          <i className="fa-solid fa-book-open icon1"></i> 
          <div className="start-number">{two}</div>
          <div className="start-title">Remedial Students</div>
        </div>
        <div className="start-box green" onClick={() => setThree(three + 1)}>
          <i className="fa-solid fa-person-circle-check icon1"></i> 
          <div className="start-number">{three}</div>
          <div className="start-title">In Paid Clubs</div>
        </div>
      </div>
      <div className="menu">
        <div className="menu-items">
          <div className="menu-item">
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="name">Regular Enrollment</div>
          </div>
          <div className="menu-item">
            <div className="icon">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="name">Remedial Enrollment</div>
          </div>
          <div className="menu-item">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="name">Club Management</div>
          </div>
          <div className="menu-item">
            <div className="icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <div className="name">Classroom Management</div>
          </div>
          <div className="menu-item">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="name">SMS / EMAIL</div>
          </div>
          <div className="menu-item">
            <div className="icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="name">Attendance</div>
          </div>
          <div className="menu-item">
            <div className="icon">
              <i className="fas fa-hospital"></i>
            </div>
            <div className="name">Clinic</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Content;
