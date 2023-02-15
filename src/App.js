import './App.css';
import React from "react"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Footer from './Componentes/Footer'
import Header from './Componentes/Header'
import Main from './Componentes/Main'
import BookingPage from './Componentes/BookingPage';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: (
        <>
          <head>
            <meta name="description" content="Aplicación para ejercicios de React" />
            <meta name="og:title" content="Ejercicios React"/>
            <meta name="og:description" content="Práctica de jercicios para estudiar React"/>
            <meta name="og:image" content=""/>
          </head>
            <Header />
            <Main />
            <Footer />
        </>
      )
    },
    {
      path:"bookingPage",
      element: (
        <>
        <Header />
        <BookingPage />
        <Footer />
        </>
      )
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
