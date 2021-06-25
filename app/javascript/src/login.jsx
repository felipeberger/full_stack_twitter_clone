import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.jsx'
import LanguageSelect from './languageSelect.jsx'

import background1 from './pictures/background1.jpg'
import background2 from './pictures/background2.jpg'
import background3 from './pictures/background3.jpg'
import background4 from './pictures/background4.jpg'
import background5 from './pictures/background5.jpg'

import './general.scss';
import './login.scss';


const Login = (props) => {
    return (
        <>
        <Header navComponent={<LanguageSelect />}/>
        <div className="background" style={{backgroundImage: `url(${background5})`}}>
            <div className="container mt-4 pt-4">
                <div className="row main">
                    <div className="col-1"></div>

                    <div className="col-6 bg-transparent text-white rounded">
                        <h1>Welcome to Twitter.</h1>
                        <blockquote className="blockquote pt-5 pr-5">
                            <p>Connect with your friends — and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
                        </blockquote>
                        <div className="sub-footer">
                            <a className="d-block text-white pt-5" href="">Felipe Berger - Twitter Clone Project</a>
                            <a className="d-block text-white pt-2" href="">Photo credit: unsplashed.com</a>
                            <p className=" text-white">2021<sup>&#169;</sup></p>
                        </div>
                    </div>

                    <div className="col-3 bg-transparent rounded">
                        <div className="row bg-white rounded">
                            <form>
                                <div className="form-group rounded pt-3">
                                    <div className="row pb-2">
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Username" />
                                        </div>
                                    </div>                        
                                    <div className="row">
                                        <div className="col-8">
                                            <input type="password" className="form-control" id="login-password" placeholder="Password" />
                                        </div>
                                        <div className="col-4">
                                            <button className="btn btn-primary float-right ml-5" id="login-btn">Log In</button>
                                        </div>                
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe"><small>Remember me</small></label>
                                                <small className="d-inline"> · <a href="">Forgot password?</a></small>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="row bg-white rounded mt-4 pb-3">
                            <form>
                                <div className="form-group rounded pt-3">
                                    <p><strong>New to Twitter?</strong><span className="text-secondary"> Sign up</span></p>
                                    <input type="text" className="form-control mb-2" placeholder="Username" />
                                    <input type="email" className="form-control mb-2" id="signup-email" placeholder="Email" />
                                    <input type="password" className="form-control mb-2" id="signup-password" placeholder="Password" />
                                    <button className="btn rounded float-right" id="signup-btn"><strong>Sign up for Twitter</strong></button>
                                        
                                </div>
                            </form>
                        </div>

                    
                        
                    </div>
                    
                    <div className="col-2"></div>

                </div>
            </div>
        </div>
        </>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Login />,
      document.body.appendChild(document.createElement('div')),
      
    )
  })