import React from 'react'
import './notes.css'


const content = [

    {
        "title": 'Python as a Programming Language',
        "summary": 'In this Lab we will be discussing an alternative\
                    to using your PC and IDE (Integrated Development environment )\
                    for running and writing your python programs, interesting right?\
                    Yeah. This alternative is using your mobile phone to run your codes.\
                    There are several application available for doing this, but for the\
                    sake of this lab, we will be focusing on Qpython3. Feel free to research\
                    and use other. 1. Download the Application\
                    Qpython3 is available on both the Google Playstore and Apple Appstore'
    },
    {
        "title": 'Python as a Programming Language',
        "summary": 'In this Lab we will be discussing an alternative\
                    to using your PC and IDE (Integrated Development environment )\
                    for running and writing your python programs, interesting right?\
                    Yeah. This alternative is using your mobile phone to run your codes.\
                    There are several application available for doing this, but for the\
                    sake of this lab, we will be focusing on Qpython3. Feel free to research\
                    and use other. 1. Download the Application\
                    Qpython3 is available on both the Google Playstore and Apple Appstore'
    },
    {
        "title": 'Python as a Programming Language',
        "summary": 'In this Lab we will be discussing an alternative\
                    to using your PC and IDE (Integrated Development environment )\
                    for running and writing your python programs, interesting right?\
                    Yeah. This alternative is using your mobile phone to run your codes.\
                    There are several application available for doing this, but for the\
                    sake of this lab, we will be focusing on Qpython3. Feel free to research\
                    and use other. 1. Download the Application\
                    Qpython3 is available on both the Google Playstore and Apple Appstore'
    },
    {
        "title": 'Python as a Programming Language',
        "summary": 'In this Lab we will be discussing an alternative\
                    to using your PC and IDE (Integrated Development environment )\
                    for running and writing your python programs, interesting right?\
                    Yeah. This alternative is using your mobile phone to run your codes.\
                    There are several application available for doing this, but for the\
                    sake of this lab, we will be focusing on Qpython3. Feel free to research\
                    and use other. 1. Download the Application\
                    Qpython3 is available on both the Google Playstore and Apple Appstore'
    },
]
function Notes() {
    return (
        <div className='note-container'>
            {content.map((item, index) => (
                <div key={index} className="note">
                    <div className='note-header'>
                        <div className='icon-title'>
                            <span><i className='fa fa-play'></i></span>
                            <p className='note-title'>{item.title}</p>
                        </div>
                        <p className="note-header-link">Go to the video <span><i className="fa fa-angle-right"></i></span></p>
                    </div>
                    <div className="note-body">
                        <p className="body-text">
                            {item.summary}
                        </p>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Notes