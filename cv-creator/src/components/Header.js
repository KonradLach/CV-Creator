import React, { Component } from 'react';
import "../styles/header.css"
class Header extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return(
            <div className="header">
                <h1>CV CREATOR</h1>
            </div>
        )
    }
}

export default Header;