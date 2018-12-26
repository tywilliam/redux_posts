import React, { Component } from 'react'

 class ProjectItem extends Component {
        deleteProject(id) {
            this.props.onDelete(id);
        }
  render() {
    return (
      <li>
          <strong>{this.props.project.title}</strong> - {this.props.project.category} <a href="" onclick={this.deleteProject.bind(this, this.props.project.id)}> </a>
      </li>
    )
  }
}
ProjectItem.propTypes = {
    project: React.PropTypes.object,
    onDelete: React.PropTypes.func
}

export default ProjectItem;