import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faLaptop, faCloud, faPiggyBank, faRunning, faBiking, faUpload } from '@fortawesome/free-solid-svg-icons'
import './index.css'

// bugfix for giant icons
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const IndexPage = ({data}) => {

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
      <Img
        fixed={data.logo.childImageSharp.fixed}
        alt="Zwift Workout Logo"
      />
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
            <FontAwesomeIcon icon={faBiking} size="1x" fixedWidth />
            <FontAwesomeIcon icon={faRunning} size="1x" fixedWidth /> Bike & Run
          </h3>
          <p>Works both for Running and Cycling workouts</p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faBolt} size="1x" fixedWidth /> Fast
          </h3>
          <p>Super fast Online editor for your Zwift workout files.</p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faLaptop} size="1x" fixedWidth /> CPU Friendly
          </h3>
          <p>
            Edit your workout files outside Zwift - don't overload you computer
          </p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faCloud} size="1x" fixedWidth /> Share
          </h3>
          <p>Easily share your workout files with your friends</p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faPiggyBank} size="1x" fixedWidth /> Open Source
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
        <Img fixed={data.twitter.childImageSharp.fixed} alt="Twitter logo" />
        </a>
        <a href="#share" onClick={shareOnFacebook}>
          <Img fixed={data.facebook.childImageSharp.fixed} alt="Facebook logo" />
        </a>
      </div>
    </div>
    <div className="tutorial">
      <h2>How To</h2>
      <p>Using Zwift Workout Editor should be pretty easy and I'm sure you won't need instructions.</p>
      <p>In case you do don't worry - I've put together few quick How To articles for you.</p>
      <ul className="tutorials">
        <li><FontAwesomeIcon icon={faBiking} size="2x" fixedWidth /> <Link to="/how-to-create-a-custom-cycling-workout-for-zwift"> How to create a custom cycling Workout for Zwift</Link></li>
        <li><FontAwesomeIcon icon={faRunning} size="2x" fixedWidth /> <Link to="/how-to-create-a-custom-running-workout-for-zwift"> How to create a custom running Workout for Zwift</Link></li>
        <li><FontAwesomeIcon icon={faUpload} size="2x" fixedWidth /> <Link to="/how-to-import-a-custom-workout-on-zwift"> How to import a custom workout on Zwift</Link></li>
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
          <p>
            For any other queries find me on <a href="https://twitter.com/CarloSchiesaro" target="blank">Twitter</a>.
          </p>
        </div>
      </div>
    </div>
  </Layout>)
}

export const query = graphql`
query {
  facebook: file(relativePath: { eq: "facebook.png" }) {
    childImageSharp {
      fixed(width: 80, height: 80) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  twitter: file(relativePath: { eq: "twitter.png" }) {
    childImageSharp {
      fixed(width: 80, height: 80) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  logo: file(relativePath: { eq: "icon.png" }) {
    childImageSharp {
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`

export default IndexPage
