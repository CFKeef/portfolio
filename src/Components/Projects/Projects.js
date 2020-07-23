import React, {Component} from 'react';

import './Projects.css';
import SectionHeader from '../../Assets/Section2.svg';

//Components
import ProjectCard from '../ProjectCard/ProjectCard';
import prodoProj from '../../Assets/prodoProj.svg'

class Projects extends Component {
    render() {
        return (
            <div className="ProjectList"> 
                <img src={SectionHeader} ></img>
                {this.props.display.map( (project, index) => {
                   return (
                   <ProjectCard 
                        key={index}
                        name={project.name}
                        description={project.description}
                        techUsed={project.techUsed}
                        imageName={prodoProj}
                        id={project.id}
                        git={project.gitLink}
                        live={project.liveLink}
                    />
                )})}
            </div>
        )
    }
}

export default Projects;