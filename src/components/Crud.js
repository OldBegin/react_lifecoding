import React, { Component } from 'react';

class Crud extends Component{
    render(){
        return(
            <ul>
                <li>
                    <a href="/create" 
                        onClick = {function(e){
                            e.preventDefault();
                            this.props.onChangeMode();
                        }.bind(this)} >Create</a></li>

                <li><a href="/update" >Modify</a></li>
                <li><input type="button" value="delete"/></li>
            </ul>
        );

    }
}
export default Crud;