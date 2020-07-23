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
                    <a className={'Github' + this.props.id + ' btnactive'} href="#">Github</a>
                    <a className={'Live' + this.props.id + ' btnactive'} href="#">Visit</a>
                </div>
            </div>
        )
    }
}

export default ProjectCard;
