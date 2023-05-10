import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from 'react-router-dom'

import './StarshipList.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h1>Loading spaceships...</h1>

  return (
    <>
      <h1>STAR WARS STARSHIPS</h1>
      <main className="starship-list">
        {starshipList.map(starship =>
          <div key={starship.name} className="link-container">
            <Link to={`/starships/${starship.url}`}>{starship.name}</Link>
          </div>  
        )}
      </main>
    </>
  )
}

export default StarshipList