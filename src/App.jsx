import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DashboardPage from './pages/DashboardPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WeatherDetailsPage from './pages/WeatherDetailsPage';

 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DashboardPage/>}/>
      <Route path='/weather-details/:name' element={<WeatherDetailsPage/>}/>
    </Routes>
    
    </BrowserRouter>
    {/* <DashboardPage/> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Button variant="contained">Hello world</Button>
      </div> */}
     
    </>
  )
}

export default App
