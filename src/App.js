import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//"https://api.github.com/users/octocat"
class App extends Component {
  getUser(username){
    fetch(`https://api.github.com/users/${username}`)
    .then(response =>response.json())
    .then(response => {
      console.log(response);
      return response;
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.getUser(this.refs.username.value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         <form onSubmit = {e => this.handleSubmit(e)}>
           <input ref = "username" type = "text" placeholder ="username"/>
           </form>
        </header>
      </div>
    );
  }
}

export default App;
