import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/home'

import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  return (
    <Router>
      <>
      <Routes>
        <Route path='/' element={
              <Home />
          } />
          <Route path='/dashboard' element={
            <Dashboard 
          />
        } />
      </Routes>
    </>
    </Router>
  )
}

export default App
