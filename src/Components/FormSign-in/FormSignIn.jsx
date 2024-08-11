import React from 'react'
import InputBox from '../InputBox/InputBox'

const FormSignIn = () => {
  return (
    <section className="inputsSignUp">
          <form>
            <InputBox label="Email" />
            <InputBox label="Password" />
          </form>
    </section>
  )
}

export default FormSignIn