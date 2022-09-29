import React from 'react'
import './page-3.css'

function Page3() {
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
            <span className="top-icon"><i style={{marginTop: "0.3rem"}} className="fa fa-check"></i></span>
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
                        <div className="field-question-header">
                            <p className="field-question">Are you a student?</p>
                            <span><i className=" yes fa fa-check"></i></span>
                            <p className="yes">Yes</p>
                        </div>
                        {/* <button>Yes</button>
                        <button>No</button> */}
                        <div className="input-fields">
                            <input type="text" placeholder="Course of study"/>
                            <input type="text" placeholder="Expected graduation date"/>
                            <span><i className="fa fa-reply" style={{color: "#C5CCEC"}}></i></span>
                        </div>
                    </div>
                </div>
                <div className="field-items">
                    <p className="serial-no">3.</p>
                    <div>
                        <div className="field-question-header">
                            <p className="field-question">Did you graduate?</p>
                            <span><i className=" no fa fa-check"></i></span>
                            <p className="no">No</p>
                        </div>
                        <div className="input-fields">
                            <input className="input-width" type="text" placeholder="Current occupation"/>
                            <span><i className="fa fa-reply" style={{color: "#C5CCEC"}}></i></span>
                        </div>
                        {/* <button>Yes</button>
                        <button>No</button> */}
                    </div>
                </div>
                <div className="field-items">
                    <p className="serial-no">4.</p>
                    <div>
                        <div className="field-question-header">
                            <p className="field-question">Does your country require post-graduation service?</p>
                            <span><i className=" yes fa fa-check"></i></span>
                            <p className="yes">Yes</p>
                        </div>
                        <div style={{padding: "1.5rem"}}>
                            <div className="field-question-header">
                                <p className="field-question">Have you completed?</p>
                                <span><i className=" yes fa fa-check"></i></span>
                                <p className="yes">Yes</p>
                            </div>
                            {/* <button>Yes</button>
                            <button>No</button> */}
                            <div className="next-step">
                                <p>Next Step</p>
                                <span><i className="fa fa-angle-right" style={{color: "white"}}></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page3