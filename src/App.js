import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <main className="py-2">
          <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App