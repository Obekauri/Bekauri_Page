import { useState, useEffect } from 'react'
// 👉 STEP 2 - React Router imports (Routes, Route and Link)
import { Routes, Route, Link } from 'react-router-dom'
// Components used for the different routes
import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Items'

// Dummy data
import data from '../data'

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    function fetchStock() {
      // this function simulates getting data asynchronously, like axios.get(<URL>)
      return Promise.resolve({ success: true, data })
    }
    // fetching the stock after first render
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav className='header'>
        <h1 className='store-header'> <i className='Bfont'>Bek</i>auri<i className='Bfont'>.</i></h1>
        <div className='navigate'>
          <Link className='nav-Link' to='/'>Home</Link>
          <Link className='nav-Link' to='items-list'>About</Link>
          <Link className='nav-Link' to='contact'>Contact</Link>
        </div>

      </nav>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='items-list' element={<ItemsList items={stock} />} />
        <Route path={'items-list/:itemID/*'} element={<Item items={stock} />} />
      </Routes>
    </div>
  )
}