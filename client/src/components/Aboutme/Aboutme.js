import React from 'react';
import './Aboutme.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


const STYLE = {
    anchor: {
        textDecoration: "none"
    },
    image: {
        width: "400px",
        height: "500px"
    }
}
const Aboutme = props => {

    return (
        <div>

            <br></br>
            
            <header className="name">Walid Boubguira</header>
          

            <br></br>
           
            <h4>Full Stack Web Developer Who Possess An MBA With A Marketing Concentration. <br></br> Speaks Arabic, French, English and Expert in Javascript, Node Js, Express, React Js, Down to Database Including MySQL, and MongoDB.  </h4>
            <br></br>
            <a style={STYLE.anchor} href="https://github.com/walidbillel"> <AwesomeButton className="aw-btn" type="github"><i className="fab fa-github"></i> Github</AwesomeButton> </a>
            <a href="/" style={STYLE.anchor}> <AwesomeButton className="aw-btn" type="link"> Main Page</AwesomeButton> </a>
            <a href="https://www.linkedin.com/in/walid-boubguira-89219462/"> <AwesomeButton className="aw-btn" type="linkedin"><i className="fab fa-linkedin"></i> LinkedIn</AwesomeButton> </a>




        </div>
    )
}

export default Aboutme;