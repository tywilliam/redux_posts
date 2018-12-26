// import React, { Component } from 'react';
// import logo from './logo.svg';
// import uuid from 'uuid';
// import './App.css';
// import Projects from './components/Projects';
// import AddProject from './components/AddProject';
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       projects: [],
//       todos: []
//     }
//   }
//   getTodos() {
//       $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/todos',
//         dataType: 'json',
//         cache: false,
//         success: function(data) {
//             this.setState({ todos: data}, function() {
//               console.log(this.state);
//             })
//         }.bind(this),
//         error: function(err, status, xhr) {
//           console.log(err);
//         }
//       });
//   }
//   getProjects() {
//     this.setState({
//       projects: [
//         {
//           id: uuid.v4(),
//           title: 'Business Website',
//           category: 'Web Design'
//         },
//         {
//           id: uuid.v4(),
//           title: 'Social App',
//           category: 'Mobile Development'
//         },
//         {
//           id: uuid.v4(),
//           title: 'Ecommerce Shopping Cart',
//           category: 'Web Development'
//         }
//       ]
//     });
//   }
  
//   componentWillMount() {
//     this.getProjects();
//     this.getTodos();
    
//   }
//   componentDidMount() {
//       this,getTodos();
//   }
//   handleAddProject(project) {
//     let projects = this.state.projects;
//     projects.push(project);
//     this.setState({projects: projects});
//   }
//   handleDeleteProject(id) {
//     let projects = this.state.projects;
//     let index = projects.findIndex(x => x.id === id)
//     projects.splice(index, 1);
//     this.setState({ projects: projects });
//   }
//   render() {
//     return (
//       <div className="App">
//         <AddProject addProject={this.handleAddProject.bind(this)} />
//         <Projects text="Hello world" projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react'
import Posts from './sub_components/Posts';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PostForm from './sub_components/PostForm';
import store from './sub_components/store';
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <PostForm/>
          <Posts/>

        </Provider>
      </div>
    )
  }
}
export default App;