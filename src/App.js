import React, { Component } from 'react';
import './App.css';
import Navi from './components/Navi'

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}


class Content extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="WEB2" sub="www!"></Subject>
        <Navi></Navi>
        <Content title="html" desc="html is hypertext markup language."></Content>
      </div>
    );
  }
}
export default App;
