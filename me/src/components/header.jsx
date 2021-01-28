
import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
                <header id="header">
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <img src="/images/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
                            <h1 className="text-light"><a href="#">Sudhil Raj</a></h1>
                            <p className="text-light">sudhilkolathur1@gmail.com</p>
                            <p className="text-light">+91 9633 273 137</p>
                            <div className="social-links mt-3 text-center">
                                <a href="https://github.com/SudhilRaj" target="_blank" className="github"><i className="bx bxl-github"></i></a>
                                <a href="https://www.linkedin.com/in/sudhil-raj-196b5712b/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                <a href="https://twitter.com/sudhilkolathur" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="https://www.facebook.com/Sudhilkolathur" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="https://www.instagram.com/sudhilkolathur/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                            </div>
                        </div>
                        <nav className="nav-menu">
                            <ul>
                                <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
                                <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
                                <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                                <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                                <li><a href="#services"><i className="bx bx-server"></i> Services</a></li>
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