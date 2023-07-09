import React from 'react'
import {Navbar, Header, Skill, Products, Services, Contact,Footer} from '../components'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <div className="content-divider"></div>
      <Skill/>
      <Products/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default Home
