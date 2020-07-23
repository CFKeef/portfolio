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
                    <p class='tech-p'>{this.props.techUsed}</p>
                </div>
                <div className='btns'>
                    <div className='link-container'>
                        <a className={'Github' + this.props.id + ' btnactive'} href={this.props.git}>Github</a>
                    </div>
                    <div className='link-container'>
                        <a className={'Live' + this.props.id + ' btnactive'} href={this.props.live}>Visit</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard;
