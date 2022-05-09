
import { element } from 'prop-types';
import React, { Component } from 'react';

class Education extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form>
                <label>School Name</label>
                <input value={this.props.schoolName} onChange={this.props.handleChange} type="text" id="schoolName" name='schoolName' />
                <label>From (mm/yy)</label>
                <input value={this.props.startYear} onChange={this.props.handleChange} type="text" id="startYear" name='startYear' />
                <label>To (mm/yy)</label>
                <input value={this.props.endYear} onChange={this.props.handleChange} type="text" id="endYear" name='endYear' />
                <label>Degree</label>
                <input value={this.props.degree} onChange={this.props.handleChange} type="text" id="degree" name='degree' />
            </form>
        )
    }
}

export default Education