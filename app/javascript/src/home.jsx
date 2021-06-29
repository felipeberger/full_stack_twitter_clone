import React, { useState, useEffect } from 'react'
import ReactDOM, { render } from 'react-dom'
import Header from './header.jsx'
import LanguageSelect from './languageSelect.jsx'
import MenuSelect from './homeMenu.jsx'

import { areTheyAuthenticated } from './requests/sessions.js'
import { createTweet, getTweets } from './requests/tweets.js'

import './home.scss';
import './general.scss';
import { type } from 'jquery'

// to be updated with code once backend is connected
let tweetsCount = 1
let followingCount = 0
let followersCount = 0

// button event handlers
$(document).off().on('click', '#post-tweet', (e)=>{
  e.preventDefault()
  let tweet = $('#tweet-input').val()

  if (tweet.length > 0) {
    $('#tweet-input').val('')
    $('#post-tweet').prop('disabled', true)

    createTweet(tweet, ()=>{
      $('#post-tweet').prop('disabled', false)
      }, ()=>{
        window.alert('something went wrong, try again')
        $('#post-tweet').prop('disabled', false)
    })

  } else {
    window.alert('empty tweets are not allowed')
  }
})



// functions

const Tweet = (props) => {
  return (
    <>
    <div className='tweet col-12 pt-2 border top border bottom bg-light' id={props.id}>
      <a className='tweet-username' href="">{props.username} <span className="text-secondary tweet-screenName">@{props.username}</span></a>
      <a className="delete-tweet float-right" href="">Delete</a>
      <p className="pt-1">{props.message}</p>
    </div>
    </>
    )
}

// const PopulateTweets = () => {
//   const [tweets, setTweets] = useState([])

//   getTweets((data)=>{
//     setTweets(data.tweets)
//     tweets.reverse()
//   })

//   console.log(tweets)

//   // tweets = data.tweets.map((tweet) =>{ })

//   return (
//     <p>{tweets}</p> 
//   )
// }

const Home = (props) => {
  const [username, setName] = useState('')
  const [tweets, setTweets] = useState([])
  
  useEffect(()=>{
    areTheyAuthenticated((data)=>{
      setName(data.username)
    })
  })

  useEffect(()=>{
    getTweets((data)=>{
      console.log(data)
      var tweetLength = data.tweets.length
      var tweetsArray = []

      for (let i=0; i < tweetLength; i++) {
        tweetsArray.unshift(<Tweet id={data.tweets[i].id} username={data.tweets[i].username} message={data.tweets[i].message} />)
      }

      setTweets(tweetsArray)
      console.log(tweetsArray)
    })
  }, [tweets.length])

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
                  {tweets}
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
