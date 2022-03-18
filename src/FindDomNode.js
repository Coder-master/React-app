import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Component_API extends Component {

    constructor(props) {
        super(props)

        this.FindDomNodeHandler1 = this.FindDomNodeHandler1.bind(this);
        this.FindDomNodeHandler2 = this.FindDomNodeHandler2.bind(this);
    }
    FindDomNodeHandler1(){
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'blue';
    }

    FindDomNodeHandler2(){
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'red';
    }

    render() {
        return (
            <div>
                <h1>ReactJs Find DOM Node Example</h1>
                <button onClick={this.FindDomNodeHandler1}>Find_Dom_Node_1</button>
                <button onClick={this.FindDomNodeHandler2}>Find_Dom_Node_2</button>
                <h1 id="myDiv">JTP-NODE1</h1>
                <h1 id="myDiv">JTP-NODE2</h1>
            </div>
        )
    }
}
