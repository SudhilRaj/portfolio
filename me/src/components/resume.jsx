import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume" className="resume">
                    <div className="container">
                        <div className="section-title">
                            <h2>Resume</h2>
                            <p>Meticulous Front-end developer with 4 years of experience and passion for responsive website design and a firm believer in the mobile-first approach.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-up">
                                <h3 className="resume-title">Personal Profile</h3>
                                <div className="resume-item pb-0">
                                    <h4>Sudhil Raj k</h4>
                                    <p><em>Passionate and energetic software professional with holistic knowledge of software development
                                    process and proven experience in front end development and design. Currently seeking a full-time
                                    position in the field of software development, where I can apply my knowledge and skills for continuous improvement.
                                    </em>
                                    </p>
                                </div>
                                <h3 className="resume-title">Educational Summary</h3>
                                <div className="resume-item">
                                    <h4>B-TECH IN ELECTRONICS AND COMMUNICATION ENGINEERING</h4>
                                    <h5>2013 - 2016</h5>
                                    <p><em>Kannur University, Kerala, India : PERCENTAGE - 69</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>DIPLOMA IN ELECTRONICS ENGINEERING</h4>
                                    <h5>2010 - 2013</h5>
                                    <p><em>State Board of Technical Examinations, Kerala, India : CGP - 9.25</em></p>
                                </div>
                                <h3 className="resume-title">Awards and Achievements</h3>
                                <div className="resume-item">
                                    <ul>
                                        <li>Learned ReactJS as an autodidact and developed a personal website</li>
                                        <li>BEST INTERN - Scope India Trivandrum, Kerala, 2017</li>
                                        <li>BEST STUDENT - Govt. Polytechnic College Kasaragod, Kerala, 2013</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="resume-title">Career Summary</h3>
                                <div className="resume-item">
                                    <h4>FRONT END DEVELOPER CUM DESIGNER</h4>
                                    <h5>Feb 2019 - Present</h5>
                                    <p><em>VANILLA NETWORKS Pvt. Ltd. Kochi, Kerala</em></p>
                                    <ul>
                                        <li>Assisted in the design and development of a Real estate project and implemented software solutions based on client requirements.</li>
                                        <li>Involved in designing high-quality responsive websites from scratch and making them dynamic.</li>
                                        <li>Contribute to improvements to the software development process.</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>WEBSITE CUM MOBILE APP DEVELOPER</h4>
                                    <h5>June 2017 - Feb 2019</h5>
                                    <p><em>SUFFIX E SOLUTIONS Trivandrum, Kerala</em></p>
                                    <ul>
                                        <li>Designs custom HTML themes, plugins, and sites and worked on theme modifications in WordPress for faster deployment.</li>
                                        <li>Completely Managed the area of Graphic designing.</li>
                                        <li>Assisted in many PHP - MVC Projects.</li>
                                        <li>Collaborated with other teams for Hybrid mobile app development in ionic framework and handled REST API services.</li>
                                        <li>Made recommendations to modify the program to enhance effectiveness toward the business result.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-3">
                        <a className="btn btn-sm btn-outline-secondary" href="mailto:sudhilkolathur1@gmail.com?subject=Resume Request&body=Hi Sudhil,%0D%0A%0D%0ACan you please send me a copy of your resume for my reference?%0D%0A%0D%0AThanks and Regards" title="I am happy to share it with you. :)">Want Detailed Resume?</a>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Resume;