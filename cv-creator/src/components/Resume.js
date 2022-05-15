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
                <div className="education section">
                    <h3>Education</h3>
                    {this.props.educationValues.map((education,index) => (
                        <div key={index}>
                            <div className='componentHeader'> <h4 className="schoolName">{education.schoolName} </h4> <h4 className="dates">{education.startYear} - {education.endYear}</h4> </div> 
                            <div className="info"><text className="left">{education.degree}</text>  <text className='right'>GPA: {education.gpa}</text> </div>
                        </div>
                    ))}
                </div>
                <div className="experience section">
                    <h3>Professional Experience</h3>
                    {this.props.experienceValues.map((experience,index) => (
                        <div key={index}>
                            <div className='componentHeader'><h4 className="schoolName">{experience.companyName}</h4><h4 className="dates">{experience.startYear} - {experience.endYear} </h4></div>
                            <div className="info"> <text className='left'> {experience.position}</text> <text className="right">{experience.city}</text></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Resume