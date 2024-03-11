import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/index.jsx';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Routes>
      {Object.keys(routes).map((route) => {
        return (
          <Route
            element={routes[route].element}
            path={routes[route].path}
          />
        );
      })}
    </Routes>
  )
}

export default App
