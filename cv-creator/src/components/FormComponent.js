import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import GeneralInfo from './GeneralInfo';
import Education from './Education';
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
    }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
        console.log(this.state[name])
    }
    render() {

        return(
            <div>
                <GeneralInfo handleChange = {this.handleChange}/>
                <Education handleChange = {this.handleChange}/>
            </div>
        )
    }
}

export default Form