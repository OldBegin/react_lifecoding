import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import Crud from './components/Crud';
import Toc from './components/Toc';
import ReadContent from './components/ReadContent';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      selectedContentId: 1,
      selectedCrudMode: 1,
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
      var i =0
      while(i < this.state.content.length){
        if( this.state.content[i].id === this.state.selectedContentId){
          _title = this.state.content[i].title;
          _desc = this.state.content[i].desc;
          break;
        }
        i += 1;
      }
    }

    return (
      <div className="App">
        <Subject 
          title = {this.state.Subject.title}
          sub = {this.state.Subject.sub}
          onChangePage = { function(){
            this.setState({mode: 'welcome'});
          }.bind(this)}
        ></Subject>
        <Crud 
          onChangeMode = { function(){
            alert('hi');
            //this.setState({selectedCrudMode: id});
          }.bind(this)}>
        </Crud>
        <Toc 
          onChangePage = { function(id){
              this.setState({ mode: 'read' });
              this.setState({ selectedContentId: Number(id)});
            }.bind(this)
          } 
          data = {this.state.content}>
        </Toc>
        <ReadContent title={_title} desc={_desc}></ReadContent>
      </div>
    );
  }
}
export default App;
