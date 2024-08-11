import React from 'react'
import '../BtnLink Icon X/BtnLinkX.css'
import { Link } from 'react-router-dom'
import closeIconX from '../Assets/disabled_by_default.png'

const BtnLinkX = (props) => {
  return (
    <div className='icon_X'>
        <Link to={props.rotaX}>
          <img src={closeIconX} alt="Icone de X, para fechar" className="iconX" />
        </Link>
    </div>
  )
}

export default BtnLinkX