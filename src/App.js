import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//"https://api.github.com/users/octocat"
class App extends Component {
  constructor(){
    super();
    this.state = {
      username:null,
      id :null,
      url:null,
      avatar_url:null,
      followers:null,
      following:null,
      location:null,
      craeted_at:null,
      repos_url:null

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
    let user = await (this.getUser(this.refs.username.value))
    this.setState({username:user.login,id:user.id,
      url:user.url,
    avatar_url:user.avatar_url,
    followers:user.followers,
    following:user.following,
    location:user.location,
    created_at:user.created_at,
    repos_url:user.repos_url
    });
      
    
    console.log(user);

  }

  render() {
    let user;
    if(this.state.username){
      user = 
      <div>
      <img src = {this.state.avatar_url} alt ="" width = "70px" height = "40px"/>
        <p>UserName :{this.state.username}
          <br/>Id :{this.state.id}
          <br/>Url : {this.state.url}
          <br/>Followers : {this.state.followers}
          <br/>Following:{this.state.following}
          <br/>Location : {this.state.location}
          <br/>created_at :{this.state.created_at}
          <br/>repos_url : {this.state.repos_url}
          
          </p>
        

      </div>
    }
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  align='top'/>
          <p>Github User Serach</p>
         <form onSubmit = {e => this.handleSubmit(e)}>
           <input ref = "username" type = "text" placeholder ="username"/>
           <button>Submit</button>
           </form>
           <p className = "App-Intro">
             {user}
             </p>
        </header>
      </div>
    );
  }
}

export default App;
