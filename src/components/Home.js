import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="text-center">
            <p className="text-3xl font-bold text-center">OBLIG 8</p>
          
          <Link to={`/movies`}>
              <button
                 type="button"
                 className="mt-4 rounded bg-blue-500 px-4 py-2 text-white mr-4">
                     Se bibliotek
              </button>
          </Link>

          <Link to={`/actors`}>
              <button
                 type="button"
                 className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
                     Se skuespillere
              </button>
          </Link>



        </div>
    )
}