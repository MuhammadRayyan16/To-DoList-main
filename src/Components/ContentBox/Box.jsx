import React from 'react'
import '../ContentBox/Box.css'
import close_icon from '../Assets/disabled_by_default.png'

const Box = () => {
  return (
    <div className="contentBox">
        <img src={close_icon} alt="Icone de fechar" className='close_icon'/>
    </div>
  )
}

export default Box