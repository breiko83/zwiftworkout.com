import { Link } from "gatsby"
import React from "react"
import './breadcrumbs.scss'

const BreadCrumbs = ({title}) => (
  <ol className="breadcrumbs" vocab="https://schema.org/" typeof="BreadcrumbList">
    <li><Link to="/">Home</Link></li>
    <li>/</li>
    <li property="itemListElement" typeof="ListItem"><Link to="#" property="item" typeof="WebPage"><span property="name">{title}</span></Link><meta property="position" content="1"/></li>
  </ol>
)

export default BreadCrumbs