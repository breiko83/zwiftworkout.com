import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Icon from '../images/icon.png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faLaptop, faCloud, faPiggyBank, faRunning, faBiking, faUpload } from '@fortawesome/free-solid-svg-icons'

import './index.css'

const IndexPage = () => {

  function shareOnFacebook() {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://www.zwiftworkout.com/'),
      'facebook-share-dialog',
      'width=626,height=436');
    return false;
  }

  return(
  <Layout>
    <div className="hero">
      <img src={Icon} alt="logo" width="100" />
      <h1>Zwift Workout Editor</h1>
      <a href="/editor/new" className="btn btn-primary btn-xl">
        Open Editor
      </a>
    </div>
    <div className="features">
      <h2>Top features</h2>
      <p>Why should I use it?</p>
      <div className="perks">
        <div>
          <h3>
            <FontAwesomeIcon icon={faBiking} fixedWidth />
            <FontAwesomeIcon icon={faRunning} fixedWidth /> Bike & Run
          </h3>
          <p>Works both for Running and Cycling workouts</p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faBolt} fixedWidth /> Fast
          </h3>
          <p>Super fast Online editor for your Zwift workout files.</p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faLaptop} fixedWidth /> CPU Friendly
          </h3>
          <p>
            Edit your workout files outside Zwift - don't overload you computer
          </p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faCloud} fixedWidth /> Share
          </h3>
          <p>Easily share your workout files with your friends</p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faPiggyBank} fixedWidth /> Open Source
          </h3>
          <p>This software is free to use.</p>
        </div>
      </div>
    </div>
    <div className="blue">
      <div className="share" id="share">
        <h2>Do you like this?</h2>
        <p>Please help me out by sharing this page on Social Media</p>
        <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20Zwift%20Workout%20Editor%20https://www.zwiftworkout.com/">
          <img src={Twitter} alt="Twitter" width="80" />
        </a>
        <a href="#share" onClick={shareOnFacebook}>
          <img src={Facebook} alt="Facebook" width="80" />
        </a>
      </div>
    </div>
    <div className="tutorial">
      <h2>How To</h2>
      <p>Using Zwift Workout Editor should be pretty easy and I'm sure you won't need instructions.</p>
      <p>In case you do don't worry - I've put together few quick How To articles for you.</p>
      <ul className="tutorials">
        <li><FontAwesomeIcon icon={faBiking} size="lg" fixedWidth /> <Link to="/how-to-create-a-custom-cycling-workout-for-zwift"> How to create a custom cycling Workout for Zwift</Link></li>
        <li><FontAwesomeIcon icon={faRunning} size="lg" fixedWidth /> <Link to="/how-to-create-a-custom-running-workout-for-zwift"> How to create a custom running Workout for Zwift</Link></li>
        <li><FontAwesomeIcon icon={faUpload} size="lg" fixedWidth /> <Link to="/how-to-import-a-custom-workout-on-zwift"> How to import a custom workout on Zwift</Link></li>
      </ul>      
    </div>
    <div className="black">
      <div className="about">
        <h2>About me</h2>
        <div className="bio">
          <h3>Bio</h3>
          <p>
            I'm a full stack developer and I love cycling. I joined Zwift during
            the 2020 lockdown and I loved it.
          </p>
          <p>
            Find me on Zwift (Carlo Schiesaro{" "}
            <span role="img" aria-label="Italy">
              🇮🇹
            </span>
            ) or follow on{" "}
            <a href="https://www.strava.com/athletes/4523127" target="blank">
              Strava
            </a>
          </p>
        </div>
        <div className="contact">
          <h3>Support</h3>
          <p>
            If you'd like to report for a bug or ask for a new feature please
            use my{" "}
            <a href="https://github.com/breiko83/zwo-editor" target="blank">
              github repository
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </Layout>)
}

export default IndexPage
