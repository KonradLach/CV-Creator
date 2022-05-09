import React, { Component } from 'react';

class GeneralInfo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form>
                <label htmlFor='name'>First and Last name
                    <input value={this.props.name} onChange={this.props.handleChange} type="text" id="name" name='fullName' />
                </label>
                <label htmlFor='email'> Email
                    <input value={this.props.email} onChange={this.props.handleChange} type= 'email' id='email' name='email' />
                </label>
                <label htmlFor='tel'> Phone Number
                    <input value={this.props.phone} onChange={this.props.handleChange} type= 'tel' id='tel' name='phone' />
                </label>    
            </form>
        )
    }
}

export default GeneralInfo
