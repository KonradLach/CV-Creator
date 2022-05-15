import React, { Component } from 'react';
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
class Footer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer className="footer">
            <p>
                Konrad Lach
            </p>
            <a href="https://github.com/KonradLach" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="fa-github"/></a>
            <a href="https://www.linkedin.com/in/konrad-lach-338571169/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} className="fa-linkedin"/></a>
        </footer>
        )
    }
}

export default Footer