import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/RandolphRichard" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/randolph-richard-77268195//" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
                <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; Randolph Richard  |  <a href="https://github.com/RandolphRichard/react-career-path/raw/main/react-portfolio/src/assets/resume.pdf" rel="noopener noreferrer" target="_blank" className="link">See my Resume</a>  |  <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">color palette</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
            </p>

        </div>
    )
}

export default Footer;