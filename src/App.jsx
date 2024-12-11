import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TV from './pages/TV'
import Series from './pages/Series'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'
import { useMovie } from './MovieContext'
function App() {

  const {toggleTheme, theme} = useMovie()
  return (
    <div className={theme ?'dark' : 'light'}>
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tv' element={<TV />} />
        <Route path='/series' element={<Series />} />
        <Route path='/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
     </Routes>
    </Router>
    </div>
  )
}
export default App
