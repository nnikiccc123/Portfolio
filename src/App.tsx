import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  // State za jezik
  const [language, setLanguage] = useState<'sr' | 'en'>('sr')

  return (
    <>
      <div className="App">
        {/* Prosleđujemo jezik i funkciju za menjanje jezika */}
        <Navbar language={language} setLanguage={setLanguage} />

        {/* Prosleđujemo jezik u Home da menja tekstove */}
        <Home language={language} />
      </div>
    </>
  )
}

export default App
