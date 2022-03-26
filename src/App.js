import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
