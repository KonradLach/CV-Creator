

import React, { Component } from 'react';

class Education extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form>
                {this.props.formEducationValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                        <label>School Name</label>
                        <input value={element.schoolName || ""} onChange={e => this.props.handleChange(index, e)} type="text" id="schoolName" name='schoolName' />
                        <label>From</label>
                        <input value={element.startYear || ""} onChange={e => this.props.handleChange(index, e)} type="month" id="startYear" name='startYear' />
                        <label>To</label>
                        <input value={element.endYear || ""} onChange={e => this.props.handleChange(index, e)} type="month" id="endYear" name='endYear' />
                        <label>Degree</label>
                        <input value={element.degree || ""} onChange={e => this.props.handleChange(index, e)} type="text" id="degree" name='degree' />
                        <label>GPA</label>
                        <input value={element.gpa || ""} onChange={e => this.props.handleChange(index, e)} type="text" id="gpa" name='gpa' maxLength="4" pattern="/d*"/>
                        {
                            index ? 
                            <button type="button"  className="button remove" onClick={() => this.props.removeField(index)}>Remove</button> 
                                    : null
                        }
                    </div>
                    ))}
                    <div className="button-section">
                        <button className="button add" type="button" onClick={() => this.props.addFields()}>Add</button>
                    </div>
            </form>
        )
    }
}

export default Education