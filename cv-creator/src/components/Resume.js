import React, { Component } from "react";
import '../styles/resume.css'
class Resume extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="resume">
                <div className='generalInfo'>
                    <h2>{this.props.name}</h2>
                    <div>
                        <h3>{this.props.email}</h3>
                        <h3>{this.props.phone}</h3>
                    </div>
                </div>
                <div className="education">
                    {this.props.educationValues.map((education,index) => (
                        <div key={index}>
                            <h4 className="schoolName">{education.schoolName} </h4> {education.degree} {education.startYear} {education.endYear} {education.gpa}
                        </div>
                    ))}
                </div>
                <div className="experience">
                    {this.props.experienceValues.map((experience,index) => (
                        <div key={index}>
                            {experience.companyName} {experience.position} {experience.startYear} {experience.endYear} {experience.city}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Resume