import React from 'react'
import "../InputBox/InputBox.css"

const InputBox = (props) => {
  return (
    <div className="inputBox">
        <h2>{props.label}</h2>
        <input type="text" />
    </div>
  )
}

export default InputBox