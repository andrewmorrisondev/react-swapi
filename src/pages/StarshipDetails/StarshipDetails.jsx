import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getStarship } from "../../services/sw-api"

import './StarshipDetails.css'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchStarship = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchStarship()
  }, [starshipId])

  if (!starshipDetails.name) return <h1>Loading spaceships...</h1>

  return (
    <main className="starship-details">
      <p>Name: {starshipDetails.name}</p>
      <p>Model: {starshipDetails.model}</p>
      <Link to={`/starships/`}>Return</Link>
    </main>
  )
}

export default StarshipDetails