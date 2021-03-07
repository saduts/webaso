import React from 'react'
import './loginUsuarioSenha.css'
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response: any) => {
  console.log(response);
}

const Login = () => {

  return (
    <>
      <span className={'spanTitle'}> - AUTENTICAÇÃO - </span>
      <div className={'divPanelLoginSenha'}>
        <div className={'divPanel'}>
          <span>Usuário</span>
          <input type="text" name="nomeFuncionario" />
          <span>Senha</span>
          <input type="text" name="nomeEmpresa" />
          <button className={'divButton'}>Entrar</button>
        </div>
        <div className={'divButton'}>
          <GoogleLogin
            clientId="667075909574-t519qbg90nrb58l3c1vqlcisors3f2oe.apps.googleusercontent.com"
            buttonText="Atenticação com a sua conta Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </>
  )
}

export default Login