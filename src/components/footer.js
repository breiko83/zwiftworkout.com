import { Link } from "gatsby"
import React from "react"
import "./footer.css"

const Footer = () => (
  <div className="footer">
    <ul>
      <li>Zwift Workout v1.4 &copy; 2020 Sharpify Ltd All Rights Reserved</li>
      <li>
        <Link to="/terms">Terms of Service</Link>
      </li>
      <li>
        <Link to="/privacy">Privacy Policy</Link>
      </li>
      <li>
        <a href="https://github.com/breiko83/zwo-editor" target="blank">
          Report an issue
        </a>
      </li>
    </ul>
  </div>
)

export default Footer
