import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="skills" className="skills section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2>Skills</h2>
                            <p> Well versed with JavaScript, HTML5, and CSS to build all aspects of the user experience and user interface for client-facing landing pages. Specializes in using jQuery and ReactJS.</p>
                        </div>
                        <div className="row skills-content">
                            <div className="col-lg-6" data-aos="fade-up">
                                <div className="progress">
                                    <span className="skill">HTML <i className="val">95%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="ProgressBar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">CSS <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="ProgressBar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">JavaScript <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="ProgressBar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="progress">
                                    <span className="skill">Jquery <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="ProgressBar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">React JS <i className="val">70%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="ProgressBar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">Photoshop <i className="val">70%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="ProgressBar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Skills;