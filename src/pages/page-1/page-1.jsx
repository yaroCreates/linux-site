import React from 'react'
import './page-1.css'

function Page1() {
  return (
    <div className="container">
        <div className="profile-area">
            <div className="picicon">
                <div className="photo"></div>
                <span className="photo-icon material-symbols-outlined">photo_camera</span>
            </div>
            <h4>James Yaro</h4>

            <div className="profile-area-list">
                <div className="list-content">
                    <span className="material-symbols-outlined" optimal_size="48px">person</span>
                    <p>Profile</p>
                    <span><i className=" fa fa-angle-right"></i></span>
                </div>
                <div className="list-content">
                    <span className="material-symbols-outlined">school</span>
                    <p>Courses</p>
                    <span><i className=" fa fa-angle-right"></i></span>
                </div>
                <div className="list-content">
                    <span className="material-symbols-outlined">done</span>
                    <p>Attendance</p>
                    <span><i className=" fa fa-angle-right"></i></span>
                </div>
                <div className="list-content">
                    <span className="material-symbols-outlined">logout</span>
                    <p>Logout</p>
                </div>
            </div>
        </div>
        <div className="form-area">
            <span className="top-icon"><i className=" fa fa-check"></i></span>
            <div className="field">
                <div className="field-items">
                    <p className="serial-no">1.</p>
                    <div>
                        <p className="field-question">Course of study in school</p>
                        <input type="text" placeholder="Course of study"/>
                    </div>
                </div>
                <div className="field-items">
                    <p className="serial-no">2.</p>
                    <div>
                        <p className="field-question">Are you a student?</p>
                        <button>Yes</button>
                        <button>No</button>
                    </div>
                </div>
                <div className="field-items">
                    <p className="serial-no">3.</p>
                    <div>
                        <p className="field-question">Did you graduate?</p>
                        <button>Yes</button>
                        <button>No</button>
                    </div>
                </div>
                <div className="field-items">
                    <p className="serial-no">4.</p>
                    <div>
                        <p className="field-question">Does your country require post-graduation service?</p>
                        <button>Yes</button>
                        <button>No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page1