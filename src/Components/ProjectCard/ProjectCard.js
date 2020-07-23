import React from 'react';

import './ProjectCard.css';

class ProjectCard extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.imageName}></img>
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
                <h2>Tech</h2>
                <p>{this.props.techUsed}</p>
            </div>
        )
    }
}

export default ProjectCard;
