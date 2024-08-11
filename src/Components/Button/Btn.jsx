import React from 'react'
import '../Button/Btn.css'

const Btn = (props) => {
  return (
    <button className={props.classeBtn}>{props.btnTitulo}</button>
  )
}

export default Btn