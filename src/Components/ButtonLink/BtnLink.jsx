import React from 'react'
import { Link } from "react-router-dom"
import "../ButtonLink/BtnLinks.css"

const BtnLink = (props) => {
  return (
    
      <Link className={props.classe} to={props.route}>{props.textLink}</Link>
   
  )
}

export default BtnLink