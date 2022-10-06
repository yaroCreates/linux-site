import React from 'react'
import './labs.css'

function Lab() {
    return (
        <div className='lab-container'>
            <h3 className="lab-header">
                Labs for Python as a Computer Programming Language
            </h3>
            <div className="lab-body">
                <div className="body-top">
                    <p className="body-serial-no">1</p>
                    <p className='body-text'>In this Lab we will be discussing an alternative to using your PC and IDE
                        (Integrated Development environment ) for running and writing your python programs,
                        interesting right? Yeah. This alternative is using your mobile phone to run your codes.
                        There are several application available for doing this, but for the sake of this lab,
                        we will be focusing on Qpython3. Feel free to research and use other. 1. Download the Application
                    </p>
                </div>
                <div className="body-middle">
                    <p className='body-topic'>Note:</p>
                    <p className='body-text'>
                        Qpython3 is available on both the Google Playstore and Apple Appstore.
                    </p>
                </div>
                <div className="body-bottom">
                    <p className="body-topic">
                        Task:
                    </p>
                    <p className='body-text'>Download Qpython3 from either
                        store according to the make of your phone
                        Or visit their website on https://www.qpython.com/ and follow this instructions.
                    </p>
                </div>
                <p className='body-topic' style={{marginLeft: '2.75rem'}}>Hint:</p>

                <div className="lab-buttons">
                    <button className="lab-upload">Upload Lab</button>
                    <div className='file-here'><p>Your file will be here</p></div>
                    <button className='lab-submit'>Submit the task</button>
                </div>
            </div>
            <div className="lab-body">
                <div className="body-top">
                    <p className="body-serial-no">2</p>
                    <p className='body-text'>Install QPython3</p>
                </div>
                <div className="body-middle">
                    <p className='body-topic'>Note:</p>
                    <p className='body-text'>
                        Qpython3 is available on both the Google Playstore and Apple Appstore.
                    </p>
                </div>
                <div className="body-bottom">
                    <p className="body-topic">
                        Task:
                    </p>
                    <p className='body-text'>Download Qpython3 from either
                        store according to the make of your phone
                        Or visit their website on https://www.qpython.com/ and follow this instructions.
                    </p>
                </div>
                <p className='body-topic' style={{marginLeft: '2.75rem'}}>Hint:</p>

                <div className="lab-buttons">
                    <button className="lab-upload">Upload Lab</button>
                    <div className='file-here'><p>Your file will be here</p></div>
                    <button className='lab-submit'>Submit the task</button>
                </div>
            </div>
        </div >
    )
}

export default Lab