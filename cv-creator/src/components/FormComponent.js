import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            formEducationValues:[{schoolName:'',startYear:'',endYear:'',degree:''}],
            formExperienceValues:[{companyName:'',startYear:'',endYear:'',position:'',city:''}]
    }
        this.handleChange = this.handleChange.bind(this);
        this.handleEducation = this.handleEducation.bind(this);
        this.addEducationFormFields = this.addEducationFormFields.bind(this);
        this.removeEducationFormFields = this.removeEducationFormFields.bind(this);
        this.handleExperience = this.handleExperience.bind(this);
        this.addExperienceFormFields = this.addExperienceFormFields.bind(this);
        this.removeExperienceFormFields = this.removeExperienceFormFields.bind(this);
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

    handleEducation(i,event){
        let formEducationValues = this.state.formEducationValues
        formEducationValues[i][event.target.name] = event.target.value;
        this.setState({ formEducationValues });
    }


    addEducationFormFields() {
        this.setState(({
            formEducationValues: [...this.state.formEducationValues, {schoolName:'',startYear:'',endYear:'',degree:''}]
        }))
    }
    removeEducationFormFields(i) {
        let formEducationValues = this.state.formEducationValues;
        formEducationValues.splice(i, 1);
        this.setState({ formEducationValues });
    }


    handleExperience(i,event){
        let formExperienceValues = this.state.formExperienceValues
        formExperienceValues[i][event.target.name] = event.target.value;
        this.setState({ formExperienceValues });
    }
    addExperienceFormFields() {
        this.setState(({
            formExperienceValues: [...this.state.formExperienceValues, {schoolName:'',startYear:'',endYear:'',degree:''}]
        }))
    }
    removeExperienceFormFields(i) {
        let formExperienceValues = this.state.formExperienceValues;
        formExperienceValues.splice(i, 1);
        this.setState({ formExperienceValues });
    }
    render() {

        return(
            <div>
                <GeneralInfo handleChange = {this.handleChange}/>
                <Education handleChange = {this.handleEducation} removeField = {this.removeEducationFormFields} addFields = {this.addEducationFormFields} formEducationValues = {this.state.formEducationValues}/>
                <Experience handleChange = {this.handleExperience} removeField = {this.removeExperienceFormFields} addFields = {this.addExperienceFormFields} formExperienceValues = {this.state.formExperienceValues}/>
            </div>
        )
    }
}

export default Form