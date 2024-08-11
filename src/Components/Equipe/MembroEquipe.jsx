import React from 'react'
import '../Equipe/MembroEquipe.css'

const MembroEquipe = (props) => {
  return (
    <h1 className="personContent"> {props.funcaoEquipe} {props.nomeMatricula} </h1>
  )
}

export default MembroEquipe