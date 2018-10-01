import React, { Component } from 'react';

class Todos extends Component {
  deleteProject(id){
    console.log("project deleted");
    this.props.onDelete(id);
  }
  render() {
      
    return (
      <div>
          <li>
              <strong>{this.props.todo.id}</strong>
         </li>
      </div>
    );
  }
}

export default Todos;
