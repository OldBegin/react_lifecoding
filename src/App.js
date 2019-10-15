import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Content from './components/Content';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      welcome:{ title: 'Welcome', desc: 'Welcome to React'},
      Subject:{ title:'WEB', desc:'World Wide Web !'},
      content:[
        { id:1, title:'Html', desc:'Html is HyperText....' },
        { id:2, title:'CSS', desc:'CSS is a design for ...' },
        { id:3, title:'JavaScript', desc:'JavaScript is a language for web...' },
      ]
    }
  }

  render(){
    var _title, _desc = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else{
      _title = this.state.content[0].title;
      _desc = this.state.content[0].desc;
    }

    return (
      <div className="App">
        {/* <Subject title={this.state.Subject.title}
                 sub={this.state.Subject.sub}
        ></Subject> */}
        <header>
          <h1><a href="/" onClick={
            function(e){
              console.log(e);
              e.preventDefault();
              this.setState({mode:'welcome'});
            }.bind(this)}>{this.state.Subject.title}</a></h1>
          {this.state.Subject.desc}
        </header>
        <Toc data = {this.state.content}></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;
