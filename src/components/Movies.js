import { Link } from 'react-router-dom'
import Movie from './Movie'
import { useEffect, useState } from 'react'
import { getMovie } from '../lib/services/movieServices'
import { getAllActors } from '../lib/services/movieServices'


export default function Movies() {


  const [content, setContent] = useState([])
  const [actors, setActors] = useState([])

    const loadMovieData = async () => {
        const movie = await getMovie()
        setContent(movie)
        console.log(movie)
        
    }

    const loadActorData = async () => {
        const actors = await getAllActors()
        setActors(actors)
        console.log(actors)
    }

    useEffect(() => {
        loadMovieData()
        loadActorData()
      }, [])

  return (
    <div className='text-center'>
        <Link to={`/`}>
            <button
                type="button"
                className="mt-4 rounded bg-green-600 px-4 py-2 text-white mb-8">
                Tilbake
            </button>
        </Link>
        <h1 className='mb-6 text-3xl font-bold text-white text-center'>Filmbibliotek</h1>
        <div className='flex space-x-4'>
          {content.map((film) => (
            <Movie 
            title={film.title} 
            actor={film.actor} 
            />))}
        </div>
    </div>
  )
}


