import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>About</h2>
                            <p>Meticulous frontend developer with 4 years of experience and passion for responsive website design and a firm believer in the mobile-first approach.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src="/images/profile-img.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Frontend Developer &amp; UI/UX Designer</h3>
                                <p className="font-italic">
                                    Me!
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 29 Aug 1992</li>
                                            <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Bachelor's</li>
                                            <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Kochi, India</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +91 9633 273 137</li>
                                            <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> sudhilkolathur1@gmail.com</li>
                                            <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.creativeintelligence.me</li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Courteous and enthusiastic, I am interested in IT and everything in its orbit.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default About;