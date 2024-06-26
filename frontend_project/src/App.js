import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Create from './components/Create';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Note from './components/Note';
import React from 'react';


function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<Create />} />
          <Route path='/note/' element={<Note />} />
          <Route path='/note/:noteURL' element={<Note />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
