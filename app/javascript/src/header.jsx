import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import './header.scss';

var twitterLogo = require('./pictures/twitterlogo')

const Header = (props) => {
    return (
        <nav className="navbar fixed-top navbar-light bg-white" >
            <div className="container-fluid">
                <Router>
                    <Link className="navbar-brand" to="/"><img src={twitterLogo} width="40" height="40" /></Link>
                    <h3>{props.navComponent}</h3>
                </Router>
            </div>
        </nav>
    )
}

export default Header;