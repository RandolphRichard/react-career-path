import React from 'react';
import Logo from '../assets/images/logo.png';
import JqueryLogo from '../assets/images/jquery-logo.png';
import BootstrapLogo from '../assets/images/bootstrap-logo.png';
import ReduxLogo from '../assets/images/redux-logo.png';
import MernLogo from '../assets/images/mern-logo.png';
import WebpackLogo from '../assets/images/webpack-logo.png';
import HandlebarsLogo from '../assets/images/handlebars-logo.png';
import SqlLogo from '../assets/images/sql-logo.png';
import MongoLogo from '../assets/images/mongodb-logo.png';
import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                <h3>See My Resume: <a href="https://randolphrichard.github.io/my-career-path/resume.html">Randolph Richard</a>
                                </h3>
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer"/>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Full Stack Web Development</div>
                                </div>
                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Data Built</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Algorithm fundamentals</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Design Patterns</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <img src={Logo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MernLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={ReduxLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={JqueryLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={WebpackLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={BootstrapLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={HandlebarsLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={SqlLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MongoLogo} className='img-skills' />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Goals</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Ensuring cross-platform optimization for mobile phones</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Ensuring responsiveness of applications</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Speciality</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Developing front end/ back end website architecture</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Designing user interactions on web pages.</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Creating servers and databases for functionality.</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Designing and developing APIs</p>
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

export default Resume;