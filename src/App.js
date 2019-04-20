import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//"https://api.github.com/users/octocat"
class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  getUser(username){
    return fetch(`https://api.github.com/users/${username}`)
    .then(response =>response.json())
    .then(response => {
      console.log(response);
      return response;
    })
  }
  async handleSubmit(e){
    e.preventDefault();
    let user = await (this.getUser(this.refs.username.value))this.setState
    this
    console.log(user);

  }

  render() {
    let user;
    return (
      <div className="App">
        <header className="App-header">
          <p>Github User Serach</p>
          <img src={logo} className="App-logo" alt="logo" />

         <form onSubmit = {e => this.handleSubmit(e)}>
           <input ref = "username" type = "text" placeholder ="username"/>
           </form>
        </header>
      </div>
    );
  }
}

export default App;
