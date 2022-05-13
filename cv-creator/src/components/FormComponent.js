import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
class Form extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return(
            <div>
                <GeneralInfo handleChange = {this.props.handleChange}/>
                <Education handleChange = {this.props.handleEducation} removeField = {this.props.removeEducationFormFields} addFields = {this.props.addEducationFormFields} formEducationValues = {this.props.formEducationValues}/>
                <Experience handleChange = {this.props.handleExperience} removeField = {this.props.removeExperienceFormFields} addFields = {this.props.addExperienceFormFields} formExperienceValues = {this.props.formExperienceValues}/>
            </div>
        )
    }
}

export default Form