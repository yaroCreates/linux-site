import React from 'react'
import './page-3.css'

function Page3() {
  return (
    <div class="container">
        <div class="profile-area">
            <div class="picicon">
                <div class="photo"></div>
                <span class="photo-icon material-symbols-outlined">photo_camera</span>
            </div>
            <h4>James Yaro</h4>

            <div class="profile-area-list">
                <div class="list-content">
                    <span class="material-symbols-outlined" optimal_size="48px">person</span>
                    <p>Profile</p>
                    <span><i class=" fa fa-angle-right"></i></span>
                </div>
                <div class="list-content">
                    <span class="material-symbols-outlined">school</span>
                    <p>Courses</p>
                    <span><i class=" fa fa-angle-right"></i></span>
                </div>
                <div class="list-content">
                    <span class="material-symbols-outlined">done</span>
                    <p>Attendance</p>
                    <span><i class=" fa fa-angle-right"></i></span>
                </div>
                <div class="list-content">
                    <span class="material-symbols-outlined">logout</span>
                    <p>Logout</p>
                </div>
            </div>
        </div>
        <div class="form-area">
            <span class="top-icon"><i style="margin-top: 0.3rem;" class="fa fa-check"></i></span>
            <div class="field">
                <div class="field-items">
                    <p class="serial-no">1.</p>
                    <div>
                        <p class="field-question">Course of study in school</p>
                        <input type="text" placeholder="Course of study"/>
                    </div>
                </div>
                <div class="field-items">
                    <p class="serial-no">2.</p>
                    <div>
                        <div class="field-question-header">
                            <p class="field-question">Are you a student?</p>
                            <span><i class=" yes fa fa-check"></i></span>
                            <p class="yes">Yes</p>
                        </div>
                        {/* <button>Yes</button>
                        <button>No</button> */}
                        <div class="input-fields">
                            <input type="text" placeholder="Course of study"/>
                            <input type="text" placeholder="Expected graduation date"/>
                            <span><i class="fa fa-reply" style="color: #C5CCEC;"></i></span>
                        </div>
                    </div>
                </div>
                <div class="field-items">
                    <p class="serial-no">3.</p>
                    <div>
                        <div class="field-question-header">
                            <p class="field-question">Did you graduate?</p>
                            <span><i class=" no fa fa-check"></i></span>
                            <p class="no">No</p>
                        </div>
                        <div class="input-fields">
                            <input class="input-width" type="text" placeholder="Current occupation"/>
                            <span><i class="fa fa-reply" style="color: #C5CCEC;"></i></span>
                        </div>
                        {/* <button>Yes</button>
                        <button>No</button> */}
                    </div>
                </div>
                <div class="field-items">
                    <p class="serial-no">4.</p>
                    <div>
                        <div class="field-question-header">
                            <p class="field-question">Does your country require post-graduation service?</p>
                            <span><i class=" yes fa fa-check"></i></span>
                            <p class="yes">Yes</p>
                        </div>
                        <div style="padding: 1.5rem;">
                            <div class="field-question-header">
                                <p class="field-question">Have you completed?</p>
                                <span><i class=" yes fa fa-check"></i></span>
                                <p class="yes">Yes</p>
                            </div>
                            {/* <button>Yes</button>
                            <button>No</button> */}
                            <div class="next-step">
                                <p>Next Step</p>
                                <span><i class="fa fa-angle-right" style="color: white;"></i></span>
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