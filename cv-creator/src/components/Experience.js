

import React, { Component } from 'react';

class Experience extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form>
                {this.props.formExperienceValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                        <label>Company Name</label>
                        <input value={element.companyName || ""} onChange={e => this.props.handleChange(index, e)} type="text" id="companyName" name='companyName' />
                        <label>Position</label>
                        <input value={element.position || ""} onChange={e => this.props.handleChange(index, e)} type="text" id="position" name='position' />
                        <label>City</label>
                        <input value={element.city || ""} onChange={e => this.props.handleChange(index, e)} type="text" id="city" name='city' />
                        <label>From (mm/yy)</label>
                        <input value={element.startYear || ""} onChange={e => this.props.handleChange(index, e)} type="text" id="startYear" name='startYear' />
                        <label>To (mm/yy)</label>
                        <input value={element.endYear || ""} onChange={e => this.props.handleChange(index, e)} type="text" id="endYear" name='endYear' />
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

export default Experience