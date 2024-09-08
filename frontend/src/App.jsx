import './App.css'
import Navigation  from './Components/Navigation/Navigation'
import Orb from './Components/Orb/Orb'

function App() {

  return (
    <div className='app'>
      <Orb />
      <main className='main-layout'>
        <Navigation />
      </main>
    </div>
  )
}

export default App
