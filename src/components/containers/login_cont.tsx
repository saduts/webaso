import React from "react"
import Login from "../login/loginUsuarioSenha"
import './containers.css'

const LoginCont = () => {
  return (
    <>
      <div>
        <span className={'AppTitle'}>ASO WEB</span>
      </div>
      <div className={'funcionarioContPainelCentral'}>
        <div>
          <Login />
        </div>
      </div>
    </>
  )
}

export default LoginCont;