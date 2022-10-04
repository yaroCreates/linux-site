import React, {useState} from 'react'
import './courses.css'
import { Link } from 'react-router-dom'
import Video from '../../components/video/video'

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
                        </div> :  <div className='student-lists'>
                            {students.map((student, index) => (
                            <div key ={index} className="i-student">
                                <div className="i-student-name">
                                    <img className='i-student-img' src='/assets/profile.jpg' />
                                    <p>{student}</p>
                                </div>
                                <button className='i-student-button'>Write a message</button>
                            </div>
                            ))}
                        </div> }
                        
                       
                    </div>
                </div>
                <div className="courses-right">
                    <div className="courses-right-buttons">
                        <Link><button className="courses-right-button">Video</button></Link>
                        <Link><button className="courses-right-button">Lab</button></Link>
                        <Link><button className="courses-right-button">Note</button></Link>
                        <Link><button className="courses-right-button">Chat</button></Link>
                    </div>
                    <div className="courses-right-content">
                        <Video/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses