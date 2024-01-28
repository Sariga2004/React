import logo from './logo.svg';
import './App.css';
import NavBar from './components/functionalcomponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route from 'react-router-dom'
import About from './components/functionalcomponents/About';
import Login from './components/functionalcomponents/Login';
import Reference from './components/functionalcomponents/Reference';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* Define routes using Route component */}
          {/* Add more routes as needed */}
          <Route path="/Reference" element={<Reference />} />
        </Routes>
      </BrowserRouter>

      {/* Remaining JSX code */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer className="App-footer">
        <div className="container text-center">
          <p>Phone: +91-8056921485</p>
          <p>Follow Us: <a href="https://www.instagram.com/riga_riya">instagram</a> <a href="https://www.linkedin.com/in/sariga-s-s-5aa0b7225/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYHO%2B%2FMrkRG2l6QQkzsgIPQ%3D%3D">linkedIN</a>  <a href="https://github.com/Sariga2004">GitHub</a></p>
          <p>&copy; {new Date().getFullYear()} React All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


