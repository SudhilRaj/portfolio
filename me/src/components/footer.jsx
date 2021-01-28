import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer id="footer">
                    <div className="container">
                        {/* <div className="copyright">
                            &copy; Copyright <strong><span>iPortfolio</span></strong>
                        </div>
                        <div className="credits">
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div> */}
                        <div className="credits">
                            Made with <i className="bx bxs-heart"></i> <i className="bx bxs-coffee"></i> <i className="bx bxl-react"></i>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;