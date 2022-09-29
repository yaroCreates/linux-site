import React, {Component} from 'react'
import './interest.css'

export class Interest extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            cyber: 4,
            dev: 3,
            devOps: 2,
            des: 1,
            project: 8,
            product: 7,
            marketer: 6,
            writer: 5

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
            <div className="form-area">
                <span className="top-icon"><i style={{ marginTop: "0.3rem" }} className="fa fa-check"></i></span>
                <div className="field">
                    <h3 className='field-heading'>Score your level of interest in these job titles:</h3>
                    <div className='interest-field'>
                        <div className="interest-left">
                            <div className="interest">
                                <div className="nameandvalue">
                                    <p className="name">Cybersecurity</p>
                                    <p className="value">{this.state.cyber}/10</p>
                                </div>
                                <div className="range-slider">
                                    <input className='slider' type='range' min="0" max="10" value={this.state.cyber} onChange={e => this.setState({cyber: e.target.value})}/>
                                    <div style={{left: `${this.state.cyber * 10}%`}} className="slider-thumb">
                                        <div className="tooltip"></div>
                                    </div>
                                    <div style={{width: `${this.state.cyber * 10}%`}} className="progress"></div>
                                </div>
                            </div>
                            <div className="interest">
                                <div className="nameandvalue">
                                    <p className="name">Developer</p>
                                    <p className="value">{this.state.dev}/10</p>
                                </div>
                                <div className="range-slider">
                                    <input className='slider' type='range' min="0" max="10" value={this.state.dev} onChange={e => this.setState({dev: e.target.value})} />
                                    <div style={{left: `${this.state.dev * 10}%`}} className="slider-thumb">
                                        <div className="tooltip"></div>
                                    </div>
                                    <div style={{width: `${this.state.dev * 10}%`}} className="progress"></div>
                                </div>
                            </div>
                            <div className="interest">
                                <div className="nameandvalue">
                                    <p className="name">DevOps</p>
                                    <p className="value">{this.state.devOps}/10</p>
                                </div>
                                <div className="range-slider">
                                    <input className='slider' type='range' min="0" max="10" value={this.state.devOps} onChange={e => this.setState({devOps: e.target.value})}/>
                                    <div style={{left: `${this.state.devOps * 10}%`}} className="slider-thumb">
                                        <div className="tooltip"></div>
                                    </div>
                                    <div style={{width: `${this.state.devOps * 10}%`}}className="progress"></div>
                                </div>
                            </div>
                            <div className="interest">
                                <div className="nameandvalue">
                                    <p className="name">Designer</p>
                                    <p className="value">{this.state.des}/10</p>
                                </div>
                                <div className="range-slider">
                                    <input className='slider' type='range' min="0" max="10" value={this.state.des} onChange={e => this.setState({des: e.target.value})}/>
                                    <div style={{left: `${this.state.des * 10}%`}} className="slider-thumb">
                                        <div className="tooltip"></div>
                                    </div>
                                    <div style={{width: `${this.state.des * 10}%`}} className="progress"></div>
                                </div>
                            </div>
                        </div>
                        <div className="interest-right">
                            <div className="interest">
                                <div className="nameandvalue">
                                    <p className="name">Project Manager</p>
                                    <p className="value">{this.state.project}/10</p>
                                </div>
                                <div className="range-slider">
                                    <input className='slider' type='range' min="0" max="10" value={this.state.project} onChange={e => this.setState({project: e.target.value})}/>
                                    <div style={{left: `${this.state.project * 10}%`}} className="slider-thumb">
                                        <div className="tooltip"></div>
                                    </div>
                                    <div style={{width: `${this.state.project * 10}%`}} className="progress"></div>
                                </div>
                            </div>
                            <div className="interest">
                                <div className="nameandvalue">
                                    <p className="name">Product Manager</p>
                                    <p className="value">{this.state.product}/10</p>
                                </div>
                                <div className="range-slider">
                                    <input className='slider' type='range' min="0" max="10" value={this.state.product} onChange={e => this.setState({product: e.target.value})}/>
                                    <div style={{left: `${this.state.product * 10}%`}} className="slider-thumb">
                                        <div className="tooltip"></div>
                                    </div>
                                    <div style={{width: `${this.state.product * 10}%`}} className="progress"></div>
                                </div>
                            </div>
                            <div className="interest">
                                <div className="nameandvalue">
                                    <p className="name">Marketer</p>
                                    <p className="value">{this.state.marketer}/10</p>
                                </div>
                                <div className="range-slider">
                                    <input className='slider' type='range' min="0" max="10" value={this.state.marketer} onChange={e => this.setState({marketer: e.target.value})}/>
                                    <div style={{left: `${this.state.marketer * 10}%`}} className="slider-thumb">
                                        <div className="tooltip"></div>
                                    </div>
                                    <div style={{width: `${this.state.marketer * 10}%`}} className="progress"></div>
                                </div>
                            </div>
                            <div className="interest">
                                <div className="nameandvalue">
                                    <p className="name">Writer</p>
                                    <p className="value">{this.state.writer}/10</p>
                                </div>
                                <div className="range-slider">
                                    <input className='slider' type='range' min="0" max="10" value={this.state.writer} onChange={e => this.setState({writer: e.target.value})}/>
                                    <div style={{left: `${this.state.writer * 10}%`}} className="slider-thumb">
                                        <div className="tooltip"></div>
                                    </div>
                                    <div style={{width: `${this.state.writer * 10}%`}} className="progress"></div>
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

export default Interest