import Header  from './componnets/Header'
import Footer  from './componnets/Footer'
import React from 'react'
import Companies from './componnets/Companies'
import Portfolio from './componnets/Portfolio'

function App() {

  return (
    <>
    <header>
    <Header/>
    </header>
    <main>
      <section>
        <Companies/>
      </section>
      <section>
        <Portfolio/>
      </section>
    </main>
    <footer>
    <Footer/>
    </footer>
    </>
  )
}

export default App
