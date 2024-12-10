
import './App.css';

import {Routes, Route, Link, NavLink} from 'react-router-dom';

import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';


function App() {
  return (
    <div className="App">
     
      {/* <div className='menu'>
      <Link to='/'>About</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/contact'>Contact</Link>
      </div> */}
      <div className='menu'>
      <NavLink to='/'>About</NavLink>
      <NavLink to='/portfolio'>Portfolio</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      </div>

     <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        
     </Routes>
    </div>
  );
}

export default App;
