import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const { email, phone } = this.props.personalData.primaryInfo;
        const { city } = this.props.personalData.aboutInfo;
        const { tag_text } = this.props.personalData.contactInfo;
        return (
            <React.Fragment>
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>{tag_text} <i className="bx bxs-smile"></i></p>
                        </div>
                        <div className="row" data-aos="fade-in">
                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                    <div className="address">
                                        <i className="icofont-google-map"></i>
                                        <h4>Location:</h4>
                                        <p>{city}</p>
                                    </div>
                                    <div className="email">
                                        <i className="icofont-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>{email}</p>
                                    </div>
                                    <div className="phone">
                                        <i className="icofont-phone"></i>
                                        <h4>Call:</h4>
                                        <p>{phone}</p>
                                    </div>
                                    <iframe src="https://maps.google.com/maps?width=100%25&amp;height=290&amp;hl=en&amp;q=Vanilla%20networks+(Address)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameBorder="0" style={{ border: '0', width: '100%', height: '290px' }} allowFullScreen title="Location"></iframe>
                                </div>
                            </div>
                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Name</label>
                                            <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Email</label>
                                            <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Message</label>
                                        <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Contact;