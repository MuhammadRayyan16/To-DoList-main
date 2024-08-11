import React from 'react'
import InputBox from '../InputBox/InputBox'
import "../Formulario/Form.css"

const Form = () => {
  return (
    <section className="inputsSignUp">
          <form>
            <InputBox label="Your name" />
            <InputBox label="Email" />
            <InputBox label="Password" />
          </form>
    </section>
  )
}

export default Form