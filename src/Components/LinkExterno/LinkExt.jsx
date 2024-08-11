import React from 'react'
import '../LinkExterno/LinkExt.css'

const LinkExt = (props) => {
  return (
    <div className="divcontent-linkExt">
    <a href={props.linkExterno}>Github</a>
</div>
  )
}

export default LinkExt