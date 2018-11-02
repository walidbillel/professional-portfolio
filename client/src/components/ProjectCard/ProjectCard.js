import React from "react";
import { AwesomeButton } from 'react-awesome-button';
import "./ProjectCard.css";


const ProjectCard = props => {
  // console.log(props);
  return (
    <div className="project-card " >
      <div className="img-container">
        <img src={props.gif} alt={props.projectName} />
      </div>
      <div className="content" >

        <span className="titre"> <strong>Project Name:</strong> {props.projectName}</span>
        <br></br>
        
        <a href={props.gitHub}><AwesomeButton type="github" className="git" value={props.projectName}><i className="fab fa-github"></i> Github</AwesomeButton></a>
        <a href={props.appLink}><AwesomeButton type="instagram" value={props.projectName}>App</AwesomeButton></a>


      </div>

    </div>
  )
}
;

export default ProjectCard;