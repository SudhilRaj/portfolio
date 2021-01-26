import React, { Component } from 'react';
import Typed from 'react-typed';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-container" data-aos="fade-in">
                        <h1>Sudhil Raj</h1>
                        <p>I'm &nbsp;
                            <Typed
                                strings={[
                                    'Developer',
                                    'Designer',
                                    'Photographer']}
                                typeSpeed={100}
                                backSpeed={50}
                                backDelay={2000}
                                loop={true}
                            >
                                <span className="typed"></span>
                            </Typed>
                        </p>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Home;