
import React, { Component } from 'react';
class Header extends Component {
    render() {
        const { name, email, phone, github, linkedin, twitter, facebook, instagram, img } = this.props.personalData.primaryInfo;
        return (
            <React.Fragment>
                <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
                <header id="header">
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <img src={img} alt="" className="img-fluid rounded-circle" />
                            <h1 className="text-light"><span>{name}</span></h1>
                            <p className="text-light">{email}</p>
                            <p className="text-light">{phone}</p>
                            <div className="social-links mt-3 text-center">
                                <a href={github} target="_blank" rel="noreferrer" className="github"><i className="bx bxl-github"></i></a>
                                <a href={linkedin} target="_blank" rel="noreferrer" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                <a href={twitter} target="_blank" rel="noreferrer" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href={facebook} target="_blank" rel="noreferrer" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href={instagram} target="_blank" rel="noreferrer" className="instagram"><i className="bx bxl-instagram"></i></a>
                            </div>
                        </div>
                        <nav className="nav-menu">
                            <ul>
                                <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
                                <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
                                <li><a href="#skills"><i className="bx bx-code-block"></i> <span>Skills</span></a></li>
                                <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                                <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>
                            </ul>
                        </nav>
                        <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;