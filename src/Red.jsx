import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
const Red = () => {
  return (
    <Router>
        <Login/>
        <Routes>
            <Route>
            <Route path="/" element={<App />} />
            </Route>
        </Routes>
    </Router>
   
  )
}

export default Red