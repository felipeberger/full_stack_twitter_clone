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
        <div className="background" style={{backgroundImage: `url(${background2})`}}>
            <div className="container mt-5 pt-5">
                <div className="row main">
                    <div className="col-1"></div>
                    <div className="col-5 bg-transparent text-white rounded">
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
                    <div className="col-4 bg-light rounded">
                        <div className="form-group">
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                            
                            <div className="form-inline">
                                <div className="col-8">
                                    <input type="text" className="form-control" placeholder="Password" />
                                </div>
                                <div className="col-4">
                                    <button className="">Testing</button>
                                </div>                      
                            </div>
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