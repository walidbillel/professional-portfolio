import React from 'react';
import './Skills.css';
const style = {
    container: {
        marginTop: "50px"
    }

}

const Skills = props => {
    return (
        <div>
            <div className="container" style={style.container}>
                <div className="row">

                    <div className="col-md-3 tec-skills">
                        <h2>Technical Skills</h2>
                        <br></br>
                        <ul>
                            <li>Html <i className="fab fa-html5"></i></li>
                            <li>CSS <i className="fab fa-css3"></i></li>
                            <li>Javascript <i className="fab fa-js"></i></li>
                            <li>jQuery <i className="fas fa-dollar-sign"></i></li>
                            <li>React Js <i className="fab fa-react"></i></li>
                            <li>Node Js <i className="fab fa-node"></i></li>
                            <li>Express <i className="fas fa-server"></i></li>
                            <li>Firebase <i className="fas fa-code-branch"></i></li>
                            <li>npm <i className="fab fa-npm"></i></li>
                            <li>MySQL <i className="fas fa-database"></i></li>
                            <li>MongoDB <i className="fas fa-database"></i></li>
                        </ul>
                    </div>

                    <div className="col-md-6 education">
                        <h2>Education</h2>
                        <br></br>
                        <b> Rutgers Coding Bootcamp</b> <br></br>
                        Full Stack Web Developer <hr></hr>

                        <b> P.I Art Center</b> <br></br>
                        Art Certificate <hr></hr>

                        <b> Keller Graduate School of Management</b> <br></br>
                        MBA with a Marketing Emphasis <hr></hr>

                        <b> El-Haj Lakhder University</b> <br></br>
                        Bachelor of Business Economics <hr></hr>

                    </div>

                    <div className="col-md-3 marketing">
                        <h2>Marketing Skills</h2>
                        <br></br>
                        <ul>
                            <li>Constant Contact</li>
                            <li>HootSuite</li>
                            <li>Microsoft Office</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Painting and Drawing</li>

                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills;