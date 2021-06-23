import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.jsx'
import LanguageSelect from './languageSelect.jsx'
import MenuSelect from './homeMenu.jsx'

import './home.scss';
import './general.scss';

// to be updated with code once backend is connected
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
              <a className="font-weight-bold text-dark" href=""><h5 className="">{username}</h5></a>
              <a className="text-secondary" href="">@{username}</a>
              <div className="row py-3">
                <div className="col-4 pr-0">
                  <p className="category-heading font-weight-light mb-0">TWEETS</p>
                  <a href="">{tweetsCount}</a>
                </div>
                <div className="col-4 px-0">
                  <p className="category-heading font-weight-light mb-0">FOLLOWING</p>
                  <a href="">{followingCount}</a>                
                </div>
                <div className="col-4 pl-0">
                  <p className="category-heading font-weight-light mb-0">FOLLOWERS</p>
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
          <div className="col-6 feed rounded pt-2">
            <div className="rounded">
              <textarea className="form-control" id="tweet-input" cols="30" rows="2"></textarea>
              <div className="text-right">                
                <button className="rounded border-0 bg-transparent mr-3 font-weight-bold">Upload image</button>
                <span className="letter-count font-weight-light">140</span>
                <button className="rounded btn-primary px-2 ml-3 mr-2 my-2" id="post-tweet">Tweet</button>
              </div>
              <div id="tweets-feed">
                  <p className="bg-light">feed goes here</p>
              </div>
              
            </div>
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
