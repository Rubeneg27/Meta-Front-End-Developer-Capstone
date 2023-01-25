import './App.css';
import React from "react"

import Footer from './Componentes/Footer'
import Header from './Componentes/Header'
import Main from './Componentes/Main'



function App() {
  return (
    <>
      <head>
        <meta name="description" content="Aplicación para ejercicios de React" />
        <meta name="og:title" content="Ejercicios React"/>
        <meta name="og:description" content="Práctica de jercicios para estudiar React"/>
        <meta name="og:image" content=""/>
      </head>
      <body>
        <Header />
        <Main />
        <Footer />
      </body>
    </>
  );
}

export default App;
