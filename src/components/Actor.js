import { getActorBySlug } from "../lib/services/movieServices"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

export default function Actor() {
    const [content, setContent] = useState([])
    const { slug } = useParams()
    const [common, setCommon] = useState([])

    const getActor = async () => {
        const data = await getActorBySlug(slug)
        setContent(data)
        setCommon(data.relatedMovies)
    }
    useEffect(() => {
        getActor()
    }, [])
   
return (
    <div className="text-center">
        <Link to={`/actors`}>
            <button
                type="button"
                className="mt-4 rounded bg-green-600 px-4 py-2 text-white mb-8">
                Tilbake
            </button>
        </Link>

        <h1 className='text-3xl font-bold text-white text-center'>{content.name}</h1>
            <h2 className="italic ">spiller i disse filmene:</h2>
                <div className="flex space-x-12 mt-6 font-bold">
                    {common?.map((result, index) => (
                    <p className="mt-6 flex" key={index}>
                        <p>{result.title}</p>
                   </p>
                    ))}
                </div>
    </div>
  )
}