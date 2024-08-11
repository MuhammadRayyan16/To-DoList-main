import React from 'react'
import { Link } from "react-router-dom"
import "../LinkEstilizado/LinkStyle.css"

const LinkStyle = (props) => {
  return (
    
    <div className="divcontent-link">
        <Link to={props.caminho}>{props.contentLink}</Link>
    </div>
 
  )
}

export default LinkStyle