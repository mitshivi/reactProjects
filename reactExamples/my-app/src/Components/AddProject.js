import React, { Component } from 'react';
import uuid from 'uuid';
class AddProject extends Component {
    
   constructor(){
       super();
       this.state={
        newProject:{}
       }
   }

   static defaultProps={
       categories:["Web Design","Mobile Development","Web Development"]
   }
   static

   handleSubmit(e)
   {
       if(this.refs.title.value=='')
       {
           alert("Title must be there");
       }
       {
       console.log("Submitted!!!" + this.refs.title.value);
        this.setState({
        newProject:{
            
            title:this.refs.title.value,
            category:this.refs.category.value
        }
       },function(){
            console.log("new state :"+this.state.newProject.title);
            this.props.onAddProject(this.state.newProject);
        });

       }
       e.preventDefault();

   }

  render() {
      let categoryOptions=this.props.categories.map(
      oneCategory=>{
          return <option key={oneCategory} value={oneCategory}>{oneCategory}</option>
      }
      );
    return (
      <div>
      <h3>Add projects</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
               <div>
                  <label>Title:</label><br/>
                  <input type="text" ref='title'/>
               </div>
               <div>
                  <label>Category:</label><br/>
                  <select ref='category'>{categoryOptions}</select>
                  <br/><br/>
               </div>
               <input type="submit" value="Submit Data" />
       </form>
      </div>
    );
  }
}

export default AddProject;
