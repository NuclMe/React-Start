import React, { Component } from 'react';

export default class App extends Component{
    render(){
        return(
            <div item={{border: '1px solid blue'}}>
                <li> <span>'{this.props.color} '</span> {this.props.text} </li>

            </div>
        )
    }
}       