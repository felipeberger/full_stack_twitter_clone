import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.jsx'
import LanguageSelect from './languageSelect.jsx'

import './home.scss';
import './general.scss';


const Home = (props) => (
  <div>Home page</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <Header navComponent="testing navbar" />,
    <Header navComponent={<LanguageSelect />} />,
    document.body.appendChild(document.createElement('div')),
    
  )
})
