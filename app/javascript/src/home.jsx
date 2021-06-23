import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.jsx'
import LanguageSelect from './languageSelect.jsx'
import MenuSelect from './homeMenu.jsx'

import './home.scss';
import './general.scss';

let username = "felipe"
let tweetsCount = 1
let followingCount = 0
let followersCount = 0

const Home = (props) => {
  return (
    <>
    <Header navComponent={<MenuSelect username={username} />} />

    <div className="background">

      <div className="main container pt-4">
        <div className="row">
          <div className="col-3" id="sidebar">
            <div className="bg-light rounded pl-2 pt-2 mb-3">
              <h5 className="font-weight-bold">{username}</h5>
              <p>@{username}</p>
              <div className="row pb-3">
                <div className="col-4 pr-0">
                  <p className="font-weight-light mb-0">TWEETS</p>
                  <a href="">{tweetsCount}</a>
                </div>
                <div className="col-4 px-0">
                  <p className="font-weight-light mb-0">FOLLOWING</p>
                  <a href="">{followingCount}</a>                
                </div>
                <div className="col-4 pl-0">
                  <p className="font-weight-light mb-0">FOLLOWERS</p>
                  <a href="">{followersCount}</a>
                </div>
              </div>
            </div>
            <div className="bg-light rounded pl-2 pt-2">
              <p className="text-secondary">Trends  · <a href=""><small>Change</small></a></p>
              <div className="pb-3">
                <a className="d-block" href="">#Hongkong</a>
                <a className="d-block" href="">#Ruby</a>
                <a className="d-block" href="">#Cats</a>
                <a className="d-block" href="">#Dogs</a>
                <a className="d-block" href="">#Memes</a>
              </div>
            </div>
          </div>
          <div className="col-6" id="feed">
            feed
          </div>
          <div className="col-3">
            {/* empty column to center feed and sidebar */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
    
  )
})
