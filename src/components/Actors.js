import { useState, useEffect } from "react"
import { getAllActors } from "../lib/services/movieServices"
import { Link } from "react-router-dom"

export default function Actors() {

    const [actors, setActors] = useState([])

    const loadActorData = async () => {
        const actors = await getAllActors()
        setActors(actors)
        console.log(actors)
    }

    useEffect(() => {
        loadActorData()
      }, [])

return (
    <div className="text-center">
        <Link to={`/`}>
            <button
                type="button"
                className="mt-4 rounded bg-green-600 px-4 py-2 text-white mb-8">
                Tilbake
            </button>
        </Link>
        <h1 className='mb-6 text-3xl font-bold text-white text-center'>Skuespillere</h1>
        <div className='flex space-x-4'>

        {actors.map((skuespiller) => (
            <p key={skuespiller.slug}>
                <Link to={`/actors/${skuespiller.slug}`}>{skuespiller.name}</Link></p>
            ))}
        </div>
    </div>
  )
}