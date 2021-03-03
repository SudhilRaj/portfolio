import React, { Component } from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
class Home extends Component {
    render() {
        const { name } = this.props.personalData.primaryInfo;
        return (
            <React.Fragment>
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-container" data-aos="fade-in">
                        <h1>{name}</h1>
                        <p>I'm a&nbsp;
                            <Typed
                                strings={[
                                    'Developer',
                                    'Designer',
                                    'Footballer',
                                    'Photographer',
                                    'Proud Indian']}
                                typeSpeed={100}
                                backSpeed={50}
                                backDelay={2000}
                                loop={true}
                            >
                                <span className="typed"></span>
                            </Typed>
                        </p>
                    </div>

                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 100,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#ffffff"
                                },
                                "shape": {
                                    "type": "circle",
                                    "stroke": {
                                        "width": 0,
                                        "color": "#000000"
                                    },
                                    "polygon": {
                                        "nb_sides": 5
                                    },
                                    "image": {
                                        "src": '',
                                        "width": 100,
                                        "height": 100
                                    }
                                },
                                "opacity": {
                                    "value": 0.5,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 0.5,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 5,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 10,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 250,
                                    "color": "#ffffff",
                                    "opacity": 0.2,
                                    "width": 1
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 5,
                                    "direction": "none",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": false,
                                        "mode": "repulse"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 800,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 800,
                                        "size": 80,
                                        "duration": 2,
                                        "opacity": 0.8,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 400,
                                        "duration": 0.4
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true
                        }}
                    />
                </section>
            </React.Fragment>
        )
    }
}

export default Home;