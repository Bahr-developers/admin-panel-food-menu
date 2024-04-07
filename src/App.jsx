import {Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import Food from './pages/Food'
import Drink from './pages/Drink'
import Salads from './pages/Salads'
import Sweets from './pages/Sweets'
import ErrorPage from './pages/ErrorPage'
import Profil from './pages/Profil'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/food' element={<Food/>} />
        <Route path='/drink' element={<Drink/>} />
        <Route path='/salads' element={<Salads/>}/>
        <Route path='/sweets' element={<Sweets/>} />
        <Route path='profil' element={<Profil/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App
