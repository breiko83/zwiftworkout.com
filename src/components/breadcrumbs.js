import { Link } from "gatsby"
import React from "react"
import './breadcrumbs.scss'

const BreadCrumbs = ({title}) => (
  <ol className="breadcrumbs" vocab="https://schema.org/" typeof="BreadcrumbList">
    <li property="itemListElement" typeof="ListItem"><Link to="/" property="item" typeof="WebPage"><span property="name">Home</span></Link></li>
    <li>/</li>
    <li property="itemListElement" typeof="ListItem"><Link to="#" property="item" typeof="WebPage"><span property="name">{title}</span></Link></li>
  </ol>
)

export default BreadCrumbs