import React, { Component } from 'react';

class Toc extends Component{
  render(){
    var $data = this.props.data;
    var $lists = [];
    var i = 0;

    while(i < $data.length){
      $lists[i] = <li key={$data[i].id} ><a href={$data[i]}>{$data[i].title}</a></li>;
      i += 1;
    }

    return(
      <nav>
        <ul>
          {$lists}
        </ul>
      </nav>
    );
  }
}
export default Toc; 
