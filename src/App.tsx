import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Header/>
      <About/>
			<Footer />
    </div>
  )
}

export default App
