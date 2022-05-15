import React, { Component } from "react";
import Form from "./components/FormComponent";
import Resume from "./components/Resume";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";

//Main App component
class App extends Component {
  constructor(props){
    super(props);
    //All state for app is here. General info adds state when typed
    this.state = {
        formEducationValues:[{schoolName:'',startYear:'',endYear:'',degree:'',gpa:''}],
        formExperienceValues:[{companyName:'',startYear:'',endYear:'',position:'',city:''}]
        
    }
    //binding all methods to state
    this.handleChange = this.handleChange.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
    this.addEducationFormFields = this.addEducationFormFields.bind(this);
    this.removeEducationFormFields = this.removeEducationFormFields.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.addExperienceFormFields = this.addExperienceFormFields.bind(this);
    this.removeExperienceFormFields = this.removeExperienceFormFields.bind(this);
  }
  //handles general info change
handleChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({[name]: value})
    console.log(this.state[name])
}

//handles education changes
handleEducation(i,event){
    let formEducationValues = this.state.formEducationValues
    formEducationValues[i][event.target.name] = event.target.value;
    this.setState({ formEducationValues });
    console.log(this.state)
}

//adds a new form field to education if button is clicked
addEducationFormFields() {
    this.setState(({
        formEducationValues: [...this.state.formEducationValues, {schoolName:'',startYear:'',endYear:'',degree:''}]
    }))
}

//removes education field when button is clicked.
removeEducationFormFields(i) {
    let formEducationValues = this.state.formEducationValues;
    formEducationValues.splice(i, 1);
    this.setState({ formEducationValues });
}

//handles experience changes
handleExperience(i,event){
    let formExperienceValues = this.state.formExperienceValues
    formExperienceValues[i][event.target.name] = event.target.value;
    this.setState({ formExperienceValues });
}

//adds fields to experience
addExperienceFormFields() {
    this.setState(({
        formExperienceValues: [...this.state.formExperienceValues, {schoolName:'',startYear:'',endYear:'',degree:''}]
    }))
}

//removes experiences when button is clicked
removeExperienceFormFields(i) {
    let formExperienceValues = this.state.formExperienceValues;
    formExperienceValues.splice(i, 1);
    this.setState({ formExperienceValues });
}
//renders all componenets and passes props
  render() {
    
    return(
      <div>
        <Header/>
        <Form handleChange = {this.handleChange}
        handleEducation = {this.handleEducation} removeEducationFormFields = {this.removeEducationFormFields} addEducationFormFields = {this.addEducationFormFields} formEducationValues = {this.state.formEducationValues}
        handleExperience = {this.handleExperience} removeExperienceFormFields = {this.removeExperienceFormFields} addExperienceFormFields = {this.addExperienceFormFields} formExperienceValues = {this.state.formExperienceValues}
        />
        <Resume name = {this.state.fullName} email = {this.state.email} phone = {this.state.phone} educationValues ={this.state.formEducationValues} experienceValues = {this.state.formExperienceValues}/>
        <Footer/>
      </div>

    )
  }
}

export default App;