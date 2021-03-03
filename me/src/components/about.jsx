import React, { Component } from 'react';

class About extends Component {
    render() {
        const { email, phone, web, img } = this.props.personalData.primaryInfo;
        const { text, title, birth, degree, city, bottom_text } = this.props.personalData.aboutInfo;
        return (
            <React.Fragment>
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>About</h2>
                            <p>{text}</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={img} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>{title}</h3>
                                <p className="font-italic">
                                    Me!
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> {birth}</li>
                                            <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> {degree}</li>
                                            <li><i className="icofont-rounded-right"></i> <strong>City:</strong> {city}</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> {phone}</li>
                                            <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> {email}</li>
                                            <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> {web}</li>
                                        </ul>
                                    </div>
                                </div>
                                <p>{bottom_text}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default About;