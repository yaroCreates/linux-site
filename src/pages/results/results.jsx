import React, { Component } from 'react'
import './results.css'

export class results extends Component {

    constructor() {
        super()
        this.state = {
            des: 5,
            writer: 9
        }
    }
    render() {
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
                <div className="result-area">
                    <div className="results-header">
                        <span className="material-symbols-outlined" optimal_size="48px">person</span>
                        <p>Your Profile</p>
                    </div>

                    <div className="results">
                        <div className='results-icon'>
                            <span className="top-icon"><i style={{ marginTop: "0.3rem" }} className="fa fa-check"></i></span>
                        </div>
                        <div className="result-form">
                            <div className="form-field">
                                <p className="field-name">First Name:</p>
                                <input type="text" className="field-input" placeholder='First Name' />
                            </div>
                            <div className="form-field">
                                <p className="field-name">Last Name:</p>
                                <input type="text" className="field-input" placeholder='Last Name' />
                            </div>
                            <div className="form-field">
                                <p className="field-name">Email:</p>
                                <input type="text" className="field-input" placeholder='Email' />
                            </div>
                        </div>
                    </div>
                    <div className="results">
                        <div className='results-icon'>
                            <span className="top-icon"><i style={{ marginTop: "0.3rem" }} className="fa fa-check"></i></span>
                        </div>
                        <div className="result-form">
                            <div className="form-field">
                                <p className="field-name">Course of study in school:</p>
                                <input type="text" className="field-input" placeholder='English language' />
                            </div>
                            <div className="form-field">
                                <p className="field-name">I am a student:</p>
                                <input type="text" className="field-input" placeholder='Writer' />
                            </div>
                            <div className="form-field">
                                <p className="field-name">Graduation date:</p>
                                <input type="text" className="field-input" placeholder='October 4th, 2021' />
                            </div>
                        </div>
                    </div>
                    <div className="results">
                        <div className='interest-field'>
                            <div className="interest-left">
                                <div className="interest">
                                    <div className="nameandvalue">
                                        <p className="name">Designer</p>
                                        <p className="value">{this.state.des}/10</p>
                                    </div>
                                    <div className="range-slider">
                                        <input className='slider' type='range' min="0" max="10" value={this.state.des} onChange={e => this.setState({ des: e.target.value })} />
                                        <div style={{ left: `${this.state.des * 10}%` }} className="slider-thumb">
                                            <div className="tooltip"></div>
                                        </div>
                                        <div style={{ width: `${this.state.des * 10}%` }} className="progress"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="interest-right">
                                <div className="interest">
                                    <div className="nameandvalue">
                                        <p className="name">Writer</p>
                                        <p className="value">{this.state.writer}/10</p>
                                    </div>
                                    <div className="range-slider">
                                        <input className='slider' type='range' min="0" max="10" value={this.state.writer} onChange={e => this.setState({ writer: e.target.value })} />
                                        <div style={{ left: `${this.state.writer * 10}%` }} className="slider-thumb">
                                            <div className="tooltip"></div>
                                        </div>
                                        <div style={{ width: `${this.state.writer * 10}%` }} className="progress"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default results
