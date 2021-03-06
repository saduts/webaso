import React from "react";
import LoginCont from "./components/containers/login_cont";
import './App.css';

export const App = () => {

  return (
    <>
      <div className={'App-header'}>
        <div><span className={'AppTitle'}>ASO WEB</span></div>
        <LoginCont />
      </div>
    </>
  );

}

export default App;
