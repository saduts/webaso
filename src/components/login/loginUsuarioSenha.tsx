import React from 'react'

const Login = () => {

  return (
    <>
      <span className={'spanTitle'}>LOGIN</span>
      <div className={'divPanelFuncionario'}>
        <div className={'divPanel'}>
          <span>Usuário</span>
          <input type="text" name="nomeFuncionario" />
          <span >Senha</span>
          <input type="text" name="nomeEmpresa" />
          <button className={'divButton'}>Entrar</button>
        </div>
      </div>
    </>
  )
}

export default Login