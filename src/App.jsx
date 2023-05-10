// npm modules
import { Route, Routes } from 'react-router-dom'

// pages
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

// css
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StarshipList />} />
      <Route path='/starships' element={<StarshipList />} />
      <Route path='/starships/https://swapi.dev/api/starships/:starshipId' element={<StarshipDetails />} />
    </Routes>
  )
}

export default App
