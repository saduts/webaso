import React from "react";
import ContAtendimento from "./components/containers/atendimento_cont";
import './App.css';

export const App: React.FC = () => {
  return (
    <>
      <div className={'App-header'}>
        <div><span className={'AppTitle'}>ASO WEB</span></div>
        <ContAtendimento />
      </div>
    </>
  );
}

export default App;