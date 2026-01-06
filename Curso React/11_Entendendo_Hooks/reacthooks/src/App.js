import './App.css';

// Routes
import {BrowserRouter, Routes , Route , link, Link} from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>Sobre</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
