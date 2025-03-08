import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import STRouter from './STRouter';


function App() {
 

  return (
    <>
      <Router>
        <NavBar />
        <STRouter />
      </Router>
    </>
  )
}

export default App
