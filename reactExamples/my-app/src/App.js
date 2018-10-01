import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects';
import AddProject from'./Components/AddProject';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/todos';
import ReactDOM from 'react-dom';
import Login from'./Components/Login';
import Home from'./Components/Home';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'

class App extends Component {
  
  constructor(){
  super()
  this.state=
  {
  projects:[],
     
  }


  }
  componentWillMount(){
    this.setState({
      projects:[
        {
          id:uuid.v4(),
          title:"Business Website",
          category:"Web design"
        },
        {
          id:uuid.v4(),
          title:"Social App",
          category:"Mobile Development"
        },
        {
          id:uuid.v4(),
          title:"E-Commerce Shopping",
          category:"Web Development"
        }
      ]
    });
  }
  componentDidMount(){
    this.getTodos();
  }
  getTodos(){
    $.ajax({
      url:"http://jsonplaceholder.typicode.com/todos",
      dataType:'json',
      catche:false,
      success: function(data){
        this.setState({todos:data},function(){
          console.log("fhfvjhv");
          console.log(data);
          
        });
      }.bind(this)
    });
  }
  handleAddProject(newproj){
    alert("the data has been submitted");
    console.log("Data submitted to app: "+newproj)
    let projects=this.state.projects;
    projects.push(newproj);
    this.setState({projects:projects});
  }
  handleDeleteProject(id){
    let allProjects=this.state.projects;
    let index=allProjects.findIndex(oneProject=>oneProject.id==id);
    allProjects.splice(index,1);
    this.setState({projects:allProjects});
  }

  
  render() {
    
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to ={'/'}>Home</Link></li>
              <li><Link to ={'/Login'}>Login</Link></li>
              </ul>
              <hr/>
              <switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Login' component={Login}/>
                </switch>
            </div>
        </Router>
      <AddProject onAddProject={this.handleAddProject.bind(this)}/>
      <Projects  Projects={this.state.projects} test="Hello World" onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;




