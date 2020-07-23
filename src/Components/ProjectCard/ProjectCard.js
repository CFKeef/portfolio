import React from 'react';

import './ProjectCard.css';

class ProjectCard extends React.Component {
    render() {
        return (
            <div className={'Card ' + 'Numb' + this.props.id}>
                <div className="proj-img">
                 <img src={this.props.imageName}></img>
                </div>
                <div className="proj-text">
                    <h2>{this.props.name}</h2>
                    <p className={'text-desc'}>{this.props.description}</p>
                    <h2>Tech</h2>
                    <p>{this.props.techUsed}</p>
                </div>
                <div className='btns'>
                    <a href="#">Github</a>
                    <a href="#">Live Site</a>
                </div>
            </div>
        )
    }
}

export default ProjectCard;
