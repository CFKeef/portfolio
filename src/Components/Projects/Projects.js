import React, {Component} from 'react';

import './Projects.css';
import SectionHeader from '../../Assets/Section2.svg';

//Components
import ProjectCard from '../ProjectCard/ProjectCard';


class Projects extends Component {
    render() {
        return (
            <div>
                <img src={SectionHeader} ></img>
                {this.props.display.map( (project, index) => {
                   return (
                   <ProjectCard 
                        key={index}
                        name={project.name}
                        description={project.description}
                        techUsed={project.techUsed}
                    />
                   )
                })}
            </div>
        )
    }
}

export default Projects;