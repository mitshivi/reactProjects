import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';


class Projects extends Component {
   
  deleteProject(id)
  {
  this.props.onDelete(id);
  }

  render() {
    let projectItems;
    projectItems=this.props.Projects.map(
      project=>
      (<ProjectItem key={project.title} project={project} onDelete={this.deleteProject.bind(this)}/>)
        )
    return (
      <div>
      {projectItems}
      </div>
    );
  }
}

Projects.propTypes={
  Projects:PropTypes.array,
  onDelete:PropTypes.func
}
export default Projects;
