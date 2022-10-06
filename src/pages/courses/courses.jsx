import React, { useState } from 'react'
import './courses.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Video from '../../components/video/video'
import Notes from '../../components/notes/notes'
import Lab from '../../components/labs/lab'

function Courses() {

    const [topic, setTopic] = useState(true)

    const handleStudent = () => {
        setTopic(false)
    }
    const handleTopic = () => {
        setTopic(true)
    }


    const courses = [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur"
    ]

    const students = [
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
    ]
    return (
        <div className='courses-container'>
            <div className="courses-header">
                <Link className='courses-link'><span><i className='fa fa-angle-left'></i></span><p>Your courses</p></Link>
            </div>
            <div className="courses-layout">
                <div className="courses-left">
                    <div className="courses-left-buttons">
                        <button className={topic ? 'courses-left-button active' : "courses-left-button"} onClick={handleTopic}>Topics</button>
                        <button className={topic ? 'courses-left-button' : "courses-left-button active"} onClick={handleStudent}>Students</button>
                    </div>
                    <div className="courses-left-content">
                        {topic ? <div className="course-content">
                            {courses.map((course, index) => (
                                <div className='i-content'>
                                    <span><i className="i-icon fa fa-play"></i></span>
                                    <p key={index} className="i-text">{course}</p>
                                </div>
                            ))}
                        </div> : <div className='student-lists'>
                            {students.map((student, index) => (
                                <div key={index} className="i-student">
                                    <div className="i-student-name">
                                        <img className='i-student-img' src='/assets/profile.jpg' />
                                        <p>{student}</p>
                                    </div>
                                    <button className='i-student-button'>Write a message</button>
                                </div>
                            ))}
                        </div>}


                    </div>
                </div>
                <div className="courses-right">
                    <div className="courses-right-buttons">
                        <NavLink to='/courses'><button className="courses-right-button">Video</button></NavLink>
                        <NavLink to='/courses/lab'><button className="courses-right-button">Lab</button></NavLink>
                        <NavLink to='/courses/notes'><button className="courses-right-button">Note</button></NavLink>
                        <NavLink><button className="courses-right-button">Chat</button></NavLink>
                    </div>
                    <div className="courses-right-content">
                        <Routes>
                            <Route exact path='/' element={<Video />} />
                            <Route exact path='notes' element={<Notes />} />
                            <Route path='lab' element={<Lab />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses