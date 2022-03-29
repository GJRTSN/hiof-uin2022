import { Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './components/Home'
import Movie from './components/Movie'
import Movies from './components/Movies'
import Layout from './layout/Layout'
import Actors from './components/Actors'
import Actor from './components/Actor'

export default function App() {
  return (
  <>    
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="movies">
          <Route index element={<Movies />}/> 
          <Route path=":slug" element={<Movie />} />
        </Route>

          <Route path="actors">
            <Route index element={<Actors />} />
            <Route path=":slug" element={<Actor />} />
          </Route>
          
        </Route>
    </Routes>
  </>
  )
}
