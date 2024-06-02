import Header  from './componnets/Header'
import Footer  from './componnets/Footer'
import React from 'react'
import Companies from './componnets/Companies'

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
    </main>
    <footer>
    <Footer/>
    </footer>
    </>
  )
}

export default App
