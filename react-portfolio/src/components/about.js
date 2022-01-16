import React from 'react';
import Avatar from '../assets/images/avatar.png';
import BerkeleyLogo from '../assets/images/berkeley.png';
import PittsburghLogo from '../assets/images/pittsburgh.png';
import CarletonLogo from '../assets/images/carleton.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' alt='profile' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                    Dedicated and efficient full stack developer with x years experience in application layers, presentation layers, and databases. Deep
                                        understanding and technical expertise in Javascript, ReactJS, NodeJS, MongoDB, CSS,
                                        HTML and other technologies.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>UOttawa, Ottawa</div>
                                        <div className='title-concentration'>Photography / Graphic Design</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://www2.uottawa.ca/en'rel="noopener noreferrer" target='_blank'><img className='university-logo' alt='university Ottawa' src={BerkeleyLogo} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>La cite</div>
                                        <div className='title-concentration'>Biotechnology</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://www.collegelacite.ca/' rel="noopener noreferrer" target='_blank'><img className='university-logo' alt='college' src={PittsburghLogo} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>Carleton University</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://carleton.ca/' rel="noopener noreferrer" target='_blank'><img className='university-logo' alt='university of carleton' src={CarletonLogo} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;